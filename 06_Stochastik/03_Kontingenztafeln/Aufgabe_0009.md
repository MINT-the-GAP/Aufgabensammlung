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


tags: Kontingenztafel, Vierfeldertafel, bedingte Wahrscheinlichkeit, leicht, sehr niedrig, Angeben

comment: Bestimme aus der Vierfeldertafel eine bedingte Wahrscheinlichkeit.

author: Martin Lommatzsch

-->




# Bedingte Wahrscheinlichkeit aus einer Vierfeldertafel

<br>
Gegeben sei die folgende Vierfeldertafel.


<br>

<!-- data-type="none"
data-sortable="false" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       |    0,11    |    0,69    |    0,80    |
| $\bar{B}$ |    0,14    |    0,06    |    0,20    |
|           |    0,25    |    0,75    |      1     |

<br>

__$a)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(A|\bar{B})=P_{\bar{B}}(A)$ in Prozent. Runde falls nötig auf drei Nachkommastellen.
<br>
$P(A|\bar{B})=P_{\bar{B}}(A) = $ [[ 70    ]] $\%$ 
*************
$P(A|\bar{B})=P_{\bar{B}}(A) = \dfrac{ P(A \cap \bar{B}) }{ P(\bar{B}) } = \dfrac{0,14}{0,20} = 70\%$
*************


<br>

__$b)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B})$ in Prozent. Runde falls nötig auf drei Nachkommastellen.
<br>
$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = $ [[ 8     ]] $\%$ 
*************
$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = \dfrac{ P(\bar{B} \cap \bar{A}) }{ P(\bar{A}) } = \dfrac{0,06}{0,75} = 8\%$
*************




<br>

__$c)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(B|A)=P_{A}(B)$ in Prozent. Runde falls nötig auf drei Nachkommastellen.
<br>
$P(B|A)=P_{A}(B) = $ [[ 44    ]] $\%$ 
*************
$P(B|A)=P_{A}(B) = \dfrac{ P(B \cap A) }{ P(A) } = \dfrac{0,11}{0,25} = 44\%$
*************


<br>
<br>
<br>
<br>
<br>
<br>
<br>