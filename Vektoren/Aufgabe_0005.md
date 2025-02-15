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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: Vektoren, Abstand, negative Zahlen, Wurzeln, Dezimalzahlen, Potenzen, leicht

-->




# Aufgabe 1


**Berechne** die Länge der gegebenen Vektoren. Gib die Werte falls nötig gerundet auf drei Nachkommastellen an.
<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\vec{a} = \left(\begin{array}{c} 0 \\ 8 \\ 6 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[   10   ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 0 \\ 8 \\ 6 \end{array}\right) \right| = \sqrt{0^2+8^2+6^2} = 10
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$b)\;\;$__ $\vec{a} = \left(\begin{array}{c} 2 \\ 2 \\ 1 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[  3    ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 2 \\ 2 \\ 1 \end{array}\right) \right| = \sqrt{2^2+2^2+1^2} = 3
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$c)\;\;$__ $\vec{a} = \left(\begin{array}{c} 3 \\ 2 \\ 7 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[  8,124  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 3 \\ 2 \\ 7 \end{array}\right) \right| = \sqrt{3^2+2^2+7^2} = \sqrt{66} \approx 8,124
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$d)\;\;$__ $\vec{a} = \left(\begin{array}{c} -1 \\ 6 \\ -4 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[  7,280  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} -1 \\ 6 \\ -4 \end{array}\right) \right| = \sqrt{1^2+6^2+4^2} = \sqrt{53} \approx 7,280
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$e)\;\;$__ $\vec{a} = \left(\begin{array}{c} -4 \\ 2 \\ 5 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[  6,708  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} -4 \\ 2 \\ 5 \end{array}\right) \right| = \sqrt{4^2+2^2+5^2} = \sqrt{45} \approx 6,708
 \end{align*}
$$
***************
<br>
<br>
<br>
</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$f)\;\;$__ $\vec{a} = \left(\begin{array}{c} 2,5 \\ -1,5 \\ 4 \end{array}\right)$  \
<br>
--> $ \left| \vec{a} \right| = $ [[  4,950  ]] $LE$
***************
$$
 \begin{align*}
  \left| \vec{a} \right| = \left| \left(\begin{array}{c} 2,5 \\ -1,5 \\ 4 \end{array}\right) \right| = \sqrt{2,5^2+1,5^2+4^2} = \sqrt{24,5} \approx 4,950
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