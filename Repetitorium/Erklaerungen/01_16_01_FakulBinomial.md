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










tags: Erklärung, Fakultät, Binomialkoeffizient

comment: In diesem Abschnitt werden Fakultäten und Binomialkoeffizienten ausführlich erklärt.

author: Martin Lommatzsch

-->

# Fakultäten und Binomialkoeffizienten




{{|>}}
***************************


Einige Abkürzungen werden oft bei der *Wahrscheinlichkeitsrechnung* sowie bei *Reihendarstellungen* verwendet. Zu diesen zählen *Fakultäten* und *Binominalkoeffizienten*. So kann zum Beispiel die Rechnung 


$$
\begin{align*}
& 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 720  \\
\end{align*}
$$

{{|>}} abgekürzt werden, durch den sogenannten *Fakultätsoperator* $!$:


$$
\begin{align*}
& 6 ! = 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 720 \\
\Rightarrow & n ! = n \cdot (n-1) \cdot \cdot \cdot 2\cdot 1 \\
\end{align*}
$$


{{|>}} Dabei ist die *Fakultät* so definiert, dass $0! := 1$ gilt. Da oftmals *Fakultäten* in *Brüchen* vorkommen, sollte das *Kürzen* sowie andere Rechenregeln von *Fakultäten* bekannt sein. Außerdem unterliegt der *Fakultätsoperator* nicht dem *Distributiv*-, *Assoziativ*- und *Kommutativgesetz*, da er ausschließlich nach links wirkt und auch nur auf den *Wert* einer *Klammer*, die links von ihm steht.




$$
\begin{align*}
& \frac{7!}{4!} = \frac{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{4 \cdot 3 \cdot 2 \cdot 1} = 7 \cdot 6 \cdot 5 \\
& (ab)! \neq a!b! \\
& (a+b)! \neq a!+b! \\
& 6 \cdot 5! = 6! \Rightarrow (n+1) \cdot n! = n! \cdot (n+1)   = (n+1)! \\
& \frac{8!}{8} = 7! \Rightarrow \frac{n!}{n} = (n-1)! \\
\end{align*}
$$



{{|>}}  Einige Konstellationen mit der *Fakultät* kommen besonders häufig vor. Die am häufigsten vorkommende Anordnung von *Fakultäten* wird *Binomialkoeffizient* genannt und ist definiert durch:



$$
\begin{align*}
&     \left(\begin{array}{c}  n  \\  k  \end{array}\right)   = \frac{n!}{k!(n-k)!} \\
\end{align*}
$$



{{|>}} Generell sollte der Umgang mit neuen Abkürzungen, die neu eingeführt wurden, geübt werden, da in der Mathematik noch viele weitere Abkürzungen warten. So werden zum Beispiel im Kapitel "*Reihen*" weitere oft vorkommende Abkürzungen eingeführt.




***************************
