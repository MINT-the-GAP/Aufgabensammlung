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



tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Angeben

comment: Sortiere die Brüche nach ihrer Größe.

author: Martin Lommatzsch

-->




# Brüche nach Größe sortieren



**Sortiere** die Brüche nach ihrer Größe.



<!-- data-solution-button="5" 
data-randomize="true" -->
__$a)\;\;$__
[->[($\dfrac{4}{3 }$)]] $<$ 
[->[($\dfrac{11}{8}$)]] $<$ 
[->[($\dfrac{9}{5 }$)]] $<$ 
[->[($\dfrac{13}{6 }$)]] $<$ 
[->[($\dfrac{23}{8 }$)]] $<$ 
[->[($\dfrac{13}{4 }$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$b)\;\;$__
[->[($\dfrac{3}{10 }$)]] $<$ 
[->[($\dfrac{3}{4 }$)]] $<$ 
[->[($\dfrac{6}{7 }$)]] $<$ 
[->[($\dfrac{6}{5 }$)]] $<$ 
[->[($\dfrac{5}{3 }$)]] $<$ 
[->[($\dfrac{17}{9 }$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$c)\;\;$__
[->[($\dfrac{2}{9 }$)]] $<$ 
[->[($\dfrac{3}{11}$)]] $<$ 
[->[($\dfrac{2}{7 }$)]] $<$ 
[->[($\dfrac{3}{5 }$)]] $<$ 
[->[($\dfrac{2}{3 }$)]] $<$ 
[->[($\dfrac{5}{6 }$)]]


