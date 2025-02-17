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


tags: Vokabeln, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Ziffern in einer Stellenwerttafel ergeben eine Zahl. Gib diese Zahl an.

author: Martin Lommatzsch

-->




# Stellenwerttafel auslesen

**Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.



<br>

__$a)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |         4          |         0         |      0       |     7      |     5     |    2    |

--> [[   400752  ]]
<br>

__$b)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|      3      |          8         |         5         |      1       |     1      |     6     |    7    |

--> [[  3851167  ]]
<br>

__$c)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |                    |          7        |       5      |     0      |     0     |     9   |

--> [[   75009   ]]


