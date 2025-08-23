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



tags: Bruchrechnung, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit destilliertem Wasser mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - destilliertes Wasser



In einem Labor werden Mischungen angesetzt.  
Eine \emph{Mischung} besteht aus $\dfrac{3}{5}\,\text{l}$ Lösung A und $\dfrac{1}{4}\,\text{l}$ Lösung B.  
Es werden sieben Mischungen hergestellt. Anschließend werden $\dfrac{2}{7}$ der gesamten hergestellten Menge zur Kalibrierung entnommen, danach werden noch $\dfrac{1}{3}\,\text{l}$ destilliertes Wasser zugegeben.  
**Berechne** das endgültige Volumen.  


<!-- data-solution-button="5"-->
[[  55/12  ]] l
@Algebrite.check(55/12)
************
$$
\begin{align*}
\text{Summe je Mischung:}\quad 
&\left(\dfrac{3}{5}+\dfrac{1}{4}\right)\,\text{l}
= \left(\dfrac{12}{20}+\dfrac{5}{20}\right)\,\text{l}
= \dfrac{17}{20}\,\text{l} \\[4pt]
\text{Gesamt vor Entnahme:}\quad 
&7\cdot \dfrac{17}{20}\,\text{l}
= \dfrac{119}{20}\,\text{l} \\[6pt]
\text{Kalibrier-Entnahme:}\quad 
&\dfrac{2}{7}\cdot \dfrac{119}{20}\,\text{l}
= \dfrac{238}{140}\,\text{l}
= \dfrac{17}{10}\,\text{l} \\[6pt]
\text{Nach Entnahme:}\quad 
&\dfrac{119}{20}\,\text{l} - \dfrac{17}{10}\,\text{l}
= \dfrac{119}{20}\,\text{l} - \dfrac{34}{20}\,\text{l}
= \dfrac{85}{20}\,\text{l}
= \dfrac{17}{4}\,\text{l} \\[6pt]
\text{Zugabe Wasser:}\quad 
&\dfrac{17}{4}\,\text{l} + \dfrac{1}{3}\,\text{l}
= \dfrac{51}{12}\,\text{l} + \dfrac{4}{12}\,\text{l}
= \dfrac{55}{12}\,\text{l}
\end{align*}
$$
************
