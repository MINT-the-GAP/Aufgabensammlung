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

__$a)\;\;$__ $P\left( -7 | 0 | 9 \right) \;\;\wedge\;\; Q\left( 4 | -5 | -7 \right)$  \
<br>
 $ d = $ [[ 20,050  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 4 \\ -5 \\ -7 \end{array}\right)  - \left(\begin{array}{c} -7 \\ 0 \\ 9 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 11 \\ -5 \\ -16 \end{array}\right) \right| \\
   &= \sqrt{11^2+3^2+4^2} \\
   &= \sqrt{402} \\
   &\approx 20,050 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $P\left( 4 | -6 | -4 \right) \;\;\wedge\;\; Q\left( 7 | -8 | 5 \right)$  \
<br>
 $ d = $ [[  9,695  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} 4 \\ -6 \\ -4 \end{array}\right)  - \left(\begin{array}{c} 7 \\ -8 \\ 5 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -3 \\ 2 \\ -9  \end{array}\right) \right| \\
   &= \sqrt{3^2+2^2+9^2} \\
   &= \sqrt{94} \\
   &\approx 9,695 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $P\left( 2 | 0 | -4 \right) \;\;\wedge\;\; Q\left( 8 | -7 | 0 \right)$  \
<br>
 $ d = $ [[  10,050  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{QP} \right| & = \left| \left(\begin{array}{c} 8 \\ -7 \\ 0 \end{array}\right)  - \left(\begin{array}{c} 2 \\ 0 \\ -4 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} 6 \\ -7 \\ 4 \end{array}\right) \right| \\
   &= \sqrt{6^2+7^2+4^2} \\
   &= \sqrt{101} \\
   &\approx 10,050 \\
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $P\left( 7 | 7 | 9 \right) \;\;\wedge\;\; Q\left( -6 | -8 | -7 \right)$  \
<br>
 $ d = $ [[  25,495  ]] $LE$
***************
$$
 \begin{align*}
  d=\left| \stackrel{\longrightarrow}{PQ} \right| & = \left| \left(\begin{array}{c} -6 \\ -8 \\ -7 \end{array}\right)  - \left(\begin{array}{c} 7 \\ 7 \\ 9 \end{array}\right)\right| \\
   & = \left| \left(\begin{array}{c} -13 \\ -15 \\ -16 \end{array}\right) \right| \\
   &= \sqrt{13^2+15^2+16^2} \\
   &= \sqrt{650} \\
   &\approx 25,495 \\
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