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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, sehr leicht, sehr niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit einem Wasserkanister mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Wasserkanister

Ein Wasserkanister fasst $12$ Liter Wasser. Es wird $\dfrac{1}{3}$ des Wassers entnommen.  
**Bestimme**, wie viele Liter entnommen werden. 


<!-- data-solution-button="5"-->
[[  4  ]] $\ell$
@Algebrite.check(4)
************
$$
\dfrac{1}{3}\cdot 12\,\ell & = \dfrac{1}{3} \cdot  \dfrac{12}{1}\,\ell \\
 & = \dfrac{12}{3}\,\ell \\
  & = 12\,\ell:3 \\
  & = 4\,\ell
$$
************
