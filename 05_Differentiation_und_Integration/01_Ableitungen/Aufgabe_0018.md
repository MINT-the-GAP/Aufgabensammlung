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

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0018A;1;1;1`)

@AxisLabel(`id=ABL0018A;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0018A;f;-0.375*(x-1)^2+3;#0077cc`)

@DGS(`ABL0018A;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0018A`,`__$a)$__ **Skizziere** den Graphen von $f'$ zum vorgegebenen blauen Graphen von $f$.`)

@RekonstruktionMitOptionen(`ABL0018A;-0.75*(x-1);0.4`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$f'(x)=-\frac{3}{4}(x-1)$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0018Asolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0018Asolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0018Asolution;f1=0;-0.75*(x-1);#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=600;id=ABL0018B;1;1;1`)

@AxisLabel(`id=ABL0018B;xlabel=$x$;ylabel=$y$`)

@PlotFunction(`ABL0018B;g;-(1/9)*(x+1)^3+(4/3)*(x+1)-1;#0077cc`)

@DGS(`ABL0018B;tools=[910;920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`ABL0018B`,`__$b)$__ **Skizziere** den Graphen von $g'$ zum vorgegebenen blauen Graphen von $g$.`)

@RekonstruktionMitOptionen(`ABL0018B;(4/3)-(1/3)*(x+1)^2;0.6`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
[[?]] @Explain
*****************
$g'(x)=\frac{4}{3}-\frac{1}{3}(x+1)^2$

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=360;id=ABL0018Bsolution;static=1;1;1;1`)
@AxisLabel(`id=ABL0018Bsolution;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0018Bsolution;g1=0;(4/3)-(1/3)*(x+1)^2;#b41f65`)
*****************

@resetter

@ADetails(`1=BE; Ableitungen, grafisches Ableiten`)

</div>

</section>
