<!--
version:  0.0.1
language: de
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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Gleichungssysteme, sehr leicht, sehr niedrig, Bestimmen

comment: Löse Streichholzschachtelgleichungssysteme.

author: Martin Lommatzsch

-->




# Streichholzschachtelgleichungsysteme


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="width:600px" -->
__$a)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1b.png)  
$x=$ [[  2  ]] @canvas Streichhölzer \
$y=$ [[  6  ]] @canvas Streichhölzer
@Algebrite.check([ 2;6 ])

@ADetails(1=BE; Gleichungssysteme)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="width:600px" -->
__$b)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2b.png)  
$x=$ [[  2   ]] @canvas Streichhölzer \
$y=$ [[  3   ]] @canvas Streichhölzer
@Algebrite.check([ 2;3 ])

@ADetails(1=BE; Gleichungssysteme)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="width:600px" -->
__$c)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3b.png)  
$x=$ [[  1  ]] @canvas Streichhölzer \
$y=$ [[  2  ]] @canvas Streichhölzer
@Algebrite.check([ 1;2 ])

@ADetails(1=BE; Gleichungssysteme)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
style="width:600px" -->
__$d)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4b.png)  
$x=$ [[  2  ]] @canvas Streichhölzer \
$y=$ [[  6  ]] @canvas Streichhölzer \
$z=$ [[  4  ]] @canvas Streichhölzer
@Algebrite.check([ 2;6;4 ])

@ADetails(1=BE; Gleichungssysteme)















