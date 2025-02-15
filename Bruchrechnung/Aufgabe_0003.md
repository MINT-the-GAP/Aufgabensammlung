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

tags: Bruchrechnung, Zahlenverständnis, leicht

-->




# Aufgabe 1

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.

<br>
__$a)\;\;$__ $\dfrac{7}{10}$ [[$>$|$=$|($<$)]] $\dfrac{9}{10}$ 
<br>
<br>
__$b)\;\;$__ $\dfrac{8}{5}$ [[$>$|$=$|($<$)]] $\dfrac{7}{4}$ 
<br>
<br>
__$c)\;\;$__ $\dfrac{2}{3}$ [[($>$)|$=$|$<$]] $\dfrac{3}{7}$ 
<br>
<br>
__$d)\;\;$__ $\dfrac{36}{27}$ [[$>$|($=$)|$<$]] $\dfrac{4}{3}$ 
<br>
<br>
__$e)\;\;$__ $\dfrac{17}{20}$ [[($>$)|$=$|$<$]] $\dfrac{7}{8}$ 
<br>
<br>
__$f)\;\;$__ $\dfrac{11}{9}$ [[($>$)|$=$|$<$]] $\dfrac{8}{7}$ 

<br>
<br>
<br>
<br>

