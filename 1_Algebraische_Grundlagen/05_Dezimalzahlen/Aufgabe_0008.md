<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Vokabeln,, Dezimalzahlen, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Schreibe aus der Stellenwerttafel die Zahl nieder.

author: Martin Lommatzsch

-->




# Dezimalzahlen aus Stellenwerttafeln

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


