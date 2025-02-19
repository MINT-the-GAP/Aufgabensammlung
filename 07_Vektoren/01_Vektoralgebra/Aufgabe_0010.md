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

__$a)\;\;$__ $P\left( 3 | 2 | 4 \right) \;\;\wedge\;\; Q\left( 6 | 5 | 8 \right)$  \
<br>
--> $ d = $ [[  5,831  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 6 \\ 5 \\ 8 \end{array}\right)  - \left(\begin{array}{c} 3 \\ 2 \\ 4 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 3 \\ 3 \\ 4 \end{array}\right) \right| \\
   &= \sqrt{3^2+3^2+4^2} \\
   &= \sqrt{34} \\
   &\approx 5,831 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 9 | -2 | 1 \right) \;\;\wedge\;\; Q\left( 4 | -3 | 7 \right)$  \
<br>
--> $ d = $ [[  7,874  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 4 \\ -3 \\ 7 \end{array}\right)  - \left(\begin{array}{c} 9 \\ -2 \\ 1 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -5 \\ -1 \\ 6  \end{array}\right) \right| \\
   &= \sqrt{5^2+1^2+6^2} \\
   &= \sqrt{62} \\
   &\approx 7,874 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 4 | 1 | 6 \right) \;\;\wedge\;\; Q\left( 5 | -3 | 2 \right)$  \
<br>
--> $ d = $ [[  5,745  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 4 \\ 1 \\ 6 \end{array}\right)  - \left(\begin{array}{c} 5 \\ -3 \\ 2 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -1 \\ 4 \\ 4 \end{array}\right) \right| \\
   &= \sqrt{1^2+4^2+4^2} \\
   &= \sqrt{33} \\
   &\approx 5,745 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( 3 | -1 | -6 \right) \;\;\wedge\;\; Q\left( -4 | -5 | -4 \right)$  \
<br>
--> $ d = $ [[  8,307  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -4 \\ -5 \\ -4 \end{array}\right)  - \left(\begin{array}{c} 3 \\ -1 \\ -6 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -7 \\ -4 \\ 2 \end{array}\right) \right| \\
   &= \sqrt{7^2+4^2+2^2} \\
   &= \sqrt{69} \\
   &\approx 8,307 \\
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