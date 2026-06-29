/* ===== DATA.JS — Cucito Companion ===== */
const DATA = {

/* ==================== PIEDINI (23) ==================== */
piedini: [
  {
    id:'P01', nome:'Piedino universale', en:'All-purpose foot', codice:'#97068',
    colore:'#5C7A4E', incluso:true,
    uso:'Cuciture dritte e a zigzag su tessuti medi',
    desc:'Il piedino standard incluso con la Singer 4432. Adatto alla maggior parte delle lavorazioni quotidiane su tessuti di peso medio.',
    tessuti:['Cotone','Lino','Poliestere','Lana leggera'],
    tecnica:'Cucitura dritta, zigzag, punto decorativo',
    consigli:['Usare con ago universale','Pressione piedino media','Lunghezza punto 2,5–3 mm']
  },
  {
    id:'P02', nome:'Piedino cerniera', en:'Zipper foot', codice:'#97068-Z',
    colore:'#5C7A4E', incluso:true,
    uso:'Inserimento cerniere lampo',
    desc:'Permette di cucire molto vicino ai denti della cerniera. Si sposta a destra o sinistra del ago.',
    tessuti:['Tutti i tessuti con cerniera'],
    tecnica:'Cerniere invisibili e standard',
    consigli:['Spostare l\'ago a sinistra o destra secondo necessità','Cucitura lenta vicino ai denti']
  },
  {
    id:'P03', nome:'Piedino asola', en:'Buttonhole foot', codice:'#97068-B',
    colore:'#5C7A4E', incluso:true,
    uso:'Asole automatiche 4 passaggi',
    desc:'Crea asole in 4 passaggi automatici. Dispone di un porta-bottone per calibrare la dimensione dell\'asola.',
    tessuti:['Cotone','Lino','Lana','Denim leggero'],
    tecnica:'Asola standard, asola occhiello',
    consigli:['Usare sempre interfogera sotto','Tensione filo leggermente ridotta','Punto satin fine per tessuti delicati']
  },
  {
    id:'P04', nome:'Piedino attacca-bottoni', en:'Button sewing foot', codice:'#97068-BS',
    colore:'#5C7A4E', incluso:true,
    uso:'Attaccare bottoni a 2 e 4 fori a macchina',
    desc:'Blocca il bottone in posizione e lo cuce con punto zigzag largo. Veloce e preciso.',
    tessuti:['Tutti'],
    tecnica:'Bottoni piatti',
    consigli:['Abbassare il trasportatore','Larghezza zigzag = distanza tra i fori','Fare 8–10 passaggi']
  },
  {
    id:'P05', nome:'Piedino sorfilatura', en:'Overcast foot', codice:'#97068-OC',
    colore:'#5C7A4E', incluso:true,
    uso:'Rifinire i bordi dei tessuti',
    desc:'Il filo avvolge il bordo del tessuto grazie al piccolo perno centrale che guida il punto.',
    tessuti:['Cotone','Jersey','Lana'],
    tecnica:'Punto overlock simulato, zigzag bordo',
    consigli:['Usare punto overcast della macchina','Guida il bordo contro il perno centrale']
  },
  {
    id:'P06', nome:'Piedino punto satin', en:'Satin stitch foot', codice:'#97068-SS',
    colore:'#5C7A4E', incluso:true,
    uso:'Punti decorativi e satin stretti',
    desc:'Canale largo sotto il piedino per far scorrere liberamente i punti satin densi senza accumuli.',
    tessuti:['Cotone','Organza','Seta','Raso'],
    tecnica:'Punto satin, ricamo, appliqué',
    consigli:['Usare con stabilizzatore tear-away sotto','Tensione filo ridotta','Velocità media']
  },
  {
    id:'P07', nome:'Piedino punto invisibile', en:'Blind hem foot', codice:'#97068-BH',
    colore:'#5C7A4E', incluso:true,
    uso:'Orli invisibili su pantaloni e gonne',
    desc:'La guida metallica segue la piega del tessuto. Il punto cattura solo pochi fili del dritto.',
    tessuti:['Lana','Cotone','Lino','Gabardine'],
    tecnica:'Orlo invisibile, orlo a macchina',
    consigli:['Piegare tessuto correttamente prima di cucire','Punto zigzag stretto','Prova su ritaglio']
  },
  {
    id:'P08', nome:'Piedino quilting 1/4"', en:'Quarter-inch foot', codice:'#97013',
    colore:'#C47A5A', incluso:false,
    uso:'Margini di cucitura precisi da 1/4" per patchwork',
    desc:'Il bordo del piedino è esattamente a 6 mm dall\'ago. Ideale per il quilting americano.',
    tessuti:['Cotone','Cotone batik','Flanella'],
    tecnica:'Patchwork, quilting, strip piecing',
    consigli:['Usare sempre ago nuovo','Filo 100% cotone','Abbassare la velocità']
  },
  {
    id:'P09', nome:'Piedino a doppio trasporto', en:'Walking foot / Even feed foot', codice:'#97340',
    colore:'#C47A5A', incluso:false,
    uso:'Trasportare tessuti scivolosi o strati multipli uniformemente',
    desc:'Ha un meccanismo proprio di alimentazione che sincronizza con il trasportatore della macchina. Essenziale per quilt imbottiti e tessuti a righe.',
    tessuti:['Jersey','Seta','Velluto','Denim','Tessuti a righe/quadri'],
    tecnica:'Quilting, abbinare righe, cucire jersey',
    consigli:['Indispensabile per quilt strato su strato','Evita lo scivolamento dei livelli','Velocità media-bassa']
  },
  {
    id:'P10', nome:'Piedino orlo arrotolato', en:'Rolled hem foot', codice:'#97068-RH',
    colore:'#C47A5A', incluso:false,
    uso:'Orli arrotolati stretti su tessuti leggeri',
    desc:'Arrotola automaticamente il bordo in un orlo da 2–3 mm. Disponibile in larghezze da 2 mm, 4 mm e 6 mm.',
    tessuti:['Chiffon','Organza','Seta','Voile'],
    tecnica:'Orlo arrotolato, orlo a giorno',
    consigli:['Iniziare sul bordo incollato con ferro','Velocità bassa e costante','Tessuto in tensione lieve']
  },
  {
    id:'P11', nome:'Piedino arricciatore', en:'Gathering foot', codice:'#97068-G',
    colore:'#C47A5A', incluso:false,
    uso:'Arriccire tessuto in una sola passata',
    desc:'La pressione del piedino crea automaticamente l\'arricciatura mentre si cuce. Regolabile con lunghezza punto.',
    tessuti:['Cotone leggero','Chiffon','Voile','Raso'],
    tecnica:'Arricciatura, increspatura',
    consigli:['Punto più lungo = più arricciatura','Testare sempre su ritaglio','Tensione superiore alta']
  },
  {
    id:'P12', nome:'Piedino cerniera invisibile', en:'Invisible zipper foot', codice:'#97068-IZ',
    colore:'#C47A5A', incluso:false,
    uso:'Cerniere invisibili perfettamente nascoste',
    desc:'I canali sotto il piedino aprono i denti della cerniera invisibile mentre si cuce. Risultato professionale.',
    tessuti:['Tutti','specialmente abiti e gonne'],
    tecnica:'Cerniera invisibile',
    consigli:['Aprire i denti con ferro prima','Cucire vicino ai denti','Non cucire fino alla fine della cerniera']
  },
  {
    id:'P13', nome:'Piedino per cerniera lato destro', en:'Zipper foot right', codice:'#97068-ZR',
    colore:'#C47A5A', incluso:false,
    uso:'Cucire a destra della cerniera',
    desc:'Versione fissa del piedino cerniera per cucire solo sul lato destro.',
    tessuti:['Tutti'],
    tecnica:'Cerniere esposte, cerniere con bordo decorativo',
    consigli:['Usare insieme al piedino cerniera lato sinistro']
  },
  {
    id:'P14', nome:'Piedino punto cordoncino', en:'Cording foot / Piping foot', codice:'#97068-P',
    colore:'#C47A5A', incluso:false,
    uso:'Inserire cordoncino nei bordi',
    desc:'Canale centrale guida il cordoncino mentre si cuce il passante. Crea bordi decorativi e piping.',
    tessuti:['Tela','Cotone pesante','Tessuti da arredamento'],
    tecnica:'Piping, bordi con cordoncino',
    consigli:['Scegliere cordoncino del diametro giusto','Ago nel canale sinistro']
  },
  {
    id:'P15', nome:'Piedino pintuck a 5 canali', en:'Pin tuck foot 5-groove', codice:'#97068-PT5',
    colore:'#C47A5A', incluso:false,
    uso:'Creare pintucks paralleli decorativi',
    desc:'I 5 canali guidano i pintuck esistenti per mantenerli equidistanti. Si usa con ago gemello.',
    tessuti:['Cotone','Lino','Batista','Popeline'],
    tecnica:'Pintuck, biancheria, camicerie',
    consigli:['Usare con ago gemello 1,6/70','Amido spray per risultati migliori']
  },
  {
    id:'P16', nome:'Piedino ago gemello', en:'Twin needle foot', codice:'#97068-TN',
    colore:'#C47A5A', incluso:false,
    uso:'Cuciture parallele con ago gemello',
    desc:'Scanalatura centrale per guidare i due fili separatamente. Usato per orli elastici su jersey.',
    tessuti:['Jersey','Interlock','Tessuti elastici'],
    tecnica:'Orlo jersey, cuciture decorative doppie',
    consigli:['Non superare larghezza zigzag macchina','Due rocchetti filo necessari']
  },
  {
    id:'P17', nome:'Piedino bordo guida', en:'Edge stitch foot', codice:'#97068-ES',
    colore:'#C47A5A', incluso:false,
    uso:'Cuciture top-stitch vicino al bordo',
    desc:'Una guida metallica si appoggia al bordo del tessuto mantenendo distanza costante.',
    tessuti:['Tutti','specialmente per borse e accessori'],
    tecnica:'Top-stitch, edge-stitch',
    consigli:['Velocità uniforme','Filo in evidenza per decorazione']
  },
  {
    id:'P18', nome:'Piedino libero movimento', en:'Free motion / Darning foot', codice:'#97068-FM',
    colore:'#C47A5A', incluso:false,
    uso:'Ricamo libero e quilting free-motion',
    desc:'Abbassare il trasportatore. Il piedino oscillante impedisce al tessuto di sollevarsi con l\'ago. Movimento libero in tutte le direzioni.',
    tessuti:['Cotone','Cotone con ovatta','Denim'],
    tecnica:'Free-motion quilting, ricamo, rammendo',
    consigli:['Abbassare trasportatore OBBLIGATORIO','Guanto di gomma per presa','Velocità media e mani lente']
  },
  {
    id:'P19', nome:'Piedino applicazione', en:'Open-toe appliqué foot', codice:'#97068-OT',
    colore:'#C47A5A', incluso:false,
    uso:'Appliqué e ricamo con visibilità massima',
    desc:'L\'apertura frontale permette di vedere esattamente dove l\'ago entra nel tessuto. Ideale per applicazioni precise.',
    tessuti:['Cotone','Feltro','Organza'],
    tecnica:'Appliqué, ricamo decorativo, satin stitch',
    consigli:['Ottima visibilità del punto di cucitura','Usare con stabilizzatore']
  },
  {
    id:'P20', nome:'Piedino feltratura', en:'Braiding / Sequin foot', codice:'#97068-BR',
    colore:'#C47A5A', incluso:false,
    uso:'Applicare trecce, nastri e paillettes',
    desc:'Il canale frontale guida la treccia o il nastro mentre viene fissato con punto zigzag o satin.',
    tessuti:['Tutti'],
    tecnica:'Decorazione, applicazione nastri',
    consigli:['Zigzag della larghezza del nastro','Punto satin per fissaggio solido']
  },
  {
    id:'P21', nome:'Piedino orlo a giorno', en:'Hemstitch foot / Wing needle foot', codice:'#97068-HW',
    colore:'#C47A5A', incluso:false,
    uso:'Punto a giorno su lino e tessuti naturali',
    desc:'Si usa con ago a farfalla (wing needle). Crea fori decorativi nel tessuto per imitare il punto a giorno fatto a mano.',
    tessuti:['Lino','Cotone batista','Voile'],
    tecnica:'Punto a giorno, biancheria da tavola',
    consigli:['Usare con ago a farfalla 100/16','Amido spray per tessuto rigido','Velocità bassa']
  },
  {
    id:'P22', nome:'Piedino per elastico', en:'Elastic/Shirring foot', codice:'#97068-EL',
    colore:'#C47A5A', incluso:false,
    uso:'Applicare elastico piatto direttamente sul tessuto',
    desc:'Guida l\'elastico sotto il piedino in tensione controllata mentre lo fissa al tessuto.',
    tessuti:['Jersey','Cotone','Abiti sportivi'],
    tecnica:'Applicazione elastico in vita, polsini',
    consigli:['Lunghezza punto 3–4 mm','Elastico in tensione leggera','Zigzag o punto stretch']
  },
  {
    id:'P23', nome:'Piedino lana/tessuti spessi', en:'Teflon foot / Non-stick foot', codice:'#97068-TF',
    colore:'#C47A5A', incluso:false,
    uso:'Scivolare su pelle, vinile, plastica, tessuti appiccicosi',
    desc:'Rivestimento in teflon che impedisce al piedino di attaccarsi. Scivola senza intoppi su materiali difficili.',
    tessuti:['Pelle','Similpelle','Vinile','Plastica','Neoprene'],
    tecnica:'Cucitura borse, pelletteria, costumi',
    consigli:['Non usare spilli (lasciano buchi)','Usare mollette o nastro biadesivo','Ago per pelle']
  }
],

/* ==================== AGHI (10) ==================== */
aghi: [
  {
    id:'A01', nome:'Ago universale', en:'Universal needle', img:'image/img-aghi/Ago%20universale.jpg',
    taglie:['70/10','80/12','90/14','100/16','110/18'],
    colore:'#5C7A4E',
    uso:'Tessuti intrecciati di ogni tipo',
    desc:'La punta leggermente arrotondata penetra tra i fili del tessuto senza tagliarli. L\'ago più versatile in assoluto.',
    tessuti:['Cotone','Lino','Lana','Poliestere','Seta media'],
    consigli:['Cambiare ogni 8–10 ore di utilizzo','Taglia 80/12 per uso quotidiano'],
    codiceColore:'Nessuno'
  },
  {
    id:'A02', nome:'Ago jersey/stretch', en:'Jersey/Stretch needle', img:'image/img-aghi/Ago%20jersey-stretch.jpg',
    taglie:['75/11','90/14'],
    colore:'#5C7A4E',
    uso:'Tessuti a maglia e sintetici elastici',
    desc:'Punta a sfera che passa tra i fili della maglia senza tagliarli. Previene le perdite di punti su jersey.',
    tessuti:['Jersey','Interlock','Lycra','Spandex','Neoprene'],
    consigli:['Obbligatorio per jersey e maglia','Usare con punto stretch o zigzag','Punta a sfera = no rotture fili'],
    codiceColore:'Giallo'
  },
  {
    id:'A03', nome:'Ago jeans/denim', en:'Jeans/Denim needle', img:'image/img-aghi/Ago%20jeans-denim.jpg',
    taglie:['90/14','100/16','110/18'],
    colore:'#5C7A4E',
    uso:'Denim, tela e tessuti spessi intrecciati',
    desc:'Punta molto affilata e fusto rinforzato per penetrare più strati di denim senza deviare.',
    tessuti:['Denim','Tela','Canvas','Cotone spesso','Kaki'],
    consigli:['Taglia 100/16 per denim standard','Rallentare sulle cuciture spesse','Ago forte = meno rotture'],
    codiceColore:'Blu'
  },
  {
    id:'A04', nome:'Ago microtex/sharp', en:'Microtex/Sharp needle', img:'image/img-aghi/Ago%20microtex-sharp.jpg',
    taglie:['60/8','70/10','80/12','90/14'],
    colore:'#5C7A4E',
    uso:'Seta, tessuti tecnici, microfibre',
    desc:'Punta affilatissima e cilindro stretto. Crea fori minimi su tessuti delicati e microfibre.',
    tessuti:['Seta','Chiffon','Organza','Microfibra','Tessuti tecnici','Pelle finissima'],
    consigli:['Usare per punto top-stitch preciso','Ideale su tessuti che non ammettono errori','Cambiare spesso'],
    codiceColore:'Viola'
  },
  {
    id:'A05', nome:'Ago quilting', en:'Quilting needle', img:'image/img-aghi/Ago%20quilting.jpg',
    taglie:['75/11','90/14'],
    colore:'#C47A5A',
    uso:'Attraversare più strati di cotone e ovatta',
    desc:'Punta conico-affusolata speciale per penetrare più strati di tessuto e ovatta senza spostare i pezzi.',
    tessuti:['Cotone quilting','Flanella','Ovatta','Batting'],
    consigli:['Obbligatorio per quilt imbottiti','Cambiare spesso per mantenere la punta affilata'],
    codiceColore:'Verde'
  },
  {
    id:'A06', nome:'Ago per ricamo', en:'Embroidery needle', img:'image/img-aghi/Ago%20per%20ricamo.jpg',
    taglie:['75/11','90/14'],
    colore:'#C47A5A',
    uso:'Fili da ricamo rayon, viscosa e sintetici',
    desc:'Cruna grande e rivestimento speciale per il transito senza attrito di fili da ricamo delicati.',
    tessuti:['Cotone con stabilizzatore','Lino','Tela per ricamo'],
    consigli:['Cruna grande per fili voluminosi','Riduce la rottura dei fili rayon'],
    codiceColore:'Rosso'
  },
  {
    id:'A07', nome:'Ago topstitch', en:'Topstitch needle', img:'image/img-aghi/Ago%20topstitch.jpg',
    taglie:['80/12','90/14','100/16'],
    colore:'#C47A5A',
    uso:'Cuciture in evidenza con fili spessi',
    desc:'Cruna extra-large per far passare fili da top-stitch o fili doppi. Canalina anteriore più profonda.',
    tessuti:['Denim','Cotone','Tela','Pelle'],
    consigli:['Usare con fili da top-stitch o fili doppiati','Punto dritto lungo 3–4 mm','Velocità media'],
    codiceColore:'Nessuno'
  },
  {
    id:'A08', nome:'Ago gemello', en:'Twin/Double needle', img:'image/img-aghi/Ago%20gemello.jpg',
    taglie:['1,6/70','2,0/80','3,0/90','4,0/100'],
    colore:'#C47A5A',
    uso:'Orli jersey e cuciture decorative parallele',
    desc:'Due aghi montati su un unico fusto. Crea due linee di cucitura parallele sul dritto con un punto zigzag elastico sul rovescio.',
    tessuti:['Jersey','Interlock','Cotone','Popeline'],
    consigli:['Due rocchetti necessari','Non superare larghezza zigzag indicata sulla macchina','Distanza tra aghi = decorazione'],
    codiceColore:'Rosso (fusto)'
  },
  {
    id:'A09', nome:'Ago per pelle', en:'Leather needle', img:'image/img-aghi/Ago%20per%20pelle.jpg',
    taglie:['90/14','100/16','110/18'],
    colore:'#C47A5A',
    uso:'Pelle vera, pellami e materiali non tessuti',
    desc:'Punta a tre facce (cuneiforme) che taglia nettamente la pelle creando un foro pulito che non si strappa.',
    tessuti:['Pelle','Suede','Vinile spesso','Feltro'],
    consigli:['NON usare su tessuti intrecciati (taglia i fili)','Non ripassare sullo stesso foro','Mollette invece di spilli'],
    codiceColore:'Arancione'
  },
  {
    id:'A10', nome:'Ago auto-infilante', en:'Self-threading needle', img:'image/img-aghi/Ago%20auto-infilante.jpg',
    taglie:['80/12','90/14'],
    colore:'#C47A5A',
    uso:'Facilità d\'uso per chi ha difficoltà di vista',
    desc:'Ha un piccolo gancio laterale nella cruna che permette di infilare il filo con un movimento laterale senza dover centrare l\'occhio.',
    tessuti:['Cotone','Lino','Poliestere'],
    consigli:['Infilare con movimento laterale','Non adatto per fili molto fini o metallici'],
    codiceColore:'Nessuno'
  }
],

/* ==================== FILI (8) ==================== */
fili: [
  {
    id:'F01', nome:'Filo di cotone', en:'Cotton thread', img:'image/img-fili/Filo%20di%20cotone.jpg',
    colore:'#5C7A4E',
    titoli:['30','40','50','80'],
    uso:'Cuciture su tessuti naturali',
    desc:'Filo naturale che si comporta come il tessuto: si lava e si restringe allo stesso modo. Il numero più alto indica il filo più fino.',
    marchi:['Gütermann','Coats Coton','Madeira'],
    tessuti:['Cotone','Lino','Denim'],
    consigli:['Titolo 40 per uso generale','Titolo 50–80 per quilting e macchine da ricamo','Non usare su tessuti elastici']
  },
  {
    id:'F02', nome:'Filo di poliestere', en:'Polyester thread', img:'image/img-fili/Filo%20di%20poliestere.jpg',
    colore:'#5C7A4E',
    titoli:['40','120'],
    uso:'Cuciture universali resistenti',
    desc:'Il filo più venduto al mondo. Resistente, leggermente elastico, non si restringe in lavatrice. Adatto a quasi tutto.',
    marchi:['Gütermann All Purpose','Coats Duet','Amann Rasant'],
    tessuti:['Tutti i tessuti sintetici e misti','Jersey','Sportswear'],
    consigli:['Ottima resistenza alla rottura','Leggermente elastico: bene per jersey','Titolo 120 per macchina da ricamo']
  },
  {
    id:'F03', nome:'Filo di seta', en:'Silk thread', img:'image/img-fili/Filo%20di%20seta.jpg',
    colore:'#C47A5A',
    titoli:['50','100'],
    uso:'Imbastiture e cuciture su seta e lana pregiata',
    desc:'Scivoloso, non lascia segni sul tessuto, si rimuove facilmente. Ideale per imbastiture temporanee su tessuti pregiati.',
    marchi:['YLI Silk','Tire Silk','Superior Kimono'],
    tessuti:['Seta','Lana pregiata','Cachemire'],
    consigli:['Non cucire a macchina ad alta velocità','Ideale per imbastire prima di cucire','Lucentezza naturale ineguagliabile']
  },
  {
    id:'F04', nome:'Filo rayon/viscosa', en:'Rayon/Viscose thread', img:'image/img-fili/Filo%20rayon-viscosa.jpg',
    colore:'#C47A5A',
    titoli:['40'],
    uso:'Ricamo a macchina decorativo',
    desc:'Lucentezza seta-simile a costo ridotto. Molto usato nelle macchine da ricamo per la sua brillantezza.',
    marchi:['Madeira Rayon','Robison-Anton','Sulky'],
    tessuti:['Cotone con stabilizzatore','Ricami su t-shirt'],
    consigli:['Non lavare ad alta temperatura','Usare con ago da ricamo','Tensione filo ridotta']
  },
  {
    id:'F05', nome:'Filo metallico', en:'Metallic thread', img:'image/img-fili/Filo%20metallico.jpg',
    colore:'#C9A227',
    titoli:['40'],
    uso:'Decorazioni e ricami brillanti',
    desc:'Anima di poliestere avvolta in lamina metallica. Capriccioso ma di grande effetto per decorazioni natalizie e festive.',
    marchi:['Madeira Metallic','Sulky Sliver','Superior Glitter'],
    tessuti:['Organza','Seta','Tulle','Cotone con stabilizzatore'],
    consigli:['Ago da ricamo o topstitch (cruna grande)','Velocità BASSA','Lubrificatore filo se si rompe troppo','Tensione ridottissima']
  },
  {
    id:'F06', nome:'Filo nylon invisibile', en:'Monofilament/Invisible thread', img:'image/img-fili/Filo%20nylon%20invisibile.jpg',
    colore:'#7A6050',
    titoli:['0,004"'],
    uso:'Cuciture invisibili su qualunque colore',
    desc:'Filo trasparente in nylon sottilissimo. Invisibile su qualunque tessuto. Usato per applicazioni e quilting dove non si vuole vedere il filo.',
    marchi:['YLI Wonder Invisible','Sulky Premium Invisible'],
    tessuti:['Tutti'],
    consigli:['Solo nel rocchetto superiore','Filo normale nel rocchetto inferiore','Velocità media','NON stirare direttamente (si scioglie)']
  },
  {
    id:'F07', nome:'Filo da topstitch', en:'Topstitch thread', img:'image/img-fili/Filo%20da%20topstitch.jpg',
    colore:'#7A6050',
    titoli:['30','12'],
    uso:'Cuciture decorative in evidenza su denim e pelle',
    desc:'Più spesso del filo normale, crea cuciture visibili e decorative come quelle dei jeans o delle borse.',
    marchi:['Gütermann TopStitch','Coats Extra Strong','Amann Serafil'],
    tessuti:['Denim','Pelle','Canvas','Tela'],
    consigli:['Usare con ago topstitch (cruna larga)','Solo nel rocchetto superiore','Filo normale sotto']
  },
  {
    id:'F08', nome:'Filo wooly nylon', en:'Wooly nylon / Texturized thread', img:'image/img-fili/Filo%20wooly%20nylon.jpg',
    colore:'#7A6050',
    titoli:['texturizzato'],
    uso:'Orli stretch con copertura morbida',
    desc:'Filo gonfio e morbido che si espande dopo la cucitura. Perfetto nel rocchetto inferiore della overlock per coprire gli orli jersey.',
    marchi:['YLI Woolly','Maxi-lock Stretch','Madeira Woolly'],
    tessuti:['Jersey','Lycra','Sportswear'],
    consigli:['Nel rocchetto inferiore SOLO','Tensione rocchetto inferiore ridotta','Con macchina overlock o punto stretch']
  }
],

/* ==================== TESSUTI (26) ==================== */
tessuti: [
  {
    id:'T01', nome:'Cotone', en:'Cotton', emoji:'🌸',
    img:'image/img-tessuti/Cotone.jpg',
    swatchColor:'#F5E6D3', categoria:'naturale', peso:'leggero-medio',
    difficolta:1,
    uso:'Abbigliamento quotidiano, quilting, biancheria',
    desc:'Il tessuto più versatile. Respira, assorbe, facile da cucire. Tende a restringersi, quindi pre-lavare sempre.',
    ago:'Universale 80/12 o 90/14', piedino:'Universale', filo:'Cotone 50 o poliestere 40',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Pre-lavare a 60°C prima di tagliare','Stirare con vapore','Ottimo per principianti']
  },
  {
    id:'T02', nome:'Lino', en:'Linen', emoji:'🌾',
    img:'image/img-tessuti/Lino.jpg',
    swatchColor:'#D4C4A0', categoria:'naturale', peso:'medio',
    difficolta:2,
    uso:'Abbigliamento estivo, biancheria da tavola, accessori',
    desc:'Naturale, fresco, leggermente rigido. Si sgualcisce facilmente ma è molto resistente. Pre-lavare è essenziale.',
    ago:'Universale 90/14', piedino:'Universale', filo:'Cotone 40',
    punto:'Diritto 2,5–3 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Pre-lavare a 60°C','Stirare umido con ferro caldo','Lasciare riposare 24h dopo il taglio']
  },
  {
    id:'T03', nome:'Seta', en:'Silk', emoji:'✨',
    img:'image/img-tessuti/Seta.jpg',
    swatchColor:'#F0E0C8', categoria:'naturale', peso:'leggero',
    difficolta:5,
    uso:'Abiti da sera, foulard, camicette di lusso',
    desc:'Lussuosa, scivolosa, delicatissima. Sfida anche le sarte esperte. Ogni errore è visibile.',
    ago:'Microtex 70/10 o 60/8', piedino:'Universale o teflon', filo:'Seta 50 o poliestere fine',
    punto:'Diritto 2 mm', tensione:'Ridotta', margine:'1,5 cm (con pinning orizzontale)',
    consigli:['Usare carta velina sotto','Spilli in seta o seta washi tape','Non riscucire: i fori restano','Test su ritaglio SEMPRE']
  },
  {
    id:'T04', nome:'Lana', en:'Wool', emoji:'🐑',
    img:'image/img-tessuti/Lana.jpg',
    swatchColor:'#C8B89A', categoria:'naturale', peso:'medio-pesante',
    difficolta:3,
    uso:'Cappotti, giacche, gonne invernali, pantaloni',
    desc:'Naturalmente termica e drappeggiante. Richiede interfogera per stabilizzare i bordi.',
    ago:'Universale 90/14 o 100/16', piedino:'Universale', filo:'Poliestere 40',
    punto:'Diritto 3 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Pre-lavare o far lavare a secco','Stirare con panno umido e vapore','Interfogera su tutti i bordi tagliati']
  },
  {
    id:'T05', nome:'Velluto', en:'Velvet', emoji:'👑',
    img:'image/img-tessuti/Velluto.jpg',
    swatchColor:'#6B4E8A', categoria:'intrecciato', peso:'medio',
    difficolta:5,
    uso:'Abiti eleganti, accessori, arredamento',
    desc:'Il pelo direzionale causa scivolamento e appiattimento sotto il piedino. Lavorare sempre nella direzione del pelo.',
    ago:'Microtex 80/12', piedino:'Walking foot', filo:'Poliestere fine 120',
    punto:'Diritto 2,5 mm', tensione:'Ridotta', margine:'1,5 cm',
    consigli:['Cucire sempre nello stesso verso del pelo','MAI stirare direttamente (appiattisce il pelo)','Pettinare con spazzola dopo cucitura','Spilli dentro alla cucitura']
  },
  {
    id:'T06', nome:'Denim', en:'Denim', emoji:'👖',
    img:'image/img-tessuti/Denim.jpg',
    swatchColor:'#4A6B9A', categoria:'intrecciato', peso:'pesante',
    difficolta:2,
    uso:'Jeans, giacche, borse, accessori robusti',
    desc:'Resistente e durevole. Le cuciture multiple agli angoli possono essere difficili da attraversare.',
    ago:'Jeans 100/16 o 110/18', piedino:'Universale', filo:'Cotone 40 o topstitch per cuciture decorative',
    punto:'Diritto 3–3,5 mm', tensione:'Media', margine:'1,5–2 cm',
    consigli:['Pre-lavare a 60°C (restringerà)','Martellare le cuciture spesse prima di cucire','Ago nuovo ogni progetto','Spilli grossi o mollette']
  },
  {
    id:'T07', nome:'Jersey', en:'Jersey', emoji:'👕',
    img:'image/img-tessuti/Jersey.jpg',
    swatchColor:'#8AB8C8', categoria:'maglia', peso:'leggero-medio',
    difficolta:3,
    uso:'T-shirt, abiti casual, sportswear',
    desc:'Maglia a trama singola, elastica in orizzontale. Tende ad arricciare se lavorato con punto dritto.',
    ago:'Jersey 75/11 o 80/12', piedino:'Walking foot o universale', filo:'Poliestere 40',
    punto:'Zigzag stretto (1/1) o punto stretch', tensione:'Ridotta', margine:'1 cm',
    consigli:['MAI tirare il tessuto mentre si cuce','Punto zigzag 1,5 L × 1,5 W o punto stretch','Pre-lavare sempre','Walking foot riduce lo scivolamento']
  },
  {
    id:'T08', nome:'Lycra/Spandex', en:'Lycra/Spandex', emoji:'🏋️',
    img:'image/img-tessuti/Lycra-Spandex.jpg',
    swatchColor:'#C84A6B', categoria:'maglia', peso:'leggero',
    difficolta:4,
    uso:'Costumi da bagno, leggings, sportswear',
    desc:'Altamente elastico in tutte le direzioni. Il filo deve essere elastico quanto il tessuto.',
    ago:'Stretch 75/11 o 90/14', piedino:'Walking foot', filo:'Filo stretch poliestere',
    punto:'Zigzag (1,5/3) o punto stretch', tensione:'Ridottissima', margine:'0,6 cm',
    consigli:['Tenere il tessuto piatto senza stirarlo','Punto overlock ideale','Filo wooly nylon in bobina per morbidezza','Test elasticità cucitura sempre']
  },
  {
    id:'T09', nome:'Chiffon', en:'Chiffon', emoji:'🌬️',
    img:'image/img-tessuti/Chiffon.jpg',
    swatchColor:'#E8D8F0', categoria:'intrecciato', peso:'leggero',
    difficolta:5,
    uso:'Abiti da cerimonia, foulard, sovragonne',
    desc:'Trasparente, scivoloso, tende a muoversi. Richiede molta pazienza e preparazione.',
    ago:'Microtex 60/8 o 70/10', piedino:'Universale con carta velina', filo:'Seta 50 o poliestere fine',
    punto:'Diritto 1,5–2 mm', tensione:'Ridotta', margine:'1 cm (francese)',
    consigli:['Carta velina sotto il tessuto','Spilli in seta','Cucitura francese per bordi netti','Orlo arrotolato con piedino apposito']
  },
  {
    id:'T10', nome:'Organza', en:'Organza', emoji:'🫧',
    img:'image/img-tessuti/Organza.jpg',
    swatchColor:'#F0F4E8', categoria:'intrecciato', peso:'leggero',
    difficolta:4,
    uso:'Abiti da sposa, decorazioni, overlay',
    desc:'Rigido e trasparente. I fori degli aghi restano visibili, quindi limitare le scuciture.',
    ago:'Microtex 70/10', piedino:'Universale', filo:'Poliestere fine 120',
    punto:'Diritto 2 mm', tensione:'Media', margine:'1,5 cm (cucitura francese)',
    consigli:['Ogni foro resta visibile: pianificare bene','Cucitura francese consigliata','Tagliare con forbici affilate','Spilli solo nei margini di cucitura']
  },
  {
    id:'T11', nome:'Tela', en:'Canvas/Duck', emoji:'🎒',
    img:'image/img-tessuti/Tela.jpg',
    swatchColor:'#C8A870', categoria:'intrecciato', peso:'pesante',
    difficolta:2,
    uso:'Borse, zaini, cappelli, decorazioni',
    desc:'Molto resistente, tiene bene la forma. Facile da cucire ma richiede ago e filo robusti.',
    ago:'Jeans 100/16 o 110/18', piedino:'Universale', filo:'Cotone 30 o poliestere robusto',
    punto:'Diritto 3–4 mm', tensione:'Media-alta', margine:'2 cm',
    consigli:['Punte delle spille a piombo','Orlare a macchina con filo topstitch','Martellare le giunzioni']
  },
  {
    id:'T12', nome:'Flanella', en:'Flannel', emoji:'🧸',
    img:'image/img-tessuti/Flanella.jpg',
    swatchColor:'#D4A0A0', categoria:'intrecciato', peso:'medio',
    difficolta:1,
    uso:'Pigiami, camicie casual, coperte per bambini',
    desc:'Morbida, pelosa, leggermente elastica. Tende ad appilarsi. Facile da cucire.',
    ago:'Universale 80/12', piedino:'Universale', filo:'Cotone 50',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Pre-lavare (restringerà e appiloterà le prime volte)','Cucitura in direzione del pelo','Pulire spesso il trasportatore dalla peluria']
  },
  {
    id:'T13', nome:'Tweed', en:'Tweed', emoji:'🎩',
    img:'image/img-tessuti/Tweed.jpg',
    swatchColor:'#8A7A6A', categoria:'intrecciato', peso:'pesante',
    difficolta:3,
    uso:'Giacche, cappotti, gonne classiche',
    desc:'Tessuto robusto con trama caratteristica. I bordi si sfilacciano molto: interfogera e sorfilatura essenziali.',
    ago:'Universale 90/14 o 100/16', piedino:'Universale', filo:'Poliestere 40',
    punto:'Diritto 2,5–3 mm', tensione:'Media', margine:'1,5–2 cm',
    consigli:['Interfogera su tutti i bordi','Sorfilare subito dopo il taglio','Stirare con panno umido']
  },
  {
    id:'T14', nome:'Pizzo', en:'Lace', emoji:'🕸️',
    img:'image/img-tessuti/Pizzo.jpg',
    swatchColor:'#F5F0E8', categoria:'speciale', peso:'leggero',
    difficolta:4,
    uso:'Abiti da sposa, biancheria intima, decorazioni',
    desc:'Delicato, bordi già rifiniti spesso. Attenzione alla direzionalità del motivo.',
    ago:'Microtex 70/10 o 60/8', piedino:'Universale', filo:'Poliestere fine 120',
    punto:'Diritto 2 mm', tensione:'Ridotta', margine:'0,6 cm (bordo motivo)',
    consigli:['Usare i bordi del pizzo come orlo finito','Spilli nelle trame aperte','Cucitura francese invisibile','Abbinare il motivo']
  },
  {
    id:'T15', nome:'Pelle', en:'Leather', emoji:'👜',
    img:'image/img-tessuti/Pelle.jpg',
    swatchColor:'#8A5C3C', categoria:'speciale', peso:'medio-pesante',
    difficolta:5,
    uso:'Borse, cinture, accessori, giacche',
    desc:'I fori degli aghi sono permanenti. Ogni errore è irreversibile. Lavorare con piano.',
    ago:'Pelle 90/14 o 100/16', piedino:'Teflon', filo:'Poliestere robusto 30',
    punto:'Diritto 3–3,5 mm', tensione:'Media', margine:'1 cm',
    consigli:['MAI usare spilli (lasciano buchi permanenti)','Mollette o nastro biadesivo','Piedino teflon obbligatorio','Ditale di vetro per le dita']
  },
  {
    id:'T16', nome:'Similpelle', en:'Faux leather / PU leather', emoji:'🏷️',
    img:'image/img-tessuti/Similpelle.jpg',
    swatchColor:'#5A4A3A', categoria:'speciale', peso:'medio',
    difficolta:3,
    uso:'Borse, cinture, abbigliamento',
    desc:'Più facile della pelle vera. Anche qui i fori restano. Meno costosa e più accessibile.',
    ago:'Pelle 90/14 o Jeans 90/14', piedino:'Teflon o rolling', filo:'Poliestere 40',
    punto:'Diritto 3 mm', tensione:'Media', margine:'1 cm',
    consigli:['Mollette invece di spilli','Piedino teflon per scivolare','Non stirare (si deforma)']
  },
  {
    id:'T17', nome:'Pile/Fleece', en:'Fleece/Polar', emoji:'🧥',
    img:'image/img-tessuti/Pile-Fleece.jpg',
    swatchColor:'#D4C8E0', categoria:'maglia', peso:'medio',
    difficolta:1,
    uso:'Felpe, giacche invernali, coperte',
    desc:'Caldo, non si sfilaccia (non serve sorfilare), facile da cucire. Tende ad allungarsi in larghezza.',
    ago:'Universale 80/12 o Jersey 80/12', piedino:'Walking foot', filo:'Poliestere 40',
    punto:'Zigzag 2/2 o diritto', tensione:'Media', margine:'1,5 cm',
    consigli:['Non sorfilare (non si sfilaccia)','Walking foot per evitare stiramento','Pulire la peluria dal trasportatore spesso']
  },
  {
    id:'T18', nome:'Impermeabile/Ripstop', en:'Waterproof/Ripstop', emoji:'🌧️',
    img:'image/img-tessuti/Impermeabile-Ripstop.jpg',
    swatchColor:'#4A7A9A', categoria:'tecnico', peso:'leggero',
    difficolta:3,
    uso:'Giacche a vento, zaini, tende',
    desc:'Tessuto tecnico spesso rivestito. Non si sfilaccia ma i fori dell\'ago non si richiudono.',
    ago:'Microtex 80/12 o Universale 80/12', piedino:'Teflon', filo:'Poliestere 40',
    punto:'Diritto 3 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Nastro per cuciture impermeabili sui margini','Non stirare (si scioglie il rivestimento)','Mollette invece di spilli']
  },
  {
    id:'T19', nome:'Raso', en:'Satin', emoji:'🌙',
    img:'image/img-tessuti/Raso.jpg',
    swatchColor:'#E8D8C0', categoria:'intrecciato', peso:'leggero',
    difficolta:4,
    uso:'Abiti da sera, foderature, biancheria da letto',
    desc:'Superficie lucida e scivolosa. Ogni imperfezione è visibile. La parte oposta è opaca.',
    ago:'Microtex 70/10 o 80/12', piedino:'Universale', filo:'Poliestere fine 120 o seta',
    punto:'Diritto 2–2,5 mm', tensione:'Ridotta', margine:'1,5 cm',
    consigli:['Spilli in seta solo nei margini di cucitura','Mai strappare: i fori restano','Fodera consigliata per abiti strutturati']
  },
  {
    id:'T20', nome:'Taffettà', en:'Taffeta', emoji:'🎀',
    img:'image/img-tessuti/Taffetta.jpg',
    swatchColor:'#D4A8C0', categoria:'intrecciato', peso:'leggero',
    difficolta:4,
    uso:'Abiti da cerimonia, fodere strutturate, nastri',
    desc:'Croccante, lucido, tende a sfilacciarsi e a cigolare. I fori degli aghi sono evidenti.',
    ago:'Microtex 70/10', piedino:'Universale', filo:'Seta o poliestere fine',
    punto:'Diritto 2 mm', tensione:'Ridotta', margine:'1,5 cm',
    consigli:['Sorfilare immediatamente','Evitare di scucire','Amido spray per stabilizzare']
  },
  {
    id:'T21', nome:'Crespo/Crepe', en:'Crepe', emoji:'🌊',
    img:'image/img-tessuti/Crespo-Crepe.jpg',
    swatchColor:'#C8A8B8', categoria:'intrecciato', peso:'leggero-medio',
    difficolta:3,
    uso:'Abiti drappeggiati, gonne fluide, bluse',
    desc:'Superficie granulata caratteristica, cade bene. Elastico in diagonale, tende a sfilacciare.',
    ago:'Universale 80/12', piedino:'Universale', filo:'Poliestere 40 o 120',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Sorfilare subito','Attenzione alla direzione del drappeggio','Tagliare con carta velina sotto per i crespi scivolosi']
  },
  {
    id:'T22', nome:'Gabardine', en:'Gabardine', emoji:'👔',
    img:'image/img-tessuti/Gabardine.jpg',
    swatchColor:'#8A9A7A', categoria:'intrecciato', peso:'medio',
    difficolta:2,
    uso:'Pantaloni classici, giacche, cappotti leggeri',
    desc:'Trama diagonale caratteristica, resistente e drappeggiante. Si comporta bene sotto l\'ago.',
    ago:'Universale 80/12 o 90/14', piedino:'Universale', filo:'Poliestere 40',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Stirare con panno umido per eliminare i segni degli spilli','Cucitura con interfogera alle tasche']
  },
  {
    id:'T23', nome:'Mussola', en:'Muslin/Cheesecloth', emoji:'☁️',
    img:'image/img-tessuti/Mussola.jpg',
    swatchColor:'#F0E8D8', categoria:'naturale', peso:'leggero',
    difficolta:1,
    uso:'Prove cartamodelli, ripieno, tessuti etnici',
    desc:'Cotone grezzo leggerissimo. Usato per le prove prima di tagliare il tessuto definitivo.',
    ago:'Universale 70/10 o 80/12', piedino:'Universale', filo:'Cotone 50',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Tessuto ideale per prove cartamodelli','Pre-lavare sempre','Quasi trasparente: non adatto per capi finiti']
  },
  {
    id:'T24', nome:'Tulle', en:'Tulle/Net', emoji:'🩷',
    img:'image/img-tessuti/Tulle.jpg',
    swatchColor:'#F0E0F0', categoria:'speciale', peso:'leggero',
    difficolta:3,
    uso:'Gonne da ballo, abiti da sposa, veli, decorazioni',
    desc:'Retina fine e rigida. Gli strati si appiccicano tra loro. I bordi non si sfilacciano.',
    ago:'Microtex 70/10', piedino:'Universale', filo:'Poliestere fine 120',
    punto:'Diritto 2 mm', tensione:'Ridotta', margine:'0,6 cm',
    consigli:['I bordi non si sfilacciano: no sorfilatura','Cucire più strati insieme lentamente','Tagliare con forbici affilate']
  },
  {
    id:'T25', nome:'Popeline', en:'Poplin', emoji:'👗',
    img:'image/img-tessuti/Popeline.jpg',
    swatchColor:'#E8D0B8', categoria:'naturale', peso:'leggero-medio',
    difficolta:1,
    uso:'Camicie, abiti estivi, biancheria',
    desc:'Cotone compatto con costina orizzontale sottile. Facile da cucire, tiene la forma, si stira bene.',
    ago:'Universale 80/12', piedino:'Universale', filo:'Cotone 50 o poliestere 40',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Pre-lavare','Ottimo per principianti','Stirare con vapore per risultato professionale']
  },
  {
    id:'T26', nome:'Faille', en:'Faille', emoji:'🎗️',
    img:'image/img-tessuti/Faille.jpg',
    swatchColor:'#D8C0A8', categoria:'intrecciato', peso:'medio',
    difficolta:3,
    uso:'Abiti da cerimonia, gonne strutturate, accessori',
    desc:'Costa orizzontale evidente, leggermente lucido. Tende a lasciare i segni degli spilli.',
    ago:'Universale 80/12 o Microtex 80/12', piedino:'Universale', filo:'Poliestere fine 40',
    punto:'Diritto 2,5 mm', tensione:'Media', margine:'1,5 cm',
    consigli:['Spilli solo nei margini di cucitura','Stirare con panno umido','Attenzione alla direzione della costa']
  }
],

/* ==================== STRUMENTI ==================== */
strumenti: {
  taglio: [
    { nome:'Forbici da sarto', emoji:'✂️', desc:'Lame lunghe 20–25 cm con impugnatura ergonomica. Non usarle mai per carta.' },
    { nome:'Forbici per carta/cartamodelli', emoji:'✄', desc:'Forbici dedicate ai cartamodelli. Tenerle sempre separate da quelle per tessuto.' },
    { nome:'Taglierino rotante', emoji:'🔵', desc:'Lama circolare affilata. Usare sempre con tappetino autoguarente. Ideale per quilting e tagli dritti.' },
    { nome:'Tappetino autoguarente', emoji:'🟩', desc:'Protegge il piano di lavoro. Misura minima consigliata: 45×60 cm.' },
    { nome:'Righello acrilico quilting', emoji:'📏', desc:'Righello trasparente con righe ogni 0,5 cm. Usato con taglierino rotante.' },
    { nome:'Forbicine per fili', emoji:'✄', desc:'Piccole e precise per tagliare i fili a fine cucitura.' },
    { nome:'Scalpellino / Punta a taglio', emoji:'🔪', desc:'Per fare le tacche nelle curve senza toccare la cucitura.' }
  ],
  misurazione: [
    { nome:'Metro da sarta', emoji:'📐', desc:'Metro flessibile da 150 cm. Indispensabile per le misure corporee.' },
    { nome:'Righello da sarto curvo', emoji:'📏', desc:'Righello con curva per disegnare le sciancrature e le armature.' },
    { nome:'Curva francese', emoji:'📐', desc:'Strumento per disegnare curve morbide sui cartamodelli.' },
    { nome:'Misuratore di punti', emoji:'🔧', desc:'Piccolo strumento per verificare la lunghezza e larghezza dei punti.' }
  ],
  tracciatura: [
    { nome:'Gessetto da sarto', emoji:'🖍️', desc:'Segna le modifiche sul tessuto. Sparisce con il vapore o il lavaggio.' },
    { nome:'Penna scomparente (termoscomparente)', emoji:'🖊️', desc:'Tracce che spariscono col calore del ferro.' },
    { nome:'Penna scomparente (idrosolubile)', emoji:'💧', desc:'Tracce che spariscono con l\'acqua.' },
    { nome:'Carta carbone da sarto', emoji:'📋', desc:'Per trasferire le linee del cartamodello sul tessuto con la ruota dentata.' },
    { nome:'Ruota dentata', emoji:'⚙️', desc:'Usata con carta carbone per trasferire le linee.' }
  ],
  cucitura: [
    { nome:'Aghi da cucito a mano', emoji:'🪡', desc:'Set aghi assortiti per imbastire, orli, bottoni e rifiniture.' },
    { nome:'Ditale', emoji:'🫆', desc:'Protegge il dito medio durante la cucitura a mano.' },
    { nome:'Scatola porta-aghi magnetica', emoji:'🧲', desc:'Raccoglie gli aghi caduti e li tiene ordinati.' },
    { nome:'Spilli di seta / di vetro', emoji:'📌', desc:'Spilli con capocchia grande: non si perdono sotto il tessuto.' },
    { nome:'Puntaspilli', emoji:'🎃', desc:'Tiene gli spilli a portata di mano durante il lavoro.' },
    { nome:'Scolapunti / Scuci-cuciture', emoji:'🔧', desc:'Per rimuovere le cuciture sbagliate senza danneggiare il tessuto.' },
    { nome:'Spelucchia', emoji:'✂️', desc:'Per togliere il filo dai punti eliminati con lo scuci-cuciture.' }
  ],
  stiratura: [
    { nome:'Ferro da stiro a vapore', emoji:'♨️', desc:'Il vapore è essenziale per modellare le cuciture. Usarlo dopo ogni cucitura.' },
    { nome:'Asse da stiro', emoji:'🪵', desc:'Superficie stabile per stirare. Altezza regolabile.' },
    { nome:'Pressa per cuciture (seam roller)', emoji:'⚙️', desc:'Apre le cuciture senza ferro. Utile su tessuti che non tollerano il calore.' },
    { nome:'Guancialetto da sarto', emoji:'💛', desc:'Cuscino tondo per stirare le curve e le spalle.' },
    { nome:'Manichino da sarto', emoji:'🪆', desc:'Per stirare le maniche senza pieghe.' },
    { nome:'Panno da stiratura', emoji:'🧻', desc:'Protegge i tessuti delicati dal contatto diretto col ferro.' }
  ]
},

/* ==================== MERCERIA ==================== */
merceria: [
  { nome:'Cerniera lampo', emoji:'🤐', categorie:['standard','invisibile','separabile'], desc:'Disponibile in metallo, nylon e spirale. Misure da 18 a 60 cm.' },
  { nome:'Bottoni', emoji:'🔵', categorie:['piatti 2-fori','piatti 4-fori','a gambo'], desc:'In resina, madreperla, legno, metallo. Da 10 mm a 50 mm.' },
  { nome:'Elastico piatto', emoji:'〰️', categorie:['2mm','5mm','10mm','15mm','20mm','25mm','30mm'], desc:'In vita, polsini, biancheria. Larghezze diverse per usi diversi.' },
  { nome:'Elastico a cordino', emoji:'⬭', categorie:['1mm','2mm','3mm'], desc:'Per increspature e decorazioni.' },
  { nome:'Velcro', emoji:'🔗', categorie:['da cucire','adesivo'], desc:'In larghezze da 2 cm a 5 cm. Bianco o nero standard.' },
  { nome:'Gancetti e occhielli', emoji:'🪝', categorie:['per pantaloni','per reggiseno','a pressione'], desc:'In metallo. Diverse misure per chiusure invisibili.' },
  { nome:'Bottoni a pressione', emoji:'⭕', categorie:['da cucire','da agganciare a martello'], desc:'Per bambini e abbigliamento sportivo.' },
  { nome:'Nastro per cuciture', emoji:'🎀', categorie:['raso','grosgrain','organza'], desc:'In larghezze da 6 mm a 50 mm.' },
  { nome:'Bias tape / Sbieco', emoji:'📎', categorie:['pieghevole','aperto','doppio'], desc:'Per rifinire i bordi curvi. Pre-piegato in varie larghezze.' },
  { nome:'Rivetti e borchie', emoji:'🔩', desc:'Per borse e accessori in pelle. Diametri vari.' },
  { nome:'Anelli e passanti per borse', emoji:'⭕', categorie:['D-ring','O-ring'], desc:'In metallo. Per manici e tracce.' },
  { nome:'Occhielli a martello', emoji:'🎯', desc:'Per lacci e cordoncini. Si applicano con punzone.' }
],

/* ==================== STABILIZZATORI/INTERFODERE ==================== */
stabilizzatori: [
  {
    nome:'Interfogera fusibile', en:'Fusible interfacing', emoji:'🔥',
    tipo:'Interfogera', applicazione:'Ferro da stiro',
    peso:['leggero','medio','pesante'],
    uso:'Rinforzare colletti, polsini, aperture',
    desc:'Si applica con il ferro. Il lato adesivo si fonde con il tessuto. Disponibile in vari pesi.',
    consigli:['Lato lucido sul rovescio del tessuto','Coprire con panno umido','30 secondi con pressione']
  },
  {
    nome:'Interfogera cucibile', en:'Sew-in interfacing', emoji:'🪡',
    tipo:'Interfogera', applicazione:'Cucitura',
    peso:['leggero','medio','pesante'],
    uso:'Tessuti che non tolerano il calore (seta, velluto)',
    desc:'Si imbastisce al tessuto poi si cuce insieme. Nessun calore necessario.',
    consigli:['Tagliare leggermente più piccola del pezzo','Imbastire a 0,5 cm dal bordo']
  },
  {
    nome:'Stabilizzatore tear-away', en:'Tear-away stabilizer', emoji:'📄',
    tipo:'Stabilizzatore per ricamo', applicazione:'Si strappa via dopo',
    peso:['leggero','medio'],
    uso:'Ricamo su cotone, tela, denim',
    desc:'Si posiziona sotto il tessuto durante il ricamo. Dopo la cucitura si strappa delicatamente.',
    consigli:['Strappare verso l\'esterno','Rimuovere i pezzi con pinzette per bordi netti']
  },
  {
    nome:'Stabilizzatore cut-away', en:'Cut-away stabilizer', emoji:'✂️',
    tipo:'Stabilizzatore per ricamo', applicazione:'Si taglia in eccesso',
    peso:['leggero','medio'],
    uso:'Ricamo su jersey, pile, tessuti elastici',
    desc:'Rimane sotto il ricamo permanentemente, tagliato vicino ai bordi. Evita distorsioni su tessuti elastici.',
    consigli:['Tagliare a 0,5 cm dal bordo del ricamo','Non strappare: danneggierebbe il tessuto elastico']
  },
  {
    nome:'Stabilizzatore solubile in acqua', en:'Water-soluble stabilizer', emoji:'💧',
    tipo:'Stabilizzatore per ricamo', applicazione:'Si scioglie in acqua',
    peso:['leggero'],
    uso:'Merletto da ricamo, ricamo su tulle, lavorazioni delicate',
    desc:'Completamente solubile. Dopo il ricamo si immerge in acqua e scompare. Ideale per ricami su base trasparente.',
    consigli:['Usare almeno 2 strati per ricami densi','Sciacquare in acqua fredda','Asciugare disteso']
  },
  {
    nome:'Ovatta/Batting per quilting', en:'Quilt batting', emoji:'☁️',
    tipo:'Imbottitura', applicazione:'Cucitura',
    peso:['leggero','medio','pesante'],
    uso:'Quilt, coperte, giacche imbottite',
    desc:'Disponibile in cotone, poliestere e misto. Il cotone respira meglio, il poliestere è più economico.',
    consigli:['Pre-lavare il batting in cotone','Fissare i tre strati con spilli da quilt o punti di ancoraggio ogni 10 cm']
  },
  {
    nome:'Interfogera in tessuto non tessuto', en:'Non-woven interfacing', emoji:'📋',
    tipo:'Interfogera', applicazione:'Ferro o cucitura',
    peso:['leggero','medio','pesante'],
    uso:'Borse, accessori, cappelli',
    desc:'Non ha diritto o rovescio. Non si sfilaccia. Ottima per borse e accessori strutturati.',
    consigli:['Tagliare in qualsiasi direzione','Più economica dei tessuti intrecciati']
  },
  {
    nome:'Interfogera woven', en:'Woven interfacing', emoji:'🧵',
    tipo:'Interfogera', applicazione:'Fusibile o cucibile',
    peso:['leggero','medio'],
    uso:'Colletti e polsini su camicie di qualità',
    desc:'Ha trama e ordito come un tessuto normale. Rispetta il filo del tessuto. Risultato più morbido e naturale.',
    consigli:['Rispettare il filo del tessuto','Ideale per abiti di qualità','Più pregiata della non-tessuta']
  }
],

/* ==================== CARTAMODELLI ==================== */
cartamodelli: [
  {
    nome:'Misure standard IT', tipo:'tabella',
    taglie: [
      { taglia:'36', it:'36', eu:'36', uk:'8', us:'4', petto:'80–82', vita:'62–64', fianchi:'86–88' },
      { taglia:'38', it:'38', eu:'38', uk:'10', us:'6', petto:'84–86', vita:'66–68', fianchi:'90–92' },
      { taglia:'40', it:'40', eu:'40', uk:'12', us:'8', petto:'88–90', vita:'70–72', fianchi:'94–96' },
      { taglia:'42', it:'42', eu:'42', uk:'14', us:'10', petto:'92–94', vita:'74–76', fianchi:'98–100' },
      { taglia:'44', it:'44', eu:'44', uk:'16', us:'12', petto:'96–98', vita:'78–80', fianchi:'102–104' },
      { taglia:'46', it:'46', eu:'46', uk:'18', us:'14', petto:'100–102', vita:'82–84', fianchi:'106–108' },
      { taglia:'48', it:'48', eu:'48', uk:'20', us:'16', petto:'104–107', vita:'86–90', fianchi:'110–114' }
    ]
  },
  {
    nome:'Simboli cartamodello', tipo:'simboli',
    simboli: [
      { simbolo:'→←', nome:'Filo del tessuto', desc:'Il cartamodello va posizionato parallelamente alla cimosa' },
      { simbolo:'⊠', nome:'Piega', desc:'Il bordo del cartamodello va posizionato sulla piega del tessuto' },
      { simbolo:'▲', nome:'Tacca singola', desc:'Punto di unione anteriore' },
      { simbolo:'▲▲', nome:'Tacca doppia', desc:'Punto di unione posteriore' },
      { simbolo:'●', nome:'Punto di controllo', desc:'Punto di riferimento per l\'unione dei pezzi' },
      { simbolo:'→', nome:'Direzione dello stiro', desc:'Verso in cui stendere o stirare il tessuto' },
      { simbolo:'⊕', nome:'Bottone/Asola', desc:'Posizione del bottone o dell\'asola' },
      { simbolo:'≡', nome:'Tagliare 2 pezzi', desc:'Tagliare due volte questo pezzo' }
    ]
  },
  {
    nome:'Margini di cucitura standard', tipo:'info',
    info: [
      { tipo:'Alta moda/sartoria', margine:'1,5–2 cm', note:'Lascia spazio per alterazioni future' },
      { tipo:'Cartamodelli commerciali', margine:'1,5 cm (5/8")', note:'Standard americano/europeo' },
      { tipo:'Quilting', margine:'0,75 cm (1/4")', note:'Standard per patchwork' },
      { tipo:'Lingerie', margine:'0,6 cm', note:'Riduce il volume sulle curve' },
      { tipo:'Asole', margine:'nessuno', note:'Il margine è già incluso nel posizionamento' }
    ]
  },
  {
    nome:'Marchi cartamodelli', tipo:'marchi',
    marchi: [
      { nome:'Burda Style', paese:'Germania', livello:'Principiante → Avanzato', note:'Senza margini di cucitura inclusi. Molto tecnici e completi. Download digitale e rivista mensile.' },
      { nome:'Simplicity', paese:'USA', livello:'Principiante', note:'Margini inclusi. Istruzioni dettagliate. Ottimo per chi inizia.' },
      { nome:'McCall\'s', paese:'USA', livello:'Intermedio', note:'Margini inclusi. Buona varietà. Spesso in saldo.' },
      { nome:'Vogue Patterns', paese:'USA', livello:'Avanzato', note:'Margini inclusi. Modelli moda, spesso alta qualità.' },
      { nome:'Ottobre Design', paese:'Finlandia', livello:'Principiante → Intermedio', note:'Specializzato in abbigliamento per bambini. Rivista stagionale.' },
      { nome:'Named Clothing', paese:'Finlandia', livello:'Intermedio → Avanzato', note:'Design contemporaneo. Download digitale. Margini inclusi.' },
      { nome:'Fibre Mood', paese:'Belgio', livello:'Intermedio', note:'Design moderno e minimalista. Download digitale e rivista.' }
    ]
  },
  {
    nome:'Cartamodelli gratuiti scaricabili', tipo:'gratuiti',
    fonti: [
      { nome:'Mood Fabrics — Free Patterns', emoji:'🧵', url:'https://www.moodfabrics.com/blog/category/sewing/free-sewing-patterns/', lingua:'EN', livello:'Tutti', tipo:'PDF abbigliamento', desc:'Centinaia di cartamodelli PDF gratuiti (abiti, top, pantaloni, accessori) con tutorial passo-passo. Una delle librerie gratuite più grandi.' },
      { nome:'Peppermint Magazine', emoji:'🌿', url:'https://peppermintmag.com/sewing-patterns/', lingua:'EN', livello:'Principiante → Intermedio', tipo:'PDF abbigliamento', desc:'Cartamodelli firmati (in collaborazione con In the Folds e altri) scaricabili gratis in PDF A4/A0, con istruzioni dettagliate.' },
      { nome:'Cucicucicoo', emoji:'🇮🇹', url:'https://www.cucicucicoo.com/it/cartamodelli-gratuiti/', lingua:'IT', livello:'Principiante', tipo:'PDF + tutorial', desc:'Cartamodelli e tutorial gratuiti in italiano: accessori, borse, abbigliamento per bambini e oggetti utili.' },
      { nome:'Sew Can She', emoji:'✂️', url:'https://www.sewcanshe.com/free-patterns', lingua:'EN', livello:'Principiante', tipo:'Progetti rapidi', desc:'Migliaia di progetti gratuiti facili e veloci: borse, astucci, accessori per la casa. Ottimo per principianti.' },
      { nome:'AllFreeSewing', emoji:'🔎', url:'https://www.allfreesewing.com/', lingua:'EN', livello:'Tutti', tipo:'Aggregatore', desc:'Raccolta enorme di cartamodelli gratuiti da tutto il web, con filtri per categoria, difficoltà e tipo di progetto.' },
      { nome:'Pattydoo', emoji:'🎬', url:'https://pattydoo.de/en', lingua:'EN/DE', livello:'Principiante → Intermedio', tipo:'PDF + video', desc:'Cartamodelli scaricabili con video tutorial chiari. Molti modelli gratuiti per abbigliamento donna, bimbo e accessori.' },
      { nome:'Closet Core — Free Patterns', emoji:'🧥', url:'https://www.closetcorepatterns.com/free-sewing-patterns/', lingua:'EN', livello:'Intermedio', tipo:'PDF abbigliamento', desc:'Cartamodelli gratuiti di qualità (top, mascherine, accessori) con tutorial fotografici molto curati.' },
      { nome:'Purl Soho', emoji:'🪡', url:'https://www.purlsoho.com/create/category/sewing/', lingua:'EN', livello:'Principiante → Intermedio', tipo:'PDF casa & accessori', desc:'Progetti gratuiti eleganti e minimalisti: biancheria per la casa, accessori, oggetti per neonati.' },
      { nome:'Makerist Freebies', emoji:'🎁', url:'https://www.makerist.com/', lingua:'EN/DE', livello:'Tutti', tipo:'PDF community', desc:'Sezione di freebie scaricabili creati dalla community: cerca i prodotti a prezzo 0 € filtrando per gratuiti.' },
      { nome:'Burda Style — Free', emoji:'📐', url:'https://www.burdastyle.com/pattern_store/patterns?price_filter=free', lingua:'EN', livello:'Tutti', tipo:'PDF community', desc:'Sezione gratuita della community Burda: tanti cartamodelli condivisi dagli utenti, da scaricare e stampare.' }
    ]
  }
],

/* ==================== SINGER 4432 ==================== */
singer4432: {
  specs: [
    { chiave:'Velocità massima', valore:'1.100 punti/minuto' },
    { chiave:'Punti preimpostati', valore:'32 punti (18 utilitaristici, 9 decorativi, 1 asola, 4 speciali)' },
    { chiave:'Lunghezza punto massima', valore:'6 mm' },
    { chiave:'Larghezza zigzag massima', valore:'6 mm' },
    { chiave:'Asola', valore:'4 passaggi automatici' },
    { chiave:'Alimentazione', valore:'Trasportatore a 8 denti (Heavy Duty)' },
    { chiave:'Struttura interna', valore:'Telaio in metallo rinforzato' },
    { chiave:'Piedini inclusi', valore:'7 piedini accessori' },
    { chiave:'Spolina', valore:'Orizzontale, facile inserimento' },
    { chiave:'Infilatura automatica', valore:'Sì, sistema a leva' },
    { chiave:'Tensione filo', valore:'Manopola da 0 a 9' },
    { chiave:'Pressione piedino', valore:'Non regolabile manualmente' },
    { chiave:'Luci di lavoro', valore:'LED integrato' },
    { chiave:'Peso', valore:'8,5 kg' },
    { chiave:'Dimensioni', valore:'40 × 22 × 31 cm' },
    { chiave:'Alimentazione elettrica', valore:'220–240V / 50Hz (Europa)' },
    { chiave:'Braccio libero', valore:'Sì (rimuovendo il piano supplementare)' },
    { chiave:'Attacco ago', valore:'Piatto a sinistra (sistema standard Singer)' }
  ],
  punti: [
    { id:'#01', nome:'Punto dritto', en:'Straight stitch', tipo:'basico', L:'0,5–6', W:'0', uso:'Cucitura principale' },
    { id:'#02', nome:'Punto dritto allungato', en:'Long straight stitch', tipo:'basico', L:'3–6', W:'0', uso:'Imbastiture provvisorie' },
    { id:'#03', nome:'Zigzag', en:'Zigzag', tipo:'basico', L:'0,5–5', W:'0–6', uso:'Sorfilatura, elastici, appliqué' },
    { id:'#04', nome:'Zigzag multipunto', en:'Multi-step zigzag', tipo:'basico', L:'1–4', W:'0–6', uso:'Applicazione elastici' },
    { id:'#05', nome:'Punto satin', en:'Satin stitch', tipo:'basico', L:'0,5–0,8', W:'0–6', uso:'Bordure, appliqué' },
    { id:'#06', nome:'Punto overcast', en:'Overcast stitch', tipo:'basico', L:'2–4', W:'4–6', uso:'Sorfilatura bordi' },
    { id:'#07', nome:'Punto stretch', en:'Stretch stitch', tipo:'elastico', L:'2–4', W:'0', uso:'Cuciture su jersey' },
    { id:'#08', nome:'Punto stretch triplo', en:'Triple stretch stitch', tipo:'elastico', L:'2,5–4', W:'0', uso:'Cuciture rinforzate su sportswear' },
    { id:'#09', nome:'Punto overlock simulato', en:'Simulated overlock', tipo:'elastico', L:'2,5–3', W:'5–6', uso:'Finish su jersey' },
    { id:'#10', nome:'Punto a croce', en:'Cross stitch', tipo:'decorativo', L:'2,5–3', W:'5–6', uso:'Decorazione' },
    { id:'#11', nome:'Punto erba', en:'Feather stitch', tipo:'decorativo', L:'2–3', W:'5–6', uso:'Smocking, decorazione' },
    { id:'#12', nome:'Punto stella', en:'Star stitch', tipo:'decorativo', L:'3–4', W:'5–6', uso:'Decorazione tessuti' },
    { id:'#13', nome:'Punto alveare', en:'Honeycomb stitch', tipo:'decorativo', L:'2,5', W:'6', uso:'Decorazione, smocking' },
    { id:'#14', nome:'Punto piuma', en:'Feather stitch', tipo:'decorativo', L:'2,5–3', W:'5,5', uso:'Quilting decorativo' },
    { id:'#15', nome:'Asola 4 passaggi', en:'4-step buttonhole', tipo:'asola', L:'auto', W:'auto', uso:'Asole su quasi tutti i tessuti' }
  ],
  accessori: [
    { nome:'Piedino universale', emoji:'👟', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino per cerniera', emoji:'🤐', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino asola 4 passaggi', emoji:'⭕', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino sorfilatura', emoji:'📎', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino punto satin', emoji:'〰️', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino orlo invisibile', emoji:'👁️', incluso:true, desc:'Incluso di serie' },
    { nome:'Piedino attacca-bottoni', emoji:'🔘', incluso:true, desc:'Incluso di serie' },
    { nome:'Cacciavite', emoji:'🔧', incluso:true, desc:'Per cambio ago' },
    { nome:'Aghi assortiti', emoji:'🪡', incluso:true, desc:'Aghi universali serie' },
    { nome:'Bobine extra', emoji:'⚙️', incluso:true, desc:'2 bobine aggiuntive' },
    { nome:'Spazzolino pulizia', emoji:'🪥', incluso:true, desc:'Per spolina e trasportatore' },
    { nome:'Guida cucitura', emoji:'📏', incluso:true, desc:'Guida magnetica per margini regolari' }
  ],
  compatibilitaTessuti: [
    { categoria:'Leggeri', esempi:'Chiffon, organza, seta, voile', ago:'Microtex 60–70', piedino:'Universale', tensione:'3–4', punto:'Diritto 2 mm' },
    { categoria:'Medi', esempi:'Cotone, lino, popeline', ago:'Universale 80', piedino:'Universale', tensione:'4–5', punto:'Diritto 2,5 mm' },
    { categoria:'Pesanti', esempi:'Denim, tela, canvas', ago:'Jeans 100–110', piedino:'Universale', tensione:'5–6', punto:'Diritto 3 mm' },
    { categoria:'Elastici', esempi:'Jersey, lycra, interlock', ago:'Jersey 75–80', piedino:'Walking foot', tensione:'3–4', punto:'Zigzag o stretch' },
    { categoria:'Speciali', esempi:'Pelle, similpelle, vinile', ago:'Pelle 90–100', piedino:'Teflon', tensione:'4–5', punto:'Diritto 3,5 mm' }
  ],
  manutenzione: [
    '🧹 Pulire il trasportatore da lanugine e polvere dopo OGNI progetto',
    '🛢️ Oliare il gancio rotante e il meccanismo ogni 8 ore di utilizzo',
    '🔄 Cambiare l\'ago ogni 8–10 ore di cucitura o dopo ogni progetto importante',
    '🧵 Rimuovere tutto il filo prima di riporre la macchina',
    '🔌 Spegnere e staccare dalla presa quando non in uso',
    '🧽 Pulire l\'esterno con panno morbido leggermente umido',
    '🔧 Revisione professionale ogni 1–2 anni di uso regolare'
  ],
  manutenzioneGuida: [
    {
      titolo:'Pulizia trasportatore',
      img:'image/img-manutenzione/pulizia-trasportatore.jpg',
      frequenza:'Dopo ogni progetto',
      passaggi:[
        'Rimuovere il piedino e portare l\'ago nella posizione più alta',
        'Aprire lo sportellino della spolina, rimuovere la spolina e la capsula',
        'Usare lo spazzolino in dotazione per rimuovere lanugine e polvere dal trasportatore',
        'Pulire la zona intorno alla capsula e lo sportellino',
        'Soffiare con aria compressa per residui ostinati (facoltativo)',
        'Rimontare capsula, spolina e piedino prima di riprendere'
      ]
    },
    {
      titolo:'Oliatura',
      img:'image/img-manutenzione/oliatura.jpg',
      frequenza:'Ogni 8–10 ore di utilizzo',
      passaggi:[
        'Usare SOLO olio specifico per macchine da cucire (mai olio da cucina o WD-40)',
        'Mettere 1 goccia di olio sul gancio rotante (dove ruota la capsula)',
        'Girare il volantino a mano lentamente per distribuire l\'olio',
        'Far funzionare la macchina a vuoto su un ritaglio per 30 secondi',
        'Tamponare l\'eccesso con un panno morbido',
        'Troppe gocce macchiano il tessuto: usare sempre la minima quantità'
      ]
    },
    {
      titolo:'Cambio ago',
      img:'image/img-manutenzione/cambio-ago.jpg',
      frequenza:'Ogni 8 ore di cucitura o dopo ogni progetto importante',
      passaggi:[
        'Portare l\'ago nella posizione più alta girando il volantino verso di sé',
        'Svitare la vite di fissaggio ago con il cacciavite (senso antiorario)',
        'Estrarre l\'ago vecchio verso il basso con delicatezza',
        'Inserire il nuovo ago con il lato piatto rivolto verso destra',
        'Spingere fino in fondo nell\'alloggiamento',
        'Avvitare saldamente la vite e reinfilare il filo'
      ]
    },
    {
      titolo:'Regolazione tensione',
      img:'image/img-manutenzione/tensione.jpg',
      frequenza:'Prima di ogni progetto su tessuto nuovo',
      passaggi:[
        'Impostare la tensione al centro (4–5) come punto di partenza',
        'Fare una cucitura di prova su un ritaglio del tessuto da utilizzare',
        'Rovescio: nodi visibili → tensione troppo alta → ridurre il numero',
        'Dritto: nodi visibili → tensione troppo bassa → aumentare il numero',
        'I punti devono essere identici su dritto e rovescio',
        'Regolare sempre su ritaglio, mai direttamente sul progetto'
      ]
    },
    {
      titolo:'Pulizia esterna',
      img:'image/img-manutenzione/pulizia-esterna.jpg',
      frequenza:'Mensilmente o quando necessario',
      passaggi:[
        'Spegnere la macchina e staccarla dalla presa di corrente',
        'Usare un panno morbido leggermente umido (non bagnato)',
        'Pulire delicatamente tutta la superficie esterna',
        'Pulire la guida del filo, i passafilo e il canale di infilatura',
        'Non usare prodotti chimici aggressivi o spray',
        'Coprire con il fodero originale quando non in uso'
      ]
    }
  ],
  problemi: [
    { problema:'Il filo si rompe spesso', soluzioni:['Rifilare il filo correttamente dal rocchetto','Controllare la tensione (potrebbe essere troppo alta)','Usare ago nuovo','Controllare che l\'ago sia inserito fino in fondo'] },
    { problema:'Punti saltati su jersey', soluzioni:['Usare ago Jersey/Stretch','Usare punto stretch o zigzag','Walking foot riduce il problema','Non tirare il tessuto'] },
    { problema:'Il tessuto si increspa', soluzioni:['Ridurre la tensione del filo','Usare punto più lungo','Controllare che la bobina sia inserita correttamente'] },
    { problema:'Rumore anomalo', soluzioni:['Oliare il meccanismo','Controllare che non ci siano fili intrappolati','Controllare ago non piegato'] },
    { problema:'La macchina non avanza il tessuto', soluzioni:['Controllare che il trasportatore sia alzato','Abbassare il piedino prima di cucire','Pulire il trasportatore dalla lanugine'] }
  ]
},

/* ==================== RISORSE ONLINE ==================== */
risorse: [
  {
    nome:'Cucito Creativo', url:'https://www.cucitocreativo.it',
    emoji:'🇮🇹', tipo:'blog', lingua:'IT', gratuito:true,
    desc:'Il più grande portale italiano di cucito. Tutorial, cartamodelli gratuiti, community attiva.',
    tags:['Tutorial','Cartamodelli gratuiti','Community','Italiano']
  },
  {
    nome:'Burda Style', url:'https://www.burdastyle.it',
    emoji:'🇩🇪', tipo:'cartamodelli', lingua:'IT/DE', gratuito:false,
    desc:'Rivista tedesca di sartoria con cartamodelli professionali. Versione italiana disponibile online.',
    tags:['Cartamodelli','Rivista','Professionale','Italiano']
  },
  {
    nome:'YouTube — Fabiola Modelli', url:'https://youtube.com/@fabiolamodelli',
    emoji:'▶️', tipo:'video', lingua:'IT', gratuito:true,
    desc:'Tutorial in italiano su cartamodelli e cucito. Ottimo per principianti.',
    tags:['Video','Tutorial','Italiano','Principianti']
  },
  {
    nome:'Mood Fabrics Blog', url:'https://www.moodfabrics.com/blog',
    emoji:'🇺🇸', tipo:'blog', lingua:'EN', gratuito:true,
    desc:'Blog dello store di tessuti preferito dai fashion designer. Tutorial avanzati e trend.',
    tags:['Tutorial','Tessuti','Avanzato','Inglese']
  },
  {
    nome:'Craftsy / Bluprint', url:'https://www.craftsy.com',
    emoji:'🇺🇸', tipo:'corsi', lingua:'EN', gratuito:false,
    desc:'Piattaforma di corsi di cucito online. Alcuni corsi gratuiti, molti a pagamento.',
    tags:['Corsi','Video','Inglese','Avanzato']
  },
  {
    nome:'Pattern Review', url:'https://www.patternreview.com',
    emoji:'⭐', tipo:'community', lingua:'EN', gratuito:true,
    desc:'Community con recensioni di cartamodelli. Scopri se un cartamodello funziona prima di comprarlo.',
    tags:['Community','Recensioni','Cartamodelli','Inglese']
  },
  {
    nome:'Threadsmagazine.com', url:'https://www.threadsmagazine.com',
    emoji:'📖', tipo:'rivista', lingua:'EN', gratuito:false,
    desc:'Rivista di sartoria di livello avanzato. Tecniche professionali e dettagliate.',
    tags:['Tecnica avanzata','Rivista','Professionale','Inglese']
  },
  {
    nome:'Singer Official Support', url:'https://www.singerco.com/support',
    emoji:'⚙️', tipo:'supporto', lingua:'EN/IT', gratuito:true,
    desc:'Manuali, video di supporto e FAQ ufficiali Singer. Manuale 4432 in PDF disponibile.',
    tags:['Singer','Manuali','Supporto','Ufficiale']
  },
  {
    nome:'Etsy — Cartamodelli digitali', url:'https://www.etsy.com/it/search?q=cartamodello+pdf',
    emoji:'🛒', tipo:'marketplace', lingua:'IT', gratuito:false,
    desc:'Marketplace con migliaia di cartamodelli digitali da stampare a casa. Molti designers indipendenti italiani.',
    tags:['Cartamodelli','Digitale','PDF','Acquisto']
  },
  {
    nome:'Fibre Mood', url:'https://www.fibremood.com',
    emoji:'🇧🇪', tipo:'cartamodelli', lingua:'IT/EN', gratuito:false,
    desc:'Marchio belga con design contemporanei. Rivista stagionale con cartamodelli inclusi.',
    tags:['Cartamodelli','Design moderno','Rivista','Premium']
  }
],

/* ==================== GLOSSARIO (50) ==================== */
glossario: [
  { it:'Abbondanza', en:'Seam allowance', def:'Margine di tessuto tra la linea di cucitura e il bordo tagliato' },
  { it:'Ago', en:'Needle', def:'Strumento metallico con cruna che guida il filo nella cucitura' },
  { it:'Appliqué', en:'Appliqué', def:'Tecnica che consiste nell\'applicare un pezzo di tessuto su un altro' },
  { it:'Armatura', en:'Armscye / Sleeve opening', def:'Apertura del corpino dove viene inserita la manica' },
  { it:'Asola', en:'Buttonhole', def:'Apertura orlata in cui si infila il bottone' },
  { it:'Baghetta', en:'Placket', def:'Striscia di tessuto che finisce e rafforza un\'apertura' },
  { it:'Cimosa', en:'Selvage', def:'Bordo del tessuto già rifinito, non si sfilaccia' },
  { it:'Corpino', en:'Bodice', def:'Parte superiore di un abito che copre il busto' },
  { it:'Cucitura francese', en:'French seam', def:'Cucitura che racchiude completamente i bordi all\'interno' },
  { it:'Diritto filo', en:'Grain line', def:'Direzione parallela alla cimosa del tessuto, indicata sul cartamodello' },
  { it:'Drappeggio', en:'Drape', def:'Il modo in cui il tessuto cade e si piega naturalmente' },
  { it:'Elasticizzato', en:'Shirred / Elasticated', def:'Tessuto raccolto con elastico per creare volume' },
  { it:'Falda', en:'Hem', def:'Bordo del capo risvoltato e cucito per rifinire l\'orlo' },
  { it:'Fettuccia', en:'Ribbon / Tape', def:'Striscia di tessuto usata per rifinire bordi o come decorazione' },
  { it:'Filato', en:'Yarn / Thread', def:'Filo usato per tessere o cucire' },
  { it:'Fodera', en:'Lining', def:'Tessuto interno che riveste un capo per comfort e rifinitura' },
  { it:'Fondo schiena', en:'Back waist length', def:'Misura dalla nuca alla vita sul retro' },
  { it:'Interfogera', en:'Interfacing', def:'Tessuto di supporto applicato al rovescio per rinforzare colletti, polsini ecc.' },
  { it:'Imbastire', en:'To baste', def:'Cucire provvisoriamente con punti lunghi prima della cucitura definitiva' },
  { it:'Manichino', en:'Dress form / Mannequin', def:'Modello anatomico usato per provare e modellare i capi' },
  { it:'Margine di cucitura', en:'Seam allowance', def:'Quantità di tessuto tra la linea di cucitura e il bordo tagliato' },
  { it:'Maschile', en:'Pattern', def:'In italiano regionale: cartamodello' },
  { it:'Orlo', en:'Hem', def:'Bordo rifinito di un capo. Può essere cucito, incollato o arrotolato' },
  { it:'Ovatta', en:'Batting / Wadding', def:'Strato imbottente usato nei quilt e nelle giacche' },
  { it:'Passante', en:'Belt loop / Casing', def:'Canale di tessuto attraverso cui passa una cintura o un elastico' },
  { it:'Pence', en:'Dart', def:'Piega cucita a punta per modellare il tessuto sulla forma del corpo' },
  { it:'Piega', en:'Pleat / Fold', def:'Piega decorativa o funzionale nel tessuto' },
  { it:'Punto a croce', en:'Cross stitch', def:'Punto decorativo a forma di X, fatto a mano o a macchina' },
  { it:'Punto diritto', en:'Straight stitch', def:'La cucitura di base: un punto dopo l\'altro in linea retta' },
  { it:'Punto zigzag', en:'Zigzag stitch', def:'Punto a zig-zag, usato per sorfilare bordi o cucire tessuti elastici' },
  { it:'Quilting', en:'Quilting', def:'Tecnica di unire tre strati (top, batting, retro) con cuciture decorative' },
  { it:'Ripuntare', en:'Topstitch', def:'Cucitura decorativa sul dritto del tessuto, vicino al bordo' },
  { it:'Rovescio', en:'Wrong side (WS)', def:'Il lato interno del tessuto, non visibile nel capo finito' },
  { it:'Sbiecare', en:'To cut on the bias', def:'Tagliare il tessuto in diagonale a 45° rispetto al filo' },
  { it:'Sciancratura', en:'Shaping / Waist seam', def:'La forma curva che dà al capo la forma del corpo' },
  { it:'Sfilacciatura', en:'Fraying', def:'Il disfacimento dei fili sul bordo tagliato del tessuto' },
  { it:'Smocking', en:'Smocking', def:'Tecnica decorativa di increspatura controllata' },
  { it:'Sorfilare', en:'To serge / Overlook', def:'Rifinire il bordo del tessuto con punto overlock o zigzag per evitare la sfilacciatura' },
  { it:'Spallina', en:'Shoulder strap / Shoulder seam', def:'La cucitura o il pezzo di tessuto sulla spalla' },
  { it:'Sprone', en:'Yoke', def:'Pezzo di tessuto che copre le spalle o i fianchi, a cui è unita la parte principale del capo' },
  { it:'Strapuntino', en:'Basting stitch / Long stitch', def:'Punto lungo usato per imbastire' },
  { it:'Telo', en:'Width of fabric / Panel', def:'La larghezza intera del tessuto o una sezione di esso' },
  { it:'Tessuto non tessuto', en:'Non-woven fabric / Felt', def:'Tessuto ottenuto per pressione e non per tessitura, es. il feltro' },
  { it:'Trasportatore', en:'Feed dogs', def:'Dentini metallici sotto il piedino che avanzano il tessuto durante la cucitura' },
  { it:'Treccia', en:'Braid', def:'Ornamento intrecciato usato come decorazione o bordo' },
  { it:'Triplice zigzag', en:'Triple zigzag', def:'Punto rinforzato a zigzag, ogni dente è fatto con tre punti sovrapposti' },
  { it:'Tucks', en:'Tucks', def:'Piccole pieghe cucite parzialmente, decorative o funzionali' },
  { it:'Unione cucitura', en:'Seam joining', def:'L\'atto di unire due bordi di tessuto con una cucitura' },
  { it:'Vivo del tessuto', en:'Raw edge', def:'Bordo tagliato del tessuto, non rifinito, che tende a sfilacciarsi' },
  { it:'Zip invisibile', en:'Invisible zipper', def:'Cerniera i cui denti sono nascosti all\'interno quando chiusa' }
]

}; // fine DATA
