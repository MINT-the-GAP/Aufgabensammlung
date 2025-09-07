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
Masse: [->[($\dfrac{3}{8}$ t)]]  $>$ [->[($\dfrac{2000}{6}$ kg)]] $>$ [->[($333$ kg)]] $>$ [->[($3 \cdot 10^6$ g)]]  \
Zeit:  [->[($250$ min)]] $>$ [->[(14640$ s)]] $>$ [->[($4,1$ h)]] $>$ [->[($120^2$ s)]]  \
Länge: [->[($37$ dm)]] $>$ [->[($\dfrac{1}{5}$ m)]] $>$ [->[($195$ mm)]] $>$ [->[($17,5$ cm)]]  \
Fläche: [->[($0,025 \ \text{a}$)]] $>$ [->[($\tfrac{3}{5} \ \text{m}^2$)]] $>$ [->[($2700 \ \text{cm}^2$)]] $>$ [->[($2,5 \cdot 10^3 \ \text{cm}^2$)]] \
Volumen: [->[($\dfrac{3}{50} \ \text{m}^3$)]] $>$ [->[($12 \ \text{l}$)]] $>$ [->[($1,2 \cdot 10^4 \ \text{cm}^3$)]] $>$ [->[($11,8  \ \text{dm}^3$)]] \




