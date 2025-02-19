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

__$a)\;\;$__ $P\left( 1 | 4 | 5 \right) \;\;\wedge\;\; Q\left( 3 | 1 | 1 \right)$  \
<br>
--> $ d = $ [[  5,385  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 3 \\ 1 \\ 1 \end{array}\right)  - \left(\begin{array}{c} 1 \\ 4 \\ 5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 2 \\ -3 \\ -4 \end{array}\right) \right| \\
   &= \sqrt{2^2+3^2+4^2} \\
   &= \sqrt{29} \\
   &\approx 5,385 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 6 | 3 | -2 \right) \;\;\wedge\;\; Q\left( -2 | 3 | -4 \right)$  \
<br>
--> $ d = $ [[  8,246  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -2 \\ 3 \\ -4 \end{array}\right)  - \left(\begin{array}{c} 6 \\ 3 \\ -2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -8 \\ 0 \\ -2  \end{array}\right) \right| \\
   &= \sqrt{8^2+0^2+2^2} \\
   &= \sqrt{68} \\
   &\approx 8,246 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 5 | -3 | -2 \right) \;\;\wedge\;\; Q\left( -7 | 2 | -5 \right)$  \
<br>
--> $ d = $ [[  13,342  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 5 \\ -3 \\ -2 \end{array}\right)  - \left(\begin{array}{c} -7 \\ 2 \\ -5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 12 \\ -5 \\ 3 \end{array}\right) \right| \\
   &= \sqrt{12^2+5^2+3^2} \\
   &= \sqrt{178} \\
   &\approx 13,342 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( -6 | 3 | 1,5 \right) \;\;\wedge\;\; Q\left( -3 | 2 | 4 \right)$  \
<br>
--> $ d = $ [[  4,387  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -3 \\ 2 \\ 4 \end{array}\right)  - \left(\begin{array}{c} -6 \\ 3 \\ 1,5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 3 \\ -1 \\ 2,5 \end{array}\right) \right| \\
   &= \sqrt{3^2+1^2+2,5^2} \\
   &= \sqrt{19,25} \\
   &\approx 4,387 \\
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