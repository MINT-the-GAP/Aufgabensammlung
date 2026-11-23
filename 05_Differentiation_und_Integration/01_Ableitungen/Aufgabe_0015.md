<!--
author: Martin Lommatzsch
version: 1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

tags: Ableitungen, grafisches Ableiten, leicht, niedrig, Skizzieren

comment: Skizziere die erste Ableitung zu zwei vorgegebenen Funktionsgraphen.
-->

# Ableitungsgraphen skizzieren

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

Öffne im Koordinatensystem das Werkzeugmenü und wähle den Stift. Zeichne über möglichst viel von der sichtbaren Breite und klicke auf „Prüfen“.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0015A;1;1;1`)

@AxisLabel(`id=ABL0015A;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0015A;f;-0.25*(x+2)^2+2;#0077cc`)

@DGS(`ABL0015A;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0015A`,`__$a)$__ **Skizziere** den Graphen von $f'$ zum vorgegebenen blauen Graphen von $f$.`)

@RekonstruktionMitOptionen(`ABL0015A;-0.5*(x+2);0.4`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$f'(x)=-\frac{1}{2}(x+2)$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0015Asolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0015Asolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0015Asolution;f1=0;-0.5*(x+2);#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0015B;1;1;1`)

@AxisLabel(`id=ABL0015B;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0015B;g;-(1/12)*x^3+x;#0077cc`)

@DGS(`ABL0015B;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0015B`,`__$b)$__ **Skizziere** den Graphen von $g'$ zum vorgegebenen blauen Graphen von $g$.`)

@RekonstruktionMitOptionen(`ABL0015B;1-0.25*x^2;0.6`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$g'(x)=1-\frac{1}{4}x^2$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0015Bsolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0015Bsolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0015Bsolution;g1=0;1-0.25*x^2;#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

</section>
