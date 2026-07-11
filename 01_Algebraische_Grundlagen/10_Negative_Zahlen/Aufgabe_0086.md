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











tags: Negative Zahlen, Multiplikation, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Setze die Permanzreihe zur Multiplikation mit ganzen Zahlen fort.

author: Martin Lommatzsch

-->




# Permanenzreichen zur Multiplikation mit ganzen Zahlen

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
$ -4 \cdot 3 =$ [[  -12  ]]  \
$ -4 \cdot 3 \cdot (-1) =$ [[  12  ]]  \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  =$ [[  -12  ]]  \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  =$ [[  12  ]]  \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  -12  ]]  \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  12  ]]   
@Algebrite.check([ -12;12;-12;12;-12;12 ])

@ADetails(1=BE; Negative Zahlen, Multiplikation, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$b)\;\;$__ \
$ -5 \cdot (-12)  =$ [[  60  ]]  \
$ -(-5) \cdot (-(-12)) =$ [[  60  ]]  \
$ -(-(-5)) \cdot (-(-(-12))) =$ [[  60  ]]  \
$ -(-(-(-5))) \cdot (-(-(-(-12)))) =$ [[  60  ]]  \
$ -(-(-(-(-5)))) \cdot (-(-(-(-(-12))))) =$ [[  60  ]]  \
$ -(-(-(-(-(-5))))) \cdot (-(-(-(-(-(-12)))))) =$ [[  60  ]]   
@Algebrite.check([ 60;60;60;60;60;60 ])

@ADetails(1=BE; Negative Zahlen, Multiplikation, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$c)\;\;$__ \
$ -6 \cdot (-7)  =$ [[  42  ]]  \
$ -6 \cdot (-(-7)) =$ [[  -42  ]]  \
$ -6 \cdot (-(-(-7))) =$ [[  42  ]]  \
$ -6 \cdot (-(-(-(-7)))) =$ [[  -42  ]]  \
$ -6 \cdot (-(-(-(-(-7))))) =$ [[  42  ]]  \
$ -6 \cdot (-(-(-(-(-(-7)))))) =$ [[  -42  ]]   
@Algebrite.check([ 42;-42;42;-42;42;-42 ])

@ADetails(1=BE; Negative Zahlen, Multiplikation, Zahlenverständnis)

</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
__$d)\;\;$__ \
$  -4 \cdot (-7) =$ [[  28  ]]  \
$  -(-4) \cdot (-7) =$ [[  -28  ]]  \
$  -(-(-4)) \cdot (-7) =$ [[  28  ]]  \
$  -(-(-(-4))) \cdot (-7) =$ [[  -28  ]]  \
$  -(-(-(-(-4)))) \cdot (-7) =$ [[  28  ]]  \
$  -(-(-(-(-(-4))))) \cdot (-7) =$ [[  -28  ]]  
@Algebrite.check([ 28;-28;28,-28;28;-28 ])

@ADetails(1=BE; Negative Zahlen, Multiplikation, Zahlenverständnis)

</div>
</section>





