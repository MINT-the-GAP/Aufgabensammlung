<!--

version:  0.0.1
language: de
narrator: Deutsch Female


logo:     https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/logo.png
email:    info@bildung-bedeutet-freiheit.de

tags: Repetitorium

comment: Hier entsteht ein mathematisches Repetitorium in LiaScript. https://mint-the-gap.github.io/Aufgabensammlung/

author: Martin Lommatzsch
 


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->




# Repetitorium der Mathematik



> "Die Bildung kommt nicht vom Lesen, sondern vom Nachdenken über das Gelesene." \
-Carl Hilty


> "Gebildet ist der Mensch, der die höchsten Ergebnisse des Geistes in physiologische Reflexe umformt." \
-Nicolás Gómez Dávila




    {{|>}} Dieses Repetitorium der Mathematik ist aus der Motivation heraus entstanden, den naturwissenschaftlichen Unterricht an Schulen zu erleichtern. Die ersten Kapitel führen grundlegende mathematische „Vokabeln“, Zahleneigenschaften, Rechenoperationen und gebräuchliche Abkürzungen ein. Da viele Schülerinnen und Schüler durch die gesellschaftlich verbreitete Meinung, Mathematik und Naturwissenschaften seien „schwierig“, zu Ausreden und geringerer Leistungsbereitschaft neigen, soll in diesem Buch bewusst auf die Einfachheit und Klarheit der mathematischen Sprache hingewiesen werden. Diese Einfachheit erschließt sich jedoch oft erst nach der Schulzeit: Mathematik lebt von eindeutig definierten Begriffen, deren Abkürzungen und Symbolen. Anders als in Sprachen wie Deutsch oder Englisch ergibt sich ihre Bedeutung nicht erst aus dem Satzkontext. Zudem gibt es in der Mathematik im Gegensatz zu anderen Sprachen keine Ausnahmen von den Regeln.

    {{|>}} Das Buch versteht sich als Leitfaden für den Mathematikunterricht und als Wiederholungswerkzeug für die naturwissenschaftlichen Fächer. Es wird kontinuierlich weiterentwickelt und am Verständnis der Lernenden ausgerichtet. Zum Verständnis genügt der sichere Umgang mit Zahlen und Grundrechenarten, sodass das Werk für alle Schülerinnen und Schüler weiterführender Schulen geeignet ist. Es wird deutlich, dass mathematisches Verständnis eng mit der korrekten Verwendung definierter Begriffe verbunden ist. Daher sollte jede eingeführte „Vokabel“ verinnerlicht werden.

    {{|>}} Zu jedem Abschnitt gibt es Übungsaufgaben, deren Lösungen im Anhang stehen. Die Aufgaben sind so gestaltet, dass sie das Verständnis überprüfen und vertiefen; sie sollten vollständig bearbeitet und erst danach mit den Lösungen verglichen werden. In der Geometrie werden auch Zeichenaufgaben gestellt, zu denen im Anhang keine fertigen Zeichnungen enthalten sind. Manche Aufgaben erfordern Kenntnisse aus späteren Kapiteln; diese können nach Erwerb des entsprechenden Wissens bearbeitet werden, um vorhandene Kenntnisse zu festigen und zu erweitern. Oft steigert sich der Schwierigkeitsgrad innerhalb einer Aufgabe, sodass binnendifferenzierte Förderung möglich ist und jede Schülerin und jeder Schüler gefordert und gefördert werden kann.

    {{|>}} Alle *leicht schräg/kursiv* markierten Begriffe sind im mathematischen Wörterverzeichnis im Anhang erläutert. Dieser Abschnitt soll den Umgang mit der mathematischen Sprache erleichtern und deren logischen Aufbau verdeutlichen.

    {{|>}} Abschließend sei angemerkt, dass in Zukunft deutlich mehr Aufgaben mit Lösungen ergänzt werden, darunter auch solche, die auf weiter hinten behandelten Themen basieren. Hierzu werden Querverweise angegeben, um je nach Vorwissen auch komplexere Aufgaben bearbeiten zu können. Grundsätzlich gilt: Alle fehlerfreien Rechenwege sind zugelassen – entscheidend ist das korrekte Ergebnis.


> Diese Version kann inhaltliche und sprachliche Tippfehler enthalten und hat somit keinen Anspruch auf Richtigkeit. Außerdem kann nicht gewährleistet werden, dass der "Lehrplan" jedes Bundeslandes abgedeckt ist.


## Wichtige Hinweise




Einige Themengebiete der Mathematik sind besonders essentiell für ein grundlegendes Verständnis der Mathematik. In diesem Buch werden nach der Einführung diese Themen immer wieder in Aufgaben oder Erklärungen vorkommen. Die Themen sind in der nachfolgenden Auflistung nach Wichtigkeit geordnet. In Klammern sind die Themenbereich beschrieben, die mit dem zentralen Thema direkt verknüpft sind:


- Bruchrechnung
- Äquivalenzumformung
- Einsetzungsverfahren
- Funktionen
- Trigonometrie (Dreiecke)
- Einheiten (Potenzen) 
 
Ohne das Verständnis dieser Themenbereiche lassen sich weiterführende Themen nur schwer erschließen. Wenn diese Themen nicht verinnerlicht wurden, sollten diese weiter erschlossen werden, da im Kern nahezu alle Aufgaben letztendlich auf diesen Grundprinzipien basieren.


































































































## Mengen

Zahlen können in verschiedene Kategorien, sogenannte *Mengen*, eingeordnet werden.  
Dabei bilden die sogenannten *natürlichen Zahlen* die Basis aller anderen *Zahlenmengen*,  
die in der Schule besprochen werden. Die *natürlichen Zahlen* werden durch das Symbol  
$\mathbb{N}$ beschrieben und beinhalten *Zahlen* wie $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...$.  

Die mathematische Schreibweise dazu wäre:  
$\mathbb{N} = \left\{0,1,2,\dots\right\}$,  
wobei in den geschweiften *Klammern* $\{\}$ alle *Zahlen* aufgelistet werden, die zur *Zahlenmenge* gehören.  

Oftmals werden die *natürlichen Zahlen* auch ohne Null verwendet und werden im Folgenden als $\mathbb{N}^+$ bezeichnet.  
Die erste Erweiterung der *natürlichen Zahlen* $\mathbb{N}$ sind die *ganzen Zahlen*  
$\mathbb{Z} = \{\dots,-2,-1,0,1,2,\dots\}$.  

Bei genauer Betrachtung fällt auf, dass die *natürlichen Zahlen* $\mathbb{N}$ eine *Teilmenge* der ganzen Zahlen $\mathbb{Z}$ sind.  
Dies wird mit dem *Mengenoperator* $\subset$ ("ist *Teilmenge* von") wie folgt geschrieben:

$$
\mathbb{N} \subset \mathbb{Z}
$$

Die Einführung der *ganzen Zahlen* ist bedeutsam, da die *Subtraktion* damit an Wichtigkeit verliert,  
weil zum Beispiel $-1$ als $+(-1)$ geschrieben werden kann.  

Die Erweiterung der *ganzen Zahlen* $\mathbb{Z}$ sind alle Zahlen, die durch *Brüche* dargestellt werden können.  
Diese Zahlen werden *rationale Zahlen* genannt:  
$\mathbb{Q} = \{\dots, -2, -\frac{3}{2}, -1, -\frac{1}{2}, 0, \frac{1}{7}, 1, 2, \frac{34}{15}, \dots\}$.

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}
$$

Es gibt jedoch auch *Zahlen*, die nicht durch einen *Bruch* dargestellt werden können.  
Diese werden *reelle Zahlen* $\mathbb{R}$ genannt und umfassen zum Beispiel $\pi, \sqrt{2}$ und $\sqrt{3}$.  

Die letzte Erweiterung der *Zahlenmengen* wird durch die Zahl $i=\sqrt{-1}$ gegeben  
und führt zu den *komplexen Zahlen* $\mathbb{C}$.  
*Komplexe Zahlen* werden in der Regel nicht in der Schule besprochen,  
bieten aber Vorteile bei der Beschreibung von Zusammenhängen in der *Analysis*  
(*Analysis* ist eines der großen Teilgebiete der Mathematik neben der *Algebra*).

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}
$$



### Mengenoperatoren

Es ist möglich *Teilmengen* aufzustellen, dazu werden bestimmte *Mengenoperatoren* wie $\subset$ verwendet.  
Sei die *Menge* $\mathbb{M} = \{1, 2, 3, 4\}$ und die *Menge* $\mathbb{K} = \{3, 4, 5, 6\}$ gegeben, dann existieren folgende *Mengenoperationen*:  

Die *Vereinigung* $\cup$ wird wie folgt dargestellt:

$$
\mathbb{M} \cup \mathbb{K} = \{ 1, 2, 3, 4, 5, 6 \} \quad \text{Vereinigung von $\mathbb{M}$ mit $\mathbb{K}$}
$$

Die *Vereinigung* wird gelesen als:  
"Alle Zahlen, die sich in $\mathbb{M}$ **oder** in $\mathbb{K}$ befinden."  
Das bedeutet, dass alle Zahlen der ersten *Menge* $\mathbb{M}$ und alle Zahlen der zweiten *Menge* $\mathbb{K}$ eine neue *Menge* bilden.  
Das mathematische "oder" unterscheidet sich vom sprachlichen "oder", da es in der Mathematik immer eindeutig dieselbe Bedeutung hat.  
Falls keine *Schnittmenge* vorhanden ist, sind die beiden *Mengen* *disjunkt*.

<center>
![Vereinigung von zwei Mengen. Schwarz: $\mathbb{M}$, rot umrandet: $\mathbb{K}$. Die ausgefüllte Fläche zeigt die Vereinigung.](Kap1/Vereinigung.png)
</center>


---

Eine weitere *Mengenoperation* ist der *Durchschnitt* $\cap$:

$$
\mathbb{M} \cap \mathbb{K} = \{ 3, 4 \} \quad \text{Durchschnitt von $\mathbb{M}$ und $\mathbb{K}$}
$$

Der *Durchschnitt* wird gelesen als:  
"Alle Zahlen, die sich in $\mathbb{M}$ **und** in $\mathbb{K}$ befinden."

<center>
![Durchschnitt von zwei Mengen. Schwarz: $\mathbb{M}$, rot umrandet: $\mathbb{K}$. Die ausgefüllte Fläche zeigt den Durchschnitt.](Kap1/Durchschnitt.png)
</center>


In diesem Fall sind nur die $3$ und die $4$ in der resultierenden *Durchschnittsmenge*.

---

Die letzte wichtige *Mengenoperation* ist die *Differenz* $\setminus$:

$$
\mathbb{M} \setminus \mathbb{K} = \{ 1, 2 \} \quad \text{Differenz von $\mathbb{M}$ und $\mathbb{K}$}
$$

Das wird gelesen als:  
"Alle *Zahlen* von $\mathbb{M}$ ohne die *Zahlen* aus $\mathbb{K}$."

<center>
![Differenz von $\mathbb{M}$ ohne $\mathbb{K}$. Schwarz: $\mathbb{M}$, rot umrandet: $\mathbb{K}$. Die ausgefüllte Fläche enthält alle Zahlen aus $\mathbb{M}$ ohne die Zahlen, die auch in $\mathbb{K}$ enthalten sind.](Kap1/MohneK.png)
</center>


---

Wenn man die Reihenfolge der *Mengen* umkehrt, ergibt sich ein anderes Bild:

$$
\mathbb{K} \setminus \mathbb{M} = \{ 5, 6 \} \quad \text{Differenz von $\mathbb{K}$ und $\mathbb{M}$}
$$

<center>
![Differenz von $\mathbb{K}$ ohne $\mathbb{M}$. Schwarz: $\mathbb{M}$, rot umrandet: $\mathbb{K}$. Die ausgefüllte Fläche enthält alle Zahlen aus $\mathbb{K}$ ohne die Zahlen, die auch in $\mathbb{M}$ enthalten sind.](Kap1/KohneM.png)
</center>


Es wird deutlich, dass bei der *Differenz* von *Mengen* die Reihenfolge entscheidend ist, während sich der *Durchschnitt* und die *Vereinigung* nicht verändern.

---

Nun, da alle wichtigen *Mengenoperationen* eingeführt wurden, folgen noch einige wichtige mathematische Abkürzungen.  
Diese können als **Vokabeln** angesehen werden, die jeder kennen sollte.

Wenn eine Zahl ein *Element* einer *Zahlenmenge* ist, wird dies mathematisch so geschrieben:

$$
4 \in \mathbb{N}
$$

---


Weitere wichtige Abkürzungen der Mathematik werden nun aufgelistet und im Folgenden verwendet:

$$
\begin{align*}
\forall & \quad \text{für alle gilt} \\
\exists & \quad \text{es existiert} \\
\exists ! & \quad \text{es existiert genau ein} \\
\wedge & \quad \text{und} \\
\vee & \quad \text{oder} \\
\neg & \quad \text{nicht} \\
:= & \quad \text{definiert als} \\
\parallel & \quad \text{parallel zu} \\
\perp & \quad \text{orthogonal (senkrecht) zu} \\
\measuredangle & \quad \text{Winkelmaß zwischen} \\
\angle & \quad \text{Winkel zwischen} \\
\varnothing & \quad \text{leere Menge} \\
\Rightarrow & \quad \text{daraus folgt} \\
< & \quad \text{kleiner als} \\
> & \quad \text{größer als} \\
\stackrel{!}{=} & \quad \text{setze gleich} \\
\stackrel{\wedge}{=} & \quad \text{entspricht}
\end{align*}
$$

---

So würde der Satz "Die *Menge* $\mathbb{M}$ beinhaltet alle *Zahlen* $x$, die die Bedingung erfüllen, dass sie *Element* der *reellen Zahlen* sind und dass es genau eine *Zahl* $e$ gibt, durch die man $x$ teilen kann, sodass $1$ dabei herauskommt" mathematisch so aussehen: 


$$
\mathbb{M} = \left\{ x \in \mathbb{R} \ \middle| \ \exists ! e \in \mathbb{R} : \frac{x}{e} = 1 \right\}
$$



---



Mittels dieser Abkürzungen ist es möglich, eine *Zahlenmenge* einzuführen, welche von besonderer Bedeutung ist – die *Primzahlen*.  
Primzahlen sind *natürliche Zahlen* größer als 1, die genau zwei positive Teiler haben: **1** und **sich selbst**.  

Diese *Zahlenmenge* kann wie folgt definiert werden:

$$
\mathbb{P} = \left\{ p \in \mathbb{N} \ \middle| \ p > 1 \ \wedge \ \nexists n \in \mathbb{N},\ 1 < n < p,\ n \mid p \right\}
$$

Dabei gilt:  

- $\mathbb{P}$ bezeichnet die *Menge* der *Primzahlen*.  
- $\mathbb{N}$ bezeichnet die *Menge* der *natürlichen Zahlen*.  
- $n \mid p$ bedeutet "n teilt p ohne Rest".  
- $\nexists$ bedeutet "es existiert kein".  

**Interpretation:**  
Eine *Zahl* $p$ ist genau dann in der *Menge* $\mathbb{P}$, wenn sie größer als 1 ist und es keine *natürliche Zahl* $n$ gibt, die $p$ teilt, außer den *Zahlen* $1$ und $p$ selbst.


### Mengengrenzen


Das *Supremum* ist definiert als die "kleinste oberste Schranke" einer *Zahlenmenge*,  
während das *Infimum* als "größte unterste Schranke" definiert ist.  

Sei als Beispiel dazu folgende *Zahlenmenge* aus *natürlichen Zahlen* betrachtet:  

$$
\mathbb{M} = \left\{ 3,4,5,6,7,8 \right\}
$$

Dann ergibt sich hieraus folgendes *Infimum* und *Supremum*:

$$
\begin{align*}
   \sup  \mathbb{M}  & = 9  \\
   \inf  \mathbb{M}  & = 2  \\
   \Rightarrow \quad  2 & < x  < 9 \quad \forall x \in \mathbb{M}
\end{align*}
$$

---

Hierbei können dem *Supremum* und *Infimum* *Grenzen* auferlegt werden,  
sodass das *Supremum* der Menge $\mathbb{M}$ in den *Grenzen*  
zwischen $3 < x < 6$ und das *Infimum* zwischen $4 < x < 7$ wie folgt geschrieben wird:

$$
\begin{align*}
   \sup_{3<x<6}  \mathbb{M}  & = 7  \\
   \inf_{4<x<7}  \mathbb{M}  & = 3  
\end{align*}
$$

---

Die *Grenzen* müssen nicht ausschließlich (*exklusiv*),  
sondern können auch einschließend (*inklusiv*) sein:

$$
\begin{align*}
   \sup  \mathbb{M}  & = 8  \\
   \inf  \mathbb{M}  & = 3  \\
   \Rightarrow \quad  3 & \leq x  \leq 8 \quad \forall x \in \mathbb{M}
\end{align*}
$$

---

Dabei bildet das *Supremum* die größte *Zahl* der *Menge* und ist gleichzeitig das *Maximum*,  
während das *Infimum* gleich dem *Minimum* ist.  

Somit ergibt sich für inklusive Grenzen:

$$
\begin{align*}
   \sup  \mathbb{M}  & =  \max  \mathbb{M}  \\
   \inf  \mathbb{M}  & =  \min  \mathbb{M}  
\end{align*}
$$

---

> **Hinweis:**  
> Im folgenden Buch werden die Begriffe *Infimum* und *Supremum* lediglich zur Vollständigkeit erwähnt.  
> Sie sind nicht essentiell für ein allgemein bildendes Grundlagenverständnis.



#### Übungsaufgaben zu Mengen





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -4 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ 6 $ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 0,03 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \frac{7}{8} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
</section>


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -\frac{3}{7} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \sqrt{3} $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 13^2 $ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -7 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ 7,23 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ -2 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \pi $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ 3,\bar{3} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \frac{12}{4} $ [[$(\mathbb{N})$|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ 0,0001 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ -\sqrt{9} $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -\sqrt[5]{7} $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ 41:7 + 57:7 \in$ [[$(\mathbb{N})$|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \sqrt{49}-11,5 \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \dfrac{2}{3}-\dfrac{14}{9}-0,\bar{1} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \dfrac{8}{7}-\pi  \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \dfrac{3}{8} + 1,625 \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ (-5)^3-\sqrt{81} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \dfrac{7}{3}+\dfrac{8}{7} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \pi^0-4 \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \sqrt{2^5-3^2} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \dfrac{\sqrt{8}+\sqrt{18}}{\sqrt{2}} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 0,15-\dfrac{23}{20} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ 1,\bar{4} + 0,\bar{5} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -4^3+(-3)^4 \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \left(\sqrt{7}+\sqrt{11}\right)^2 \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 8-\sqrt{6,25} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -0,45+\sqrt{0,25}+\dfrac{19}{20} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 9:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.




__$a)\;\;$__ $ \mathbb{K} = \{ 15,28,17,34,26,24,14,32,29,22 \} $\

$\min(\mathbb{K}) = $ [[ 14 ]] \
$\max(\mathbb{K}) = $ [[ 34 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 21,24,28,24,26,25,23,24,19,25,27,29,21,22,26 \} $\


$\min(\mathbb{K}) = $ [[ 19 ]] \
$\max(\mathbb{K}) = $ [[ 29 ]] \



__$c)\;\;$__ $ \mathbb{K} = \{ 14,19,16,15,17,15,18,9,19,11,13,17 \} $\


$\min(\mathbb{K}) = $ [[  9 ]] \
$\max(\mathbb{K}) = $ [[ 19 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 83,46,55,64,91,75,61,39,84,55,47 \} $\


$\min(\mathbb{K}) = $ [[ 39 ]] \
$\max(\mathbb{K}) = $ [[ 91 ]] \



__$b)\;\;$__ $ \mathbb{K} = \{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \} $\


$\min(\mathbb{K}) = $ [[ 52 ]] \
$\max(\mathbb{K}) = $ [[ 58 ]] \



__$c)\;\;$__ $ \mathbb{K} = \{ 29,33,28,31,35,24,36,32,28,27,35,34,29,30,35 \} $\


$\min(\mathbb{K}) = $ [[ 24 ]] \
$\max(\mathbb{K}) = $ [[ 36 ]] \




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 45,39,48,51,37,52,46,50,47,38,43,46,51,39,40 \} $\


$\min(\mathbb{K}) = $ [[ 37 ]] \
$\max(\mathbb{K}) = $ [[ 52 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 34,37,31,32,39,33,34,35,38,32,30,34,39,38,34,33,31 \} $\


$\min(\mathbb{K}) = $ [[ 30 ]] \
$\max(\mathbb{K}) = $ [[ 39 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 64,67,61,58,60,64,66,68,63,64,60,69,64,65,59,67,68,60 \} $\


$\min(\mathbb{K}) = $ [[ 58 ]] \
$\max(\mathbb{K}) = $ [[ 69 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** die obere beziehungsweise untere Schranke der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 15,28,17,34,26,24,14,32,29,22 \} $\


$\inf(\mathbb{K}) = $ [[ 13 ]] \
$\sup(\mathbb{K}) = $ [[ 35 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 21,24,28,24,26,25,23,24,19,25,27,29,21,22,26 \} $\


$\inf(\mathbb{K}) = $ [[ 18 ]] \
$\sup(\mathbb{K}) = $ [[ 30 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 14,19,16,15,17,15,18,9,19,11,13,17 \} $\


$\inf(\mathbb{K}) = $ [[  8 ]] \
$\sup(\mathbb{K}) = $ [[ 20 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 83,46,55,64,91,75,61,39,84,55,47 \} $\


$\inf(\mathbb{K}) = $ [[ 38 ]] \
$\sup(\mathbb{K}) = $ [[ 92 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \} $\


$\inf(\mathbb{K}) = $ [[ 51 ]] \
$\sup(\mathbb{K}) = $ [[ 59 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 29,33,28,31,35,24,36,32,28,27,35,34,29,30,35 \} $\


$\inf(\mathbb{K}) = $ [[ 26 ]] \
$\sup(\mathbb{K}) = $ [[ 37 ]] \





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 45,39,48,51,37,52,46,50,47,38,43,46,51,39,40 \} $\


$\inf(\mathbb{K}) = $ [[ 36 ]] \
$\sup(\mathbb{K}) = $ [[ 53 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 34,37,31,32,39,33,34,35,38,32,30,34,39,38,34,33,31 \} $\


$\inf(\mathbb{K}) = $ [[ 29 ]] \
$\sup(\mathbb{K}) = $ [[ 40 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 64,67,61,58,60,64,66,68,63,64,60,69,64,65,59,67,68,60 \} $\


$\inf(\mathbb{K}) = $ [[ 57 ]] \
$\sup(\mathbb{K}) = $ [[ 70 ]] \





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.
 
__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $  und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,3,4,5,6,8,9}   ]]  
 
__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,2,3,4,5,6,7}   ]] 
 
__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {4,5,7,8,9,10,11}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 16:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.
 
__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,2,3,4,5,6,7,8}   ]]  
 
__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[      {2,3,5,6,8,9}    ]]  
 
__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,3,4,5,6,7,9}     ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ 
**Gib** den Durchschnitt der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.


__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $  und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {6}           ]]  


__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {1,2,3,5,7}   ]]  


__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {}            ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 18:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {2,5,8}   ]] 

__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[    {3,6}    ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {3,5,7}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 19:__ 
**Gib** die Differenz der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $ und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {3,4,8}   ]]  

__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {}        ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {5,7,9,11}   ]]  

__$d)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{M} \setminus \mathbb{K} =  $ [[   {4,5,8,10}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 20:__ **Gib** die Differenz der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {1,4,7}   ]]   

__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[  {2,5,8}    ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {4,6}     ]] 


__$d)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{M} \setminus \mathbb{K} =  $ [[   {1,9}     ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 21:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,3,5,6,8 \}$, $\mathbb{L} = \{ 3,6,9 \} $  und $\mathbb{K} = \{ 1,3,5,7,9 \}$.

<!-- data-solution-button="5" -->
__$a)\;\;$__  $ \left(\mathbb{K} \setminus \mathbb{M}\right) \cup \mathbb{L} =  $     [[   {1,3,6,7,9}   ]]    


<!-- data-solution-button="5" -->
__$b)\;\;$__    $ \left(\mathbb{K} \cap \mathbb{L} \right) \setminus \mathbb{M} =  $  [[     {9}         ]]    


<!-- data-solution-button="5" -->
__$c)\;\;$__    $\mathbb{K} \cup  \left( \mathbb{L} \setminus \mathbb{M} \right) =  $ [[   {1,3,5,7,9}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 22:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.


<!-- data-solution-button="5" -->
__$a)\;\;$__  $\mathbb{K} \setminus \left( \mathbb{M} \cup \mathbb{L} \right) =  $ [[   {7}         ]]  


<!-- data-solution-button="5" -->
__$b)\;\;$__    $\mathbb{L} \cap \left( \mathbb{K} \cup \mathbb{M} \right) =  $    [[  {1,8,9}      ]]  


<!-- data-solution-button="5" -->
__$c)\;\;$__   $ \left( \mathbb{L} \cap \mathbb{K}  \right) \cup \mathbb{M} =  $   [[ {1,4,7,8,9}   ]]  








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 23:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.


<!-- data-solution-button="5" -->
__$a)\;\;$__  $  \mathbb{K} \cap \left( \mathbb{M} \setminus \mathbb{L} \right)  =  $       [[   {9}       ]] 


<!-- data-solution-button="5" -->
__$b)\;\;$__ $   \mathbb{K} \setminus \left( \mathbb{M} \setminus  \mathbb{L} \right)  =  $ [[  {2,3,4}    ]] 


<!-- data-solution-button="5" -->
__$c)\;\;$__ $  \left( \mathbb{K} \cap  \mathbb{L} \right) \cap  \mathbb{M} =  $            [[   {2}       ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.

__$a)\;\;$__   $  \text{sup} \left(  \mathbb{K} \cap \mathbb{M}  \right) =  $                                      [[   8   ]] 

__$b)\;\;$__   $  \text{max} \left(  \mathbb{L} \setminus \mathbb{M}  \right) =  $                                 [[  9    ]] 

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $                                      [[   1   ]] 

__$d)\;\;$__   $  \text{min} \left(  \mathbb{M} \setminus \left( \mathbb{L} \cup  \mathbb{K}  \right) \right) =  $ [[   7   ]] 





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.

__$a)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cup \mathbb{M}  \right) =  $                                    [[   1   ]] 

__$b)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $                               [[  2    ]] 

__$c)\;\;$__   $  \text{sup}  \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $                                   [[   8   ]] 

__$d)\;\;$__   $  \text{max} \left( \left(  \mathbb{M} \cap \mathbb{K}  \right)  \cap \mathbb{L}  \right) =  $   [[   8   ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.

__$a)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $ [[   3   ]] 

__$b)\;\;$__   $  \text{max} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $ [[   9   ]] 

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $ [[   2   ]] 

__$d)\;\;$__   $  \text{sup}  \left( \left(  \mathbb{L} \cup  \mathbb{M} \right)  \cap \mathbb{K}  \right) =  $ [[   9   ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 26:__ Gegebenen sind die Mengen $\mathbb{M}= \{ 1,2,3,6 \}$, $\mathbb{L} = \{ 4,5,7,9 \} $  und $\mathbb{K} = \{ 3,4,6,8,9 \}$.

<!-- data-solution-button="5" -->
__$a)\;\;$__  **Bestimme** das resultierende Mengenelement. $  \left(  \mathbb{L} \cup \mathbb{K}  \right) \setminus \left(  \mathbb{L} \cap \mathbb{K}  \right)  := \mathbb{L} \Delta \mathbb{K}  = $ [[   {3,5,6,7,8}   ]] 

<!-- data-solution-button="5" -->
__$b)\;\;$__  Im Aufgabenteil $a)$ wurde der Mengenoperator der symmetrischen Differenz $\Delta$ definiert. **Bestimme** das resultierende Mengenelement.  $  \mathbb{M} \Delta \mathbb{K} =  $ [[  {1,2,4,8,9}    ]] 

__$c)\;\;$__  Skizziere $ \mathbb{M} \Delta \mathbb{K} $ über Mengenkreise. 

[[!]]
<script>true</script>
**************************************

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap1/Aufgabe27.png)

**************************************



































































































## Algebraische Grundlagen

{{|>}} Um den naturwissenschaftlichen Unterricht und mathematischen Erklärungen besser folgen zu können, müssen die Begrifflichkeiten der *Algebra* geklärt werden. Dazu werden im Laufe dieses Kapitels die wichtigsten mathematischen Vokabeln, Abkürzungen und Rechenvorschriften erläutert.


{{|>}} Der Begriff *Algebra* stammt aus dem Arabischen: al-ǧabr bedeutet so viel wie „das Wiederherstellen“ oder „das Ergänzen“. Geprägt wurde er im 9. Jahrhundert durch den persischen Gelehrten Muḥammad ibn Mūsā al-Ḫwārizmī in seinem Werk al-kitāb al-muḫtaṣar fī ḥisāb al-ǧabr wa’l-muqābala („Das kurzgefasste Buch über die Rechenverfahren durch Ergänzen und Ausgleichen“). Darin systematisierte er die Lösung *linearer* und *quadratischer* *Gleichungen* – ein entscheidender Schritt, um Rechnen mit Unbekannten zu einer eigenen Disziplin zu machen.

{{|>}} Die Wurzeln der *Algebra* reichen jedoch weit zurück: Bereits die Babylonier (um 1800 v. Chr.) lösten quadratische Probleme mit geometrischen Methoden, die Griechen entwickelten Proportionenlehre und Zahlentheorie, und indische Mathematiker führten die symbolische Behandlung von Unbekannten weiter aus. Al-Ḫwārizmīs Werk verband diese Traditionen, prägte den Namen und beeinflusste die Entwicklung der *Algebra* in Europa nachhaltig, insbesondere nach Übersetzungen ins Lateinische im 12. Jahrhundert.



### Arithmetik mit natürlichen Zahlen


{{|>}}  *Ziffern* sind die einzelnen Zeichen, die zur Darstellung von Zahlen verwendet werden. Im *Dezimalsystem* gibt es genau zehn *Ziffern*:

$$
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
$$

{{|>}} Eine *Zahl* entsteht erst, wenn eine oder mehrere *Ziffern* in einer bestimmten Anordnung geschrieben werden. Da in unserem Zahlensystem - dem Dezimalsystem - nach der 9 keine weitere neue *Ziffer* kommt muss eine *Zahl* die größer als die 9 ist durch zwei *Ziffern* ausgedrückt werden. Die Position (Stelle) einer *Ziffer* in der *Zahl* bestimmt dabei ihren Wert. Die Stellenwerttafel bildet diese Wertigkeit ab. 


{{|>}} Im *Dezimalsystem* basiert jede Stelle auf *Potenzen* der Zahl 10:

<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:300px" -->
| Tausender | Hunderter | Zehner | Einer |
|-----------|-----------|--------|-------|
| T | H | Z | E |
| $10^3$    | $10^2$    | $10^1$ | $10^0$ |
| $1000$    | $100$    | $10$ | $1$ |
</center>



{{|>}} Die Zahl $4 583$ besteht aus den *Ziffern* $4$, $5$, $8$ und $3$.  
In der Stellenwerttafel:

<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:50px" -->
| T | H | Z | E |
|---|---|---|---|
| 4 | 5 | 8 | 3 |
</center>

Das bedeutet:

$$
4 \cdot 1000 \;+\; 5 \cdot 100 \;+\; 8 \cdot 10 \;+\; 3 \cdot 1
= 4000 + 500 + 80 + 3
$$

{{|>}} *Ziffern* sind somit die Bausteine der Zahldarstellung. *Zahlen* entstehen durch Anordnung von *Ziffern* und Interpretation ihrer Position in einem Stellenwertsystem. Die *Stellenwerttafel* hilft, den Wert jeder Ziffer in einer Zahl zu erkennen.





##### Übungsaufgaben zu Ziffern und Zahlen


<!-- Grund0007 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** die in Sprache dargestellt Zahl in Ziffern **an**.

<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ Dreimillionenvierhunderttausendneun  \
[[  3400009  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ Neuntausendzweihundertvierundsechsig.\
[[    9264   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ Zwölftausenddreihundertelf.\
[[   12311   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ Sechshundertfünfundsiebzigtausendachthundertdreiundachtzig.\
[[   675883  ]]

</div>
</section>   






<!-- Grund0008 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** die in Sprache dargestellt Zahl in Ziffern **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ Viertausendzweihundertneunundzwanzig  \
[[  4229  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ Achttausendvier.\
[[  8004  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ Zweitausendsiebhundertelf.\
[[  2711  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ Dreihundertneuntausendvierhundertsechsunddreißig.\
[[ 309436 ]]

</div>
</section>







<!-- Grund0009 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)




__$a)\;\;$__ 835069

<!-- data-type="none" data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 8 ]]      |       [[ 3 ]]     |    [[ 5 ]]   |   [[ 0 ]]  |  [[ 6 ]]  | [[ 9 ]] |



__$b)\;\;$__ 9841631

<!-- data-type="none" data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 9 ]]   |       [[ 8 ]]      |       [[ 4 ]]     |    [[ 1 ]]   |   [[ 6 ]]  |  [[ 3 ]]  | [[ 1 ]] |



__$c)\;\;$__ 620551

<!-- data-type="none" data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 6 ]]      |       [[ 2 ]]     |    [[ 0 ]]   |   [[ 5 ]]  |  [[ 5 ]]  | [[ 1 ]] |









<!-- Grund0010 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)





__$a)\;\;$__ 6449

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 0 ]]      |       [[ 0 ]]     |    [[ 6 ]]   |   [[ 4 ]]  |  [[ 4 ]]  | [[ 9 ]] |


__$b)\;\;$__ 6459204

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 6 ]]   |       [[ 4 ]]      |       [[ 5 ]]     |    [[ 9 ]]   |   [[ 2 ]]  |  [[ 0 ]]  | [[ 4 ]] |



__$c)\;\;$__ 210079

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 2 ]]      |       [[ 1 ]]     |    [[ 0 ]]   |   [[ 0 ]]  |  [[ 7 ]]  | [[ 9 ]] |






<!-- Grund0011 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)





__$a)\;\;$__ 910772

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 9 ]]      |       [[ 1 ]]     |    [[ 0 ]]   |   [[ 7 ]]  |  [[ 7 ]]  | [[ 2 ]] |




__$b)\;\;$__ 1349310

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 1 ]]   |       [[ 3 ]]      |       [[ 4 ]]     |    [[ 9 ]]   |   [[ 3 ]]  |  [[ 1 ]]  | [[ 0 ]] |


__$c)\;\;$__ 13792

<!-- data-type="none"  data-solution-button="5" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 0 ]]      |       [[ 1 ]]     |    [[ 3 ]]   |   [[ 7 ]]  |  [[ 9 ]]  | [[ 2 ]] |





<!-- Grund0012 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.






__$a)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |         4          |         0         |      0       |     7      |     5     |    2    |


<!-- data-solution-button="5" -->
[[   400752  ]]



__$b)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|      3      |          8         |         5         |      1       |     1      |     6     |    7    |


<!-- data-solution-button="5" -->
 [[  3851167  ]]



__$c)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |                    |          7        |       5      |     0      |     0     |     9   |


<!-- data-solution-button="5" -->
 [[   75009   ]]






<!-- Grund0013 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|      4      |         0          |         2         |      1       |     6      |     3     |    9    |


<!-- data-solution-button="5" -->
 [[  4021639  ]]
 

__$b)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |                    |         2         |      8       |     0      |     4     |    5    |


<!-- data-solution-button="5" -->
 [[   28045   ]]
 

__$c)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |         4          |          0        |       2      |     1      |     4     |     7   |


<!-- data-solution-button="5" -->
 [[  402147   ]]






<!-- Grund0014 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|      17     |         2          |         4         |      1       |     0      |     0     |    7    |


<!-- data-solution-button="5" -->
 [[  17241007  ]]
 

__$b)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |          1         |         17        |      4       |     5      |     12    |    4    |


<!-- data-solution-button="5" -->
 [[   274624  ]]
 

__$c)\;\;$__ 

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|             |                    |        287        |       0      |     24     |     0     |   117   |


<!-- data-solution-button="5" -->
 [[  2872517  ]]







































































































#### Terme und Gleichungen






{{|>}} Hinter großen Teilen des Verständnis der Mathematik steht das Wissen, was ein *Term* ist. Bei dem Beispiel 

$$
 \begin{equation}
\begin{split} 
4+5 = 3+6 \\ 
 \end{split}
\end{equation}  
$$

{{|>}} handelt es sich um eine *Gleichung* wobei die *Terme* $4+5$ und $3+6$ den gleichen Wert $9$ besitzen. Das *Äquivalenzzeichen* "=" wird oftmals fälschlicherweise als Aufforderung interpretiert, den *Wert des Terms* zu berechnen, doch gibt dieses lediglich die Gleichheit an. 

{{|>}} In einer weiteren Beispielaufgabe stehen drei verschiedene Seillängen mit $3\,$cm, $6\,$cm und $7\,$cm zur Verfügung. Wenn nun der *Term* 

$$
 \begin{equation}
\begin{split} 
\text{$4\cdot 3$\,cm\,+\,$5\cdot 6$\,cm\,+\,$2\cdot 7$\,cm } \\ 
 \end{split}
\end{equation}  
$$


{{|>}} niedergeschrieben wird, dann können dem *Term* verschiedene Informationen entnommen werden. So ist bekannt, dass viermal das $3\,$cm, fünfmal das $6\,$cm und zweimal das $7\,$cm Seilstück verwendet wurde und dass die Seilstücke zusammen eine *Länge* von $56\,$cm besitzen. Es wird deutlich, dass *Terme* auch ohne ein *Äquivalenzzeichen* niedergeschrieben werden können und dennoch eine Bedeutung besitzen. 

{{|>}} Wenn ein *Term* berechnet werden soll, ist eine systematisches Vorgehen zu empfehlen. Hierbei sollten einzelne Schritte visualisiert werden, sodass ein anderer Betrachter schnell die Rechnung nachvollziehen kann. Dies ist im folgenden Beispiel dargestellt:

$$
 \begin{equation}
\begin{split}  
& \;\;\;\; \left(6 \cdot 5 + 9 \cdot 8\right) :3 - 3 \cdot 7  \\
& = \left(30 + 72\right) :3 - 21  \\
& = 102 :3 - 21  \\
& = 34 - 21  \\
& = 13  \\ 
 \end{split}
\end{equation}  
$$

{{|>}} Deutlich zu erkennen ist, dass nach jeder Rechnung eine neue Zeile begonnen wurde und hierbei die *Äquivalenzzeichen* "=" stets untereinander stehen. Auch sind die *Rechenregeln* (wie *Punkt- vor Strichrechnung* und die Beachtung der *Klammern*) erkennbar, da im ersten Schritt alle *Produktwerte*, anschließend der *Summenwert* in der *Klammer* gefolgt vom *Quotientenwert* und abschließend der *Differenzwert* bestimmt wurde.  

{{|>}} Besonders das strukturierte, systematische und nachvollziehbare Niederschreiben von *Termveränderungen* bietet die Möglichkeit neue Erkenntnisse zu generieren und Auffälligkeiten zu entdecken, was ein wesentlicher Bestandteil der Mathematik ist.



!?[Termumformung](https://www.youtube.com/watch?v=u9272jlewms)


##### Übungen - Terme und Gleichungen



Streichholz Term angeben
Waagen Terme angeben






#### Runden

    {{|>}} Um Rechnungen mit natürlichen Zahlen $\mathbb{N}$ schnell zu überprüfen lohnt sich die sogenannte Überschlagsrechnung, bei der die Zahlen gerundet werden. Um das *Runden* zu verstehen, muss sich nochmal die Stellenwerttafel vergegenwärtigt werden, da immer bestimmte Stellen betrachtet werden müssen: \


<center>
<!-- data-type="none" 
data-sortable="false" 
style="width:300px" -->
|  Zahl   |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :-----: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   35069 |             3     |          5   |         0  |        6  |       9 |
</center>


    {{|>}} Beim *Runden* wird die in der vorherigen Stelle der betrachtete Stelle der Zahl analysiert. Soll also auf Tausender gerundet werden, muss die Hunderterziffer betrachtet werden. Handelt es sich um eine der Ziffern $\left\{0;1;2;3;4\right\}$ wird die betrachtete Stelle abgerundet - sie bleibt also unverändert. Handelt es sich allerdings um $\left\{5;6;7;8;9\right\}$, dann wird aufgerundet - also an der betrachteten Stelle wir die Ziffer um $1$ erhöht. Dies kann begründet werden, dass die Ziffern $\left\{0;1;2;3;4\right\}$ dichter an einer Null sind als an einer Zehn wie $\left\{5;6;7;8;9\right\}$. \



<center>
<!-- data-type="none"
data-sortable="false" 
style="width:300px" -->
|   Zahl    |    Auf Zehner gerundet     |   Auf Hunderter gerundet    | 
|  :-----:  |    :-----:    |   :-----:      |
| $391$     | $\approx 390$ |  $\approx 400$ |
| $382$     | $\approx 380$ |  $\approx 400$ |
| $373$     | $\approx 370$ |  $\approx 400$ |
| $364$     | $\approx 360$ |  $\approx 400$ |
| $355$     | $\approx 360$ |  $\approx 400$ |
| $346$     | $\approx 350$ |  $\approx 300$ |
| $337$     | $\approx 340$ |  $\approx 300$ |
| $328$     | $\approx 330$ |  $\approx 300$ |
| $319$     | $\approx 320$ |  $\approx 300$ |
</center>


    {{|>}} Somit kann eine länger dauernde Rechnung wie folgt dargestellt durch das Runden der Faktoren überschlagen werden: \

$$
\begin{equation}
\begin{split}
6167 \cdot 3139 \approx 6000 \cdot 3000 = 18000000 \\  
 \end{split}
\end{equation}  
$$






Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Runden](https://www.youtube.com/watch?v=lkKLXE5FFes)




##### Übungen - Runden



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ *Gib* den auf Zehner gerundeten Wert *an*.


<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
$534 \approx$ [[  530  ]]

</div>
<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
$119 \approx$ [[  120  ]]

</div>
<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
$346 \approx$ [[  350  ]]

</div>
<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
$971 \approx$ [[  970  ]]

</div>
<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
$289 \approx$ [[  290  ]]

</div>
<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
$654 \approx$ [[  650  ]]

</div>
</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ *Gib* den auf Hunderter gerundeten Wert *an*.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
$7664 \approx$ [[7700    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
$4467 \approx$ [[4500    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
$2454 \approx$ [[2400    ]]

</div>




<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
$2163 \approx$ [[2200    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
$2389 \approx$ [[2400    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
$15314 \approx$ [[15300    ]]

</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ *Gib* den auf Tausender gerundeten Wert *an*.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
$78961 \approx$ [[79000    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
$18207 \approx$ [[18000    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
$138499 \approx$ [[138000    ]]

</div>




<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
$316418 \approx$ [[316000    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
$218640 \approx$ [[219000    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
$450748 \approx$ [[451000    ]]

</div>


</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ *Gib* den auf Zehntausender gerundeten Wert *an*.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
$464861 \approx$ [[460000    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
$1103486 \approx$ [[1100000    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
$1586404 \approx$ [[1590000    ]]

</div>




<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
$3185048 \approx$ [[3190000    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
$8075604 \approx$ [[8080000    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
$3446045 \approx$ [[3450000    ]]

</div>


</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ *Gib* den auf die angegebene Stelle gerundeten Wert *an*.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
Auf Tausender: $78163 \approx$ [[78000    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
Auf Zehner: $78163 \approx$ [[78160    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
Auf Hunderter: $29963 \approx$ [[30000    ]]

</div>




<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
Auf Tausender: $499 \approx$ [[    0    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
Auf Zehner: $55164 \approx$ [[55160    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
Auf Tausender: $854684 \approx$ [[855000    ]]

</div>


</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ *Gib* den auf die angegebene Stelle gerundeten Wert *an*.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<!-- data-solution-button="5" -->
Auf Hunderter: $54164 \approx$ [[54200    ]]

</div>



<div class="flex-child">

__$b)\;\;$__

<!-- data-solution-button="5" -->
Auf Hunderttausender: $54164 \approx$ [[100000    ]]

</div>




<div class="flex-child">

__$c)\;\;$__

<!-- data-solution-button="5" -->
Auf Zehner: $8431 \approx$ [[8430      ]]

</div>




<div class="flex-child">

__$d)\;\;$__

<!-- data-solution-button="5" -->
Auf Millionen: $47081 \approx$ [[    0    ]]

</div>




<div class="flex-child">

__$e)\;\;$__

<!-- data-solution-button="5" -->
Auf Hunderter: $94516 \approx$ [[94500    ]]

</div>



<div class="flex-child">

__$f)\;\;$__

<!-- data-solution-button="5" -->
Auf Zehntausender: $998146 \approx$ [[1000000    ]]

</div>


</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 7:__ *Gib* den auf die angegebene Stelle gerundeten Wert in den freien Tabellenfeldern *an*.


<!-- data-type="none"
data-sortable="false" 
data-solution-button="5"-->
|   Zahl    |    Zehner     |   Hunderter    |   Tausender    |   Zehntausender    |   Hunderttausender   |
|  :-----:  |    :-----:    |   :-----:      |     :-----:    |     :-----:        |       :-----:        |
| $548062$  | [[ 548060  ]] |  [[ 548100  ]] | [[ 548000  ]]  |    [[ 550000  ]]   |     [[ 500000  ]]    |
| $48991$   | [[ 48990   ]] |  [[ 49000   ]] | [[ 49000   ]]  |    [[ 50000   ]]   |     [[   0     ]]    |
| $5184612$ | [[ 5184610 ]] |  [[ 5184600 ]] | [[ 5185000 ]]  |    [[ 5180000 ]]   |     [[ 5200000 ]]    |
|  $84151$  | [[ 84150   ]] |  [[ 84200   ]] | [[ 84000   ]]  |    [[ 80000   ]]   |     [[ 100000  ]]    |
| $2504468$ | [[ 2504470 ]] |  [[ 2504500 ]] | [[ 2504000 ]]  |    [[ 2500000 ]]   |     [[ 2500000 ]]    |





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 8:__ *Gib* den auf die angegebene Stelle gerundeten Wert in den freien Tabellenfeldern *an*.


<!-- data-type="none"
data-sortable="false"  
data-solution-button="5"-->
|   Zahl    |    Zehner     |   Hunderter    |   Tausender    | Zehntausender | Hunderttausender |
|  :-----:  |    :-----:    |   :-----:      |     :-----:    |   :-----:     |     :-----:      |
| $278849$  | [[ 278850  ]] |  [[ 278800  ]] | [[ 279000  ]]  |  [[ 280000 ]] |   [[ 300000  ]]  |
| $67948$   | [[ 67950   ]] |  [[ 67900   ]] | [[ 68000   ]]  |  [[ 70000  ]] |   [[ 100000  ]]  |
| $126443$  | [[ 126440  ]] |  [[ 126400  ]] | [[ 126000  ]]  |  [[ 130000 ]] |   [[ 100000  ]]  |
|  $24367$  | [[ 24370   ]] |  [[ 24400   ]] | [[ 24000   ]]  |  [[ 20000  ]] |   [[ 0       ]]  |
| $2306637$ | [[ 2306640 ]] |  [[ 2306600 ]] | [[ 2307000 ]]  |  [[ 231000 ]] |   [[ 2300000 ]]  |




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 9:__ Gegeben sei eine gerundete Zahl. *Gib* jeweils die kleinste und die größte Zahl *an*, die nach dem Runden zur gegebenen Zahl wird.


<!-- data-type="none"
data-sortable="false"  
data-solution-button="5"-->
| gerundete Zahl | wurde gerundete auf | kleinste Zahl |  größte Zahl  |
|  :----------:  | :-----------------: | :-----------: |  :---------:  |
|    $445000$    |      Tausender      | [[ 444500  ]] | [[ 445499  ]] |
|      $1700$    |      Hunderter      | [[   1650  ]] | [[ 1749    ]] |
|    $5000000$   |      Millionen      | [[ 4500000 ]] | [[ 5499999 ]] |
|      $1970$    |        Zehner       | [[ 1965    ]] | [[ 1974    ]] |
|    $780000$    |    Zehntausender    | [[ 775000  ]] | [[ 784999  ]] |




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 10:__ Gegeben sei eine gerundete Zahl. *Gib* jeweils die kleinste und die größte Zahl *an*, die nach dem Runden zur gegebenen Zahl wird.


<!-- data-type="none"
data-sortable="false"  
data-solution-button="5"-->
| gerundete Zahl | wurde gerundete auf | kleinste Zahl |  größte Zahl  |
|  :----------:  | :-----------------: | :-----------: |  :---------:  |
|    $6000000$   |  Hunderttausender   | [[ 5950000 ]] | [[ 6049999 ]] |
|      $100$     |        Zehner       | [[   50   ]]  | [[  149    ]] |
|    $794000$    |      Tausender      | [[ 793500  ]] | [[ 794499  ]] |
|      $0$       |      Tausender      | [[ 0       ]] | [[ 499     ]] |
|      $6400$    |      Hunderter      | [[ 6350    ]] | [[ 6449    ]] |











































































































#### Addition

    {{|>}} Die *Addition* ist die wichtigste Grundrechenart und lässt *Zahlen* größer als Eins überhaupt erst erfassbar werden, was am *Zahlenstrahl* schnell erkannt werden kann. Direkt hier wird schon deutlich, dass die Null das *neutrale Element* der *Addition* ist, da eine *Addition* von Null den *Wert des Terms* nicht verändert: $1+0=1$. \


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (0,0.3) to[out=20,in=160] (1,0.3) ; \node at (0.5,0.5) {\large$+1$};
\draw[->, black!100,thick] (1,0.3) to[out=20,in=160] (2,0.3) ; \node at (1.5,0.5) {\large$+1$};
\draw[->, black!100,thick] (2,0.3) to[out=20,in=160] (3,0.3) ; \node at (2.5,0.5) {\large$+1$};

\end{tikzpicture} 

```
</center>



    {{|>}} Mit der *Addition* werden *Zahlen* zusammengezählt, was immer durch den *Additionsoperator* $+$ beschrieben wird. Der gesamte *Term* ist die sogenannte *Summe*, während der *Wert der Summe* immer auf der anderen Seite eines *Gleichheitszeichen* $=$ geschrieben wird. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Summand} + \text{Summand}}_{\text{Summe}}  & = \text{Wert der Summe} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  2+4 &= 6   \\
 \end{split}
\end{equation}  
$$


    {{|>}} Im Beispiel aus Gleichung ist zu sehen, dass die Zwei mit der Vier zusammengezählt wurde, wie es der *Additionsoperator* $+$ (gesprochen "plus") gefordert hat. Am *Zahlenstrahl* verdeutlicht wird deutlich, dass vom ersten *Summanden* aus Schritte im *Wert* vom zweiten *Summanden* nach rechts gegangen wird, um beim *Wert der Summe* zu enden. \

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\end{tikzpicture} 

```
</center>

    {{|>}} Bei der *Darstellung* am *Zahlenstrahl* wird deutlich, dass die *Addition* das *Assoziativgesetz* sowie das *Kommutativgesetz* erfüllt. \


*Kommutativgesetz* für die *Additon*: 

$$
\begin{equation}
\begin{split} 
  a+b=b+a   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des *Kommutativgesetzes* ist am *Zahlenstrahl* dargestellt:

$$
\begin{equation}
\begin{split} 
  2+4=4+2   \\
 \end{split}
\end{equation}  
$$

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\draw[->, black!100,thick] (4,0.3) to[out=20,in=160] (6,0.3) ; \node at (5,0.750) {\large$+2$};

\end{tikzpicture} 

```
</center>




*Assoziativgesetz* für die *Additon*: 

$$
\begin{equation}
\begin{split} 
  a+b+c=(a+b)+c=a+(b+c)   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des *Assoziativgesetzes* ist am *Zahlenstrahl* dargestellt:

$$
\begin{equation}
\begin{split} 
  1+1+4=1+(1+4)   \\
 \end{split}
\end{equation}  
$$  
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 1.35) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (1,-0.4) to[out=340,in=200] (2,-0.4) ; \node at (1.5,-1.00) {\large$+1$};
\draw[->, black!100,thick] (2,-0.4) to[out=340,in=200] (6,-0.4) ; \node at (4,-1.00) {\large$+4$};

\draw[->, black!100,thick] (1,0.3) to[out=20,in=160] (6,0.3) ; \node at (3.5,1.00) {\large$+1+4$};

\end{tikzpicture} 

```
</center>




    {{|>}} Für größere *Zahlen* lohnt sich eine Schreibweise, die die *Zahlen*, die *addiert* werden sollen, entsprechtend ihrer Position in der Stellenwerttafel untereinander schreibt. Dabei wird der *Wert des Terms* unter einem Strich ausgerechnet.\






<!-- data-type="none" 
data-sortable="false" -->
|  Tausender   |  Hunderter |  Zehner   |  Einer  |    |
| :----------: | :--------: | :-------: | :-----: | :-----: |
|       $1$      |      $3$     |    $4$      |    $7$    |    1. Summand    |
|       $4$      |      $2$     |    $6$      |    $5$    |    2. Summand    |
|       $5$      |      $5$     | $\textcolor{red}{1}0$ |    $\textcolor{red}{1}2$    |    Einzelziffersummen    |
|       $5$      |      $6$     |    $1$      |    $2$    |    Wert der Summe    |

    {{|>}} Außerhalb der *Stellenwerttafel* wirkt die Rechnung der schriftlichen *Addition* übersichtlicher: \


$$
\begin{equation}
\begin{split}
 1347&   \\
+4265& \\ \hline
+\hspace{0.5em}\hspace{0.5em}\textcolor{red}{1}2& \\ 
+\hspace{0.5em}\textcolor{red}{1}0\hspace{0.5em}& \\ 
+\hspace{0.5em}5\hspace{0.5em}\hspace{0.5em}& \\ 
+5\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Dies kann noch wie folgt verkürzt geschrieben werden: \

$$
\begin{equation}
\begin{split}
1347&   \\
+4265& \\ 
	\textcolor{red}{11}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


     {{|>}} Bei dieser Art der Schreibweise, werden die *Zahlen*, die entsprechend ihrer Position in der *Stellenwerttafel* untereinander stehen, einzeln *addiert*. Dabei wird immer bei der *Ziffern* der kleinsten Position in der *Stellenwerttafel* begonnen. Dies ist sind stets die *Ziffern*, die am weitesten rechts bei den *Zahlen* stehen. Wenn die *addierte* Zahl höher ist als Neun, dann wird die Eins der Zehn zur nächsten Zahlenspalte hinzugezählt. Diese Eins wird auch oft Merkeins genannt und ist in der Beispielrechnung rot eingefärbt. Der Vorteil dieser Schreibweise ist es, dass niemals höhere *Zahlen* als $9$ und $9$ *addiert* werden können. Folglich benötigt der Schüler nur ein sehr gutes Zahlenverständnis von der Zahl $0$ bis $18$ um jegliche Additionsaufgabe zu lösen. Falls mehr als zwei *Summanden* (im Beispiel sind $1337$ und $4265$ die *Summanden*) vorkommen ist es immer erlaubt in einer Nebenrechnung zunächst nur zwei *Summanden* zu *addieren* um dann anschließend die *Summe* der ersten beiden *Summanden* mit der nächsten *Summanden* zu verrechnen. \




Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt: \

!?[Addition](https://www.youtube.com/watch?v=Tn9xv6jSyyI)




##### Übungen - Addition

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ *Berechne* den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$3821 + 1347=$[[  5168  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$5962 + 8912=$[[  14874  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$2512 + 3246=$[[  5758  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$2353 + 4636=$[[  6989  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$4462 + 9543=$[[  14005  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$4156 + 3737=$[[  7893  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$9948 + 5499=$[[  15447  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$4784 + 8377=$[[  13161  ]] 
</div>


<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$8437 + 4567=$[[  13004  ]] 
</div>

</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ *Berechne* den Wert des Terms.


<section class="flex-container">
<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$3821 + 1347=$[[  5168  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$5962 + 8912=$[[  14874  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$2512 + 3246=$[[  5758  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$2353 + 4636=$[[  6989  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$4462 + 9543=$[[  14005  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$4156 + 3737=$[[  7893  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$9948 + 5499=$[[  15447  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$4784 + 8377=$[[  13161  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9745 + 3726=$[[  13471  ]] 
</div>

</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ *Berechne* den Wert des Terms.


<section class="flex-container">
<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$2634 + 5897=$[[  8531  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$7185 + 4268=$[[  11453  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$3492 + 8051=$[[  11543  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$5924 + 7813=$[[  13737  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$1847 + 9635=$[[  11482  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$4076 + 2559=$[[  6635  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$8321 + 1746=$[[  10067  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$7560 + 4983=$[[  12543  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$6214 + 3879=$[[  10093  ]] 
</div>

</section>


































































































#### Subtraktion

    {{|>}} Die *Subtraktion*<!-- title="Test" --> ist die Umkehroperation der *Addition* und wird durch den *Subtraktionsoperator* $-$ (gesprochen "minus") beschrieben. Auch bei der *Subtraktion* ist somit die Null das *neutrale Element* der *Subktration*, da eine *Subktraktion* mit Null den *Wert des Terms* nicht verändert: $1-0=1$. Auf dem Zahlenstrahl wird somit die Richtung der Schritte der Addition von links nach rechts umgekehrt: \


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (5,0.3) to[out=160,in=20] (4,0.3) ; \node at (4.5,0.5) {\large$-1$};
\draw[->, black!100,thick] (4,0.3) to[out=160,in=20] (3,0.3) ; \node at (3.5,0.5) {\large$-1$};
\draw[->, black!100,thick] (3,0.3) to[out=160,in=20] (2,0.3) ; \node at (2.5,0.5) {\large$-1$};

\end{tikzpicture} 

```
</center>




    {{|>}} Der gesamte *Term* ist die sogenannte *Differenz*, während der *Wert der Differenz* immer auf der anderen Seite eines *Gleichheitszeichen* $=$ geschrieben wird. Vom *Minuenden* wird dabei der *Subtrahend* abgezogen. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Minuend} - \text{Subtrahend}}_{\text{Differenz}}  & = \text{Wert der Differenz} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  5 - 2 = 3   \\
 \end{split}
\end{equation}  
$$




<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (7.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\Large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\LARGE$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\Huge$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 

\draw[->, black!100,thick] (5,0.3) to[out=160,in=20] (2,0.3) ; \node at (3.5,0.75) {\large$-3$};

\end{tikzpicture} 

```
</center>


    {{|>}} Wie schon an den unterschiedlichen Bezeichnungen *Minuend* sowie *Subtrahend* zu erahnen ist, ist die *Subtraktion* wieder *kommutativ* noch *assoziativ*. \


$$
\begin{equation}
\begin{split}
  a-b & \neq b-a   \\
  a-b-c & \neq a-(b-c)  \\
 \end{split}
\end{equation}  
$$



    {{|>}} Auch bei der schriftlichen *Subtraktion* werden die Ziffern startend von der kleinsten Position in der *Stellenwerttafel* bearbeitet. Dabei kann die jeweilige *Ziffer* des *Subtrahenden* größer sein als die des *Minuenden*, wie in der zweiten Ziffernspalte. Hierbei ist die Zahl $6$ statt von der $3$ von der $13$ zu *subtrahieren*. Die dazu geschriebene Zehn muss anschließend von der nächsten Ziffernspalte abgezogen werden, was durch die Merkeins in rot wieder symbolisiert wird.


$$
\begin{equation}
\begin{split}
 6337&   \\
-4265& \\ 
	\textcolor{red}{1}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
2072& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Auch bei der *Subtraktion* kann es vorkommen, dass mehrere *Subtrahenden* vorzufinden sind. Dabei sind zwei Arten von Nebenrechnungen zulässig: Die erste Variante sieht vor, dass die *Subtrahenden* nacheinander vom *Minuenden* *subtrahiert* werden, während die zweite Variante vorsieht, dass die *Subtrahenden* *addiert* werden und anschließend die *Summe* der *Subtrahenden* vom *Minuend* abgezogen werden. 

Beispiele der ersten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= (a - b) - c     \\
  874 - 125 - 236 &= (874 - 125) - 236      \\
 &\\
  a - b - c - d &= ((a - b) - c) - d      \\
  874 - 125 - 236 - 58 &= ((874 - 125) - 236) - 58      \\
 \end{split}
\end{equation}  
$$



Beispiele der zweiten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= a - (b + c)     \\
  874 - 125 - 236 &= 874 - (125 + 236)     \\
 &\\
  a - b - c - d &= a - (b + c + d)     \\
  874 - 125 - 236 - 58 &= 874 - (125 + 236 + 58)     \\
 \end{split}
\end{equation}  
$$


    {{|>}} Beim schriftlichen *Subtrahieren* kann maximal die *Ziffer* $9$ als *Subtrahend* der einzelnen Spalten auftauchen. Somit ist die größte Zahl von der abgezogen werden kann die $18$. Folglich wird lediglich ein gutes Zahlenverständnis bei der *Subtraktion* von den Zahlen $0$ bis $18$ benötigt. \










Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Subtraktion](https://www.youtube.com/watch?v=a2Nwh8npSUo)


##### Übungen - Subtraktion



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ *Berechne* den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$8642 - 3210=$[[  5432  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$9753 - 6421=$[[  3332  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$8642 - 4200=$[[  4442  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$7531 - 4210=$[[  3321  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$8640 - 4200=$[[  4440  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$9751 - 6420=$[[  3331  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$8643 - 4201=$[[  4442  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$7532 - 4210=$[[  3322  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9754 - 6421=$[[  3333  ]] 
</div>

</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 2:__ *Berechne* den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$8427 - 3958=$[[  4469  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$7534 - 2867=$[[  4667  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$9615 - 4879=$[[  4736  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$7251 - 3684=$[[  3567  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$8542 - 4968=$[[  3574  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$6385 - 2796=$[[  3589  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$9724 - 6839=$[[  2885  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$8153 - 4297=$[[  3856  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$7461 - 3578=$[[  3883  ]] 
</div>


</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 3:__ *Berechne* den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$9625 - 3814=$[[  5811  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$8742 - 5296=$[[  3446  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$7538 - 2469=$[[  5069  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$6804 - 3597=$[[  3207  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$5917 - 2834=$[[  3083  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$8421 - 5796=$[[  2625  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$7250 - 4189=$[[  3061  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$6398 - 2547=$[[  3851  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9573 - 6842=$[[  2731  ]] 
</div>

</section>



































































































#### Multiplikation


    {{|>}} Die *Multiplikation* ist die erste abkürzende Schreibweise, die in der Schule eingeführt wird. Dabei wird die zum Beispiel Rechnung $3+3+3+3$ abgekürzt als $4 \cdot 3$ geschrieben, also vier mal die Drei, was durch den *Multiplikationsoperator* $\cdot$ beschrieben wird. Werden also gleichwertige *Summanden* *aufaddiert*, dann kann dies durch die *Multiplikation* im Sinne der Anzahl der *Summanden* mal dem Wert des *Summanden* beschrieben werden. Folglich werden die beiden *Faktoren* miteinander *multipliziert* und bilden ein *Produkt*, während der *Wert des Produkts* auf der anderen Seite des *Gleichheitszeichen* steht.


$$
\begin{equation}
\begin{split}
\underbrace{\text{Faktor} \cdot \text{Faktor}}_{\text{Produkt}}  & = \text{Wert des Produkts} \\ 
 \end{split}
\end{equation}  
$$



Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  5 \cdot 4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Am Beispiel kann schon erkannt werden, dass die Anzahl der gleichwertigen *Summanden* und der Wert des *Summanden* vertauscht werden kann. \


$$
\begin{equation}
\begin{split} 
  5 + 5 +5+5 &= 20   \\
  4+4+4+4+4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Diese Rechnung kann ebenfalls geometrisch interpretiert werden, in dem mehrfache Schrittfolgen gleicher Werte am *Zahlenstrahl* vollzogen oder eine zweidimensionale *rechteckige* Anordnung von *Einheitsflächen* betrachtet wird. Beide Interpretationen werden am Beispiel $2 \cdot 4$ dargestellt: \




<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-1.25) {};
  \node at (10.5, 0.95) {};

    \draw[->, black!100, thick] (0,0) --  (9.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 
\draw[-, black!100,thick]  ( 9,0.1) -- ( 9,-0.1) node[below] {\large$9$}; 

\draw[->, black!100,thick] (0,0.3) to[out=20,in=160] (2,0.3) ; \node at (1,0.65) {\large$+2$};
\draw[->, black!100,thick] (2,0.3) to[out=20,in=160] (4,0.3) ; \node at (3,0.65) {\large$+2$};
\draw[->, black!100,thick] (4,0.3) to[out=20,in=160] (6,0.3) ; \node at (5,0.65) {\large$+2$};
\draw[->, black!100,thick] (6,0.3) to[out=20,in=160] (8,0.3) ; \node at (7,0.65) {\large$+2$};

\end{tikzpicture} 

```
</center>


<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=2] 

  \node at (-0.75,-.5) {};
  \node at (10.5, 2.5) {};


\begin{scope}[yshift=1cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=0.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  



\begin{scope}[xshift=8cm]
\begin{scope}[yshift=0cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=0.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=1cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  

\begin{scope}[yshift=1.5cm]
\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\end{scope}  
\end{scope}  

\end{tikzpicture} 

```
</center>


    {{|>}} Es wird deutlich, dass die *Multiplikation* das *Assoziativgesetz* sowie das *Kommutativgesetz* erfüllt. \


*Kommutativgesetz* für die *Multiplikation*: 

$$
\begin{equation}
\begin{split} 
  a \cdot b=b \cdot a   \\
 \end{split}
\end{equation}  
$$


*Assoziativgesetz* für die *Multiplikation*: 

$$
\begin{equation}
\begin{split} 
  a \cdot b \cdot c = (a \cdot b) \cdot c = a \cdot (b \cdot c)  \\
 \end{split}
\end{equation}  
$$


    {{|>}} Die schriftliche *Multiplikation* sieht Zahlen von $0$ bis $9 \cdot 9 = 81$ vor, da auch hier die einzelnen *Ziffern* der Zahl nacheinander bearbeitet werden. Die *Multiplikation* kann in mehreren Schritten aus der *Addition* heraus eingeführt werden. Hierbei wird das Beispiel $3463 \cdot 5$ betrachtet:  \



$$
\begin{equation}
\begin{split}
3463 &   \\
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
	\textcolor{red}{231}\hspace{0.5em}&  \\ \hline
17315& \\
 \end{split}
\end{equation}  
$$

$$
\begin{equation}
\begin{split}
3463 \cdot 5 &   \\ \hline
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}15\textcolor{red}{}& \\ 
+\hspace{0.5em}\hspace{0.5em}30\textcolor{red}{0}& \\ 
+\hspace{0.5em}20\textcolor{red}{00}& \\ 
+15\textcolor{red}{000}& \\   \hline
17315& \\
 \end{split}
\end{equation}  
$$


$$
\begin{equation}
\begin{split}
3_{\textcolor{red}{2}}4_{\textcolor{red}{3}}6_{\textcolor{red}{1}}3 \cdot 5 &   \\ \hline 
17315& \\
 \end{split}
\end{equation}  

$$



    {{|>}} Hierbei wird deutlich, dass die Schreibweisen sich verkürzen, sodass bei der dritten Variante die Merkzahlen im *Index* der Ziffern des ersten *Faktors* geschrieben wurden. Dies ist nicht mehr übersichtlich genug, wenn beide *Faktoren* über mehrere Ziffern verfügen, sodass dann die Merkzahlen entweder seperat niedergeschrieben oder im Kopf behalten werden müssen. \


$$
\begin{equation}
\begin{split}
1337 \cdot \textcolor{blue}{2}\textcolor{green}{3} &   \\ \hline
\textcolor{blue}{2674}\textcolor{red}{0}& \\ 
+\textcolor{red}{0}\textcolor{green}{3011}& \\ \hline
29751& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Aus der Gleichung ist zu erkennen, dass die $2$ auf die Zahl $7$ wirkt und danach auf die $3$. Dabei wird die Zehn der Rechnung $2 \cdot 7 = 14$ mit zur nächsten Ziffer von rechts gezählt. Das Ergebnis wird so notiert, dass die am weitest stehende *Ziffer* direkt unter der betrachten Zahl steht (im Beispiel unter der $2$). Anschließend wird dies mit der nächsten *Ziffer*, hier die Drei, wiederholt. Die untereinander geschriebenen Zahlen werden dann *addiert*, sodass sich der Wert des *Terms* ergibt. \





    {{|>}} Da die *Multiplikation* die abkürzende Schreibweise der *Addition* von gleichwertigen *Summanden* ist, ergibt sich daraus die erste *Vorrangsregel*: Punktrechnungen werden vor Strichrechnungen durchgeführt. \

$$
\begin{equation}
\begin{split}
\textcolor{blue}{3 \cdot 5} + \textcolor{red}{2 \cdot 8} & = \textcolor{blue}{5+5+ 5} + \textcolor{red}{8+8}   \\
 & = \textcolor{blue}{15} + \textcolor{red}{16}   \\ 
 & = 31   \\ 
 \end{split}
\end{equation}  
$$





Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Multiplikation](https://www.youtube.com/watch?v=Gh4Zfdlq7K0)



##### Übungen - Multiplikation




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ *Berechne* den Wert des Terms.

<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$3245 \cdot 7=$[[  22715  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$4862 \cdot 9=$[[  43758  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$7513 \cdot 4=$[[  30052  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$6294 \cdot 6=$[[  37764  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$5921 \cdot 8=$[[  47368  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$8472 \cdot 5=$[[  42360  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$4386 \cdot 3=$[[  13158  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$7154 \cdot 2=$[[  14308  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9643 \cdot 7=$[[  67501  ]] 
</div>

</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ *Berechne* den Wert des Terms.

<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$3245 \cdot 12=$[[  38940  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$4862 \cdot 27=$[[  131274  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$7513 \cdot 34=$[[  255442  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$6294 \cdot 46=$[[  289524  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$5921 \cdot 53=$[[  313813  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$8472 \cdot 65=$[[  550680  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$4386 \cdot 72=$[[  315792  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$7154 \cdot 84=$[[  600936  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9643 \cdot 91=$[[  877513  ]] 
</div>

</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ *Berechne* den Wert des Terms.

<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$324 \cdot 187=$[[  60588  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$486 \cdot 273=$[[  132678  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$751 \cdot 342=$[[  256782  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$629 \cdot 468=$[[  294372  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$592 \cdot 531=$[[  314952  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$847 \cdot 659=$[[  558173  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$438 \cdot 726=$[[  318228  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$715 \cdot 843=$[[  602145  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$964 \cdot 917=$[[  883388  ]] 
</div>

</section>



































































































#### Division

    {{|>}} Die *Division* stellt die umkehrende Frage der *Multiplikation*: "Wie oft passt die Zahl in die andere Zahl?". Bei der *Division* wird der *Dividend* durch den *Divisor* *dividiert*, was immer durch den *Divisionsoperator* $:$ beschrieben wird. Der gesamte *Term* ist der sogenannte *Quotient*, während der *Wert des Quotienten* auf der anderen Seite des *Gleichheitszeichen* $=$ geschrieben wird. \


$$
\begin{equation}
\begin{split}
\underbrace{\text{Dividend} : \text{Divisor}}_{\text{Quotient}}  & = \text{Wert des Quotienten} \\ 
 \end{split}
\end{equation}  
$$

    Da es sich um die Umkehrung der *Multiplikation* handelt, sollten auch wiederum alle Zahlen von $0$ bis $81$ beherrscht werden. Diese Umkehrung wird besonders deutlich, wenn die *Multiplikation* wie in dem folgenden Beispiel verwendet wird.






Als Beispiel mit *Zahlen*:

$$

\begin{equation*}
\begin{split}
8123 \cdot 3 &   \\ \hline
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\textcolor{red}{9}& \\ 
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\textcolor{orange}{6}0& \\ 
+\hspace{0.5em}\hspace{0.5em}\textcolor{green}{3}00& \\ 
+\textcolor{blue}{24}000& \\   \hline
24369& \\
 \end{split}
\end{equation*}  

\hspace{5em}

\begin{equation*}
\begin{split} 
  24369:3 &= 8123   \\
  \underline{-\textcolor{blue}{24}} \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  03 \hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{green}{3}} \hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  06 \hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{orange}{6}} \hspace{0.5em}\hspace{0.85em}\hspace{0.5em} &   \\
  09 \hspace{0.85em}\hspace{0.5em} &   \\
  \underline{-\hspace{0.5em}\textcolor{red}{9}} \hspace{0.85em}\hspace{0.5em} &   \\
  0 \hspace{0.85em}\hspace{0.5em} &   \\
 \end{split}
\end{equation*}  
$$


    {{|>}} Bei der schriftlichen *Division* wird zunächst gefragt "Wie oft passt der *Divisor* ($3$) in die erste Ziffer des *Dividenden* ($2$)?" Die Antwort wäre "`Null mal"' und somit ist die Null die erste *Ziffer* des *Wert* des *Terms*, dem sogenannten *Quotienten*. Anschließend wir die gefundene *Ziffer* des *Quotienten* mit dem *Divisor* *multipliziert* und dieser *Wert* dieser Rechnung von der ersten *Ziffer* *subtrahiert*. Dann wird die nächste *Ziffer* zur Betrachtung mit nach unten gezogen (im Beispiel die Zahl $4$) und nun die sich danach immer wiederholende Frage "Wie oft passt der *Divisor* in diese Zahl?" gestellt. Die Antwort wird beim *Wert* des *Terms* notiert (im Beispiel $8$) und diese *Ziffer* des *Quotienten* dann wieder *multipliziert* mit dem *Divisor* von der besagten *Zahl* *subtrahiert* und anschließend die nächste *Ziffer* des *Dividenden* zur Betrachtung nach unten gezogen. Dieses Prozedur wiederholt sich solange bis alle *Zahlen* betrachtet wurden. \



    {{|>}} Bei höheren *Zahlen* im *Divisor* lohnt es sich diesen in zwei *Zahlen* zu zerlegen. So kann zum Beispiel der *Divisor* $72$ in zwei *Divisoren* $8$ und $9$ zerlegt werden. Dann muss zu erst durch eine *Zahl* *dividiert* werden und anschließend der *Quotient* aus der ersten *Division* durch die zweite *Zahl* *dividiert* werden. Da die *Division* mit am zeitaufwendigsten ist, wird später die *Bruchrechnung* eingeführt, welche eine *Division* bis zum *Wert* des *Terms* hin herauszögern kann.

 



Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Division](https://www.youtube.com/watch?v=KkDMx59XTAs)


##### Übungen - Division



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ *Berechne* den Wert des Terms.


<section class="flex-container">


<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$8424 : 4=$[[  2106  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$9360 : 6=$[[  1560  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$7280 : 5=$[[  1456  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$8643 : 3=$[[  2881  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$9152 : 8=$[[  1144  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$6727 : 7=$[[  961  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$7944 : 4=$[[  1986  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$8580 : 5=$[[  1716  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$9990 : 9=$[[  1110  ]] 
</div>



</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ *Berechne* den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$85344 : 8=$[[  10668  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$91872 : 9=$[[  10208  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$76440 : 6=$[[  12740  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$84270 : 7=$[[  12039  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$69336 : 4=$[[  17334  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$92448 : 8=$[[  11556  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$81648 : 3=$[[  27216  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$73584 : 6=$[[  12264  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$88209 : 9=$[[  9801  ]] 
</div>

</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 3:__ *Berechne* den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
$a)\;\;$

<!-- data-solution-button="5"-->
$87552 : 16=$[[  5472  ]] 
</div>

<div class="flex-child">
$b)\;\;$

<!-- data-solution-button="5"-->
$94248 : 18=$[[  5236  ]] 
</div>

<div class="flex-child">
$c)\;\;$

<!-- data-solution-button="5"-->
$86184 : 24=$[[  3591  ]] 
</div>

<div class="flex-child">
$d)\;\;$

<!-- data-solution-button="5"-->
$91584 : 27=$[[  3392  ]] 
</div>

<div class="flex-child">
$e)\;\;$

<!-- data-solution-button="5"-->
$88452 : 36=$[[  2457  ]] 
</div>

<div class="flex-child">
$f)\;\;$

<!-- data-solution-button="5"-->
$97632 : 28=$[[  3480  ]] 
</div>

<div class="flex-child">
$g)\;\;$

<!-- data-solution-button="5"-->
$89424 : 45=$[[  1987  ]] 
</div>

<div class="flex-child">
$h)\;\;$

<!-- data-solution-button="5"-->
$98784 : 48=$[[  2058  ]] 
</div>

<div class="flex-child">
$i)\;\;$

<!-- data-solution-button="5"-->
$91854 : 54=$[[  1701  ]] 
</div>

</section>




































































































##### Übungen - Arithmetik mit natürlichen Zahlen





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Der Summand $14$ wird mit $19$ addiert.\
[[  33  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Die Zahl $17$ ist der Minuend, während die Zahl $11$ der Subtrahend ist.\
[[  6   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Der Quotient wird aus dem Divisor $84$ und dem Dividenden $14$ gebildet.\
[[  6   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Der Term besteht aus den Faktoren $4$, $6$ und $3$.\
[[  72  ]]
</div>
</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Der Divisor ist $81$ und der Dividend $27$. \
[[  3   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Eine Summe besteht aus den Summanden $12$, $34$ und $26$.\
[[  72  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Es wird ein Produkt aus $11$ und $12$ gebildet. \
[[  132 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Der Subtrahend einer Differenz ist $19$, während der Wert des Miuenden $45$ beträgt.\
[[  26  ]]

</div>
</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Von der Summe aus $44$ und $18$ wird $29$ subtrahiert.\
[[  33  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Der ganzzahlige Quotient besteht aus den Zahlen $5$ und $70$.\
[[  14  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Das Produkt der Zahlen $9$ und $4$ wird mit $5$ multipliziert.\
[[  180 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Die positive Differenz aus $38$ und $57$ wird um $14$ addiert.\
[[  33  ]]

</div>
</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Ein Produkt aus $7$ und $8$ wird durch $4$ dividiert.\
[[  14  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Der Term besteht aus den Faktoren $2$, $6$, $3$ und  $5$.\
[[  180 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Der Dividend $6$ und der Divisor $78$ bilden ein Produkt mit $8$.\
[[  104 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Der Subtrahend $19$ und der Minuend $73$ bilden eine Differenz, die mit $17$ addiert wird.\
[[  71  ]]

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Die positive Differenz aus $23$ und $47$ wird mit $4$ multipliziert. \
[[  96  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Der Term ist ein Quotient mit dem Dividenden $7$, während der Divisor sich aus der Summe von $23$ und $33$ bildet. \
[[  8   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Die Summanden $13$, $54$ und $23$ werden mit $11$ multipliziert. \
[[  990 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Die Summe aus $8$ und $7$ wird mit der Differenz aus dem Minuenden $19$ und den Subtrahenden $14$ multipliziert. \
[[  75  ]]

</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** den Wert des beschriebenen Terms **an**. 

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Ein Produkt besteht aus den Summen aus $4$ und $3$ sowie $6$ und $2$. \
[[  144 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Der Minuend ist die positive Differenz aus $95$ und $33$, während der Subtrahend $27$ ist. \
[[  35  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Der Divisor ist die Summe aus $41$ und $54$, während der Dividend aus der positiven Differenz aus $83$ und $78$ besteht. \
[[  19  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Die ganzzahligen Quotienten aus $56$ und $8$ sowie $84$ und $12$ werden miteinander multipliziert.\
[[  42  ]]

</div>
</section>






<!-- Grund0015 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  14   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   6   ]] " | " [[   8   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 4 "      |      " 2 "      |      " 6 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  28   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  12   ]] " | " [[  16   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 5 "      |      " 7 "      |      " 9 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




<!-- Grund0016 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.




__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  71   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  33   ]] " | " [[   38  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 12 "     |      " 21 "     |      " 17 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  161  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  94   ]] " | " [[  67   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 51 "     |      " 43"      |      " 24 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




<!-- Grund0017 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 9:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.




<!-- data-solution-button="5"-->
__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[  44   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   19  ]] " |      " 25 "     |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 11 "     |      " 8 "      | " [[  17   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- data-solution-button="5"-->
__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " 82 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  45   ]] " |     " 37 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
| " [[  21   ]] " | " [[  24   ]] " |      " 13 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0018 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 10:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





<!-- data-solution-button="5"-->
__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " 73 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  36   ]] " |     " 37 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 17 "      | " [[  19   ]] " | " [[  18   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- data-solution-button="5"-->
__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " 98 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " 41 "      | " [[  57   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 28 "      | " [[  13   ]] " | " [[  44   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0019 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 11:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.




__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                           +-----------------+
                           |                 |
                           |     " 63 "      |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  28   ]] " |     " 35 "      |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  13   ]] " |      " 15 "     | " [[  20   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   7   ]] " |      " 6 "      | " [[   9   ]] " | " [[  11   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                           +-----------------+
                           |                 |
                           | " [[ 136   ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 62 "     | " [[  74   ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 30 "     | " [[  32   ]] " |      " 42 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  17   ]] " |     " 13 "      | " [[  19   ]] " | " [[  23   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0020 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 12:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                                    +-----------------+
                                    |                 |
                                    |     " 155 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  67   ]] " |     " 88 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  32   ]] " |      " 35 "     | " [[  53   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  19   ]] " |     " 13 "      | " [[  22   ]] " |     " 31 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  12   ]] " |      " 7 "      | " [[   5   ]] " | " [[  17   ]] " | " [[  14   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                                    +-----------------+
                                    |                 |
                                    |     " 181 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  87   ]] " | " [[  94   ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  40   ]] " |     " 47 "      | " [[  47   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  19   ]] " | " [[  21   ]] " |     " 26 "      | " [[  21   ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  10   ]] " |      " 9 "      | " [[  12   ]] " | " [[  14   ]] " |      " 7 "      |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0021 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  48   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   6   ]] " | " [[   8   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 3 "      |      " 2 "      |      " 4 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  480  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  24   ]] " | " [[  20   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 6 "      |      " 4 "      |      " 5 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0022 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 14:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[ 1792  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  56   ]] " | " [[   32  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 7 "      |      " 8 "      |      " 4 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  2646 ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  42   ]] " | " [[  63   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 6 "      |      " 7"       |      " 9 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0023 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 15:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.




__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  288  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   24  ]] " |      " 12 "     |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 6 "      |      " 4 "      | " [[   3   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  | " [[ 1620  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  30   ]] " |     " 54 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 5 "      | " [[   6   ]] " |      " 9 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0024 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 16:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  |      " 0 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   0   ]] " |     " 156 "     |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
| " [[   0   ]] " |     " 12 "      | " [[  13   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                  +-----------------+
                  |                 |
                  |     " 168 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " 12 "      | " [[  14   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 6  "      | " [[   2   ]] " | " [[   7   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




<!-- Grund0025 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 17:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.






__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                           +-----------------+
                           |                 |
                           |     " 864 "     |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  12   ]] " |     " 72 "      |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[   2   ]] " |      " 6 "      | " [[  12   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   1   ]] " |      " 2 "      | " [[   3   ]] " | " [[   4   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                           +-----------------+
                           |                 |
                           | " [[ 108   ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 18 "     | " [[   6   ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 6 "      | " [[  3    ]] " |      " 2  "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   2   ]] " |      " 3 "      | " [[   1   ]] " | " [[   2   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



<!-- Grund0026 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 18:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.






__$a)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                                    +-----------------+
                                    |                 |
                                    |   " 23328 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  432  ]] " |     " 54 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  24   ]] " |      " 18 "     |  " [[  3   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[   4   ]] " |      " 6 "      | " [[   3   ]] " |      " 1 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[   2   ]] " |      " 2 "      | " [[   3   ]] " | " [[   1   ]] " | " [[   1   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"-->
``` ascii
                                    +-----------------+
                                    |                 |
                                    | " [[   0   ]] " |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  960  ]] " | " [[   0   ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  |     " 24 "      |     " 40 "      | " [[   0   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[   6   ]] " | " [[   4   ]] " |     " 10 "      | " [[   0   ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[   3   ]] " |      " 2 "      | " [[   2   ]] " | " [[   5   ]] " |      " 0 "      |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```





<!-- Grund0027 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 19:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $8$ [[$+$|($-$)|$\cdot$|$:$]] $2$ [[$+$|$-$|($\cdot$)|$:$]] $3 = 2$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $5$ [[$+$|$-$|($\cdot$)|$:$]] $4$ [[($+$)|$-$|$\cdot$|$:$]] $8$ [[$+$|$-$|($\cdot$)|$:$]] $7 = 76$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $48$ [[$+$|$-$|$\cdot$|($:$)]] $8$ [[$+$|($-$)|$\cdot$|$:$]] $5 = 1$

</div>
</section>






<!-- Grund0028 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 20:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $8$ [[$+$|($-$)|$\cdot$|$:$]] $2$ [[$+$|$-$|($\cdot$)|$:$]] $3 = 2$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $5$ [[$+$|$-$|($\cdot$)|$:$]] $4$ [[($+$)|$-$|$\cdot$|$:$]] $8$ [[$+$|$-$|($\cdot$)|$:$]] $7 = 76$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $48$ [[$+$|$-$|$\cdot$|($:$)]] $8$ [[$+$|($-$)|$\cdot$|$:$]] $5 = 1$

</div>
</section>




<!-- Grund0029 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 21:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $26$ [[$+$|($-$)|$\cdot$|$:$]] $12$ [[($+$)|$-$|$\cdot$|$:$]] $7 = 218$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $96$ [[$+$|$-$|$\cdot$|($:$)]] $8$ [[($+$)|$-$|$\cdot$|$:$]] $45$ [[$+$|$-$|$\cdot$|($:$)]] $9 = 17$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $4$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $5$ [[$+$|($-$)|$\cdot$|$:$]] $13 = 47$

</div>
</section>




<!-- Grund0030 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 22:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $97$ [[$+$|($-$)|$\cdot$|$:$]] $4$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $6 = 25$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $97$ [[$+$|($-$)|$\cdot$|$:$]] $4$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $6 = 25$

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $7$ [[$+$|$-$|($\cdot$)|$:$]] $5$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|$-$|$\cdot$|($:$)]] $105 = 1$

</div>
</section>




<!-- Grund0031 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 23:__ **Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \textcolor{red}{5} \cdot 3 = 15$ \
[[    Faktor          ]]


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \textcolor{red}{5 + 6} = 11 $ \
[[    Summe           ]]


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 85:\textcolor{red}{13} = 5$ \
[[        Dividend    ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 27-12 = \textcolor{red}{15}$ \
[[ Wert der Differenz ]]

</div>
</section>


<!-- Grund0032 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 24:__ **Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \textcolor{red}{7} + 9 = 16$ \
[[    Summand         ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \textcolor{red}{9}-7 = 2 $ \
[[    Minuend         ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \textcolor{red}{55}:11 = 11$ \
[[        Divisor     ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 16 = \textcolor{red}{2 \cdot 8}$ \
[[          Produkt   ]]

</div>
</section>


<!-- Grund0033 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 25:__ **Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 9 \cdot 6 = \textcolor{red}{54}$ \
[[ Wert des Produkts  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \textcolor{red}{18:6} = 3 $ \
[[    Quotient        ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 63-\textcolor{red}{34} = 29$ \
[[      Subtrahend    ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 32 = \textcolor{red}{72-40}$ \
[[          Differenz ]]

</div>
</section>


<!-- Grund0034 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 26:__ **Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \textcolor{red}{5} - 3 = 2$ \
[[    Minuend         ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \textcolor{red}{7 \cdot 3} = 21 $ \
[[    Produkt         ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 45:9=\textcolor{red}{5}$ \
[[ Wer des Quotienten ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \textcolor{red}{15}+12 = 27$ \
[[      Summand       ]]

</div>
</section>


<!-- Grund0035 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 27:__ **Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \textcolor{red}{18+24} = 42$ \
[[    Summe          ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \textcolor{red}{12} \cdot 7 = 84 $ \
[[       Faktor      ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \textcolor{red}{36} = 24+12$ \
[[ Wert der Summe    ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \textcolor{red}{63-48}=15$ \
[[         Differenz ]]

</div>
</section>


<!-- Grund0036 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 28:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   5   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, red!100,ultra thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$45$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$60$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  15   ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$14$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$18$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$38$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   30  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0)  --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$120$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$156$}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$192$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  168  ]]

</div> 
</section>




<!-- Grund0037 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 29:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$8$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$16$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   48  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$150$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  100  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, red!100,ultra thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$77$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$110$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   44  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0)  --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$72$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$120$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  104  ]]

</div> 
</section>


<!-- Grund0038 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 30:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$5$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$10$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   30  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, red!100,ultra thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$56$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  42   ]]


</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$27$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$33$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   31  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0)  --  (6.5,0) node[right] {\large$x$};

\draw[-, red!100,ultra thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$116$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$128$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  104  ]]

</div> 
</section>



 
<!-- Grund0039 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 31:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$3$};
\draw[-, red!100,ultra thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$12$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   6   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$51$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$102$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  102  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, red!100,ultra thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ 57$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ 66$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   48  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0)  --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ 16$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, red!100,ultra thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$96$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   48  ]]

</div> 
</section>

 
<!-- Grund0040 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 32:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$7$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$42 $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  35   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[|->, black!100, thick] (0,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, red!100,ultra thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ 78$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  39   ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (6.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$34$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$36$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   46  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (7.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0)  --  (6.5,0) node[right] {\large$x$};

\draw[-, red!100,ultra thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ 45$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ 61$}; 

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[   37  ]]

</div> 
</section>





<!-- Grund0041 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 33:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 65:7 - 16:7 =$ [[  7  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 23:9 + 58:9 =$ [[  9  ]]

</div>
</section>











<!-- Grund0042 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 34:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 29:11 + 70:11 =$ [[  9  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 74:8 - 26:8 =$ [[  6  ]]

</div>
</section>







<!-- Grund0043 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 35:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 75:13 + 55:13 =$ [[  10  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 148:12 + 64:12 =$ [[  7  ]]

</div>
</section>







<!-- Grund0044 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 36:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 71:5 + 24:5 =$ [[  19  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 47:4 - 23:4 =$ [[  6  ]]

</div>
</section>








<!-- Grund0045 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 37:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (2,0.25)  to[out=20,in=160] (5,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  2+3   ]] $= 5$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (1,0.25)  to[out=20,in=160] (7,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  1+6   ]] $= 7$

</div>
</section>







<!-- Grund0046 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 38:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (5,0.25)  to[out=20,in=160] (7,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  5+2   ]] $= 7$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (3,0.25)  to[out=20,in=160] (8,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  3+5   ]] $= 8$

</div>
</section>







<!-- Grund0047 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 39:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (1,0.25)  to[out=20,in=160] (4,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  1+3   ]] $= 4$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (6,0.25)  to[out=20,in=160] (8,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  6+2   ]] $= 8$

</div>
</section>







<!-- Grund0048 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 40:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (7,0.25)  to[out=160,in=20] (2,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  7-5   ]] $= 2$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (8,0.25)  to[out=160,in=20] (1,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  8-7   ]] $= 1$

</div>
</section>







<!-- Grund0049 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 41:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (6,0.25)  to[out=160,in=20] (5,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  6-1   ]] $= 5$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (7,0.25)  to[out=160,in=20] (3,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  7-4   ]] $= 3$

</div>
</section>







<!-- Grund0050 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 42:__ **Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (8,0.25)  to[out=160,in=20] (2,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  8-6   ]] $= 2$

</div>

<div class="flex-child">
<br>
__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 1.5) {};

    \draw[|->, black!100, thick] (0,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$0$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$1$};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$2$};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$3$}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$5$}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$6$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$7$}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$8$}; 

\draw[thick, ->] (3,0.25)  to[out=160,in=20] (0,0.25);

\end{tikzpicture}

```
</center>

<!-- data-solution-button="5"-->
[[  3-3   ]] $= 0$

</div>
</section>







<!-- Grund0051 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 43:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  7 \cdot 8 - 14  =$ [[  42  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 2 + 3 \cdot 9  =$ [[  29  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  4 \cdot  5 + 6 \cdot 3  =$ [[  38  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  72 : 9 + 15  =$ [[  23  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  48 - 36:4  =$ [[  39  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 41:7 + 15:7  =$ [[  56  ]]

</div>
</section>







<!-- Grund0052 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 44:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  7 \cdot 4 - 3 \cdot 6 =$ [[  10  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  14 \cdot 9 + 6  =$ [[  130  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7 + 3 \cdot 17  =$ [[  58  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 55:5 - 42:6  =$ [[  4  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  11 \cdot 25 - 144:18  =$ [[  267  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 16 \cdot 5 - 51   =$ [[  29  ]]

</div>
</section>







<!-- Grund0053 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 45:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 6 \cdot 4 \cdot 3  - 33 =$ [[  39  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 83 - 5 \cdot 9  =$ [[  38  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 63 : 7 + 75:5  =$ [[  24  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 5 \cdot 7 + 32:8  =$ [[  39  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ (24+36) \cdot 3  =$ [[  180  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  (2 + 9) \cdot ( 16 - 7)  =$ [[  99  ]]

</div>
</section>








<!-- Grund0054 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 46:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2 \cdot (8 + 3) - 5  =$ [[  17  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 17 \cdot 4 + 35  =$ [[  103  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  84:14 + 65:13  =$ [[  11  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 58 - 4 \cdot 8  =$ [[  26  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 47:8 + 41:8  =$ [[  11  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  5 \cdot 7 \cdot 3  - 9 =$ [[  96  ]]

</div>
</section>








<!-- Grund0055 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 47:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 96:8 + 3 \cdot 5  =$ [[  27  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ (9 + 2 \cdot 4) \cdot 3 =$ [[  51  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 6 \cdot 9 - 5 \cdot 5  =$ [[  38  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 13 + 7 \cdot 8  =$ [[  69  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 73 - 13 \cdot 4  =$ [[  21  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 108:12 + 85:5  =$ [[  26  ]]

</div>
</section>










<!-- Grund0056 -->
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 48:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  105:5 - 4 \cdot 3  =$ [[  9  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 63 - 3 \cdot 9  =$ [[  36  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 8 \cdot 9 + 6 \cdot 7  =$ [[  112  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 24 + 6 \cdot 14  =$ [[  108  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 53:8 + 19:8  =$ [[  9  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 124 - 15 \cdot 7  =$ [[  19  ]]

</div>
</section>







??[](https://bildung-bedeutet-freiheit.de/viervieren/index.html)







<!-- data-solution-button="5"-->

<section class="flex-container">



</section>



































































































### Teilbarkeiten








{{|>}} Die Untersuchung von Zahlen auf ihre *Teilbarkeit*, lässt den Umgang mit großen Zahlen verbessern. Besonders in der Informatik ist die Zerlegung von Zahlen in ihre *Faktoren* und sogar auf ihre elementarsten *Faktoren*, den *Primzahlen*, von besonderer Bedeutung. Folgende Regeln, um *Teiler* zu ermitteln, existieren:



{{|>}} •  *Summen*- und *Differenzregel*: Wenn eine Zahl zwei andere Zahlen *teilt*, dann *teilt* sie auch die *Summe* bzw. die *Differenz* dieser Zahlen.
Beispiel: $720:6 + 18:6 = 738:6$
  

{{|>}} •  *Teilerregel*: Wenn eine Zahl $a$ *Teiler* einer Zahl $b$ ist, dann ist auch jeder *Teiler* von $a$ *Teiler* von $b$.
Beispiel: $4$ ist ein *Teiler* von $12$ und $12$ ein *Teiler* von $720$, also ist $4$ auch ein *Teiler* von $720$.
  


{{|>}} • Endstellenregeln:    

{{|>}} 
- Eine Zahl ist durch $10$ *teilbar*, wenn ihre letzte *Ziffer* eine $0$ ist. Beispiel: $436360$.
- Eine Zahl ist durch $5$ *teilbar*, wenn ihre letzte *Ziffer* eine $5$ oder eine $0$ ist. Beispiel: $436360$.
- Eine Zahl ist durch $2$ *teilbar*, wenn ihre letzte *Ziffer* eine gerade *Ziffer* ist. Beispiel: $436360$.
- Eine Zahl ist durch $4$ *teilbar*, wenn ihre letzten beiden *Ziffern* eine durch $4$ *teilbare* Zahl darstellen. Beispiel: $436360$. 
- Eine Zahl ist durch $8$ *teilbar*, wenn ihre letzten drei *Ziffern* eine durch $8$ *teilbare* Zahl darstellen. Beispiel: $436360$.




{{|>}} • *Quersummenregeln*: 

{{|>}} 
- Eine Zahl ist durch $3$ *teilbar*, wenn ihre *Quersumme* durch $3$ *teilbar* ist. Beispiel: $36369 \;\Rightarrow\; 3+6+3+6+9=27$, $3$ ist ein Teiler von $27$ und somit auch $36360$.
- Eine Zahl ist durch $9$ *teilbar*, wenn ihre *Quersumme* durch $9$ *teilbar* ist. Beispiel: $36369 \;\Rightarrow\; 3+6+3+6+9=27$, $9$ ist ein Teiler von $27$ und somit auch $36360$.



{{|>}} • *Alternierende* *Ziffernsumme*:
Eine Zahl ist durch $11$ *teilbar*, wenn die *alternierende* *Ziffernsumme* durch $11$ *teilbar* ist.
Beispiel $5938394$: *alternierende* *Ziffernsumme*: $5-9+3-8+3-9+4 = -11$. Die *negative* $11$ ist auch durch $11$ *teilbar*, also ist $11$ auch ein *Teiler* von $5938394$. 


{{|>}} • Regel für die Sieben:
Wenn die *Differenz* der Zahl ohne die letzte *Ziffer* und das doppelte der letzten *Ziffer* durch $7$ *teilbar* ist, dann ist auch die gesamte Zahl durch $7$ *teilbar*.
Beispiel: $665875$ wird zerlegt in $66587$ und $5$, verrechnet und das Prozedere anschließend solange wiederholt bis die *Teilbarkeit* durch das Einmaleins zu entweder zu erkennen oder auszuschließen ist.

$$
\begin{align*}
   665875 \;\Rightarrow\; 66587 - 2\cdot 5 &= 66577 \\
                          6657 - 2\cdot 7 &= 6643 \\
                          664 - 2\cdot 3 &= 658 \\
                          65 - 2\cdot 8 &= 49 \\
                          \Rightarrow \; 7|49 \;&\Rightarrow 7|665875
  \end{align*}
$$





{{|>}} Eine besondere Eigenschaft zu den *Teilbarkeitsregeln* stellt die Zahl $9$ dar, wobei die Zahl $9$ ist ein Teiler einer beliebigen Zahl $z$ von der die Quersumme der Zahl $Q(z)$ subtrahiert wurde.


{{|>}} • *Primzahlzerlegung*: Jede Zahl kann so lange zerlegt werden bis sie nur noch durch *Faktoren* aus *Primzahlen* dargestellt wird. Dabei werden alle Regeln angewendet. Beispiel: $1576575 = 5 \cdot 7 \cdot 3 \cdot 3 \cdot 5 \cdot 11 \cdot 13 \cdot 7$. Hier wird auch deutlich, dass noch wesentlich mehr *Teilbarkeitsregeln* existieren - besonders für *Primzahlen*. 


{{|>}} • Eine besondere Rolle für die weiteren Regeln spielt die *Quersumme* und die alternierende *Quersummen*. Bei einer *Quersumme* $Q_k(z)$ werden die einzelnen *Ziffern* einer Zahl *aufaddiert*: $z = 987654321 \;\Rightarrow \; Q_1(z) = 9+8+7+6+5+4+3+2+1 $. Bei der *alternierenden* *Quersumme* $AQ_k(z)$ wechseln sich *Additions*- und *Subtraktionsoperatoren* ab.



$$
\begin{align*}
 z &= 987654321\\
   AQ_1 (z) &= 9-8+7-6+5-4+3-2+1 \\
   AQ_2 (z) &= 9-87+65-43+21 \\
   AQ_3 (z) &= 987-654+321 \\
   AQ_4 (z) &= 9-8765+4321 \\
   AQ_5 (z) &= 9876-54321 \\
   AQ_6 (z) &= 987-654321 \\
   Q_2 (z) &= 9+87+65+43+21 \\
   Q_3 (z) &= 987+654+321  \\
  \end{align*}
$$


{{|>}} Dabei gibt die Zahl im *Index* an nach welcher *Ziffernstelle* von hinten der jeweilige *Operator* gesetzt werden muss. So wird bei einer *alternierenden* $3$er-*Quersumme* der erste *Operator* nach drei *Ziffern* von hinten gesetzt. 


{{|>}} Generell gilt die Notation $3 | 27$, was "$27$ ist durch $3$ *teilbar*" beziehungsweise "$27$ ist ein *Vielfaches* von $3$" oder "$3$ ist ein *Teiler* von $27$". Umgekehrt gilt $3 \nmid 28$, was "$28$ ist nicht durch $3$ *teilbar*" bedeutet. 






{{|>}} Für ein tief erreichendes Verständnis der *Multiplikation* sowie *Division* und somit der *Bruchrechnung* aufzubauen, ist die Bestimmung vom "*kleinsten gemeinsamen Vielfachen*", "*größter gemeinsamer Teiler*" und "*Teilermengen*" hilfreich:



{{|>}} • *Teilermengen*: Um die *Teilermenge* einer Zahl zu bestimmen müssen alle *natürlichen Zahlen* gefunden werden, durch die die betrachtete Zahl *dividiert* werden kann. Wenn ein *Teiler* gefunden wurde, kann durch die *Division* der dazugehörige *Teiler* gefunden werden, sodass sich auch die größeren Zahlen ergeben. Zur Veranschaulichung der Notation werden Beispiele gewählt:



$$
\begin{align*}
T_{21} &= \left\{ 1;3;7;21 \right\}    \\
T_{36} &= \left\{ 1;2;3;4;9;12;36 \right\}    \\
 T_{23} &= \left\{ 1;23 \right\}    \\
  \end{align*}
$$



{{|>}} • *Kleinstes gemeinsames Vielfach*: Das *kleinste gemeinsame Vielfach* kann verwendet werden, um *Brüche* auf den gleichen *Nenner* zu bringen, wovon allerdings hier in diesem Buch abgeraten wird, da auch nach der Verrechnung der *Brüche* gekürzt werden kann. Zur Notation wieder einige Beispiele:



$$
\begin{align*}
kgV(4;5) &= 20    \\ 
kgV(2;8) &= 8    \\ 
kgV(6;9) &= 18    \\ 
  \end{align*}
$$




{{|>}} • *Größter gemeinsamer Teiler*: Um *Brüche* effektiv zu *kürzen*, kann in mehreren Schritten auf die *Teilbarkeitsregeln* zurückgegriffen werden oder mit dem *größten gemeinsamen Teiler* das *Kürzen* auf einen einzigen Schritt reduziert werden, wobei die *Teilbarkeitsregeln* in diesem Buch einen höheren Stellenwert besitzen werden.   Zur Notation wieder einige Beispiele:



$$
\begin{align*}
ggT(45;35) &= 5    \\ 
ggT(12;48) &= 12    \\ 
ggT(8;17) &= 1    \\ 
  \end{align*}
$$




{{|>}}   Durch Vergleich der *Teilermengen* oder der *Primzahlzerlegung* über die *Teilbarkeitsregeln*, kann der *größte gemeinsame Teiler* gefunden werden. Wobei auch das sogenannte *Euklidische Verfahren* verwendet werden kann, welches ein *iteratives* *Divisionsverfahren* mit *Rest* darstellt: Hierbei wird der *Divisor* durch den *Rest* geteilt wird bis kein *Rest* mehr existiert. Der letzte *Divisor* ist somit der *größte gemeinsame Teiler*



$$
\begin{align*}
ggT(159;789) \; &\Rightarrow \;\; 159:789 = 0 \;\; \text{Rest}\; 159 \;\;\Rightarrow\;\; ggT(159;789) = ggT(789;159)      \\  
  \; &\Rightarrow \;\; 789:159 = 4 \;\; \text{Rest}\; 153 \;\;\Rightarrow\;\; ggT(789;159) = ggT(159;153)      \\  
  \; &\Rightarrow \;\; 159:153 = 1 \;\; \text{Rest}\; 6 \;\;\Rightarrow\;\; ggT(159;153) = ggT(153;6)      \\  
  \; &\Rightarrow \;\; 153:6 = 25 \;\; \text{Rest}\; 3 \;\;\Rightarrow\;\; ggT(153;6) = ggT(6;3)      \\ 
  \; &\Rightarrow \;\; 6:3 = 2 \;\; \text{Rest}\; 0 \;\;\Rightarrow\;\; ggT(159;789) = 3      \\  
  \end{align*}
$$























#### Übungen - Teilbarkeiten



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>






























































































### Bruchrechnung


!?[Bruchrechnung](https://www.youtube.com/watch?v=E0jIuLBRPBg)



#### Übungen - Bruchrechnung



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>































































































### Dezimalzahlen






#### Übungen - Dezimalzahlen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 1:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{6} \approx$ [[ 0,667 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $4,\overline{2} \approx$ [[ 4,222 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $1,\overline{633} \approx$ [[ 1,634 ]] 

</div>
</section>








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{8} \approx$ [[ 0,889 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $1,\overline{35} \approx$ [[ 1,354 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $7,\overline{645891} \approx$ [[ 7,646 ]] 

</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $5,\overline{91} \approx$ [[ 5,919 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $2,\overline{7} \approx$ [[ 2,778 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,\overline{45} \approx$ [[ 0,455 ]] 

</div>
</section>





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{9} \approx$ [[  1,000 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $13,\overline{97} \approx$ [[ 13,980 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $3,\overline{2486} \approx$ [[  3,249 ]] 

</div>
</section>

































































































### Parameter





#### Übungen - Parameter



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>

































































































### Einsetzungsverfahren


!?[Einsetzen](https://www.youtube.com/watch?v=oCzl1Sasf4M)


#### Übungen - Einsetzungsverfahren



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>






























































































### Prozentrechnung




#### Übungen - Prozentrechnung



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 

<!-- data-solution-button="5"-->

<section class="flex-container">



</section>































































































### Negative Zahlen



!?[Negative Zahlen](https://www.youtube.com/watch?v=Yt03b6sbMLM)



#### Übungen - Negative Zahlen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>































































































### Assoziativ- und Kommutativgesetz


#### Übungen - Assoziativ- und Kommutativgesetz



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>


































































































### Distributivgesetz

!?[Distributivgesetz](https://www.youtube.com/watch?v=tSawKXhm714)


#### Übungen - Distributivgesetz



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>
































































































### Potenzen


!?[Potenzgesetze](https://www.youtube.com/watch?v=g1zLW9FsglU)



#### Übungen - Potenzen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>


































































































### Logarithmen


#### Übungen - Logarithmen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>


































































































### Äquivalenzumformung




{{|>}} Die *Äquivalenzumformung* stellt die Basis für den Erkenntniserwerb und steht als selbstverständliches Vorwissen aller Schüler im Zentrum des naturwissenschaftlichen Unterrichts. Letztendlich versteckt sich hinter diesem Wort nur die Bedingung, dass auf beiden Seiten des *Äquivalenzzeichens* "=" immer die gleichen *Operationen* durchgeführt werden müssen. Dabei wird hinter dem *Kommandostrich* oder *Ankündigungsstrich* "$\left|\right.$" hinter der umzuformenden *Gleichung* die nachfolgende *Operation* angegeben.


$$
\begin{align*}
  0	 &= 0  \qquad \left|   + 2   \right. \\
	\Leftrightarrow 2 &= 2 \\
  \end{align*}
$$


{{|>}} Die Gleichung zeigt, wie auf beiden Seiten des *Äquivalenzzeichen* die Zwei *addiert* wurde. Dabei steht der Doppelpfeil $\Leftrightarrow$ für "daraus folgt und umgekehrt", und ist nicht zwingend erforderlich bei einer *Äquivalenzumformung*, sollte allerdings bei einer genauen, detaillierten und vollständigen Betrachtung mit geschrieben werden.


{{|>}} Eine *Gleichung* wird zum Beispiel durch eine Balkenwaage mit gleichlangen Armen symbolisiert, bei der auf beiden Seiten die exakt gleiche Masse in den Schalen liegen muss. 

<center>

<!-- style="width:600px" -->
![](Kap2/waage0.png)

</center>

{{|>}} In der Abbildung wird deutlich, dass die Masse $x$ nur einen bestimmten *Wert* für ein Gleichgewicht haben kann, nämlich $6\,$kg.





$$
\begin{align*}
  8	 &= 8  \qquad \left|   - 2   \right. \\
 6 &= 6  \qquad \left|   \cdot \, 3   \right. \\
 18 &= 18  \qquad \left|   : 2   \right. \\
 9 &= 9   \\
  \end{align*}
$$
 

{{|>}} Die *Gleichung* zeigt, wie im ersten Schritt auf beiden Seiten des *Äquivalenzzeichen* die Zwei *subtrahiert* wurde. Im zweiten Schritt werden beide Seiten mit drei *multipliziert* und im dritten Schritt durch Zwei *dividiert*. In diesen beiden Beispielen sind die vier Grundrechenarten gezeigt, was nicht bedeutet, dass andere *Rechenoperationen* ausgeschlossen sind.\


{{|>}} *Äquivalenzumformungen* dienen dazu um *Gleichung* umzustellen und so *Werte* von unbekannten *Parametern* beziehungsweise *Variablen* zu bestimmen. *Parameter* sind Platzhalter für *Zahlen* und werden in der Regel mit Buchstaben am Anfang des Alphabets beschrieben. Wenn keine genaue Beschreibung für die *Parameter* angegeben sind, gilt $a,b,... \in \mathbb{R}$. 


{{|>}} Dies kann gut durch Streichholzschachteln symbolisiert werden. Dabei befinden sich in jeder Streichholzschachtel mit der Aufschrift $x$ stets die gleiche aber unbekannte Anzahl von Streichhölzern. 

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0a.png)

</center>

{{|>}} Um herauszufinden, wie viele Streichhölzer sich jeweils in den Schachtel befinden ohne die Schachtel dabei zu öffnen, muss auf beiden Seiten des *Äquivalenzzeichen* exakt die gleiche Aktion durchgeführt werden. Im ersten Schritt wird auf beiden Seiten ein Streichholz weggenommen.

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0b.png)

</center>

{{|>}} Im zweiten Schritt wird bei beiden Seiten des *Äquivalenzzeichen* eine Schachtel entfernt.

<center>

<!-- style="width:350px" -->
![](Kap2/streichholz0c.png)

</center>

Aus der letzten *Gleichung* wird deutlich, dass sich in jeder Schachtel mit der Aufschrift $x$ genau drei Streichhölzer sind.



Im folgenden Beispiel soll nach $x$ aufgelöst werden.

$$
\begin{align*}
0 & = \frac{a}{d} \cdot x + b - c  \qquad \left| + c \right. \\
c & = \frac{a}{d} \cdot x    \qquad \left| -b \right. \\
c - b & = \frac{a}{d} \cdot x    \qquad \left| \cdot d \right. \\
d \cdot \left(c - b\right) & = a \cdot x    \qquad \left| : a \right. \\
\frac{d \cdot \left(c - b\right)}{a} & =  x     \\
  \end{align*}
$$

{{|>}} Jede *Rechenoperation*, die die Richtigkeit der *Gleichung* nicht verändert ist zulässig! Die *Addition* der $0$ und die *Multiplikation* der $1$ sind solche *Operationen*. Dabei ist $0$ das so genannte *neutrale Element* der *Addition* und $1$ das *neutrale Element* der *Multiplikation*.



$$
\begin{align*}
\frac{1}{2}  = \frac{1}{2} \cdot 1 = \frac{1}{2} \cdot \frac{4}{4} = \frac{4}{8} \qquad  &\text{Multiplikation der $1$} \\
4 = 4 + 0 = 4+6-6 = 10 - 6 \qquad  & \text{Addition der $0$} \\
  \end{align*}
$$

{{|>}} Die Beispiele aus *Gleichung* zeigen, dass die *Multiplikation* des *neutralen Elements* mit dem *Erweitern* von *Brüchen* unmittelbar in Verbindung steht.  


{{|>}} Um *Lösungen* der *Äquivalenzumformung* zu überprüfen, kann bei der *Probe* die berechnete *Lösung* in die Ausgangsgleichung eingesetzt werden. Wenn die *Gleichung* rechnerisch gezeigt werden kann, ist der ermittelte *Variablenwert* beziehungsweise *Parameterwert* eine richtige *Lösung*.

Beispiel:
 


$$
\begin{align*}
3x-2&=5x+4 \quad \left| +2  \right. \\
3x&=5x+6 \quad \left| -5x  \right. \\
-2x&=6 \quad \left| :(-2)  \right. \\
x&=-3 \\
\Rightarrow \; 3\cdot(-3)-2&=5\cdot(-3)+4\\
-9-2&=-15+4\\
-11&=-11\\
  \end{align*}
$$


{{|>}}  Bei *Rechenoperationen*, die die *Definitionsmenge* der *Gleichung* verändert, kann nicht mehr von direkter *Äquivalenzumformung* gesprochen werden. Aus diesem Grund kann keine *Äquivalenzumformung* angekündigt werden und es sollte die *Definitionsmengenveränderung* durch einen "Daraus folgt"-Pfeil $\Rightarrow$ angedeutet werden. Dazu ein Beispiel:

$$
\begin{align*}
(2x)^2 & = 4a-5 \\
\Rightarrow\;\; 2x_{1,2} & = \pm \sqrt{4a-5} \quad \left| :2  \right.  \\
x_{1,2} & = \pm \dfrac{\sqrt{4a-5}}{2}  
  \end{align*}
$$

{{|>}} In dem gezeigten Beispiel wäre ein *Ankündigungsstrich* mit einer angedeuteten *Wurzel* nicht korrekt, da die *Definitionsmenge* halbiert wird. Aus diesem Grund wurde dies auch nicht im ersten Schritt niedergeschrieben.







Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \

!?[Äquivalenzumformung](https://www.youtube.com/watch?v=55z4hWAx8Q0)



















#### Übungen - Äquivalenzumformung



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1a.png)  
$x=$ [[  3  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1b.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1c.png)  
$x=$ [[  8  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1d.png)  
$x=$ [[  3  ]] Streichhölzer







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1e.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1f.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1g.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1h.png)  
$x=$ [[  5  ]] Streichhölzer









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1i.png)  
$x=$ [[  4  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1j.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1k.png)  
$x=$ [[  4  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1l.png)  
$x=$ [[  2  ]] Streichhölzer









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1m.png)  
$x=$ [[  5  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1n.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1o.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1p.png)  
$x=$ [[  3  ]] Streichhölzer




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1a.png)  
$x=$ [[  5    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1d.png)  
$x=$ [[  2    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1g.png)  
$x=$ [[  0,75  ]] kg







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1b.png)  
$x=$ [[  3    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1e.png)  
$x=$ [[  2    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1h.png)  
$x=$ [[  1,83  ]] kg







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1c.png)  
$x=$ [[  4    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1f.png)  
$x=$ [[  5    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1i.png)  
$x=$ [[  1,56  ]] kg








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.

$$
\begin{align*}
  11+6 \cdot x & = 3 + 8 \cdot x  \quad \left|  -3  \right. \\
  8 + 6 \cdot x & = 8 \cdot x  \quad \left|  -6x  \right. \\
  8  & = 2 \cdot x  \quad \left|  : 2  \right. \\
  4  & = x   \\
\end{align*}
$$

$$
\begin{align*}
  11+6 \cdot 4 & = 3 + 8 \cdot 4   \\
  11 + 24 & = 3 + 32  \\
  35  & = 35   \\
\end{align*}
$$

<!-- data-solution-button="5" -->
Um die Gleichung zu sortieren, wird zu nächst auf beiden Seiten des Gleichungszeichen [[  -3  ]] gerechnet. Anschließend wird $-6x$ auf [[     beiden Seiten des Gleichheitszeichen     ]] gerechnet, sodass alles, was mit der Variable $x$ multipliziert ist, auf einer Seite des Gleichheitszeichen ist und alles andere auf der anderen Seite. Abschließend wird durch den Vorfaktor [[  2  ]] [[  dividiert  ]]. Nachdem die [[  Lösung  ]] der Gleichung gefunden wurde, wird die [[  Probe  ]] durchgeführt, indem die Lösung für $x$ in die [[  Gleichung  ]] vom Anfang eingesetzt wird. Ist auf beiden Seiten des Gleichheitszeichen der gleiche Wert, dann ist die Lösung korrekt.




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.


$$
\begin{align*}
  \dfrac{3}{x-2} & = \dfrac{4}{3x+7}    \quad \left|  \cdot (x-2)  \right. \\
  3 & = \dfrac{4}{3x+7} (x-2)    \quad \left|  \cdot (3x+7) \right. \\
  3(3x+7) & = 4 (x-2)      \\
  9x+21 & = 4x-8     \quad \left| -4x \right.     \\
  5x+21 & = -8     \quad \left| -21 \right.     \\
  5x  & = -29     \quad \left| :5 \right.     \\
  x  & = -\dfrac{29}{5}       \\
\end{align*}
$$


<!-- data-solution-button="5" -->
Bei dieser Gleichung steht die gesuchte Unbekannte auf beiden Seiten des Gleichheitszeichen im [[  Nenner  ]]. Um dies aufzuheben wird mit $(x-2)$ und dann mit $(3x+7)$ auf beiden Seiten des Gleichheitszeichen [[  multipliziert  ]]. Die [[  Klammern  ]] sind dabei wichtig, aufgrund der Regel: Punkt- vor [[  Strichrechnung  ]]. Anschließend wird das [[  Distributivgesetz  ]] benutzt, um die Klammern aufzulösen. Nun wird die Gleichung mit der Strichrechnung sortiert, indem erst $-4x$ und dann [[  -21  ]] auf beiden Seiten des Gleichheitszeichen gerechnet wird. Abschließend wird durch den [[  Vorfaktor  ]] $5$ dividiert.





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.


$$
\begin{align*}
  \dfrac{3}{5}x - 4 & = \dfrac{2}{7} + x    \quad \left|  + 4  \right. \\
  \dfrac{3}{5}x   & = \dfrac{30}{7} + x    \quad \left|  -x  \right. \\
  -\dfrac{2}{5}x   & = \dfrac{30}{7}    \quad \left|  \cdot 5  \right. \\
  -2x   & = \dfrac{150}{7}    \quad \left|  : 2  \right. \\
  -x   & = \dfrac{75}{7}    \quad \left|  \cdot (-1)  \right. \\
  x   & = -\dfrac{75}{7}     \\
\end{align*}
$$

<!-- data-solution-button="5" -->
Als erstes wird die Gleichung sortiert, indem auf [[  beiden Seiten  ]] des Gleichheitszeichen $+4$ gerechnet wird. Anschließend wird [[  -x  ]] auf beiden Seiten des [[  Gleichheitszeichen  ]] gerechnet, sodass in den nächsten Schritten nur noch die Punktrechnung zum Einsatz kommen kann. Der Vorfaktor stückweise entfernt. Zu nächst wird [[ mit   ]] $5$ [[  multipliziert  ]], dann nächst wird [[ durch ]] $2$ [[  dividiert      ]]. Das Vorzeichen wird abschließend noch mit der [[  Multiplikation  ]] mit $(-1)$ von der Unbekannten gelöst.







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  x - 4 = 9 $ \
$x$ = [[  13  ]]
************
$$
\begin{align*}
x - 4 & = 9 \quad \left| +4  \right. \\
x   & = 13  \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4 \cdot x = 36$ \
$x$ =  [[  9   ]]
************
$$
\begin{align*}
4 \cdot x & = 36 \quad \left| : 4  \right. \\
x   & = 9  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7 = \dfrac{x}{6}  $ \
$x$ =  [[  42  ]]
************
$$
\begin{align*}
7 & = \dfrac{x}{6} \quad \left| \cdot 6  \right. \\
42   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3 = x - 5 $ \
$x$ =  [[  8   ]]
************
$$
\begin{align*}
3 & = x - 5 \quad \left| +5  \right. \\
8   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  x + 8  = 13 $ \
$x$ =  [[  5   ]]
************
$$
\begin{align*}
x+8 & = 13 \quad \left| -8  \right. \\
x   & = 5  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  64 = 4 \cdot x  $ \
$x$ =  [[  16  ]]
************
$$
\begin{align*}
64 & = 4x \quad \left| :4  \right. \\
16 & = x  \\
\end{align*}
$$
************


</div>
</section>













<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  72 = 8 \cdot x $ \
$x$ = [[  9   ]]
************
$$
\begin{align*}
72 & = 8 \cdot x  \quad \left| : 8  \right. \\
9   & = x  \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{x}{7} = 5 $ \
$x$ =  [[  35  ]]
************
$$
\begin{align*}
\dfrac{x}{7} & = 5 \quad \left| \cdot 7  \right. \\
x   & = 35  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  x + 7 = 19  $ \
$x$ =  [[  12  ]]
************
$$
\begin{align*}
x + 7 & = 19 \quad \left|  -7  \right. \\
x   & = 12  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 17 = x - 8 $ \
$x$ =  [[  25  ]]
************
$$
\begin{align*}
17 & = x - 8 \quad \left| +8  \right. \\
25   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  7x = 84 $ \
$x$ =  [[  12  ]]
************
$$
\begin{align*}
7x & = 84 \quad \left| :7  \right. \\
x   & = 12  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  3 = \dfrac{x}{17}  $ \
$x$ =  [[  51  ]]
************
$$
\begin{align*}
3 & = \dfrac{x}{17} \quad \left| \cdot 17  \right. \\
51 & = x  \\
\end{align*}
$$
************


</div>
</section>






















<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 13:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3x-7 = 8 - 2x $ \
$x$ = [[  3   ]]
************
$$
\begin{align*}
3x-7 & = 8 - 2x  \quad \left| +7  \right. \\
3x    & = 15 -2x  \quad \left| +2x  \right.  \\
5x    & = 15  \quad \left| :5  \right.  \\
x    & = 3   \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 3x - 2 = 2x + 1 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
3x - 2 &= 2x + 1 \quad \left| -2x \right. \\
x - 2 &= 1 \quad \left| +2 \right. \\
x &= 3
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__    $ 5x + 3 = 2x + 18 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
5x + 3 &= 2x + 18 \quad \left| -2x \right. \\
3x + 3 &= 18 \quad \left| -3 \right. \\
3x &= 15 \quad \left| :3 \right. \\
x &= 5
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 4x - 4 = 2x + 10 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
4x - 4 &= 2x + 10 \quad \left| -2x \right. \\
2x - 4 &= 10 \quad \left| +4 \right. \\
2x &= 14 \quad \left| :2 \right. \\
x &= 7
\end{align*}
$$
************


</div>
</section>













<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 14:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  $ 4x + 5 = 3x + 14 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
4x + 5 &= 3x + 14 \quad \left| -3x \right. \\
x + 5 &= 14 \quad \left| -5 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 7x - 4 = 3x + 16 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 4 &= 3x + 16 \quad \left| -3x \right. \\
4x - 4 &= 16 \quad \left| +4 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 6x - 8 = 2x + 20 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
6x - 8 &= 2x + 20 \quad \left| -2x \right. \\
4x - 8 &= 20 \quad \left| +8 \right. \\
4x &= 28 \quad \left| :4 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 10x - 12 = 4x + 24 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
10x - 12 &= 4x + 24 \quad \left| -4x \right. \\
6x - 12 &= 24 \quad \left| +12 \right. \\
6x &= 36 \quad \left| :6 \right. \\
x &= 6
\end{align*}
$$
************


</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 15:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2x - 8 = 3x - 10 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2x - 8 &= 3x - 10 \quad \left| -2x \right. \\
-8 &= x - 10 \quad \left| +10 \right. \\
2 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 5x - 12 = 3x + 6 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
5x - 12 &= 3x + 6 \quad \left| -3x \right. \\
2x - 12 &= 6 \quad \left| +12 \right. \\
2x &= 18 \quad \left| :2 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 3x + 12 = 5x - 2 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
3x + 12 &= 5x - 2 \quad \left| -3x \right. \\
12 &= 2x - 2 \quad \left| +2 \right. \\
14 &= 2x \quad \left| :2 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 8x - 5 = 3x + 20 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
8x - 5 &= 3x + 20 \quad \left| -3x \right. \\
5x - 5 &= 20 \quad \left| +5 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 16:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2x + 10 = 4x - 6 $ \
$x$ = [[  8  ]]
************
$$
\begin{align*}
2x + 10 &= 4x - 6 \quad \left| -2x \right. \\
10 &= 2x - 6 \quad \left| +6 \right. \\
16 &= 2x \quad \left| :2 \right. \\
x &= 8
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ \;9x - 15 = 6x + 12 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
9x - 15 &= 6x + 12 \quad \left| -6x \right. \\
3x - 15 &= 12 \quad \left| +15 \right. \\
3x &= 27 \quad \left| :3 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 2x + 14 = 3x + 5 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
2x + 14 &= 3x + 5 \quad \left| -2x \right. \\
14 &= x + 5 \quad \left| -5 \right. \\
9 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 7x - 9 = 2x + 16 \;$ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 9 &= 2x + 16 \quad \left| -2x \right. \\
5x - 9 &= 16 \quad \left| +9 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 17:__ **Berechne** den Lösungswert für die Unbekannte.


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2x + 4 + 9 = 6x - 3 - 7 $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
2x + 4 + 9 &= 6x - 3 - 7 \\
2x + 13 &= 6x - 10 \quad \left| +10 \right. \\
2x + 23 &= 6x  \quad \left| -2x \right. \\
23 &= 4x \quad \left| :4 \right. \\
x &= 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3x + 5 + x = 2x + 17 - x $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
3x + 5 + x &= 2x + 17 - x \\
4x + 5 &= x + 17 \quad \left| -x \right. \\
3x + 5 &= 17 \quad \left| -5 \right. \\
3x &= 12 \quad \left| :3 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  5x - 7 + 2x = 3x + 13 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
5x - 7 + 2x &= 3x + 13 \\
7x - 7 &= 3x + 13 \quad \left| -3x \right. \\
4x - 7 &= 13 \quad \left| +7 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  2x + 4 + 9x = 6x - 3 - 7 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2x + 4 + 9x &= 6x - 3 - 7 \\
11x + 4 &= 6x - 10 \quad \left| -6x \right. \\
5x + 4 &= -10 \quad \left| -4 \right. \\
5x &= -14 \quad \left| :(-5) \right. \\
x &= 2
\end{align*}
$$
************
</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 18:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4x + 6 - 2x + 3 = x + 17 $ \
$x$ = [[  4  ]]
************
$$
\begin{align*} 
4x + 6 - 2x + 3 &= x + 17  \\
2x + 9 &= x + 17 \quad \left| -x \right. \\
x + 9 &= 17 \quad \left| -9 \right. \\
x &= 8
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  6x - 5 + 2x = 3x + 25 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
 6x - 5 + 2x &= 3x + 25 \\
8x - 5 &= 3x + 25 \quad \left| -3x \right. \\
5x - 5 &= 25 \quad \left| +5 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7x + 3 - 2x = 4x + 8 $ \
$x$ = [[  1  ]]
************
$$
\begin{align*}
7x + 3 - 2x &= 4x + 8 \\
5x + 3 &= 4x + 8 \quad \left| -4x \right. \\
x + 3 &= 8 \quad \left| -3 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  9x - 4 + x = 5x + 26 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
9x - 4 + x &= 5x + 26 \\
10x - 4 &= 5x + 26 \quad \left| -5x \right. \\
5x - 4 &= 26 \quad \left| +4 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 19:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4(2x-3) = 2x + 10 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
4(2x-3) &= 2x + 10 \\
8x - 12 &= 2x + 10 \quad \left| -2x \right. \\
6x - 12 &= 10 \quad \left| +12 \right. \\
6x &= 22 \quad \left| :6 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+4) = x + 19 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
3(2x+4) &= x + 19 \\
6x + 12 &= x + 19 \quad \left| -x \right. \\
5x + 12 &= 19 \quad \left| -12 \right. \\
5x &= 7 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  2(3x-1) + 5 = 4x + 7 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(3x-1) + 5 &= 4x + 7 \\
6x - 2 + 5 &= 4x + 7 \\
6x + 3 &= 4x + 7 \quad \left| -4x \right. \\
2x + 3 &= 7 \quad \left| -3 \right. \\
2x &= 4 \quad \left| :2 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5(x+2) - 3 = 2x + 12 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
5(x+2) - 3 &= 2x + 12 \\
5x + 10 - 3 &= 2x + 12 \\
5x + 7 &= 2x + 12 \quad \left| -2x \right. \\
3x + 7 &= 12 \quad \left| -7 \right. \\
3x &= 5 \quad \left| :3 \right. \\
x &= 3
\end{align*}
$$
************
</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 20:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2(4x-5) = 3x + 13 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
2(4x-5) &= 3x + 13 \\
8x - 10 &= 3x + 13 \quad \left| -3x \right. \\
5x - 10 &= 13 \quad \left| +10 \right. \\
5x &= 23 \quad \left| :5 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+1) = 4x + 11 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
3(2x+1) &= 4x + 11 \\
6x + 3 &= 4x + 11 \quad \left| -4x \right. \\
2x + 3 &= 11 \quad \left| -3 \right. \\
2x &= 8 \quad \left| :2 \right. \\
x &= 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  2(5x-4) = 3x + 14 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(5x-4) &= 3x + 14 \\
10x - 8 &= 3x + 14 \quad \left| -3x \right. \\
7x - 8 &= 14 \quad \left| +8 \right. \\
7x &= 22 \quad \left| :7 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  7(x-2) + 1 = 3x + 8 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
 7(x-2) + 1 &= 3x + 8 \\
7x - 14 + 1 &= 3x + 8 \\
7x - 13 &= 3x + 8 \quad \left| -3x \right. \\
4x - 13 &= 8 \quad \left| +13 \right. \\
4x &= 21 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 21:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3x - 7 = \dfrac{1}{2}x + 5 $ \
$x$ = [[  24/5  ]]
@Algebrite.check(24/5)
************
$$
\begin{align*}
3x - 7 &= \dfrac{1}{2}x + 5 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{5}{2}x - 7 &= 5 \quad \left| +7 \right. \\
\dfrac{5}{2}x &= 12 \quad \left| :\dfrac{5}{2} \right. \\
x &= \dfrac{24}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4x + 3 = 2x - \dfrac{5}{2} $ \
$x$ = [[  -11/4  ]]
@Algebrite.check(-11/4)
************
$$
\begin{align*}
4x + 3 &= 2x - \dfrac{5}{2} \quad \left| -2x \right. \\
2x + 3 &= -\dfrac{5}{2} \quad \left| -3 \right. \\
2x &= -\dfrac{5}{2} - \dfrac{6}{2} \\
2x &= -\dfrac{11}{2} \quad \left| :2 \right. \\
x &= -\dfrac{11}{4}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{3}x - 4 = x + 2 $ \
$x$ = [[  18  ]]
@Algebrite.check(18)
************
$$
\begin{align*}
\dfrac{5}{3}x - 4 &= x + 2 \quad \left| -x \right. \\
\dfrac{2}{3}x - 4 &= 2 \quad \left| +4 \right. \\
\dfrac{2}{3}x &= 6 \quad \left| :\dfrac{2}{3} \right. \\
x &= 18
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 5(x-1) = 3x + \dfrac{7}{3}$ \
$x$ = [[  11/3  ]]
@Algebrite.check(11/3)
************
$$
\begin{align*}
5(x-1) &= 3x + \dfrac{7}{3} \\
5x - 5 &= 3x + \dfrac{7}{3} \quad \left| -3x \right. \\
2x - 5 &= \dfrac{7}{3} \quad \left| +5 \right. \\
2x &= \dfrac{7}{3} + \dfrac{15}{3} \\
2x &= \dfrac{22}{3} \quad \left| :2 \right. \\
x &= \dfrac{11}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2\left(x + \dfrac{3}{2}\right) = \dfrac{1}{2}x + 5 $ \
$x$ = [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
 2\left(x + \dfrac{3}{2}\right) &= \dfrac{1}{2}x + 5 \\
2x + 3 &= \dfrac{1}{2}x + 5 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{2}x + 3 &= 5 \quad \left| -3 \right. \\
\dfrac{3}{2}x &= 2 \quad \left| :\dfrac{3}{2} \right. \\
x &= \dfrac{4}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{3}(3x+6) = x - 2 $ \
$x$ = [[  -6  ]]
@Algebrite.check(-6)
************
$$
\begin{align*}
\dfrac{2}{3}(3x+6) &= x - 2  \\
2x + 4 &= x - 2 \quad \left| -x \right. \\
x + 4 &= -2 \quad \left| -4 \right. \\
x &= -6
\end{align*}
$$
************
</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 22:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \; 7x + \dfrac{1}{2} = 3x - \dfrac{7}{2} \;$ \
$x$ = [[  -1  ]]
@Algebrite.check(-1)
************
$$
\begin{align*}
7x + \dfrac{1}{2} &= 3x - \dfrac{7}{2} \quad \left| -3x \right. \\
4x + \dfrac{1}{2} &= -\dfrac{7}{2} \quad \left| -\dfrac{1}{2} \right. \\
4x &= -\dfrac{8}{2} \\
4x &= -4 \quad \left| :4 \right. \\
x &= -1
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 2x - \dfrac{7}{3} = \dfrac{1}{3}x + 5 \;$ \
$x$ = [[  22/5  ]]
@Algebrite.check(22/5)
************
$$
\begin{align*}
2x - \dfrac{7}{3} &= \dfrac{1}{3}x + 5 \quad \left| -\dfrac{1}{3}x \right. \\
\dfrac{5}{3}x - \dfrac{7}{3} &= 5 \quad \left| +\dfrac{7}{3} \right. \\
\dfrac{5}{3}x &= \dfrac{15}{3} + \dfrac{7}{3} \\
\dfrac{5}{3}x &= \dfrac{22}{3} \quad \left| :\dfrac{5}{3} \right. \\
x &= \dfrac{22}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \; \dfrac{3}{2}x + 4 = \dfrac{5}{4}x - 2 \;$ \
$x$ = [[  -24  ]]
@Algebrite.check(-24)
************
$$
\begin{align*}
\dfrac{3}{2}x + 4 &= \dfrac{5}{4}x - 2 \\
\dfrac{6}{4}x + 4 &= \dfrac{5}{4}x - 2 \quad \left| -\dfrac{5}{4}x \right. \\
\dfrac{1}{4}x + 4 &= -2 \quad \left| -4 \right. \\
\dfrac{1}{4}x &= -6 \quad \left| :\dfrac{1}{4} \right. \\
x &= -24
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2(x-3) = \dfrac{1}{2}x - 1 $ \
$x$ = [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
2(x-3) &= \dfrac{1}{2}x - 1  \\
2x - 3\cdot 2 &= \dfrac{1}{2}x - 1 \\
2x - 6 &= \dfrac{1}{2}x - 1 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{2}x - 6 &= -1 \quad \left| +6 \right. \\
\dfrac{3}{2}x &= 5 \quad \left| :\dfrac{3}{2} \right. \\
x &= \dfrac{10}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3(x+2) - \dfrac{5}{2} = 2x $ \
$x$ = [[  -7/2  ]]
@Algebrite.check(-7/2)
************
$$
\begin{align*}
 3(x+2) - \dfrac{5}{2} &= 2x  \\
3x + 6 - \dfrac{5}{2} &= 2x \\
3x + \dfrac{12}{2} - \dfrac{5}{2} &= 2x \\
3x + \dfrac{7}{2} &= 2x \quad \left| -2x \right. \\
x + \dfrac{7}{2} &= 0 \quad \left| -\dfrac{7}{2} \right. \\
x &= -\dfrac{7}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{3}{4}(2x-1) = x + \dfrac{1}{2} $ \
$x$ = [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
\dfrac{3}{4}(2x-1) &= x + \dfrac{1}{2} \\
\dfrac{3}{2}x - \dfrac{3}{4} &= x + \dfrac{1}{2} \quad \left| -x \right. \\
\dfrac{1}{2}x - \dfrac{3}{4} &= \dfrac{1}{2} \quad \left| +\dfrac{3}{4} \right. \\
\dfrac{1}{2}x &= \dfrac{5}{4} \quad \left| :\dfrac{1}{2} \right. \\
x &= \dfrac{5}{2}
\end{align*}
$$
************
</div>
</section>











<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 23:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2x + 3x - 7 = x + 5 $ \
$x$ = [[  3  ]]
@Algebrite.check(3)
************
$$
\begin{align*}
2x + 3x - 7 &= x + 5 \\
5x - 7 &= x + 5 \quad \left| -x \right. \\
4x - 7 &= 5 \quad \left| +7 \right. \\
4x &= 12 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4(2x-3) = 5x + 1 $ \
$x$ = [[  13/3  ]]
@Algebrite.check(13/3)
************
$$
\begin{align*}
4(2x-3) &= 5x + 1 \\
8x - 12 &= 5x + 1 \quad \left| -5x \right. \\
3x - 12 &= 1 \quad \left| +12 \right. \\
3x &= 13 \quad \left| :3 \right. \\
x &= \dfrac{13}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{2}x - 5 = \dfrac{1}{2}x + 4 $ \
$x$ = [[  9  ]]
@Algebrite.check(9)
************
$$
\begin{align*}
\dfrac{3}{2}x - 5 &= \dfrac{1}{2}x + 4 \quad \left| -\dfrac{1}{2}x \right. \\
x - 5 &= 4 \quad \left| +5 \right. \\
x &= 9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5x + 2 - x = \dfrac{1}{3}x - 7 $ \
$x$ = [[  -27/11  ]]
@Algebrite.check(-27/11)
************
$$
\begin{align*}
5x + 2 - x &= \dfrac{1}{3}x - 7 \\
4x + 2 &= \dfrac{1}{3}x - 7 \quad \left| -\dfrac{1}{3}x \right. \\
\dfrac{11}{3}x + 2 &= -7 \quad \left| -2 \right. \\
\dfrac{11}{3}x &= -9 \quad \left| :\dfrac{11}{3} \right. \\
x &= -\dfrac{27}{11}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2(3x+4) - x = 7x - 10 $ \
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
2(3x+4) - x &= 7x - 10 \\
6x + 8 - x &= 7x - 10 \\
5x + 8 &= 7x - 10 \quad \left| -5x \right. \\
8 &= 2x - 10 \quad \left| +10 \right. \\
18 &= 2x \quad \left| :2 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{4}x + 7 = \dfrac{3}{2}x - 1 $ \
$x$ = [[  16  ]]
@Algebrite.check(16)
************
$$
\begin{align*}
\dfrac{5}{4}x + 7 &= \dfrac{3}{2}x - 1 \\
\dfrac{5}{4}x + 7 &= \dfrac{6}{4}x - 1 \quad \left| -\dfrac{5}{4}x \right. \\
7 &= \dfrac{1}{4}x - 1 \quad \left| +1 \right. \\
8 &= \dfrac{1}{4}x \quad \left| :\dfrac{1}{4} \right. \\
x &= 16
\end{align*}
$$
************
</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4x - 3 = \dfrac{1}{2}x + 9 $ \
$x$ = [[  24/7  ]]
@Algebrite.check(24/7)
************
$$
\begin{align*}
4x - 3 &= \dfrac{1}{2}x + 9 \quad \left| -\dfrac{1}{2}x \right. \\
\left(4 - \dfrac{1}{2}\right)x - 3 &= 9 \\
\dfrac{7}{2}x - 3 &= 9 \quad \left| +3 \right. \\
\dfrac{7}{2}x &= 12 \quad \left| :\dfrac{7}{2} \right. \\
x &= \dfrac{24}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+1) - 4 = x + 5 $ \
$x$ = [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
3(2x+1) - 4 &= x + 5 \\
6x + 3 - 4 &= x + 5 \\
6x - 1 &= x + 5 \quad \left| -x \right. \\
5x - 1 &= 5 \quad \left| +1 \right. \\
5x &= 6 \quad \left| :5 \right. \\
x &= \dfrac{6}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{1}{3}x - 2 = \dfrac{3}{5}x + 1 $ \
$x$ = [[  -45/4  ]]
@Algebrite.check(-45/4)
************
$$
\begin{align*}
\dfrac{1}{3}x - 2 &= \dfrac{3}{5}x + 1 \quad \left| -\dfrac{3}{5}x \right. \\
\left(\dfrac{1}{3} - \dfrac{3}{5}\right)x - 2 &= 1 \\
-\dfrac{4}{15}x - 2 &= 1 \quad \left| +2 \right. \\
-\dfrac{4}{15}x &= 3 \quad \left| \cdot(-1) \right. \\
\dfrac{4}{15}x &= -3 \quad \left| :\dfrac{4}{15} \right. \\
x &= -\dfrac{45}{4}
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  2x + 5 = \dfrac{4}{3}x - 1 $ \
$x$ = [[  -9  ]]
@Algebrite.check(-9)
************
$$
\begin{align*}
2x + 5 &= \dfrac{4}{3}x - 1 \quad \left| -\dfrac{4}{3}x \right. \\
\left(2 - \dfrac{4}{3}\right)x + 5 &= -1 \\
\dfrac{2}{3}x + 5 &= -1 \quad \left| -5 \right. \\
\dfrac{2}{3}x &= -6 \quad \left| :\dfrac{2}{3} \right. \\
x &= -9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{4}x - 3 = 2 - \dfrac{1}{2}x $ \
$x$ = [[  20/7  ]]
@Algebrite.check(20/7)
************
$$
\begin{align*}
\dfrac{5}{4}x - 3 &= 2 - \dfrac{1}{2}x \quad \left| +\dfrac{1}{2}x \right. \\
\left(\dfrac{5}{4} + \dfrac{1}{2}\right)x - 3 &= 2 \\
\dfrac{7}{4}x - 3 &= 2 \quad \left| +3 \right. \\
\dfrac{7}{4}x &= 5 \quad \left| :\dfrac{7}{4} \right. \\
x &= \dfrac{20}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  2\left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} = \dfrac{5}{3}x - 1 $ \
$x$ = [[  5  ]]
@Algebrite.check(5)
************
$$
\begin{align*}
2 \left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - 3 + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - \dfrac{8}{3} &= \dfrac{5}{3}x - 1 \quad \left| -\dfrac{5}{3}x \right. \\
\left(2 - \dfrac{5}{3}\right)x - \dfrac{8}{3} &= -1 \\
\dfrac{1}{3}x - \dfrac{8}{3} &= -1 \quad \left| +\dfrac{8}{3} \right. \\
\dfrac{1}{3}x &= \dfrac{5}{3} \quad \left| :\dfrac{1}{3} \right. \\
x &= 5
\end{align*}
$$
************
</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-1} = \dfrac{10}{x+1} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{5}{x-1} &= \dfrac{10}{x+1} \quad \left| \cdot(x-1) \right. \\
5 &= \dfrac{10(x-1)}{x+1} \quad \left| \cdot(x+1) \right. \\
5(x+1) &= 10(x-1) \\
5x+5 &= 10x-10 \quad \left| -5x \right. \\
5 &= 5x - 10 \quad \left| +10 \right. \\
15 &= 5x \quad \left| :5 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{6}{x+1} = \dfrac{9}{2x+1} $ \
$x$ = [[  1  ]]
************
$$
\begin{align*}
\dfrac{6}{x+1} &= \dfrac{9}{2x+1} \quad \left| \cdot(x+1) \right. \\
6 &= \dfrac{9(x+1)}{2x+1} \quad \left| \cdot(2x+1) \right. \\
6(2x+1) &= 9(x+1) \\
12x+6 &= 9x+9 \quad \left| -9x \right. \\
3x+6 &= 9 \quad \left| -6 \right. \\
3x &= 3 \quad \left| :3 \right. \\
x &= 1
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{2x-1} = \dfrac{3}{x-4} $ \
$x$ = [[  11  ]]
************
$$
\begin{align*}
\dfrac{9}{2x-1} &= \dfrac{3}{x-4} \quad \left| \cdot(2x-1) \right. \\
9 &= \dfrac{3(2x-1)}{x-4} \quad \left| \cdot(x-4) \right. \\
9(x-4) &= 3(2x-1) \\
9x-36 &= 6x-3 \quad \left| -6x \right. \\
3x-36 &= -3 \quad \left| +36 \right. \\
3x &= 33 \quad \left| :3 \right. \\
x &= 11
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{12}{x+3} = \dfrac{8}{x+1} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{12}{x+3} &= \dfrac{8}{x+1} \quad \left| \cdot(x+3) \right. \\
12 &= \dfrac{8(x+3)}{x+1} \quad \left| \cdot(x+1) \right. \\
12(x+1) &= 8(x+3) \\
12x+12 &= 8x+24 \quad \left| -8x \right. \\
4x+12 &= 24 \quad \left| -12 \right. \\
4x &= 12 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{x+1} = \dfrac{7}{x+5} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{3}{x+1} &= \dfrac{7}{x+5} \quad \left| \cdot(x+1) \right. \\
3 &= \dfrac{7(x+1)}{x+5} \quad \left| \cdot(x+5) \right. \\
3(x+5) &= 7(x+1) \\
3x+15 &= 7x+7 \quad \left| -3x \right. \\
15 &= 4x+7 \quad \left| -7 \right. \\
8 &= 4x \quad \left| :4 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{6}{x+2} = \dfrac{11}{2x+3} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{6}{x+2} &= \dfrac{11}{2x+3} \quad \left| \cdot(x+2) \right. \\
6 &= \dfrac{11(x+2)}{2x+3} \quad \left| \cdot(2x+3) \right. \\
6(2x+3) &= 11(x+2) \\
12x+18 &= 11x+22 \quad \left| -11x \right. \\
x+18 &= 22 \quad \left| -18 \right. \\
x &= 4
\end{align*}
$$
************
</div>
</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{6}{x-2} = \dfrac{18}{x+4} $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
\dfrac{6}{x-2} &= \dfrac{18}{x+4} \quad \left| \cdot(x-2) \right. \\
6 &= \dfrac{18(x-2)}{x+4} \quad \left| \cdot(x+4) \right. \\
6(x+4) &= 18(x-2) \\
6x + 24 &= 18x - 36 \quad \left| -6x \right. \\
24 &= 12x - 36 \quad \left| +36 \right. \\
60 &= 12x \quad \left| :12 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{2x+5} = \dfrac{3}{x+1} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{9}{2x+5} &= \dfrac{3}{x+1} \quad \left| \cdot(2x+5) \right. \\
9 &= \dfrac{3(2x+5)}{x+1} \quad \left| \cdot(x+1) \right. \\
9(x+1) &= 3(2x+5) \\
9x + 9 &= 6x + 15 \quad \left| -6x \right. \\
3x + 9 &= 15 \quad \left| -9 \right. \\
3x &= 6 \quad \left| :3 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{x+3} = \dfrac{11}{3x-1} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{7}{x+3} &= \dfrac{11}{3x-1} \quad \left| \cdot(x+3) \right. \\
7 &= \dfrac{11(x+3)}{3x-1} \quad \left| \cdot(3x-1) \right. \\
7(3x-1) &= 11(x+3) \\
21x - 7 &= 11x + 33 \quad \left| -11x \right. \\
10x - 7 &= 33 \quad \left| +7 \right. \\
10x &= 40 \quad \left| :10 \right. \\
x &= 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{x} = \dfrac{9}{4x-3} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{3}{x} &= \dfrac{9}{4x-3} \quad \left| \cdot x \right. \\
3 &= \dfrac{9x}{4x-3} \quad \left| \cdot(4x-3) \right. \\
3(4x-3) &= 9x \\
12x - 9 &= 9x \quad \left| -9x \right. \\
3x - 9 &= 0 \quad \left| +9 \right. \\
3x &= 9 \quad \left| :3 \right. \\
x &= 3
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{x-1} = \dfrac{13}{2x+5} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{3}{x-1} &= \dfrac{13}{2x+5} \quad \left| \cdot(x-1) \right. \\
3 &= \dfrac{13(x-1)}{2x+5} \quad \left| \cdot(2x+5) \right. \\
3(2x+5) &= 13(x-1) \\
6x + 15 &= 13x - 13 \quad \left| -6x \right. \\
15 &= 7x - 13 \quad \left| +13 \right. \\
28 &= 7x \quad \left| :7 \right. \\
x &= 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{3x+2} = \dfrac{9}{x+7} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{8}{3x+2} &= \dfrac{9}{x+7} \quad \left| \cdot(3x+2) \right. \\
8 &= \dfrac{9(3x+2)}{x+7} \quad \left| \cdot(x+7) \right. \\
8(x+7) &= 9(3x+2) \\
8x + 56 &= 27x + 18 \quad \left| -8x \right. \\
56 &= 19x + 18 \quad \left| -18 \right. \\
38 &= 19x \quad \left| :19 \right. \\
x &= 2
\end{align*}
$$
************
</div>
</section>








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 27:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-2} = \dfrac{7}{3x+1} $ \
$x$ = [[  -19/8  ]]
@Algebrite.check(-19/8)
************
$$
\begin{align*}
\dfrac{5}{x-2} &= \dfrac{7}{3x+1} \quad \left| \cdot(x-2) \right. \\
5 &= \dfrac{7(x-2)}{3x+1} \quad \left| \cdot(3x+1) \right. \\
5(3x+1) &= 7(x-2) \\
15x + 5 &= 7x - 14 \quad \left| -7x \right. \\
8x + 5 &= -14 \quad \left| -5 \right. \\
8x &= -19 \quad \left| :8 \right. \\
x &= \dfrac{-19}{8}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{4}{2x-3} = \dfrac{3}{x+5} $ \
$x$ = [[  29/2  ]]
@Algebrite.check(29/2)
************
$$
\begin{align*}
\dfrac{4}{2x-3} &= \dfrac{3}{x+5} \quad \left| \cdot(2x-3) \right. \\
4 &= \dfrac{3(2x-3)}{x+5} \quad \left| \cdot(x+5) \right. \\
4(x+5) &= 3(2x-3) \\
4x + 20 &= 6x - 9 \quad \left| -4x \right. \\
20 &= 2x - 9 \quad \left| +9 \right. \\
29 &= 2x \quad \left| :2 \right. \\
x &= \dfrac{29}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{x+4} = \dfrac{2}{x-1} $ \
$x$ = [[  17/7  ]]
@Algebrite.check(17/7)
************
$$
\begin{align*}
\dfrac{9}{x+4} &= \dfrac{2}{x-1} \quad \left| \cdot(x+4) \right. \\
9 &= \dfrac{2(x+4)}{x-1} \quad \left| \cdot(x-1) \right. \\
9(x-1) &= 2(x+4) \\
9x - 9 &= 2x + 8 \quad \left| -2x \right. \\
7x - 9 &= 8 \quad \left| +9 \right. \\
7x &= 17 \quad \left| :7 \right. \\
x &= \dfrac{17}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{3x-2} = \dfrac{5}{x+6} $ \
$x$ = [[  13/2  ]]
@Algebrite.check(13/2)
************
$$
\begin{align*}
\dfrac{7}{3x-2} &= \dfrac{5}{x+6} \quad \left| \cdot(3x-2) \right. \\
7 &= \dfrac{5(3x-2)}{x+6} \quad \left| \cdot(x+6) \right. \\
7(x+6) &= 5(3x-2) \\
7x + 42 &= 15x - 10 \quad \left| -7x \right. \\
42 &= 8x - 10 \quad \left| +10 \right. \\
52 &= 8x \quad \left| :8 \right. \\
x &= \dfrac{13}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; -\dfrac{3}{x+2} = \dfrac{6}{2x-1} \;$ \
$x$ = [[  -3/4  ]]
@Algebrite.check(-3/4)
************
$$
\begin{align*}
-\dfrac{3}{x+2} &= \dfrac{6}{2x-1} \quad \left| \cdot(x+2) \right. \\
-3 &= \dfrac{6(x+2)}{2x-1} \quad \left| \cdot(2x-1) \right. \\
-3(2x-1) &= 6(x+2) \\
-6x + 3 &= 6x + 12 \quad \left| +6x \right. \\
3 &= 12x + 12 \quad \left| -12 \right. \\
-9 &= 12x \quad \left| :12 \right. \\
x &= -\dfrac{3}{4}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{x-4} = -\dfrac{10}{3x+2} $ \
$x$ = [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{5}{x-4} &= -\dfrac{10}{3x+2} \quad \left| \cdot(x-4) \right. \\
5 &= -\,\dfrac{10(x-4)}{3x+2} \quad \left| \cdot(3x+2) \right. \\
5(3x+2) &= -10(x-4) \\
15x + 10 &= -10x + 40 \quad \left| +10x \right. \\
25x + 10 &= 40 \quad \left| -10 \right. \\
25x &= 30 \quad \left| :25 \right. \\
x &= \dfrac{6}{5}
\end{align*}
$$
************
</div>
</section>












<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-2} = \dfrac{3}{2x+1} $ \
$x$ = [[  -11/7  ]]
@Algebrite.check(11/7)
************
$$
\begin{align*}
\dfrac{5}{x-2} &= \dfrac{3}{2x+1} \quad \left| \cdot(x-2) \right. \\
5 &= \dfrac{3(x-2)}{2x+1} \quad \left| \cdot(2x+1) \right. \\
5(2x+1) &= 3(x-2) \\
10x + 5 &= 3x - 6 \quad \left| -3x \right. \\
7x + 5 &= -6 \quad \left| -5 \right. \\
7x &= -11 \quad \left| :7 \right. \\
x &= -\dfrac{11}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{x+3} = \dfrac{2}{x-1} $ \
$x$ = [[  13/5  ]]
@Algebrite.check(13/5)
************
$$
\begin{align*}
\dfrac{7}{x+3} &= \dfrac{2}{x-1} \quad \left| \cdot(x+3) \right. \\
7 &= \dfrac{2(x+3)}{x-1} \quad \left| \cdot(x-1) \right. \\
7(x-1) &= 2(x+3) \\
7x - 7 &= 2x + 6 \quad \left| -2x \right. \\
5x - 7 &= 6 \quad \left| +7 \right. \\
5x &= 13 \quad \left| :5 \right. \\
x &= \dfrac{13}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{2x-3} = \dfrac{9}{x+6} $ \
$x$ = [[  51/14  ]]
@Algebrite.check(51/14)
************
$$
\begin{align*}
\dfrac{4}{2x-3} &= \dfrac{9}{x+6} \quad \left| \cdot(2x-3) \right. \\
4 &= \dfrac{9(2x-3)}{x+6} \quad \left| \cdot(x+6) \right. \\
4(x+6) &= 9(2x-3) \\
4x + 24 &= 18x - 27 \quad \left| -4x \right. \\
24 &= 14x - 27 \quad \left| +27 \right. \\
51 &= 14x \quad \left| :14 \right. \\
x &= \dfrac{51}{14}
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{x-4} = \dfrac{5}{2x+7} $ \
$x$ = [[  -41  ]]
@Algebrite.check(-41)
************
$$
\begin{align*}
\dfrac{3}{x-4} &= \dfrac{5}{2x+7} \quad \left| \cdot(x-4) \right. \\
3 &= \dfrac{5(x-4)}{2x+7} \quad \left| \cdot(2x+7) \right. \\
3(2x+7) &= 5(x-4) \\
6x + 21 &= 5x - 20 \quad \left| -5x \right. \\
x + 21 &= -20 \quad \left| -21 \right. \\
x &= -41
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{x+5} = \dfrac{7}{3x-2} $ \
$x$ = [[  -39  ]]
@Algebrite.check(-39)
************
$$
\begin{align*}
\dfrac{2}{x+5} &= \dfrac{7}{3x-2} \quad \left| \cdot(x+5) \right. \\
2 &= \dfrac{7(x+5)}{3x-2} \quad \left| \cdot(3x-2) \right. \\
2(3x-2) &= 7(x+5) \\
6x - 4 &= 7x + 35 \quad \left| -6x \right. \\
-4 &= x + 35 \quad \left| -35 \right. \\
-39 &= x \\
x &= -39
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{x-1} = \dfrac{8}{x+6} $ \
$x$ = [[  38/3  ]]
@Algebrite.check(38/3)
************
$$
\begin{align*}
\dfrac{5}{x-1} &= \dfrac{8}{x+6} \quad \left| \cdot(x-1) \right. \\
5 &= \dfrac{8(x-1)}{x+6} \quad \left| \cdot(x+6) \right. \\
5(x+6) &= 8(x-1) \\
5x + 30 &= 8x - 8 \quad \left| -5x \right. \\
30 &= 3x - 8 \quad \left| +8 \right. \\
38 &= 3x \quad \left| :3 \right. \\
x &= \dfrac{38}{3}
\end{align*}
$$
************
</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 29:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  T = m g h \;\;$  mit $\;\;m=8 \;\;\wedge\;\; g=10 \;\;\wedge\;\; T=480$ \
$h$ = [[  6  ]]
************
$$
\begin{align*}
T &= m g h \quad \left| : (mg) \right. \\
h &= \dfrac{T}{m g} \\ 
h &= \dfrac{480}{8\cdot 10} \\
h &= \dfrac{480}{80}  \\
h &=   6 \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{G\,M\,m}{r} = F\;\;$  mit $\;\;F=50 \;\;\wedge\;\; r=8 \;\;\wedge\;\; m=2 \;\;\wedge\;\; G=\dfrac{1}{10}$ \
$M$ = [[  2000  ]]
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G\,M\,m &= F r \quad \left| : (Gm) \right. \\
M &= \dfrac{F r}{G m} \\ 
M &= \dfrac{50\cdot 8}{\left(\dfrac{1}{10}\right)\cdot 2} \\
M &= \dfrac{400}{\dfrac{1}{5}} \\
M &= 2000 \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{V}{A} - a = a + V  \;\;$  mit $\;\; V=36 \;\;\wedge\;\; A=7$ \
$a$ = [[  -108/7  ]]
@Algebrite.check(-108/7)
************
$$
\begin{align*}
\dfrac{V}{A} - a &= a + V \quad \left| +a \right. \\
\dfrac{V}{A} &= 2a + V \quad \left| -V \right. \\
\dfrac{V}{A} - V &= 2a \quad \left| :2 \right. \\
a &= \dfrac{1}{2} \left(\dfrac{V}{A} - V\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - 36\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - \dfrac{252}{7}\right) \\
a &= \dfrac{1}{2} \left(-\dfrac{216}{7}\right) \\
a &= -\dfrac{108}{7} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\;d=3 \;\;\wedge\;\; s=5 \;\;\wedge\;\; a=2$ \
$r$ = [[  20  ]]
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \quad \left| :d  \right. \\
0 &= \dfrac{1}{2}r - s a \quad \left| + s a \right. \\
\dfrac{1}{2}r &= s a \quad \left| \cdot 2 \right. \\
r &= 2 s a \\
r &= 2\cdot 5 \cdot 2 \\
r & = 20 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $   m n + p o = m z \;\;$  mit $\;\; m=2 \;\;\wedge\;\; p=\dfrac{3}{2} \;\;\wedge\;\; z=3 \;\;\wedge\;\; n=\dfrac{5}{4}$ \
$o$ = [[  7/3  ]]
@Algebrite.check(7/3)
************
$$
\begin{align*}
m n + p o &= m z \quad \left| -mn \right. \\
p o &= m(z-n) \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} \\ 
o &= \dfrac{2 \left(3 - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2 \left(\dfrac{12}{4} - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2\cdot \dfrac{7}{4}}{\dfrac{3}{2}} \\ 
o &=  \dfrac{7}{2} : \dfrac{3}{2}  \\ 
o &= \dfrac{7}{2}\cdot \dfrac{2}{3} \\ 
o &= \dfrac{7}{3} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  m n + p o = m z - p q \;\;$  mit $\;\; m=\dfrac{1}{100} \;\;\wedge\;\;  p=8 \;\;\wedge\;\;  z=\dfrac{21}{5} \;\;\wedge\;\;  n=12 \;\;\wedge\;\;  q=\dfrac{3}{8}$ \
$o$ = [[  -1539/4000  ]]
@Algebrite.check(-1539/4000)
************
$$
\begin{align*}
mn + po &= mz - pq \quad \left| -mn \right. \\
po &= m(z-n) - pq \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} - q \\ 
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - 12\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - \dfrac{60}{5}\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(-\dfrac{39}{5}\right)}{8} - \dfrac{3}{8} \\ 
o &= \dfrac{-\dfrac{39}{500}}{8} - \dfrac{3}{8} \\
o &= -\dfrac{39}{4000} - \dfrac{3}{8} \\ 
o &= -\dfrac{39}{4000} - \dfrac{1500}{4000} \\ 
o &= -\dfrac{1539}{4000} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\; r=\dfrac{5}{2} \;\;\wedge\;\;  s=\dfrac{1}{4} \;\;\wedge\;\;  a=\dfrac{7}{8}$ \
$d$ = [[  0  ]]
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \\
\dfrac{1}{2}r - s a &= \dfrac{1}{2}\cdot \dfrac{5}{2} - \dfrac{1}{4}\cdot \dfrac{7}{8} \\ 
&= \dfrac{5}{4} - \dfrac{7}{32} \\ 
&= \dfrac{40-7}{32} \\ 
&= \dfrac{33}{32} \neq 0 \\ 
\Rightarrow\;& \text{Damit die Gleichung }  \left(\dfrac{1}{2}r - s a\right) \text{ gilt, muss } d=0 \text{ sein.} \\
d &= 0 \\ 
\end{align*}
$$
************
</div>
</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $   F = m a \;\;$  mit $\;\;a=2 \;\;\wedge\;\; F=30$ \
$m$ = [[  15  ]]
************
$$
\begin{align*}
F &= m a \quad \left| :a \right. \\
m &= \dfrac{F}{a} \\ 
m &= \dfrac{30}{2}  \\
m &= 15  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $   U - T = \dfrac{1}{2} v \;\;$  mit $\;\; v=5 \;\;\wedge\;\; U=7$ \
$T$ = [[  9/2  ]]
@Algebrite.check(9/2)
************
$$
\begin{align*}
U - T &= \dfrac{1}{2} v \quad \left| -U \right. \\
-T &= \dfrac{1}{2} v - U \quad \left| \cdot (-1) \right. \\
T &= U - \dfrac{1}{2}v \\ 
T &= 7 - \dfrac{1}{2}\cdot 5  \\
T &= 7 - \dfrac{5}{2}  \\
T &= \dfrac{14}{2} - \dfrac{5}{2}  \\
T &= \dfrac{9}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $   r = 2x + 2y + z \;\;$  mit $\;\; r=12 \;\;\wedge\;\; x=0,4 \;\;\wedge\;\; z=1,5$ \
$y$ = [[  21/10  ]]
@Algebrite.check(21/10)
************
$$
\begin{align*}
r &= 2x + 2y + z \quad \left| -2x  \right. \\
r -2x &=  2y + z \quad \left|  - z \right. \\
r - 2x - z &= 2y \quad \left| :2 \right. \\
y &= \dfrac{r - 2x - z}{2} \\ 
y &= \dfrac{12 - 2\cdot 0,4 - 1,5}{2} \\
y &= \dfrac{12 - 0,8 - 1,5}{2} \\
y &= \dfrac{9,7}{2} \\
y &= \dfrac{97}{20} \\
y &= \dfrac{21}{10} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   pV = \dfrac{3}{2}kNT \;\;$  mit $\;\; N=100 \;\;\wedge\;\; k=5 \;\;\wedge\;\; p=30 \;\;\wedge\;\; V=20$ \
$T$ = [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
pV &= \dfrac{3}{2}kNT \quad \left| : \left(\dfrac{3}{2}kN\right) \right. \\
T &= \dfrac{pV}{\dfrac{3}{2}kN} \\ 
T &= \dfrac{30\cdot 20}{\dfrac{3}{2}\cdot 5 \cdot 100} \\
T &= \dfrac{600}{750}  \\
T &= \dfrac{4}{5}  \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $   8ab - c = cb + b \;\; $  mit $ \;\; b=3 \;\;\wedge\;\; c=0,75 $ \
$a$ = [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
8ab - c &= cb + b \quad \left| +c \right. \\
8ab &= cb + b + c \quad \left| : (8b) \right. \\
a &= \dfrac{cb + b + c}{8b} \\ 
a &= \dfrac{0,75\cdot 3 + 3 + 0,75}{8\cdot 3} \\
a &= \dfrac{2,25 + 3 + 0,75}{24} \\
a &= \dfrac{6}{24} \\
a &= \dfrac{1}{4} \\
\end{align*}
$$
************
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $   G\dfrac{M m}{r} = F \;\;$  mit $\;\; F=120 \;\;\wedge\;\; M=4,5 \;\;\wedge\;\; m=9,5 \;\;\wedge\;\; G=1,2 $ \
$r$ = [[  4275/10000  ]]
@Algebrite.check(4275/10000)
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G M m &= F r \quad \left| :F \right. \\
r &= \dfrac{G M m}{F} \\ 
r &= \dfrac{1,2\cdot 4,5 \cdot 9,5}{120}  \\
r &= \dfrac{51,3}{120}  \\
r &= 0,4275  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{A}{B} = \dfrac{C}{D} \;\;$  mit $\;\; A=0,2 \;\;\wedge\;\; B=0,5 \;\;\wedge\;\; C=6$ \
$D$ = [[  15  ]]
************
$$
\begin{align*}
\dfrac{A}{B} &= \dfrac{C}{D} \quad \left| \cdot D \right. \\
\dfrac{A}{B}D &= C \quad \left| \cdot B \right. \\
AD &= BC \quad \left| :A \right. \\
D &= \dfrac{B C}{A} \\ 
D &= \dfrac{0,5\cdot 6}{0,2}  \\
D &= \dfrac{3}{0,2}  \\
D &= 15
\end{align*}
$$
************
</div>
</section>














<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 31:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2a + b = c \;\;$  mit $\;\; b=4a \;\;\wedge\;\; c=24$ \
$a$ = [[  4  ]]
************
$$
\begin{align*}
2a + b &= c \\
2a + 4a &= 24  \\
6a &= 24 \quad \left| :6 \right. \\
a &= 4 \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  x + 6y = y + 9z \;\;$  mit $\;\; y=4 \;\;\wedge\;\; x=4z$ \
$z$ = [[  4  ]]
************
$$
\begin{align*}
x + 6y &= y + 9z \\
4z + 6\cdot 4 &= 4 + 9z \\
4z + 24 &= 4 + 9z \quad \left| -4z \right. \\
24 &= 4 + 5z \quad \left| -4 \right. \\
20 &= 5z \quad \left| :5 \right. \\
z &= 4 \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  11k + 2r = 5t + c \;\;$  mit $\;\; r=6 \;\;\wedge\;\; t=6 \;\;\wedge\;\; c=4k$ \
$k$ = [[  18/7  ]]
@Algebrite.check(18/7)
************
$$
\begin{align*}
11k + 2r &= 5t + c \\
11k + 2\cdot 6 &= 5\cdot 6 + 4k \\
11k + 12 &= 30 + 4k \quad \left| -4k \right. \\
7k + 12 &= 30 \quad \left| -12 \right. \\
7k &= 18 \quad \left| :7 \right. \\
k &= \dfrac{18}{7} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   5n + 3m + 9s = n\cdot m + a \;\;$  mit $\;\; n=3 \;\;\wedge\;\; m=6 \;\;\wedge\;\; a=17s$ \
$s$ = [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
5n + 3m + 9s &= n m + a \\
5\cdot 3 + 3\cdot 6 + 9s &= 3\cdot 6 + 17s \\
15 + 18 + 9s &= 18 + 17s \quad \left| -18 \right. \\
15 + 9s &= 17s \quad \left| -9s \right. \\
15 &= 8s \quad \left| :8 \right. \\
s &= \dfrac{15}{8} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  r + t = u + v \;\;$  mit $\;\; r=2+u \;\;\wedge\;\; t=7+6u \;\;\wedge\;\; v=19+2u$ \
$u$ = [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
r + t &= u + v \\
(2+u) + (7+6u) &= u + (19+2u) \\
9 + 7u &= 19 + 3u \quad \left| -3u \right. \\
9 + 4u &= 19 \quad \left| -9 \right. \\
4u &= 10 \quad \left| :4 \right. \\
u &= \dfrac{5}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $   5(c+6)+5t = 4(r+n) \;\;$  mit $\;\; c=5t+3 \;\;\wedge\;\; r=2t+2 \;\;\wedge\;\; n=4t+3$ \
$t$ = [[  -25/6  ]]
@Algebrite.check(-25/6)
************
$$
\begin{align*}
5(c+6)+5t &= 4(r+n) \\
5\left((5t+3)+6\right)+5t &= 4\left((2t+2)+(4t+3)\right) \\
5(5t+9)+5t &= 4(6t+5) \\
25t + 45 + 5t &= 24t + 20 \quad \left| -24t \right. \\
6t + 45 &= 20 \quad \left| -45 \right. \\
6t &= -25 \quad \left| :6 \right. \\
t &= -\dfrac{25}{6}  \\
\end{align*}
$$
************
</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 32:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3a + 2b = c + 4 \;\;$  mit $\;\; b = a - 5 \;\;\wedge\;\; c = 2a - 1$ \
$a$ = [[  13/3  ]]
@Algebrite.check(13/3)
************
$$
\begin{align*}
3a + 2b &= c + 4 \\
3a + 2(a-5) &= (2a-1) + 4 \\
3a + 2a - 10 &= 2a + 3 \quad \left| -2a \right. \\
3a - 10 &= 3 \quad \left| +10 \right. \\
3a &= 13 \quad \left| :3 \right. \\
a &= \dfrac{13}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $   x + 6y = y + 9z \;\;$  mit $\;\; y = 2x - 1 \;\;\wedge\;\; z = x + 2$ \
$x$ = [[  23/2  ]]
@Algebrite.check(23/2)
************
$$
\begin{align*}
x + 6y &= y + 9z \\
x + 6(2x-1) &= (2x-1) + 9(x+2) \\
x + 12x - 6 &= 2x - 1 + 9x + 18 \\
13x - 6 &= 11x + 17 \quad \left| -11x \right. \\
2x - 6 &= 17 \quad \left| +6 \right. \\
2x &= 23 \quad \left| :2 \right. \\
x &= \dfrac{23}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $   r + t = u + v \;\;$  mit $\;\; r = 1 + 3u \;\;\wedge\;\; t = 2u - 4 \;\;\wedge\;\; v = 5u - 2$ \
$u$ = [[  -1  ]]
@Algebrite.check(-1)
************
$$
\begin{align*}
r + t &= u + v \\
(1+3u) + (2u-4) &= u + (5u-2) \\
5u - 3 &= 6u - 2 \quad \left| -5u \right. \\
-3 &= u - 2 \quad \left| +2 \right. \\
-1 &= u \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   5n + 3m + 9s = n m + a \;\;$  mit $\;\; n=2 \;\;\wedge\;\; m = 4s + 1 \;\;\wedge\;\; a = s - 5$ \
$s$ = [[  -4/3  ]]
@Algebrite.check(-4/3)
************
$$
\begin{align*}
5n + 3m + 9s &= n m + a \\
5\cdot 2 + 3(4s+1) + 9s &= 2(4s+1) + (s-5) \\
10 + 12s + 3 + 9s &= 8s + 2 + s - 5 \\
21s + 13 &= 9s - 3 \quad \left| -9s \right. \\
12s + 13 &= -3 \quad \left| -13 \right. \\
12s &= -16 \quad \left| :12 \right. \\
s &= -\dfrac{4}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 5(c+6) + 5t = 4(r + n) \;$  mit $\,c = 2t - 1 \;\;\wedge\;\; r = t + 3 \;\;\wedge\;\; n = 3t + 5$ \
$t$ = [[  -7  ]]
@Algebrite.check(-7)
************
$$
\begin{align*}
5(c+6) + 5t &= 4(r+n) \\
5\left((2t-1)+6\right) + 5t &= 4\left((t+3)+(3t+5)\right) \\
5(2t+5) + 5t &= 4(4t+8) \\
10t + 25 + 5t &= 16t + 32 \quad \left| -15t \right. \\
25 &= t + 32 \quad \left| -32 \right. \\
-7 &= t \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $   r + s = t \;\;$  mit $\;\; s = 2r + 1 \;\;\wedge\;\;  t = 2s + 3$ \
$r$ = [[  -4  ]]
@Algebrite.check(-4)
************
$$
\begin{align*}
r + s &= t \\
r + (2r+1) &= 2(2r+1) + 3 \\
3r + 1 &= 4r + 2 + 3 = 4r + 5 \quad \left| -3r \right. \\
1 &= r + 5 \quad \left| -5 \right. \\
-4 &= r \\
\end{align*}
$$
************
</div>
</section>









































































































### Quadratische Ergänzung



!?[Quadratische Ergänzung](https://www.youtube.com/watch?v=8QRKPmR82jQ)


#### Übungen - Quadratische Ergänzung



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>


































































































### Substitution


#### Übungen - Substitution



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5" -->

<section class="flex-container">



</section>










































































































### Gleichungssysteme





{{|>}} Nicht jede *Gleichung* besitzt nur eine *Unbekannte*, sondern oftmals mehrere. Mit der richtigen Anzahl von *Randbedingungen* an diese *Gleichung* können alle *Unbekannten* mittels eines *Gleichungssystem* bestimmt werden. Sei ein allgemeines *Gleichungssystem* mit zwei Unbekannten als Beispiel gegeben:

$$
\begin{align*}
I.& \qquad 4x - y = 18 \\  
II.& \qquad x + 3y = 11  
\end{align*}
$$  


{{|>}} Das *Gleichungssystem* besteht dabei aus zwei *Gleichungen* mit ihren Bezeichnung ($I.$ oder $II.$) vor sich hertragen, welche zur besseren Übersicht dienen. 
Nun kann durch die *Äquivalenzumformung* eine der *Gleichungen* umgestellt werden und dann mittels verschiedener Verfahren das *Gleichungssystem* gelöst werden:

{{|>}} • Das *Gleichsetzungsverfahren*: Beim *Gleichsetzungsverfahren* werden die beiden *Gleichungen* (oder auch mehrere) nach der gleichen *Unbekannten* aufgelöst und dann mit einander gleichgesetz. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I. &\qquad 4x - y = 18 \quad \left| -4x \right. \\
&\qquad -y = 18 - 4x \quad \left| \cdot (-1) \right. \\
&\qquad y = \textcolor{red}{4x - 18} \\[6pt]
II. &\qquad x + 3y = 11 \quad \left| -x \right. \\
&\qquad 3y = 11 - x \quad \left| :3 \right. \\
&\qquad y = \textcolor{blue}{ \dfrac{11 - x}{3} } \\[6pt]
I. \cap II. &\qquad \textcolor{red}{4x - 18} = \textcolor{blue}{ \dfrac{11 - x}{3} } \\
&\qquad 3(4x - 18) = 11 - x \\
&\qquad 12x - 54 = 11 - x \quad \left| +x \right. \\
&\qquad 13x - 54 = 11 \quad \left| +54 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\[6pt]
x \cap I. &\qquad 4\cdot 5 - y = 18 \\
&\qquad 20 - y = 18 \quad \left| -20 \right. \\
&\qquad -y = -2 \quad \left| \cdot (-1) \right. \\
&\qquad y = 2 \;\; ,
\end{align*}
$$

{{|>}} wobei $I. \cap II.$ verdeutlicht, dass $I.$ in $II.$ eingesetzt wurde. Das *Gleichsetzungsverfahren* kommt vor allem bei der Berechnung von *Schnittpunkten* oder *Schnittstellen* zur Anwendung.


{{|>}} • Das *Additionsverfahren*: Beim *Additionsverfahren* werden die beiden *Gleichungen* (oder auch mehrere) so *multipliziert*, dass bei der *Addition* oder *Subtraktion* dieser beiden *Gleichungen* voneinander eine *Unbekannte* eliminiert wird. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I.& \qquad \textcolor{blue}{4x - y = 18} \\  
II.& \qquad x + 3y = 11 \quad \left| \cdot 4 \right. \\
II.\cdot 4 &\qquad \textcolor{red}{4x + 12y = 44} \\ \hline
(II.\cdot 4) - I.\, &\qquad (\textcolor{red}{4x} - \textcolor{blue}{4x}) + (\textcolor{red}{12y} - \textcolor{blue}{(-y)}) = \textcolor{red}{44} - \textcolor{blue}{18} \\
&\qquad 13y = 26 \quad \left| :13 \right. \\
&\qquad y = 2 \\[6pt]
y \cap II. &\qquad x + 3\cdot 2 = 11 \\
&\qquad x + 6 = 11 \quad \left| -6 \right. \\
&\qquad x = 5
\end{align*}
$$

{{|>}} Das Additionsverfahren kommt vor allem bei linearen Gleichungssystem zur Anwendung. So wird es zum Beispiel bei dem Gauß-Jordan-Verfahren verwendet. 



{{|>}} • Das *Einsetzungsverfahren*: Beim *Einsetzungsverfahren* wird eine *Gleichung* nach einer *Unbekannten* aufgelöst und dieser Ausdruck dann in die anderen *Gleichungen* eingesetzt. Dieses Verfahren wird hier beispielhaft gezeigt:

$$
\begin{align*}
I.& \qquad 4x - y = 18 \quad \left| -4x \right. \\
&\qquad -y = 18 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = \textcolor{red}{4x - 18} \\ \hline
I. \cap II. &\qquad x + 3(\textcolor{red}{4x - 18}) = 11 \\
&\qquad x + 12x - 54 = 11 \\
&\qquad 13x - 54 = 11 \quad \left| +54 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\[6pt]
x \cap I. &\qquad 4\cdot 5 - y = 18 \\
&\qquad 20 - y = 18 \quad \left| -20 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$


{{|>}} Das *Einsetzungsverfahren* funktioniert bei jedem *Gleichungssystem* auch bei *nichtlinearen* *Gleichungen*, kann allerdings auch längere und komplexere *Terme* nach sich ziehen.


{{|>}} Alle Verfahren funktionieren auch bei mehr als zwei *Gleichungen* und zwei *Unbekannten* und können auch innerhalb einer Rechnung varriert werden. Dabei sollte immer beachtet werden, dass die Anzahl der *Gleichungen* mit der Anzahl der *Unbekannten* übereinstimmt, da das *Gleichungssystem* ansonsten *unterbestimmt* (zu wenige Informationen) oder *überbestimmt* (zu viele Informationen) ist. Letzteres ermöglicht es dem Rechnenden sich auf die trivialeren Informationen zu beschränken. 

















#### Übungen - Gleichungssysteme


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.



<!-- style="width:600px"  data-solution-button="5"-->
__$a)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1a.png)  
$x=$ [[  1  ]] Streichhölzer
$y=$ [[  4  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$b)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2a.png)  
$x=$ [[  2  ]] Streichhölzer
$y=$ [[  6  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$c)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3a.png)  
$x=$ [[  3  ]] Streichhölzer
$y=$ [[  5  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$d)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4a.png)  
$x=$ [[  1  ]] Streichhölzer
$y=$ [[  7  ]] Streichhölzer
$z=$ [[  2  ]] Streichhölzer






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.




<!-- style="width:600px"  data-solution-button="5"-->
__$a)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1b.png)  
$x=$ [[  2  ]] Streichhölzer
$y=$ [[  12 ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$b)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2b.png)  
$x=$ [[  2   ]] Streichhölzer
$y=$ [[  3   ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$c)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3b.png)  
$x=$ [[  1  ]] Streichhölzer
$y=$ [[  2  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$d)\;\;$__ ![](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4b.png)  
$x=$ [[  2  ]] Streichhölzer
$y=$ [[  6  ]] Streichhölzer
$z=$ [[  4  ]] Streichhölzer











<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** das verwendete Lösungsverfahren **an**.




<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\
II.& \qquad 3x - y = 4 \\ \hline
I.+II.& \qquad (2x+3x) + (y-y) = 11+4 \\
& \qquad 5x = 15 \quad \left| :5 \right. \\
& \qquad x = 3 \\
x \cap I.& \qquad 2\cdot 3 + y = 11 \\
& \qquad 6 + y = 11 \quad \left| -6 \right. \\
& \qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + 2y = 16 \\  
II.& \qquad x - y = 2  \\  \hline
II. &\qquad x - y = 2 \quad \left| -x \right. \\
&\qquad -y = 2 - x \quad \left| \cdot(-1) \right. \\
&\qquad y = x - 2 \\ \hline
I. \cap II. &\qquad 3x + 2(x-2) = 16 \\
&\qquad 3x + 2x - 4 = 16 \\
&\qquad 5x - 4 = 16 \quad \left| +4 \right. \\
&\qquad 5x = 20 \quad \left| :5 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad y = 4 - 2 = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x - y = 10 \\  
II.& \qquad 2x + 3y = 12  \\  \hline
I. &\qquad 4x - y = 10 \quad \left| -4x \right. \\
&\qquad -y = 10 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = 4x - 10 \\ \hline
I. \cap II. &\qquad 2x + 3(4x - 10) = 12 \\
&\qquad 2x + 12x - 30 = 12 \\
&\qquad 14x - 30 = 12 \quad \left| +30 \right. \\
&\qquad 14x = 42 \quad \left| :14 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 4\cdot 3 - y = 10 \\
&\qquad 12 - y = 10 \quad \left| -12 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x \right. \\
II. &\qquad x + 2y = 13 \quad \left| -x \right. \\ \hline
I. &\qquad y = 11 - 2x \\
II. &\qquad 2y = 13 - x \quad \left| :2 \right. \\
II. &\qquad y = \dfrac{13 - x}{2} \\[4pt]
I. \cap II. &\qquad 11 - 2x = \dfrac{13 - x}{2} \\
&\qquad 2(11 - 2x) = 13 - x \\
&\qquad 22 - 4x = 13 - x \quad \left| -13 \right. \\
&\qquad 9 - 4x = -x \quad \left| +4x \right. \\
&\qquad 9 = 3x \quad \left| :3 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 2\cdot 3 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
<div class="flex-child">
__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x + 2y = 20 \\  
II.& \qquad 3x + y = 11  \\ \hline
II.& \qquad 3x + y = 11 \quad \left|\cdot 2 \right. \\
& \qquad 6x + 2y = 22 \\ 
I.& \qquad 4x + 2y = 20 \\ \hline
(II.-I.)& \qquad (6x-4x) + (2y-2y) = 22-20 \\
& \qquad 2x = 2 \quad \left| :2 \right. \\
& \qquad x = 1 \\
x \cap II.& \qquad 3\cdot 1 + y = 11 \\
& \qquad 3 + y = 11 \quad \left| -3 \right. \\
& \qquad y = 8
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
<div class="flex-child">
__$f)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x - y = 2 \quad \left| -3x \right. \\
II.&\qquad x + 2y = 17 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 2 - 3x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 3x - 2 \\
II.&\qquad 2y = 17 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{17 - x}{2} \\ 
I. \cap II. &\qquad 3x - 2 = \dfrac{17 - x}{2} \\
&\qquad 2(3x - 2) = 17 - x \\
&\qquad 6x - 4 = 17 - x \quad \left| +x \right. \\
&\qquad 7x - 4 = 17 \quad \left| +4 \right. \\
&\qquad 7x = 21 \quad \left| :7 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 3\cdot 3 - y = 2 \\
&\qquad 9 - y = 2 \quad \left| -9 \right. \\
&\qquad -y = -7 \quad \left| \cdot(-1) \right. \\
&\qquad y = 7
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
</section>












<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** das verwendete Lösungsverfahren **an**.





<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + y = 16 \\  
II.& \qquad x + 4y = 9   \\ \hline
I. &\qquad 3x + y = 16 \quad \left| -3x \right. \\
&\qquad y = 16 - 3x \\ \hline
I. \cap II. &\qquad x + 4(16 - 3x) = 9 \\
&\qquad x + 64 - 12x = 9 \\
&\qquad -11x + 64 = 9 \quad \left| -64 \right. \\
&\qquad -11x = -55 \quad \left| :(-11) \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 + y = 16 \\
&\qquad 15 + y = 16 \quad \left| -15 \right. \\
&\qquad y = 1
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 5x + 2y = 19 \\
II.& \qquad 2x + 3y = 17 \\ \hline
I.& \qquad 5x + 2y = 19 \quad \left|\cdot 3 \right. \\
& \qquad 15x + 6y = 57 \\
II.& \qquad 2x + 3y = 17 \quad \left|\cdot 2 \right. \\
& \qquad 4x + 6y = 34 \\ \hline
(I.-II.)& \qquad (15x-4x) + (6y-6y) = 57-34 \\
& \qquad 11x = 23 \quad \left| :11 \right. \\
& \qquad x = 2 \\
x \cap II.& \qquad 2\cdot 2 + 3y = 17 \\
& \qquad 4 + 3y = 17 \quad \left| -4 \right. \\
& \qquad 3y = 13 \quad \left| :3 \right. \\
& \qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 5x + 2y = 26 \quad \left| -5x \right. \\
II.&\qquad 3x - y = 9 \quad \left| -3x \right. \\ \hline
I. &\qquad 2y = 26 - 5x \quad \left| :2 \right. \\
I. &\qquad y = \dfrac{26 - 5x}{2} \\
II.&\qquad -y = 9 - 3x \quad \left| \cdot(-1) \right. \\
II.&\qquad y = 3x - 9 \\[4pt]
I. \cap II. &\qquad \dfrac{26 - 5x}{2} = 3x - 9 \\
&\qquad 26 - 5x = 6x - 18 \\
&\qquad 26 + 18 = 6x + 5x \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad 3\cdot 4 - y = 9 \\
&\qquad 12 - y = 9 \quad \left| -12 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
<div class="flex-child">
__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + y = 11 \quad \left| -3x \right. \\
II.&\qquad 2x + 3y = 19 \quad \left| -2x \right. \\ \hline
I. &\qquad y = 11 - 3x \\
II.&\qquad 3y = 19 - 2x \quad \left| :3 \right. \\
II.&\qquad y = \dfrac{19 - 2x}{3} \\[4pt]
I. \cap II. &\qquad 11 - 3x = \dfrac{19 - 2x}{3} \\
&\qquad 3(11 - 3x) = 19 - 2x \\
&\qquad 33 - 9x = 19 - 2x \quad \left| -19 \right. \\
&\qquad 14 - 9x = -2x \quad \left| +9x \right. \\
&\qquad 14 = 7x \quad \left| :7 \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 3\cdot 2 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]
</div>
<div class="flex-child">
__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 10 \\  
II.& \qquad x + 3y = 15   \\ \hline
II. &\qquad x + 3y = 15 \quad \left| -3y \right. \\
&\qquad x = 15 - 3y \\ \hline
I. \cap II. &\qquad 2(15 - 3y) + y = 10 \\
&\qquad 30 - 6y + y = 10 \\
&\qquad -5y = -20 \quad \left| :(-5) \right. \\
&\qquad y = 4 \\
y \cap II. &\qquad x + 3\cdot 4 = 15 \\
&\qquad x + 12 = 15 \quad \left| -12 \right. \\
&\qquad x = 3
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]
</div>
<div class="flex-child">
__$f)\;\;$__ 
$$
\begin{align*}
I.& \qquad x + 4y = 22 \quad \left|\cdot 2 \right. \\
& \qquad 2x + 8y = 44 \\
II.& \qquad 2x + 3y = 19 \\ \hline
(I.-II.)& \qquad (2x-2x) + (8y-3y) = 44-19 \\
& \qquad 5y = 25 \quad \left| :5 \right. \\
& \qquad y = 5 \\
y \cap I.& \qquad x + 4\cdot 5 = 22 \\
& \qquad x + 20 = 22 \quad \left| -20 \right. \\
& \qquad x = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]
</div>
</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 5:__ **Fülle** alle Lücken des Lückentextes **aus**, der die präsentierte Musterlösung zum gegebenen Gleichungssystem beschreibt.




<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x - y = 13 \\  
II.& \qquad x + 4y = 13  \\ \hline
I. &\qquad 3x - y = 13 \quad \left| -3x \right. \\
&\qquad -y = 13 - 3x \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x - 13 \\ \hline
I. \cap II. &\qquad x + 4(3x - 13) = 13 \\
&\qquad x + 12x - 52 = 13 \\
&\qquad 13x - 52 = 13 \quad \left| +52 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 - y = 13 \\
&\qquad 15 - y = 13 \quad \left| -15 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="5"-->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[    Einsetzungsverfahren    ]] angewendet.  
Zunächst wird eine der beiden [[   Gleichungen   ]] gewählt, hier die erste, und nach [[  y  ]] umgestellt.  
Aus $3x - y = 13$ folgt durch Umformen, dass $y = 3x - 13$. Diesen Ausdruck setzen wir in die zweite [[  Gleichung  ]] ein.  
Dadurch entsteht $x + 4(3x - 13) =$ [[  13  ]]. Nach dem [[  Ausmultiplizieren  ]] der Klammern ergibt sich $x + 12x - 52 = 13$, was sich zu $13x - 52 = 13$ zusammenfassen lässt. Wird $52$ auf beiden Seiten [[ addiert ]], so folgt $13x = 65$. Abschließend muss durch $13$ dividiert werden. Zum Schluss wird $x=5$ in die [[  erste  ]] Gleichung [[  eingesetzt ]], sodass $y = 2$ resultiert.  

</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + 2y = 17 \\
II. &\qquad 5x - y = 11 \\ \hline
II. &\qquad 5x - y = 11 \quad \left| \cdot 2 \right. \\
II.\cdot 2 &\qquad 10x - 2y = 22 \\
I. &\qquad 3x + 2y = 17 \\ \hline
I. + (II.\cdot 2)\, &\qquad (3x+10x) + (2y-2y) = 17 + 22 \\
&\qquad 13x = 39 \quad \left| :13 \right. \\
&\qquad x = 3 \\
x \cap II.\, &\qquad 5\cdot 3 - y = 11 \\
&\qquad 15 - y = 11 \quad \left| -15 \right. \\
&\qquad -y = -4 \quad \left| \cdot(-1) \right. \\
&\qquad y = 4
\end{align*}
$$

<!-- data-solution-button="5"-->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[   Additionsverfahren   ]] angewendet.
Dazu wird zunächst die [[   zweite   ]] Gleichung so umgeformt, dass die Variable $y$ in beiden Gleichungen mit entgegengesetzten [[ Vorzeichen ]] auftritt.
Deshalb wird  die zweite Gleichung mit [[  2  ]] multiplizieren und es ergibt sich $10x - 2y = 22$.
Nun können wir diese Gleichung mit der [[   ersten   ]] addieren. Dabei fällt die Variable [[  y  ]] weg und es bleibt $13x = 39$.
Wird nun durch [[   13   ]] geteilt, so ergibt sich $x = 3$.
Dieser Wert wird anschließend in die [[   zweite   ]] Gleichung eingesetzt: $5\cdot 3 - y = 11$.
Nach dem Umformen folgt $15 - y = 11$, und nach Subtraktion von [[ 15 ]] ergibt sich $-y = -4$.
Durch Multiplikation mit [[ -1 ]] ergibt sich schließlich $y = 4$.

</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 4x - y = 13 \quad \left| -4x \right. \\
II.&\qquad x + 2y = 10 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 13 - 4x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 4x - 13 \\
II.&\qquad 2y = 10 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{10 - x}{2} \\[4pt]
I. \cap II. &\qquad 4x - 13 = \dfrac{10 - x}{2} \\
&\qquad 2(4x - 13) = 10 - x \\
&\qquad 8x - 26 = 10 - x \quad \left| +x \right. \\
&\qquad 9x - 26 = 10 \quad \left| +26 \right. \\
&\qquad 9x = 36 \quad \left| :9 \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 4\cdot 4 - y = 13 \\
&\qquad 16 - y = 13 \quad \left| -16 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$


<!-- data-solution-button="5"-->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Gleichsetzungsverfahren   ]] angewendet.
Zunächst wird die [[   erste   ]] Gleichung nach $y$ aufgelöst und es ergibt sich $y = 4x - 13$.
Anschließend wird die [[   zweite   ]] Gleichung ebenfalls nach $y$ umgeformt, sodass $y = \dfrac{10 - x}{2}$ resultiert.
Beide Terme für [[  y  ]] werden nun [[   gleichgesetzt   ]], wodurch $4x - 13 = \dfrac{10 - x}{2}$ entsteht.
Nach dem [[   Ausmultiplizieren   ]] folgt $8x - 26 = 10 - x$.
Durch [[  Addition  ]] von [[  x  ]] auf beiden Seiten ergibt sich $9x - 26 = 10$.
Nach Addition von [[  26  ]] resultiert $9x = 36$.
Durch [[  Division  ]] mit $9$ folgt $x = 4$.
Der Wert für $x$ wird schließlich in die [[  erste  ]] Gleichung [[  eingesetzt  ]], sodass $y = 3$ bestimmt wird.

</div>
</section>













<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 6:__ **Fülle** alle Lücken des Lückentextes **aus**, der die präsentierte Musterlösung zum gegebenen Gleichungssystem beschreibt.




<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ 
$$
\begin{align*}
I. &\qquad 5x + y = 22 \quad \left| -5x \right. \\
II.&\qquad 2x - y = -1 \quad \left| -2x \right. \\ \hline
I. &\qquad y = 22 - 5x \\
II.&\qquad -y = -1 - 2x \quad \left| \cdot(-1) \right. \\
II.&\qquad y = 2x + 1 \\[4pt]
I. \cap II. &\qquad 22 - 5x = 2x + 1 \\
&\qquad 22 - 1 = 2x + 5x \\
&\qquad 21 = 7x \quad \left| :7 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 5\cdot 3 + y = 22 \\
&\qquad 15 + y = 22 \quad \left| -15 \right. \\
&\qquad y = 7
\end{align*}
$$

<!-- data-solution-button="5"-->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Gleichsetzungsverfahren   ]] angewendet.
Zunächst wird die [[   erste   ]] Gleichung nach $y$ aufgelöst und es ergibt sich $y = 22 - 5x$.
Anschließend wird die [[   zweite   ]] Gleichung nach $y$ umgeformt, sodass $y = 2x + 1$ resultiert.
Die beiden Terme für [[   y   ]] werden [[   gleichgesetzt   ]], wodurch $22 - 5x = 2x + 1$ entsteht.
Nach dem [[  Zusammenfassen  ]] folgt $21 = 7x$.
Durch Division mit [[   7   ]] ergibt sich $x = 3$.
Der Wert für $x$ wird in die [[   erste   ]] Gleichung [[   eingesetzt  ]], sodass $y = 7$ bestimmt wird.


</div>
<div class="flex-child">
__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 5x + y = 26 \\  
II.& \qquad 2x + 3y = 26   \\ \hline
I. &\qquad 5x + y = 26 \quad \left| -5x \right. \\
&\qquad y = 26 - 5x \\ \hline
I. \cap II. &\qquad 2x + 3(26 - 5x) = 26 \\
&\qquad 2x + 78 - 15x = 26 \\
&\qquad -13x + 78 = 26 \quad \left| -78 \right. \\
&\qquad -13x = -52 \quad \left| :(-13) \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 5\cdot 4 + y = 26 \\
&\qquad 20 + y = 26 \quad \left| -20 \right. \\
&\qquad y = 6
\end{align*}
$$

<!-- data-solution-button="5"-->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Einsetzungsverfahren   ]] angewendet.
Zuerst wird die [[   erste   ]] Gleichung nach $y$ umgestellt, sodass $y = 26 - 5x$ entsteht.
Dieser Ausdruck wird in die zweite [[  Gleichung  ]] eingesetzt, wodurch $2x + 3(26 - 5x) = 26$ gebildet wird.
Nach dem [[   Ausmultiplizieren   ]] der Klammer ergibt sich $2x + 78 - 15x = 26$.
Dies lässt sich zu $-13x + 78 = 26$ [[   zusammenfassen   ]].
Durch [[  Subtraktion  ]] von [[ 78 ]] auf beiden Seiten folgt $-13x = -52$.
Durch Division mit [[  -13  ]] wird $x = 4$ erhalten.
Der Wert für $x$ wird in die [[   erste  ]] Gleichung [[   eingesetzt   ]], sodass schließlich $y = 6$ bestimmt wird.


</div>
<div class="flex-child">
__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 2x + 3y = 23 \\
II. &\qquad 4x - y = 11 \\ \hline
II. &\qquad 4x - y = 11 \quad \left| \cdot 3 \right. \\
II.\cdot 3 &\qquad 12x - 3y = 33 \\
I. &\qquad 2x + 3y = 23 \\ \hline
(II.\cdot 3) + I.\, &\qquad (12x+2x) + (-3y+3y) = 33 + 23 \\
&\qquad 14x = 56 \quad \left| :14 \right. \\
&\qquad x = 4 \\
x \cap II.\, &\qquad 4\cdot 4 - y = 11 \\
&\qquad 16 - y = 11 \quad \left| -16 \right. \\
&\qquad -y = -5 \quad \left| \cdot(-1) \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="5"-->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Additionsverfahren   ]] angewendet.
Zuerst wird die zweite Gleichung mit [[  3  ]] [[  multipliziert  ]], sodass $12x - 3y = 33$ entsteht.
Nun wird diese Gleichung mit der ersten [[  addiert  ]]. Dabei fallen die Teile mit $y$ weg und es bleibt $14x = 56$.
Durch [[  Division  ]] mit [[  14  ]] ergibt sich $x = 4$.
Der erhaltene Wert wird in die zweite [[  Gleichung  ]] [[   eingesetzt   ]], woraus $16 - y = 11$ folgt.
Durch [[  Subtraktion  ]] von [[  16  ]] auf beiden Seiten ergibt sich $-y = -5$.
Durch [[  Multiplikation  ]] mit [[  -1  ]] wird schließlich $y = 5$ bestimmt.


</div>
</section>












<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\  
II.& \qquad x + 3y = 13  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  3  ]]
************
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x  \right. \\
II. &\qquad x + 3y = 13    \\ \hline
I. &\qquad y = 11 - 2x \\  
I. \cap II.  &\qquad x + 3(11-2x) = 13   \\
& \qquad x + 33 - 6x = 13 \quad \left| -33 \right. \\
& \qquad -5x = -20 \quad \left| :(-5) \right. \\
& \qquad x = 4 \\
x \cap I. &\qquad 2\cdot 4 + y = 11 \\
& \qquad 8 + y = 11 \quad \left| -8 \right. \\
& \qquad y = 3
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 19 \\  
II.& \qquad 2x + y  = 12  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  2  ]]
************
$$
\begin{align*}
I. & \qquad 3x + 2y = 19 \\
II. & \qquad 2x + y  = 12 \quad \left| -2x \right. \\ \hline
II. &  \qquad y = 12 - 2x \\ 
I.\cap II. & \qquad 3x + 2(12 - 2x) = 19 \\
&  \qquad 3x + 24 - 4x = 19 \\
&  \qquad -x + 24 = 19 \quad \left| -24 \right. \\
&  \qquad-x = -5 \quad \left| \cdot(-1) \right. \\
&  \qquad x = 5 \\
x\cap II. &  \qquad 2\cdot 5 + y = 12 \\
&  \qquad 10 + y = 12 \quad \left| -10 \right. \\
&  \qquad y = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y &= 9 \\  
II.& \qquad 2x - y &= 3  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad x + y = 9 \quad \left| -x \right. \\
II.\ &\qquad 2x - y = 3 \\ \hline
I.\ &\qquad y = 9 - x \\
I.\cap II.\ &\qquad 2x - (9 - x) = 3 \\
&\qquad 2x - 9 + x = 3 \\
&\qquad 3x - 9 = 3 \quad \left| +9 \right. \\
&\qquad 3x = 12 \quad \left| :3 \right. \\
&\qquad x = 4 \\
x\cap I.\ &\qquad 4 + y = 9 \quad \left| -4 \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x - y &= 7 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  3  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad 4x - y = 7 \quad \left| -4x \right. \\
II.\ &\qquad x + 2y = 13 \\ \hline
I.\ &\qquad -y = 7 - 4x \quad \left| \cdot(-1) \right. \\
I.\ &\qquad y = 4x - 7 \\
I.\cap II.\ &\qquad x + 2(4x - 7) = 13 \\
&\qquad x + 8x - 14 = 13 \\
&\qquad 9x - 14 = 13 \quad \left| +14 \right. \\
&\qquad 9x = 27 \quad \left| :9 \right. \\
&\qquad x = 3 \\
x\cap I.\ &\qquad 4\cdot 3 - y = 7 \\
&\qquad 12 - y = 7 \quad \left| -12 \right. \\
&\qquad -y = -5 \quad \left| \cdot(-1) \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + y &= 16 \\  
II.& \qquad 2x + 3y &= 20  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\ &\qquad 3x + y = 16 \quad \left| -3x \right. \\
II.\ &\qquad 2x + 3y = 20 \\ \hline
I.\ &\qquad y = 16 - 3x \\
I.\cap II.\ &\qquad 2x + 3(16 - 3x) = 20 \\
&\qquad 2x + 48 - 9x = 20 \\
&\qquad -7x + 48 = 20 \quad \left| -48 \right. \\
&\qquad -7x = -28 \quad \left| :(-7) \right. \\
&\qquad x = 4 \\
x\cap I.  &\qquad 3\cdot 4 + y = 16 \\
&\qquad 12 + y = 16 \quad \left| -12 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + y &= 24 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\qquad &\ 4x + y = 24 \quad \left| -4x \right. \\
II.\qquad &\ x + 2y = 13 \\ \hline
I.\qquad &\ y = 24 - 4x \\
I.\cap II.\ &\qquad x + 2(24 - 4x) = 13 \\
&\qquad x + 48 - 8x = 13 \\
&\qquad -7x + 48 = 13 \quad \left| -48 \right. \\
&\qquad -7x = -35 \quad \left| :(-7) \right. \\
&\qquad x = 5 \\
x\cap I.  &\qquad 4\cdot 5 + y = 24 \\
&\qquad 20 + y = 24 \quad \left| -20 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
</section>














<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + y = 14 \\  
II.& \qquad x + 2y = 10  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I. &\qquad 3x + y = 14 \quad \left| -3x \right. \\
II. &\qquad x + 2y = 10 \\ \hline
I. &\qquad y = 14 - 3x \\
I. \cap II. &\qquad x + 2(14 - 3x) = 10 \\
&\qquad x + 28 - 6x = 10 \quad \left| -28 \right. \\
&\qquad -5x = -18 \quad \left| :(-5) \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 3\cdot 2 + y = 14 \\
&\qquad 6 + y = 14 \quad \left| -6 \right. \\
&\qquad y = 8
\end{align*}
$$
************

</div>
<div class="flex-child">
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x - y = 7 \\  
II.& \qquad x + 3y = 19  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I. &\qquad 4x - y = 7 \quad \left| -4x \right. \\
II. &\qquad x + 3y = 19 \\ \hline
I. &\qquad -y = 7 - 4x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 4x - 7 \\
I. \cap II. &\qquad x + 3(4x - 7) = 19 \\
&\qquad x + 12x - 21 = 19 \\
&\qquad 13x - 21 = 19 \quad \left| +21 \right. \\
&\qquad 13x = 40 \quad \left| :13 \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 4\cdot 4 - y = 7 \\
&\qquad 16 - y = 7 \quad \left| -16 \right. \\
&\qquad -y = -9 \quad \left| \cdot(-1) \right. \\
&\qquad y = 9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + 3y = 18 \\  
II.& \qquad x - y = 1  
\end{align*}
$$  
$x$ = [[  3  ]]  und  $y$ = [[  2  ]]
************
$$
\begin{align*}
II. &\qquad x - y = 1 \quad \left| -x \right. \\
I.  &\qquad 2x + 3y = 18 \\ \hline
II. &\qquad -y = 1 - x \quad \left| \cdot(-1) \right. \\
II. &\qquad y = x - 1 \\
I. \cap II. &\qquad 2x + 3(x - 1) = 18 \\
&\qquad 2x + 3x - 3 = 18 \\
&\qquad 5x - 3 = 18 \quad \left| +3 \right. \\
&\qquad 5x = 21 \quad \left| :5 \right. \\
&\qquad x = 3 \\
x \cap II. &\qquad y = 3 - 1 \\
&\qquad y = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 2y = 20 \\  
II.& \qquad 3x - y = 4  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
II. &\qquad 3x - y = 4 \quad \left| -3x \right. \\
I.  &\qquad 5x + 2y = 20 \\ \hline
II. &\qquad -y = 4 - 3x \quad \left| \cdot(-1) \right. \\
II. &\qquad y = 3x - 4 \\
I. \cap II. &\qquad 5x + 2(3x - 4) = 20 \\
&\qquad 5x + 6x - 8 = 20 \\
&\qquad 11x - 8 = 20 \quad \left| +8 \right. \\
&\qquad 11x = 28 \quad \left| :11 \right. \\
&\qquad x = 2 \\
x \cap II. &\qquad y = 3\cdot 2 - 4 \\
&\qquad y = 6 - 4 = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = 10 \\  
II.& \qquad 4x - y = 6  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  6  ]]
************
$$
\begin{align*}
I. &\qquad 2x + y = 10 \quad \left| -2x \right. \\
II. &\qquad 4x - y = 6 \\ \hline
I. &\qquad y = 10 - 2x \\
I. \cap II. &\qquad 4x - (10 - 2x) = 6 \\
&\qquad 4x - 10 + 2x = 6 \\
&\qquad 6x - 10 = 6 \quad \left| +10 \right. \\
&\qquad 6x = 16 \quad \left| :6 \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 2\cdot 2 + y = 10 \\
&\qquad 4 + y = 10 \quad \left| -4 \right. \\
&\qquad y = 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 22 \\  
II.& \qquad x + y = 7  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  3  ]]
************
$$
\begin{align*}
II. &\qquad x + y = 7 \quad \left| -x \right. \\
I.  &\qquad 3x + 2y = 22 \\ \hline
II. &\qquad y = 7 - x \\
I. \cap II. &\qquad 3x + 2(7 - x) = 22 \\
&\qquad 3x + 14 - 2x = 22 \\
&\qquad x + 14 = 22 \quad \left| -14 \right. \\
&\qquad x = 8 \\
x \cap II. &\qquad 8 + y = 7 \quad \left| -8 \right. \\
&\qquad y = -1
\end{align*}
$$
************
</div>
</section>




















<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  \\  \hline
I. &\qquad x + y + z = 12 \quad \left| -x - y \right. \\
&\qquad z = 12 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (12 - x - y) = 8 \\
&\qquad x - 2y + 12 = 8 \quad \left| -12 \right. \\
&\qquad x - 2y = -4   \quad \left| +2y \right. \\
&\qquad x = 2y -4  \\ 
I. \cap III.\; &\qquad x + 2y - (12 - x - y) = 1 \\
&\qquad 2x + 3y - 12 = 1 \quad \left| +12 \right. \\
&\qquad 2x + 3y = 13 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 4 \\
 &\qquad 2(2y-4) + 3y = 13 \\
&\qquad 4y - 8 + 3y = 13 \\
&\qquad 7y = 21 \quad \left| :7 \right. \\
&\qquad y = 3 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-4 = 2 \cdot 3-4 = 2 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 12 - 2 - 3 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  \\  \hline
I. &\qquad x + y + z = 10 \quad \left| -x - y \right. \\
&\qquad z = 10 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (10 - x - y) = 9 \\
&\qquad x - 2y + 10 = 9 \quad \left| -10 \right. \\
&\qquad x - 2y = -1 \quad \left| +2y \right. \\
&\qquad x = 2y - 1 \\ 
I. \cap III.\; &\qquad x + 3y - (10 - x - y) = 4 \\
&\qquad 2x + 4y - 10 = 4 \quad \left| +10 \right. \\
&\qquad 2x + 4y = 14 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 1 \\
 &\qquad 2(2y-1) + 4y = 14 \\
&\qquad 4y - 2 + 4y = 14 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-1 = 2\cdot 2 - 1 = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 10 - 3 - 2 = 5
\end{align*}
$$
************


</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  \\  \hline
I. &\qquad 2x + y + z = 15 \quad \left| -2x - z \right. \\
&\qquad y = 15 - 2x - z \\
III. &\qquad 3x - y + z = 17 \quad \left| -3x - z \right. \\
&\qquad -y = 17 - 3x - z \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x + z - 17 \\ \hline
I = III\; &\qquad 15 - 2x - z = 3x + z - 17 \\
&\qquad 32 = 5x + 2z \quad (A) \\
I \cap II\; &\qquad x + 2(15 - 2x - z) + 3z = 24 \\
&\qquad x + 30 - 4x - 2z + 3z = 24 \\
&\qquad -3x + z + 30 = 24 \quad \left| -30 \right. \\
&\qquad z = 3x - 6 \quad (B) \\ \hline
(A) \cap (B)\; &\qquad 32 = 5x + 2(3x - 6) \\
&\qquad 32 = 11x - 12 \quad \left| +12 \right. \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4,\;\; z = 3\cdot 4 - 6 = 6, \;\; y = 15 - 2\cdot 4 - 6 = 1
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  4  ]], $z$ = [[  3  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  \\  \hline
I.+II.\; &\qquad (x+2y+z) + (2x+y-z) = 16 + 11 \\
&\qquad 3x + 3y = 27 \quad \left| :3 \right. \\
&\qquad x + y = 9 \quad (A) \\
I.\cdot 2 \; &\qquad 2x + 4y + 2z = 32 \\
(I.\cdot 2) - III.\; &\qquad (2x - x) + (4y - (-y)) + (2z - 2z) = 32 - 7 \\
&\qquad x + 5y = 25 \quad (B) \\ \hline
(A) &\qquad x = 9 - y \\
(A) \cap (B) &\qquad (9 - y) + 5y = 25 \\
&\qquad 4y + 9 = 25 \quad \left| -9 \right. \\
&\qquad 4y = 16 \quad \left| :4 \right. \\
&\qquad y = 4,\;\; x = 9 - 4 = 5,\;\; z: \; 5 + 2\cdot 4 + z = 16 \Rightarrow z = 3
\end{align*}
$$
************

</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  \\  \hline
I. &\qquad x + y + z = 11 \quad \left| -x - y \right. \\
&\qquad z = 11 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (11 - x - y) = 13 \\
&\qquad x - 2y + 11 = 13 \quad \left| -11 \right. \\
&\qquad x - 2y = 2 \quad \left| +2y \right. \\
&\qquad x = 2y + 2 \\ 
I. \cap III.\; &\qquad x + 2y - (11 - x - y) = 0 \\
&\qquad 2x + 3y - 11 = 0 \quad \left| +11 \right. \\
&\qquad 2x + 3y = 11 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y + 2 \\
&\qquad 2(2y+2) + 3y = 11 \\
&\qquad 4y + 4 + 3y = 11 \\
&\qquad 7y = 7 \quad \left| :7 \right. \\
&\qquad y = 1 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y+2 = 2 \cdot 1 + 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 11 - 4 - 1 = 6
\end{align*}
$$
************


</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  5  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  \\  \hline
III. - I.\; &\qquad (x+3y+z) - (x+y+z) = 22 - 12 \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\ \hline
I. + II.\; &\qquad (x+y+z) + (2x+y-z) = 12 + 7 \\
&\qquad 3x + 2y = 19 \\
y \cap (I.+II.)\; &\qquad 3x + 2\cdot 5 = 19 \\
&\qquad 3x + 10 = 19 \quad \left| -10 \right. \\
&\qquad 3x = 9 \quad \left| :3 \right. \\
&\qquad x = 3 \\ \hline
\left( x \wedge y \right) \cap I.\; &\qquad 3 + 5 + z = 12 \\
&\qquad z = 12 - 8 = 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  2  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  \\  \hline
I. &\qquad x + y + z = 13 \quad \left| -x - y \right. \\
&\qquad z = 13 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (13 - x - y) = 13 \\
&\qquad x - 2y + 13 = 13 \quad \left| -13 \right. \\
&\qquad x - 2y = 0 \quad \left| +2y \right. \\
&\qquad x = 2y \\ 
I. \cap III.\; &\qquad x + 3y - (13 - x - y) = 3 \\
&\qquad 2x + 4y - 13 = 3 \quad \left| +13 \right. \\
&\qquad 2x + 4y = 16 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y \\
 &\qquad 2(2y) + 4y = 16 \\
&\qquad 4y + 4y = 16 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y = 2 \cdot 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 13 - 4 - 2 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  
\end{align*}
$$  
$x$ = [[  6  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  \\  \hline
I. &\qquad x + y + z = 14 \quad \left| -x - y \right. \\
&\qquad z = 14 - x - y \\ \hline
I. \cap II.\; &\qquad 2x + y - (14 - x - y) = 10 \\
&\qquad 3x + 2y - 14 = 10 \quad \left| +14 \right. \\
&\qquad 3x + 2y = 24 \quad (A) \\ 
I. \cap III.\; &\qquad x + 2y + 3(14 - x - y) = 27 \\
&\qquad x + 2y + 42 - 3x - 3y = 27 \\
&\qquad -2x - y + 42 = 27 \quad \left| -42 \right. \\
&\qquad -2x - y = -15 \quad \left| \cdot(-1) \right. \\
&\qquad 2x + y = 15 \quad (B) \\ \hline
(B)\cdot 2\; &\qquad 4x + 2y = 30 \\
\big((B)\cdot 2\big) - (A)\; &\qquad (4x - 3x) + (2y - 2y) = 30 - 24 \\
&\qquad x = 6 \\
x \cap (B)\; &\qquad 2\cdot 6 + y = 15 \;\Rightarrow\; y = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 14 - 6 - 3 = 5
\end{align*}
$$
************

</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 11:__ **Berechne** die Lösungen des gegebenen Gleichungssystems mit dem Additionsverfahren.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 3y - z = 5  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 8 \\
III.& \qquad x + 3y - z = 5 \\ \hline
\text{(Eliminiere } z\text{): } I.+III.& \qquad (x+x) + (y+3y) + (z - z) = 9 + 5 \\
& \qquad 2x + 4y = 14 \quad (A) \\
II.+III.& \qquad (2x+x) + (-y+3y) + (z - z) = 8 + 5 \\
& \qquad 3x + 2y = 13 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (6x+4y) - (2x+4y) = 26 - 14 \\
& \qquad 4x = 12 \quad \left| :4 \right. \\
& \qquad x = 3 \\
x \cap (A):& \qquad 2\cdot 3 + 4y = 14 \\
& \qquad 6 + 4y = 14 \quad \left| -6 \right. \\
& \qquad 4y = 8 \quad \left| :4 \right. \\
& \qquad y = 2 \\
(x \wedge y) \cap I.:& \qquad 3 + 2 + z = 9 \\
& \qquad z = 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\  
II.& \qquad x + 2y - z = 5 \\  
III.& \qquad 3x - y + 2z = 19  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\
II.& \qquad x + 2y - z = 5 \\
III.& \qquad 3x - y + 2z = 19 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (2x+x) + (y+2y) + (z - z) = 16 + 5 \\
& \qquad 3x + 3y = 21 \quad (A) \\ 
III. + 2\cdot II.& \qquad (3x+2x) + (-y+4y) + (2z - 2z) = 19 + 10 \\
& \qquad 5x + 3y = 29 \quad (B) \\ \hline
(B) - (A)& \qquad (5x+3y) - (3x+3y) = 29 - 21 \\
& \qquad 2x = 8 \quad \left| :2 \right. \\
& \qquad x = 4 \\
x \cap (A):& \qquad 3\cdot 4 + 3y = 21 \\
& \qquad 12 + 3y = 21 \quad \left| -12 \right. \\
& \qquad 3y = 9 \quad \left| :3 \right. \\
& \qquad y = 3 \\
(x \wedge y) \cap I.:& \qquad 2\cdot 4 + 3 + z = 16 \\
& \qquad 8 + 3 + z = 16 \\
& \qquad z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 11 \\  
III.& \qquad 3x - y + 2z = 12  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  4  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 11 \\
III.& \qquad 3x - y + 2z = 12 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 11 \\
& \qquad 3x + 4y = 22 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.+2\cdot II.& \qquad (3x+4x) + (-y+6y) + (2z - 2z) = 12 + 22 \\
& \qquad 7x + 5y = 34 \quad (B) \\ \hline
(B)\cdot 4 - (A)\cdot 5\!:& \qquad (28x-15x) + (20y-20y) = 136 - 110 \\
& \qquad 13x = 26 \quad \left| :13 \right. \\
& \qquad x = 2 \\[6pt]
x \cap (A):& \qquad 3\cdot 2 + 4y = 22 \\
& \qquad 6 + 4y = 22 \quad \left| -6 \right. \\
& \qquad 4y = 16 \quad \left| :4 \right. \\
& \qquad y = 4 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 4 + z = 11 \;\Rightarrow\; z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 3x + y - z = 11 \\  
III.& \qquad 2x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  2  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 3x + y - z = 11 \\
III.& \qquad 2x + 3y + z = 22 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+3x) + (y+y) + (z - z) = 13 + 11 \\
& \qquad 4x + 2y = 24 \quad \left| :2 \right. \\
& \qquad 2x + y = 12 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-I.& \qquad (2x - x) + (3y - y) + (z - z) = 22 - 13 \\
& \qquad x + 2y = 9 \quad (B) \\ \hline
2\cdot(B) - (A)\!:& \qquad (2x+4y) - (2x+y) = 18 - 12 \\
& \qquad 3y = 6 \quad \left| :3 \right. \\
& \qquad y = 2 \\[6pt]
y \cap (A):& \qquad 2x + 2 = 12 \quad \left| -2 \right. \\
& \qquad 2x = 10 \quad \left| :2 \right. \\
& \qquad x = 5 \\[6pt]
(x \wedge y) \cap I.:& \qquad 5 + 2 + z = 13 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** die Lösungen des gegebenen Gleichungssystems mit dem Additionsverfahren.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 7 \\  
III.& \qquad 3x - y + 2z = 15  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 7 \\
III.& \qquad 3x - y + 2z = 15 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 7 \\
& \qquad 3x + 4y = 18 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-2\cdot I.& \qquad (3x-2x) + (-y-2y) + (2z-2z) = 15 - 22 \\
& \qquad x - 3y = -7 \quad (B) \\ \hline
(A) - 3\cdot (B)\!:& \qquad (3x-3x) + (4y-(-9y)) = 18 - (-21) \\
& \qquad 13y = 39 \quad \left| :13 \right. \\
& \qquad y = 3 \\[6pt]
y \cap (B):& \qquad x - 3\cdot 3 = -7 \;\Rightarrow\; x = 2 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 3 + z = 11 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x + y - z = 1 \\  
III.& \qquad x + 2y + 3z = 30  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  8  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 2x + y - z = 1 \\
III.& \qquad x + 2y + 3z = 30 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+y) + (z - z) = 13 + 1 \\
& \qquad 3x + 2y = 14 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } (III.+II.) - 2\cdot I.& \qquad (3x-2x) + (3y-2y) + (2z-2z) = 31 - 26 \\
& \qquad x + y = 5 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (2x+2y) - (3x+2y) = 10 - 14 \\
& \qquad -x = -4 \;\Rightarrow\; x = 4 \\[6pt]
x \cap (B):& \qquad 4 + y = 5 \;\Rightarrow\; y = 1 \\[6pt]
(x \wedge y) \cap I.:& \qquad 4 + 1 + z = 13 \;\Rightarrow\; z = 8
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 4 \\  
III.& \qquad 3x + y - z = 11  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  4  ]], $z$ = [[  2  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 4 \\
III.& \qquad 3x + y - z = 11 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (2x+3x) + (-y+y) + (z - z) = 4 + 11 \\
&\qquad 5x = 15 \quad \left| :5 \right. \\
&\qquad x = 3 \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-2x) + (y - (-y)) + (z - z) = 9 - 4 \\
&\qquad -x + 2y = 5 \quad (A) \\[6pt]
x \cap (A)\; &\qquad -3 + 2y = 5 \quad \left| +3 \right. \\
&\qquad 2y = 8 \quad \left| :2 \right. \\
&\qquad y = 4 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 3 + 4 + z = 9 \\
&\qquad z = 2
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\  
II.& \qquad 3x - y + z = 7 \\  
III.& \qquad 2x + 3y - z = 13  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  5  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\
II.& \qquad 3x - y + z = 7 \\
III.& \qquad 2x + 3y - z = 13 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (3x+2x) + (-y+3y) + (z - z) = 7 + 13 \\
&\qquad 5x + 2y = 20 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-3x) + (2y - (-y)) + (z - z) = 18 - 7 \\
&\qquad -2x + 3y = 11 \quad (B) \\ \hline
(A)\cdot 3 - (B)\cdot 2\; &\qquad (15x+6y) - (-4x+6y) = 60 - 22 \\
&\qquad 19x = 38 \quad \left| :19 \right. \\
&\qquad x = 2 \\[6pt]
x \cap (A)\; &\qquad 5\cdot 2 + 2y = 20 \\
&\qquad 10 + 2y = 20 \quad \left| -10 \right. \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 2 + 2\cdot 5 + z = 18 \\
&\qquad 12 + z = 18 \quad \left| -12 \right. \\
&\qquad z = 6
\end{align*}
$$
************

</div>
</section>







































































































### Ungleichungen






{{|>}} *Ungleichungen* beschreiben meistens Sachverhalte, bei denen vor allem die Grenzen entscheidend sind. So gibt es insgesamt vier Bedingungen:



$$
\begin{align*}
x & > y  \qquad \text{$x$ größer als $y$} \;\; , \\
x & \geq  y  \qquad \text{$x$ größer gleich $y$} \;\; , \\
x & \leq  y  \qquad \text{$x$ kleiner gleich $y$} \;\; , \\
x & < y  \qquad \text{$x$ kleiner als $y$} \;\; . \\
\end{align*}
$$

{{|>}} Im Umgang mit *Ungleichungen* gelten nahe zu die gleichen Regeln wie bei *Gleichungen*, so muss bei der *Äquivalenzumformung* lediglich beim Vorzeichenwechsel auch die Richtung der Bedingung umgedreht werden, da die Aussage ansonsten falsch werden würde:


$$
\begin{align*}
x & > a  \qquad  \left|  \cdot (-1) \right. \\
\Rightarrow -x & < -a  \qquad    \\ 
\end{align*}
$$



{{|>}} Dies kann erkannt werden, wenn die *Multiplikation* $\cdot(-1)$ durch mehrere Schritte der Strichrechnung ersetzt:


$$
\begin{align*}
x & > a  \qquad  \left|  -x \right. \\
0 & > a-x  \qquad  \left|  -a \right. \\
-a & > -x  \qquad  \text{mit: Drehe die Ungleichung um.} \\
\Rightarrow -x & < -a  \qquad   \;\; ,  \\ 
\end{align*}
$$

{{|>}} wobei bei dieser Veranschaulichung die Gleichheit der Ausdrücke $x>a$ und $a<x$. 


{{|>}} Da die Lösung bei *Ungleichungen* nicht eine einzige Zahl, sondern ein *Zahlenintervall* ist, muss dieses *Intervall* angegeben werden. Dabei kann dies als *Lösungsmenge* wie folgt dargestellt werden:


$$
\begin{align*}
x &\geq 2 \\
\Rightarrow \mathbb{L} & = \left\{  x \in \mathbb{R}   \left|  x \geq 2   \right.  \right\} \\
\end{align*}
$$

{{|>}} Die Darstellung der Lösung als *Intervall* kann im Abschnitt "Intervalle" nachgeschlagen werden.










#### Übungen - Ungleichungen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 

Under Construction

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  4  ]]   $\left.   \right\}$



<section class="flex-container">



</section>



































### Fakultäten und Binomialkoeffizienten


#### Übungen - Fakultäten und Binomialkoeffizienten



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>































































































### Zahlensysteme

#### Übungen - Zahlensysteme



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>






























































































### Einheiten


#### Übungen - Einheiten



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 


<!-- data-solution-button="5"-->

<section class="flex-container">



</section>





























































































### Verhältnisse


#### Übungen - Verhältnisse



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 



<!-- data-solution-button="5"-->

<section class="flex-container">



</section>






























































































### Gemischte Aufgaben




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ 



<!-- data-solution-button="5"-->

<section class="flex-container">



</section>




























































































































































































## Weiteres

!?[Lagebeziehung](https://www.youtube.com/watch?v=CGrkv0Jj3dE)
!?[Rechteck](https://www.youtube.com/watch?v=wl7edZWZew0)

!?[Operatorenalgebra](https://www.youtube.com/watch?v=quQtPwW04B0)
!?[Graphische Differentiation](https://www.youtube.com/watch?v=ChaN4YkErPw)
!?[Integration](https://www.youtube.com/watch?v=ppdwq_KDMoE)





