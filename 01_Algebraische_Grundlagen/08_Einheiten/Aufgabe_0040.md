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
Masse:  [->[($0{,}62\ \text{t}$)]] $>$ [->[($6,15\cdot 10^2\ \text{kg}$)]] $>$ [->[($\dfrac{12400}{20}\ \text{kg}$)]] $>$ [->[($615000\ \text{g}$)]]  \
Zeit:   [->[($9{,}1\cdot 10^3\ \text{s}$)]] $>$ [->[($152\ \text{min}$)]] $>$ [->[($2,55\ \text{h}$)]] $>$ [->[($9100\ \text{s}$)]]  \
Länge:  [->[($5{,}05\ \text{m}$)]] $>$ [->[($50{,}3\ \text{dm}$)]] $>$ [->[($504\ \text{cm}$)]] $>$ [->[($5,04\cdot 10^3\ \text{mm}$)]]  \
Fläche: [->[($0{,}042\ \text{a}$)]] $>$ [->[($4200\ \text{dm}^2$)]] $>$ [->[($4,18\cdot 10^4\ \text{cm}^2$)]] $>$ [->[($4,19\ \text{m}^2$)]]  \
Volumen:[->[($2,1\cdot 10^{-2}\ \text{m}^3$)]] $>$ [->[($21,2\ \text{l}$)]] $>$ [->[($2,11\cdot 10^4\ \text{cm}^3$)]] $>$ [->[($21,0\ \text{dm}^3$)]]  \





