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

tags: Logarithmen, sehr leicht

-->




# Aufgabe 1


**Gib** den Wert des Terms **an**.



__$a)\;\;$__ $\log_{2}\left( 8 \right) = $ [[  3  ]]


__$b)\;\;$__ $\log_{8}\left( 64 \right) = $ [[  2  ]]


__$c)\;\;$__ $\log_{4}\left( 256 \right) = $ [[  4  ]]


__$d)\;\;$__ $\log_{5}\left( 125 \right) = $ [[  3  ]]




<br>
<br>
<br>
<br>
<br>
<br>
 