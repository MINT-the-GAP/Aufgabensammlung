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

comment: Löse eine Sachaufgabe mit einer Bibliothek mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Bibliothek


In einer Bibliothek werden neue Bücher geliefert. Insgesamt kommen $40$ Exemplare an.  
Am Vormittag wird $\dfrac{1}{5}$ der Bücher sofort in die Regale einsortiert.  
Am Nachmittag wird von den übrigen Büchern erneut die Hälfte in die Regale gestellt.  
**Bestimme**, wie viele Bücher am Ende des Tages noch nicht einsortiert sind.  

<!-- data-solution-button="5"-->
 [[  16  ]] 
************
$$
\text{Vormittag:}\quad \dfrac{1}{5}\cdot 40 = 8 \quad \Rightarrow \; 40-8 = 32 \text{ Bücher übrig} \\
\text{Nachmittag:}\quad \dfrac{1}{2}\cdot 32 = 16 \quad \Rightarrow \; 32-16 = 16 \text{ Bücher übrig}
$$
************