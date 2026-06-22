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


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Negative Zahlen, Division, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Division mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Division mit ganzen Zahlen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Wert des Terms **an**.

<section class="dynFlex">

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$a)\;\;$__ \
$ 18:(-2) =$ [[  -9  ]]  \
$ 18:(-(-2)) =$ [[  9  ]]  \
$ 18:(-(-(-2))) =$ [[  -9  ]]  \
$ 18:(-(-(-(-2)))) =$ [[  9  ]]  \
$ 18:(-(-(-(-(-2))))) =$ [[  -9  ]]  \
$ 18:(-(-(-(-(-(-2)))))) =$ [[  9  ]]   
@Algebrite.check([ -9;9;-9;9;-9;9 ])

@ADetails(1=BE; Negative Zahlen, Division, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$b)\;\;$__ \
$ -33 : 3 =$ [[  -11  ]]  \
$ -(-33) : (-3) =$ [[  -11  ]]  \
$ -(-(-33)) : (-(-3)) =$ [[  -11  ]]  \
$ -(-(-(-33))) : (-(-(-3))) =$ [[  -11  ]]  \
$ -(-(-(-(-33)))) : (-(-(-(-3)))) =$ [[  -11  ]]  \
$ -(-(-(-(-(-33))))) : (-(-(-(-(-3))))) =$ [[  -11  ]]   
@Algebrite.check([ -11;-11;-11;-11;-11;-11 ])

@ADetails(1=BE; Negative Zahlen, Division, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$c)\;\;$__ \
$ 24 : (-8) =$ [[  -3  ]]  \
$ -24 : (-8) =$ [[  3  ]]  \
$ -(-24) : (-8) =$ [[ -3   ]]  \
$ -(-(-24)) : (-8) =$ [[  3  ]]  \
$ -(-(-(-24))) : (-8) =$ [[  -3  ]]  \
$ -(-(-(-(-24)))) : (-8) =$ [[  3  ]]   
@Algebrite.check([ -3;3;-3;3;-3;3 ])

@ADetails(1=BE; Negative Zahlen, Division, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$d)\;\;$__ \
$ -48 : (-8) =$ [[  6  ]]  \
$ -(-48) : (-8) =$ [[  -6  ]]  \
$ -(-48) : (-(-8)) =$ [[  6  ]]  \
$ -(-(-48)) : (-(-8)) =$ [[  -6  ]]  \
$ -(-(-48)) : (-(-(-8))) =$ [[  6  ]]  \
$ -(-(-(-48))) : (-(-(-8))) =$ [[  -6  ]]   
@Algebrite.check([ 6;-6;6;-6;6;-6 ])

@ADetails(1=BE; Negative Zahlen, Division, Zahlenverständnis)

</div>
</section>





