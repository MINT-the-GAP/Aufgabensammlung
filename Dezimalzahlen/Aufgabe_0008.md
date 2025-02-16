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


.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
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

tags: Vokabeln, Zahlenverständnis, leicht

-->




# Aufgabe 1

**Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.



<br>

__$a)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |    2     |    0      |    0       |       5      |                |                   |

--> [[  20,05     ]]
<br>

__$b)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |           |            |              |                |         2         |

--> [[   0,0002   ]]
<br>

__$c)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|      7      |    2     |    0      |    4       |       7      |        0       |         4         |

--> [[  720,4704  ]]


