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

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Vokabeln, Dezimalzahlen, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Schreibe aus der Stellenwerttafel die Zahl nieder.

author: Martin Lommatzsch

-->




# Dezimalzahlen aus Stellenwerttafeln

**Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |           |    4       |       0      |        4       |                   |


 [[   0,404  ]]


__$b)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|      1      |    9     |    4      |    0       |       2      |                |                   |


 [[  194,02  ]]


__$c)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |    5      |            |              |        7       |         5         |


 [[  5,0075  ]]









