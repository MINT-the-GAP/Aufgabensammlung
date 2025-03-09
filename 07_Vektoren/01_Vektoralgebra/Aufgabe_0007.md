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


tags: Vektoren, Abstand, negative Zahlen, Wurzeln, Dezimalzahlen, Potenzen, Runden, leicht, sehr niedrig, Berechne

comment: Wie lang ist dieser Vektor?

author: Martin Lommatzsch

-->




# Längen von Vektoren


**Berechne** die Länge der gegebenen Vektoren. Gib die Werte falls nötig gerundet auf drei Nachkommastellen an.
<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\vec{a} = \left(\begin{array}{c} 2 \\ -9 \\ 1 \end{array}\right)$  \
<br>
 $ \left| \vec{a} \right| = $ [[  9,274  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 2 \\ -9 \\ 1 \end{array}\right) \right| = \sqrt{2^2+9^2+1^2} = \sqrt{86} \approx 9,274
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $\vec{a} = \left(\begin{array}{c} -6 \\ 2 \\ 3 \end{array}\right)$  \
<br>
 $ \left| \vec{a} \right| = $ [[   7    ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} -6 \\ 3 \\ 2 \end{array}\right) \right| = \sqrt{6^2+3^2+2^2} = \sqrt{49} = 7
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $\vec{a} = \left(\begin{array}{c} 2,5 \\ 5 \\ -7 \end{array}\right)$  \
<br>
 $ \left| \vec{a} \right| = $ [[  8,958  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 2,5 \\ 5 \\ -7 \end{array}\right) \right| = \sqrt{2,5^2+5^2+7^2} = \sqrt{80,25} \approx 8,958
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $\vec{a} = \left(\begin{array}{c} 9 \\ -4 \\ -8 \end{array}\right)$  \
<br>
 $ \left| \vec{a} \right| = $ [[ 12,689  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 9 \\ -4 \\ -8 \end{array}\right) \right| = \sqrt{9^2+4^2+8^2} = \sqrt{161} \approx 12,689
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