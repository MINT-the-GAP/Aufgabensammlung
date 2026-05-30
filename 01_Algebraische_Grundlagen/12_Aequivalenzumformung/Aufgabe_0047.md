<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md



tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit einem Konzertabend mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Konzertabend 


Vor der Abendshow gibt es zwei Eingänge mit separaten Warteschlangen.  
Am Nord-Eingang stehen zu Beginn 40 Personen. Pro Minute werden im Durchschnitt 2,5 Personen eingelassen, gleichzeitig kommen 1,25 Personen neu dazu.  
Am Süd-Eingang warten zunächst 64 Personen. Pro Minute werden 3,5 Personen eingelassen, während 1 Person pro Minute neu ankommt.  
Die Anzeigen der Ordner werden im Mittel über mehrere Minuten gemessen.  
**Berechne**, nach wie vielen Minuten beide Schlangen **gleich lang** sind.

<!-- data-solution-button="5"-->
$x$ = [[  96/5  ]]
@Algebrite.check(96/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
40 - \dfrac{5}{4}x \;\stackrel{!}{=}\; 64 - \dfrac{5}{2}x
$$

$$
\begin{align*}
40 - \dfrac{5}{4}x &= 64 - \dfrac{5}{2}x \quad \left|\, +\dfrac{5}{2}x \right.\\[2pt]
40 + \left(\dfrac{5}{2} - \dfrac{5}{4}\right)x &= 64 \quad \left|\, -40 \right.\\[2pt]
\left(\dfrac{10}{4} - \dfrac{5}{4}\right)x &= 24 \quad \Rightarrow \quad \dfrac{5}{4}x = 24 \quad \left|\, :\dfrac{5}{4} \right.\\[2pt]
x &= 24 \cdot \dfrac{4}{5} \;=\; \dfrac{96}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{40 - \dfrac{5}{4}\cdot\dfrac{96}{5}}_{\text{Nord-Eingang}}
= 40 - \dfrac{96}{4}
= 40 - 24
= 16   \\
&\quad\text{und}\quad   \\
&\underbrace{64 - \dfrac{5}{2}\cdot\dfrac{96}{5}}_{\text{Süd-Eingang}}
= 64 - \dfrac{96}{2}
= 64 - 48
= 16
\end{align*}
$$


Deutung: Nach $\dfrac{96}{5}\approx 19{,}2$ Minuten sind beide Schlangen gleich lang (je 16 Personen). Vorher ist die Schlange am Süd-Eingang länger, danach die am Nord-Eingang.

************