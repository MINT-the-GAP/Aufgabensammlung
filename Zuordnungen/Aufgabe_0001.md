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

tags: Zuordnung, Proportional, Antiproportional, beliebige Zuordnung, sehr leicht

-->




# Aufgabe 1

**Entscheide**, ob die dargestellte Tabelle eine beliebe, eine proportionale oder antiproportionale Zuordnung ist. (Der $x$-Wert wird dem $y$-Wert zugeordnet.)

<br>

__$a)\;\;$__

<!-- data-type="none" -->
|  $x$  |  5  |  15  |  25  |  30  |  40  |
|  $y$  |  2  |  6   |  10  |  12  |  16  |

[[(Proportionale)|Antiproportionale|Beliebige]] Zuordnung.

<br>

__$b)\;\;$__

<!-- data-type="none" -->
|  $x$  |  50  |  20  |  10  |  4   |  1  |
|  $y$  |  2   |  5   |  10  |  25  |  100  |

[[Proportionale|(Antiproportionale)|Beliebige]] Zuordnung.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>