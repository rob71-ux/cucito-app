#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Scarica immagini pertinenti da Pexels per Cucito Companion.

USO:
  1) Imposta la chiave (vedi CHIAVI-PRIVATE.md):
       PowerShell:  $env:PEXELS_KEY = "la-tua-chiave"
       Bash:        export PEXELS_KEY="la-tua-chiave"
  2) Modifica la lista ITEMS qui sotto con (sottocartella, nome_file, [query...], [keyword...]).
  3) python tools/scarica-immagini-pexels.py
  4) Verifica il risultato con tools/provino.py

Tecnica: per ogni voce si prova ogni query su Pexels; si accetta la prima foto il cui campo
`alt` contiene una delle keyword, con dedup per id e filtro anti-persone. Le foto si salvano
in image/<sottocartella>/<nome_file>. Se nessuna è pertinente, si lascia la voce senza foto.

NB: Pexels richiede SIA `Authorization: <key>` SIA `User-Agent: Mozilla/5.0` (senza UA -> 403).
"""
import io, json, os, sys, time, urllib.parse, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KEY = os.environ.get("PEXELS_KEY")
if not KEY:
    sys.exit("ERRORE: imposta la variabile d'ambiente PEXELS_KEY (vedi CHIAVI-PRIVATE.md).")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "image")
API = "https://api.pexels.com/v1/search"

# (sottocartella, nome_file, [query...], [keyword obbligatorie nell'alt])  -- ESEMPIO:
ITEMS = [
    ("img-tessuti", "Esempio.jpg", ["cotton fabric texture", "cotton cloth"], ["cotton", "fabric"]),
]

NEG = ["woman","women"," man "," men ","person","people","model","wearing","portrait","face","girl","boy","gym"]

def search(query, n=20):
    url = API + "?" + urllib.parse.urlencode({"query": query, "per_page": n})
    req = urllib.request.Request(url, headers={"Authorization": KEY, "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def is_image(b):
    return b[:2] == b"\xff\xd8" or b[:8] == b"\x89PNG\r\n\x1a\n" or b[:4] == b"RIFF"

def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    if len(data) > 4000 and is_image(data):
        with open(dest, "wb") as f:
            f.write(data)
        return len(data)
    return 0

def safe(s):
    return (s or "?").encode("ascii", "replace").decode("ascii")[:55]

used, ok, miss = set(), 0, 0
for sub, fname, queries, keys in ITEMS:
    os.makedirs(os.path.join(IMG, sub), exist_ok=True)
    dest = os.path.join(IMG, sub, fname)
    keys = [k.lower() for k in keys]
    done = False
    for query in queries:
        try:
            res = search(query)
        except Exception as e:
            print(f"[..] {fname:28s} '{query}': {safe(str(e))}", flush=True); continue
        for ph in res.get("photos", []):
            pid = ph.get("id")
            if pid in used:
                continue
            alt = (ph.get("alt") or "").lower()
            if alt and not any(k in alt for k in keys):
                continue
            if any(nw in alt for nw in NEG):
                continue
            src = ph.get("src", {}).get("large") or ph.get("src", {}).get("medium")
            if not src:
                continue
            try:
                sz = download(src, dest)
            except Exception:
                continue
            if sz:
                used.add(pid); ok += 1
                print(f"[OK] {fname:28s} <- {safe(ph.get('alt'))} ({sz//1024}KB)", flush=True)
                done = True; break
        if done:
            break
        time.sleep(0.2)
    if not done:
        miss += 1
        print(f"[--] {fname:28s} <- nessuna foto pertinente", flush=True)
    time.sleep(0.2)

print(f"\nTrovate: {ok}  |  Mancanti: {miss}", flush=True)
