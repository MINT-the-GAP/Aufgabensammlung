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















tags: Äquivalenzumformung, Bruchrechnung, negative Zahlen, schwer, hoch, Berechnen, 

comment: Führe eine Äquivalenzumformung mit eingesetzten rationalen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung mit Einsetzen



**Berechne** den Lösungswert für die fehlende Größe.



<section class="dynFlex">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3a + 2b = c + 4 \;\;$  mit $\;\; b = a - 5 \;\;\wedge\;\; c = 2a - 1$ \
$a$ = [[  13/3  ]] @canvas
@Algebrite.check(13/3)
************
$$
\begin{align*}
3a + 2b &= c + 4 \\
3a + 2(a-5) &= (2a-1) + 4 \\
3a + 2a - 10 &= 2a + 3 \quad \left| -2a \right. \\
3a - 10 &= 3 \quad \left| +10 \right. \\
3a &= 13 \quad \left| :3 \right. \\
a &= \dfrac{13}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $   x + 6y = y + 9z \;\;$  mit $\;\; y = 2x - 1 \;\;\wedge\;\; z = x + 2$ \
$x$ = [[  23/2  ]] @canvas
@Algebrite.check(23/2)
************
$$
\begin{align*}
x + 6y &= y + 9z \\
x + 6(2x-1) &= (2x-1) + 9(x+2) \\
x + 12x - 6 &= 2x - 1 + 9x + 18 \\
13x - 6 &= 11x + 17 \quad \left| -11x \right. \\
2x - 6 &= 17 \quad \left| +6 \right. \\
2x &= 23 \quad \left| :2 \right. \\
x &= \dfrac{23}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $   r + t = u + v \;\;$  mit $\;\; r = 1 + 3u \;\;\wedge\;\; t = 2u - 4 \;\;\wedge\;\; v = 5u - 2$ \
$u$ = [[  -1  ]] @canvas
@Algebrite.check(-1)
************
$$
\begin{align*}
r + t &= u + v \\
(1+3u) + (2u-4) &= u + (5u-2) \\
5u - 3 &= 6u - 2 \quad \left| -5u \right. \\
-3 &= u - 2 \quad \left| +2 \right. \\
-1 &= u \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   5n + 3m + 9s = n m + a \;\;$  mit $\;\; n=2 \;\;\wedge\;\; m = 4s + 1 \;\;\wedge\;\; a = s - 5$ \
$s$ = [[  -4/3  ]] @canvas
@Algebrite.check(-4/3)
************
$$
\begin{align*}
5n + 3m + 9s &= n m + a \\
5\cdot 2 + 3(4s+1) + 9s &= 2(4s+1) + (s-5) \\
10 + 12s + 3 + 9s &= 8s + 2 + s - 5 \\
21s + 13 &= 9s - 3 \quad \left| -9s \right. \\
12s + 13 &= -3 \quad \left| -13 \right. \\
12s &= -16 \quad \left| :12 \right. \\
s &= -\dfrac{4}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 5(c+6) + 5t = 4(r + n) \;$  mit $\,c = 2t - 1 \;\;\wedge\;\; r = t + 3 \;\;\wedge\;\; n = 3t + 5$ \
$t$ = [[  -7  ]] @canvas
@Algebrite.check(-7)
************
$$
\begin{align*}
5(c+6) + 5t &= 4(r+n) \\
5\left((2t-1)+6\right) + 5t &= 4\left((t+3)+(3t+5)\right) \\
5(2t+5) + 5t &= 4(4t+8) \\
10t + 25 + 5t &= 16t + 32 \quad \left| -15t \right. \\
25 &= t + 32 \quad \left| -32 \right. \\
-7 &= t \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $   r + s = t \;\;$  mit $\;\; s = 2r + 1 \;\;\wedge\;\;  t = 2s + 3$ \
$r$ = [[  -4  ]] @canvas
@Algebrite.check(-4)
************
$$
\begin{align*}
r + s &= t \\
r + (2r+1) &= 2(2r+1) + 3 \\
3r + 1 &= 4r + 2 + 3 = 4r + 5 \quad \left| -3r \right. \\
1 &= r + 5 \quad \left| -5 \right. \\
-4 &= r \\
\end{align*}
$$
************
</div>
</section>

