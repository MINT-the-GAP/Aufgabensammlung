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

tags: Vokabeln, Zahlenverständnis, leicht, sehr niedrig, Angeben

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
|      17     |         2          |         4         |      1       |     0      |     0     |    7    |


 [[  17241007  ]]
<br>

__$b)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |          1         |         17        |      4       |     5      |     12    |    4    |


 [[   274624  ]]
<br>

__$c)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |                    |        287        |       0      |     24     |     0     |   117   |


 [[  2872517  ]]

<br>
<br>
<br>
<br>
<br>
<br>
