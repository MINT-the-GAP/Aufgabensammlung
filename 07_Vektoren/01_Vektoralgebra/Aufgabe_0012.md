<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Vektoren, Abstand, negative Zahlen, Wurzeln, Dezimalzahlen, Potenzen, Runden, mittel, sehr niedrig, Berechne

comment: Wie weit liegen die Punkte im dreidimensionalen Raum auseinander?

author: Martin Lommatzsch

-->




# Abstand von Punkten


**Berechne** den Abstand zwischen den gegebenen Punkten. Gib die Werte falls nötig gerundet auf drei Nachkommastellen an.
<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $P\left( -6 | 1 | -1 \right) \;\;\wedge\;\; Q\left( 2 | -5 | 1 \right)$  \
<br>
--> $ d = $ [[   11    ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 2 \\ -5 \\ 1 \end{array}\right)  - \left(\begin{array}{c} -6 \\ 1 \\ -1 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 8 \\ -6 \\ -2 \end{array}\right) \right| \\
   &= \sqrt{8^2+6^2+2^2} \\
   &= \sqrt{121} \\
   &= 11 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 3 | 6 | 2 \right) \;\;\wedge\;\; Q\left( -5 | 1 | -3 \right)$  \
<br>
--> $ d = $ [[ 11,446  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -5 \\ 1 \\ -3 \end{array}\right)  - \left(\begin{array}{c} 3 \\ 6 \\ 2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ -5 \\ -5  \end{array}\right) \right| \\
   &= \sqrt{8^2+5^2+5^2} \\
   &= \sqrt{131} \\
   &\approx 11,446 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 7 | 4 | -8 \right) \;\;\wedge\;\; Q\left( 1 | -1 | -6 \right)$  \
<br>
--> $ d = $ [[  8,062   ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 7 \\ 4 \\ -8 \end{array}\right)  - \left(\begin{array}{c} 1 \\ -1 \\ -6 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 6 \\ 5 \\ -2 \end{array}\right) \right| \\
   &= \sqrt{6^2+5^2+2^2} \\
   &= \sqrt{65} \\
   &\approx 8,062 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( 5 | -5 | -5 \right) \;\;\wedge\;\; Q\left( -3 | -7 | 7 \right)$  \
<br>
--> $ d = $ [[  14,560 ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -3 \\ -7 \\ 7 \end{array}\right)  - \left(\begin{array}{c} 5 \\ -5 \\ -5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ -2 \\ 12 \end{array}\right) \right| \\
   &= \sqrt{8^2+2^2+12^2} \\
   &= \sqrt{212} \\
   &\approx 14,560 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>


<br>
<br>
<br>
<br>
<br>
<br>