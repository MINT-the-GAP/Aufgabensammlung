<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md




tags: Ungleichungen, Mengen, negative Zahlen, Bruchrechnung, Sachaufgabe, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zum Saldo eines Kontos mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Saldo eines Kontos


Ein Konto weist zu Beginn einen Saldo von $-1200\,\mathrm{€}$ auf. Durch regelmäßige Einzahlungen erhöht sich der Saldo pro Woche um $450\,\mathrm{€}$.  
**Berechne** die Anzahl der Wochen, sodass der Saldo mindestens $300\,\mathrm{€}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{R} \;|\; x \geq $ [[ 10/3 ]] $\}$
@Algebrite.check(10/3)
******************
$$
\begin{align*}
-1200 + 450x &\geq 300 \quad \left| \; +1200 \; \right. \\
450x &\geq 1500 \quad \left| \; :450 \; \right. \\
x &\geq \dfrac{1500}{450} \;=\; \dfrac{30}{9} \;=\; \dfrac{10}{3} \\
\end{align*}
$$
******************
