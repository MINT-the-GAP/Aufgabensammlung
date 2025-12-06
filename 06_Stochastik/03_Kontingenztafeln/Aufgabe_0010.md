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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


tags: Kontingenztafel, Vierfeldertafel, bedingte Wahrscheinlichkeit, leicht, sehr niedrig, Angeben

comment: Bestimme aus der Vierfeldertafel eine bedingte Wahrscheinlichkeit.

author: Martin Lommatzsch

-->




# Bedingte Wahrscheinlichkeit aus einer Vierfeldertafel


Gegeben sei die folgende Vierfeldertafel.




<!-- data-type="none"
data-sortable="false" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       |    0,08    |    0,37    |    0,45    |
| $\bar{B}$ |    0,12    |    0,43    |    0,55    |
|           |    0,20    |    0,80    |      1     |



__$a)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(\bar{B}|A)=P_{A}(\bar{B})$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(\bar{B}|A)=P_{A}(\bar{B}) = $ [[ 60    ]] $\%$  
@Algebrite.check(60/100)
*************
$P(\bar{B}|A)=P_{A}(\bar{B}) = \dfrac{ P(A \cap \bar{B}) }{ P(A) } = \dfrac{0,12}{0,20} = 60\%$
*************




__$b)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B})$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = $ [[ 53,75 ]] $\%$ 
 @Algebrite.check(5375/10000)
*************
$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = \dfrac{ P(\bar{B} \cap \bar{A}) }{ P(\bar{A}) } = \dfrac{0,43}{0,80} = 53,75\%$
*************






__$c)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(B|A)=P_{A}(B)$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(B|A)=P_{A}(B) = $ [[ 40    ]] $\%$  
@Algebrite.check(40/100)
*************
$P(B|A)=P_{A}(B) = \dfrac{ P(B \cap A) }{ P(A) } = \dfrac{0,08}{0,20} = 40\%$
*************








