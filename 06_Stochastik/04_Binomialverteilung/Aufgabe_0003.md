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

$I.\;\;\;\; \left( \begin{array}{c} 7 \\ 4 \end{array} \right) \left( \dfrac{3}{7} \right)^3 \cdot \left( \dfrac{4}{7} \right)^4 $ 
$II.\;\;\;\; 1- 35 \left( \dfrac{3}{7} \right)^4 \cdot \left( \dfrac{4}{7} \right)^3$ 
$III.\;\;\;\; \ \left( \dfrac{3}{7} \right)^4 \cdot \left( \dfrac{4}{7} \right)^3 $ 
$IV.\;\;\;\; \left( \dfrac{3}{7} \right)^3 \cdot \left( \dfrac{4}{7} \right)^4 $ 
$V.\;\;\;\; 1- \left( \begin{array}{c} 7 \\ 3 \end{array} \right) \left( \dfrac{3}{7} \right)^3 \cdot \left( \dfrac{4}{7} \right)^4 $ 

<br>

__$a)\;\;$__ Beim Ziehen mit Zurücklegen aus einer Urne mit drei roten und vier blauen Kugeln, gewinnt ein Spieler den Hauptgewinn, wenn dieser genau dreimal blau und viermal rot zieht. Term [[I.|(II.)|III.|IV.|V.]] beschreibt dieses Szenario.

<br>

__$b)\;\;$__ Es wurde dreimal hinter einander blau und dann viermal rot gezogen. Term [[I.|II.|III.|(IV.)|V.]] beschreibt dieses Szenario.

<br>

__$c)\;\;$__ Es wurde $\{$ blau, rot, blau, rot, blau, rot, blau $\}$ gezogen. Term [[I.|II.|III.|(IV.)|V.]] beschreibt dieses Szenario.


<br>
<br>
<br>
<br>
<br>