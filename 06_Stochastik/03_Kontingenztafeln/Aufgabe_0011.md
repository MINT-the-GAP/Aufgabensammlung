<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md


@style
input {
    text-align: center;
}
@end








        


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
| $B$       |    0,06    |    0,54    |    0,60    |
| $\bar{B}$ |    0,14    |    0,22    |    0,40    |
|           |    0,20    |    0,80    |      1     |



__$a)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(\bar{A}|B)=P_{B}(\bar{A})$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(\bar{A}|B)=P_{B}(\bar{A}) = $ [[ 90    ]] $\%$ 
 @Algebrite.check(90/100)
*************
$P(\bar{A}|B)=P_{B}(\bar{A}) = \dfrac{ P(\bar{A} \cap B) }{ P(B) } = \dfrac{0,54}{0,60} = 90\%$
*************




__$b)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B})$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = $ [[ 27,5  ]] $\%$ 
 @Algebrite.check(275/1000)
*************
$P(\bar{B}|\bar{A})=P_{\bar{A}}(\bar{B}) = \dfrac{ P(\bar{B} \cap \bar{A}) }{ P(\bar{A}) } = \dfrac{0,22}{0,8} = 27,5\%$
*************






__$c)\;\;$__  **Bestimme** aus den Werten der Vierfeldertafel den Wert für $P(B|A)=P_{A}(B)$ in Prozent. Runde falls nötig auf drei Nachkommastellen.

$P(B|A)=P_{A}(B) = $ [[ 30    ]] $\%$ 
 @Algebrite.check(30/100)
*************
$P(B|A)=P_{A}(B) = \dfrac{ P(B \cap A) }{ P(A) } = \dfrac{0,06}{0,2} = 30\%$
*************








