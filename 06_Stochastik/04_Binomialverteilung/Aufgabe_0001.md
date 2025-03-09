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

$I.\;\;\;\; 1- \left( \dfrac{1}{6} \right)^8  $ \
$II.\;\;\;\; \left( \dfrac{1}{6} \right)^3 \cdot \left( \dfrac{5}{6} \right)^5 $ \
$III.\;\;\;\; \left( \begin{array}{c} 8 \\ 3 \end{array} \right) \cdot \left( \dfrac{1}{6} \right)^3 \cdot \left( \dfrac{5}{6} \right)^5 $ \
$IV.\;\;\;\; 5 \cdot \dfrac{1}{6} \cdot \left( \dfrac{5}{6} \right)^4  \cdot \dfrac{5}{6} \cdot \dfrac{1}{6} \cdot \dfrac{1}{6}$ \
$V.\;\;\;\; 1- \left( \dfrac{5}{6} \right)^8  $ \

<br>

__$a)\;\;$__ Bei einem Würfelspiel mit einem sechsseitigen Würfel wurde nach acht Würfen fünfmal keine Sechs gewürfelt. Term [[I.|II.|(III.)|IV.|V.]] beschreibt dieses Szenario.

<br>

__$b)\;\;$__ Bei einem Würfelspiel mit einem sechsseitigen Würfel wurde nach acht Würfen keinmal eine Sechs gewürfelt. Term [[(I.)|II.|III.|IV.|V.]] beschreibt dieses Szenario.

<br>

__$c)\;\;$__ Bei einem Würfelspiel mit einem sechsseitigen Würfel wurde nach fünf Würfen insgesamt eine Sechs gewürfelt. Anschließend wurde im sechsten Wurf keine Sechs gewürfelt, aber in den beiden Würfel darauf. Term [[I.|II.|III.|(IV.)|V.]] beschreibt dieses Szenario.


<br>
<br>
<br>
<br>
<br>