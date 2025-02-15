<!--
version:  0.0.1

language: de

@style
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

tags: Bruchrechnung, Zahlenverständnis, Dezimalzahlen sehr leicht

-->




# Aufgabe 1

**Gib** die durch den Term angezeigte Dezimalzahl **an**.

<br>
__$a)\;\;$__ $\dfrac{3}{10}+\dfrac{9}{100} \qquad$  \
<br>
--> [[  0,39   ]] 
<br>
<br>
__$b)\;\;$__ $\dfrac{6}{10}+\dfrac{2}{100}+\dfrac{7}{1000} \qquad$  \
<br>
--> [[  0,627  ]] 
<br>
<br>
__$c)\;\;$__ $\dfrac{5}{10}+\dfrac{5}{1000} \qquad$  \
<br>
--> [[  0,505  ]] 
<br>
<br>
__$d)\;\;$__ $\dfrac{4}{100}+\dfrac{1}{1000} \qquad$  \
<br>
--> [[  0,041  ]] 
<br>
<br>
__$e)\;\;$__ $\dfrac{6}{1}+\dfrac{8}{100} \qquad$  \
<br>
--> [[  6,08   ]] 
<br>
<br>
__$f)\;\;$__ $\dfrac{5}{1}+\dfrac{4}{100}+\dfrac{7}{10000} \qquad$  \
<br>
--> [[  5,0407 ]] 

<br>
<br>
<br>
<br>

