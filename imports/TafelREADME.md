<!--
version:  0.0.2language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md
comment: LiaScript – Presentation 98% Breite + Auto-Font-Boost + Schriftgrößen-Regler (Overlay-Button, nur Presentation) – import-sicher, kollisionsarm
author: Martin Lommatzsch




script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/Tafel.js

-->















# Tafelmodus

Im Präsentations- oder Folienmodus wird nun die maximale Breite des Bildschirms ausgenutzt, was man an der Länge dieser doch sehr langen Textzeile erkennen kann, wenn man die Schrift nicht allzu klein einstellt. Auch die Schriftgröße kann nun dynamisch angepasst werden. 




Mittels div-Bereichen kann man Bereiche nur für einen Modus sichtbar machen: 

```
<div data-lia-only="slides"> 
Das sehe ich nur bei Folien 
</div>
```

---

```
<div data-lia-only="presentation"> 
Das sehe ich nur bei Präsentation 
</div>
```

---

```
<div data-lia-only="textbook"> 
Das sehe ich nur bei Lehrbuch 
</div>
```

---

---

<h2>Beispiel im Text</h2>



Das hier ist ein Beispiel bei dem man bei den verschiedenen Modi unterschiedliche Inhalte angezeigt bekommt. Hier muss dann eine Leerzeile sein.

<div data-lia-only="textbook">

<!-- data-solution-button="5"-->
$4+5=$ [[ 9 ]] 

</div>
<div data-lia-only="presentation">  

<!-- style="width:200px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)


</div>
<div data-lia-only="slides">

- Das ist eine Liste,

- die man nur im Folienmodus

- sehen kann.

</div>

 Hier muss dann auch eine Leerzeile sein, aber dann geht eigentlich alles.




