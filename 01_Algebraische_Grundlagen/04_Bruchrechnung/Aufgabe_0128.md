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




tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Bestimmen

comment: Löse eine Sachaufgabe mit einem Markthändler mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Markthändler


Ein Markthändler bringt $24$ Kisten Obst auf den Wochenmarkt.  
Am Vormittag verkauft er $\dfrac{2}{3}$ seiner Kisten. Danach beschließt er, von den verbleibenden Kisten $\dfrac{1}{4}$ an eine Nachbarhändlerin abzugeben.  
**Bestimme**, wie viele Kisten er schließlich noch selbst behalten kann. 

<!-- data-solution-button="5"-->
 [[  4  ]] 
************
$$
\text{Verkauf:}\quad \dfrac{2}{3}\cdot 24 = 16 \quad \Rightarrow \; 24-16=8 \text{ Kisten übrig} \\
\text{Abgabe:}\quad \dfrac{1}{4}\cdot 8 = 2 \quad \Rightarrow \; 8-2=6 \text{ Kisten übrig}
$$
************