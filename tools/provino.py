#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera un 'provino a contatto' (montaggio di miniature) delle immagini in una o più cartelle,
per verificarle tutte in un colpo solo invece di aprirle una a una.

USO:
  python tools/provino.py img-tessuti img-aghi      # cartelle dentro image/
  python tools/provino.py                            # default: tutte le img-*

Richiede Pillow:  pip install pillow
Salva il risultato in tools/provino.png
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "image")
OUT = os.path.join(ROOT, "tools", "provino.png")

folders = sys.argv[1:]
if not folders:
    folders = sorted(d for d in os.listdir(IMG) if d.startswith("img-") and os.path.isdir(os.path.join(IMG, d)))

files = []
for fo in folders:
    d = os.path.join(IMG, fo)
    if not os.path.isdir(d):
        continue
    for fn in sorted(os.listdir(d)):
        if fn.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            files.append((fo, fn, os.path.join(d, fn)))

if not files:
    sys.exit("Nessuna immagine trovata.")

CELL, LABEL, COLS = 200, 30, 7
rows = (len(files) + COLS - 1) // COLS
sheet = Image.new("RGB", (COLS * CELL, rows * (CELL + LABEL)), (240, 236, 228))
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("arial.ttf", 11)
except Exception:
    font = ImageFont.load_default()

for i, (fo, fn, path) in enumerate(files):
    r, c = divmod(i, COLS)
    x, y = c * CELL, r * (CELL + LABEL)
    try:
        im = Image.open(path).convert("RGB")
        im.thumbnail((CELL - 8, CELL - 8))
        sheet.paste(im, (x + (CELL - im.width) // 2, y + (CELL - im.height) // 2))
    except Exception:
        draw.text((x + 8, y + 8), "ERR", fill=(200, 0, 0), font=font)
    draw.rectangle([x, y + CELL, x + CELL, y + CELL + LABEL], fill=(30, 22, 14))
    draw.text((x + 4, y + CELL + 9), f"{fo.replace('img-','')[:3]}:{fn[:24]}", fill=(240, 220, 180), font=font)

sheet.save(OUT)
print(f"OK {len(files)} immagini -> {OUT}")
