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


tags: Einheiten, Dezimalzahlen, Bruchrechnung, Länge, Masse, Zeit, Fläche, Volumen, mittel, normal, Angeben

comment: Welche Einheit gehört zu welcher Größe? Und was ist dabei noch wie groß?

author: Martin Lommatzsch

-->




# Größen im Vergleich


**Sortiere** das die Kacheln nach Größe und **ordne** sie der passenden Größe zu.



<!-- data-randomize="true"  -->
Masse:  [->[($\dfrac{13}{25}\ \text{t}$)]] $>$ [->[($5{,}1\cdot 10^5\ \text{g}$)]] $>$ [->[($4{,}95\cdot 10^2\ \text{kg}$)]] $>$ [->[($0{,}48\ \text{t}$)]]  \
Zeit:   [->[($2{,}11\ \text{h}$)]] $>$ [->[($7{,}55\cdot 10^3\ \text{s}$)]] $>$ [->[($125\ \text{min}$)]] $>$ [->[($7{,}35\cdot 10^3\ \text{s}$)]]  \
Länge:  [->[($2{,}01\ \text{m}$)]] $>$ [->[($2{,}0\cdot 10^3\ \text{mm}$)]] $>$ [->[($\dfrac{1995}{10}\ \text{cm}$)]] $>$ [->[($19{,}9\ \text{dm}$)]]  \
Fläche: [->[($0{,}031\ \text{a}$)]] $>$ [->[($3{,}08\ \text{m}^2$)]] $>$ [->[($3{,}06\cdot 10^4\ \text{cm}^2$)]] $>$ [->[($304\ \text{dm}^2$)]]  \
Volumen:[->[($1{,}5\cdot 10^{-2}\ \text{m}^3$)]] $>$ [->[($1{,}49\cdot 10^4\ \text{cm}^3$)]] $>$ [->[($14{,}8\ \text{dm}^3$)]] $>$ [->[($14{,}7\ \text{l}$)]]  \





