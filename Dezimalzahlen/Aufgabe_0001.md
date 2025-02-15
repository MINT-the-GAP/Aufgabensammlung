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

tags: Bruchrechnung, Dezimalzahlen, Zahlenverständnis, sehr leicht

-->




# Aufgabe 1

**Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.

<br>
__$a)\;\;$__ $0,75$ [[$>$|$=$|($<$)]] $\dfrac{4}{5}$ 
<br>
<br>
__$b)\;\;$__ $\dfrac{9}{4}$ [[$>$|($=$)|$<$]] $2,25$ 
<br>
<br>
__$c)\;\;$__ $0,13$ [[($>$)|$=$|($<$)]] $\dfrac{3}{20}$ 
<br>
<br>
__$d)\;\;$__ $\dfrac{8}{100}$ [[($>$)|$=$|$<$]] $0,009$ 
<br>
<br>
__$e)\;\;$__ $\dfrac{7}{8}$ [[$>$|($=$)|$<$]] $0,875$ 
<br>
<br>
__$f)\;\;$__ $0,825$ [[($>$)|$=$|$<$]] $\dfrac{4}{5}$ 

<br>
<br>
<br>
<br>

