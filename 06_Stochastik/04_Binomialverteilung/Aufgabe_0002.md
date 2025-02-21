<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Binomialverteilung, sehr leicht, sehr niedrig, Angeben

comment: Welcher Term passt zu dem beschriebenen Ereignis?

author: Martin Lommatzsch

-->




# Ereignisse Termen zuordnen

**Ordne** dem beschriebenen Ereignis einen Term **zu**, der die Wahrscheinlichkeit für das Ereignis beschreibt.

<br>

$I.\;\;\;\; 1- \left( \dfrac{1}{10} \right)^4  $ \
$II.\;\;\;\; \dfrac{1}{10} \cdot \left( \dfrac{9}{10} \right)^3  $ \
$III.\;\;\;\; \left( \begin{array}{c} 4 \\ 1 \end{array} \right) \cdot \left( \dfrac{1}{10} \right)^1 \cdot \left( \dfrac{9}{10} \right)^3 $ \
$IV.\;\;\;\; 1- \left( \dfrac{9}{10} \right)^4$ \
$V.\;\;\;\; \dfrac{1}{10} \cdot \left( \dfrac{9}{10} \right)^3  $ \

<br>

__$a)\;\;$__ Beim Drehen eines Glücksrades mit einer Trefferwahrscheinlichkeit von $10\%$ wurde bei vier Versuchen einmal ein Treffer erzielt. Term [[I.|II.|(III.)|IV.|V.]] beschreibt dieses Szenario.

<br>

__$b)\;\;$__ Um den Hauptpreis bei einem Glücksrad mit zehn gleich großen Feldern zu bekommen, müssen alle vier Versuche ein Treffer sein. Term [[(I.)|II.|III.|IV.|V.]] beschreibt dieses Szenario.

<br>

__$c)\;\;$__ Beim Drehen des Glücksrades mit einer Trefferwahrscheinlichkeit von $10\%$ wurden das Ereignis $\{$ Treffer, Nichttreffer, Nichttreffer, Nichttreffer $\}$ festgehalten. Term [[I.|II.|III.|IV.|(V.)]] beschreibt dieses Szenario.


<br>
<br>
<br>
<br>
<br>