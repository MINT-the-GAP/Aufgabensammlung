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










tags: Erklärung, Baumdiagramm

comment: In diesem Abschnitt wird aus der Geometrie eines Quadrats das Baumdiagramm ausführlich abgeleitet.

author: Martin Lommatzsch

-->

# Das "Von"-Prinzip




{{|>}}
***************************

Es wird ein *Quadrat* mit der *Kantenlänge* $1\,$m betrachtet:

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/von1.PNG)

{{|>}} Dieses *Quadrat* wird nun in *Anteile* zerschnitten.  Die gestrichelten Linien geben den Schnitt an und die *Brüche* die *Verhältnisse* dieser Teilung. Nach einer Teilung wird das resultierende *Rechteck* betrachtet und mit dem *prozentualen* *Anteil* vom *Ausgangsflächeninhalt* beschrieben.


![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/von2.PNG)

{{|>}} Es fällt auf, dass die beiden *Flächeninhalte* *aufaddiert* wieder den *Ausgangsflächeninhalt* ergeben: $A_0 = A_l + A_r$. Dabei ist der *Flächeninhalt* $A_l$ (*Flächeninhalt* links) ein Viertel **vom** *Ursprungsflächeninhalt* $A_0$, also $A_l = \frac{1}{4} \cdot A_0 $. Nun sollen die beiden *Rechtecke* nochmal geteilt werden:



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/von3.PNG)


{{|>}} Nun betrachtet man die vier *Flächeninhalte* nach dem zweiten Zerschneiden:

$$
\begin{align*}     
 A_{ll} &= \frac{1}{3} \cdot A_l \\
 A_{lr} &= \frac{2}{3} \cdot A_l \\
 A_{rl} &= \frac{1}{3} \cdot A_r \\
 A_{rr} &= \frac{2}{3} \cdot A_r \\
\end{align*} 
$$

{{|>}} Hieran ist zu erkennen, dass stets der vorherige *Flächeninhaltswert* mit dem neuen *Anteil* *multipliziert* wird. Dabei ist $A_{ll}$ (links, links) ein Drittel **vom** *Flächeninhalt* des *Flächeninhaltes* $A_l$. Bringt man dies auf die Ausdrücke mit dem *Anfangsflächeninhalt* $A_0$ zurück, erhält man:

$$
\begin{align*}     
 A_{ll} &= \frac{1}{3} \cdot A_l =\frac{1}{3} \cdot \frac{1}{4} \cdot A_0 = \frac{1}{12} \cdot A_0 \\
 A_{lr} &= \frac{2}{3} \cdot A_l =\frac{2}{3} \cdot \frac{1}{4} \cdot A_0 = \frac{1}{6} \cdot A_0 \\
 A_{rl} &= \frac{1}{3} \cdot A_r =\frac{1}{3} \cdot \frac{3}{4} \cdot A_0 = \frac{1}{4} \cdot A_0 \\
 A_{rr} &= \frac{2}{3} \cdot A_r =\frac{1}{3} \cdot \frac{3}{4} \cdot A_0 = \frac{1}{2} \cdot A_0 \\
\end{align*} 
$$

{{|>}} 
********************
Somit ist ein Drittel von einem Viertel vom *Ursprungsflächeninhalt* als *Multiplikation* der *Anteile* mit dem *Ursprungswert* zu verstehen und man erhält so die *Einzelflächeninhalte*. *Addiert* man alle *Einzelflächeninhalte* zusammen erhält man wieder *Ursprungsflächeninhalt*. Diese beiden *Regeln* werden *Pfadregeln* genannt und wenn statt einen *Flächeninhalt* nun der Entsprechungswert von $100\%$ als Startwert benutzt wird, ist ein sogenanntes *Baumdiagramm* zu erkennen. \

Das Ganze ist auch als *Distributivgesetz* mit einer Teilung darstellbar:
********************



<section class="dynFlex">
<div class="flex-child">

<!-- style="width:300px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/von4.PNG)


</div>
<div class="flex-child">

$$
\begin{align*}
 A_0 &= A_l + A_r = \frac{1}{3} \cdot A_0  + \frac{2}{3} \cdot A_0 \\
&=  \left(\frac{1}{3} + \frac{2}{3}\right) \cdot A_0  \\  
\end{align*}
$$


</div>
<div class="flex-child">
</div>
</section>

oder mit zwei Teilungen:


<section class="dynFlex">
<div class="flex-child">

<!-- style="width:300px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/von5.PNG)


</div>
<div class="flex-child">

$$
\begin{align*}
 A_0 &= A_{ll} + A_{lr} + A_{rl} + A_{rr} \\
		&= \frac{1}{3} \cdot \frac{1}{4} \cdot A_0  +  \frac{2}{3} \cdot \frac{1}{4} \cdot A_0  +  \frac{1}{3} \cdot \frac{3}{4} \cdot A_0  +  \frac{2}{3} \cdot \frac{3}{4} \cdot A_0        \\ 
		&= \left[\frac{1}{3} \cdot \frac{1}{4}    +  \frac{2}{3} \cdot \frac{1}{4}    +  \frac{1}{3} \cdot \frac{3}{4}   +  \frac{2}{3} \cdot \frac{3}{4}\right] \cdot A_0        \\ 
		&= \left[\left(\frac{1}{3}  +  \frac{2}{3}\right) \cdot \left(\frac{1}{4} + \frac{3}{4}\right) \right] \cdot A_0        \\ 
\end{align*}
$$

</div>
<div class="flex-child">
</div>
</section>




***************************


