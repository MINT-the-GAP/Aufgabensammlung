<!--
version:  1.0.0
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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md










tags: Erklärung, Tutorial

comment: In diesem Abschnitt werden die grundlegenden Funktionen von LiaScript vorgestellt.

author: Martin Lommatzsch

-->




# LiaScript Tutorial







---

---



<section class="dynFlex">

<div class="flex-child">

Du kannst dir die Arbeitsbreite von einigen Aufgaben anpassen. Das erkennst du an der verschiebbaren Linie rechts:

Viele der Bedienungsoptionen sind in kleinen gif-Animationen dargestellt.


</div>

<div class="flex-child">

<center>
<div style="display: block; max-width:500px; margin-block-end: -2rem; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Inhaltsverzeichnis](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/flexchild.gif)

</div>
</center>
$\,$




</div>

</section>


---

---


> [!CAUTION]
> <h2>Hier hast du nochmal eine Übersicht über die Menüleiste:</h2>
> <center> ![Bedienungsübersicht](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/tutorial.png) </center>
$\,$



<section class="dynFlex">

<div class="flex-child">

- 1. Inhaltsverzeichnis: Komme schnell zu deiner Aufgabe. \
Du kannst die Folien auch wechseln, wenn du die Pfeiltasten nach links oder rechts drückst. \
Unten links kannst du auch mit der Maus die Folie wechseln.\


<center>
<div style="display: block; margin-block-end: -2rem; max-width:100px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=100px" -->
![Seitenwechsel](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/seitenwechsel.PNG)

</div>
</center>
$\,$

</div>




<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Inhaltsverzeichnis](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/toc.gif)

</div>
</center>
$\,$




</div>

</section>





<section class="dynFlex">

<div class="flex-child">


- 2. Textmarker: Markiere dir wichtige Textpassagen


</div>

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Textmarker](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/marker.gif)

</div>
</center>
$\,$




</div>

</section>




<section class="dynFlex">

<div class="flex-child">


- 3. Schriftgrößenanpassung: Stelle dir die Schriftgröße für deinen optimalen Arbeitsmodus ein. \
Du kannst auch noch dazu Zoomen, indem du die Taste `strg` gedrückt hälst und das Mausrad drehst.


</div>

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Schriftgröße](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/fontsize.gif)

</div>
</center>
$\,$




</div>

</section>


<section class="dynFlex">

<div class="flex-child">


- 4. Darstellungsbreite: Es wird "Präsentation" empfohlen, aber probiere ruhig mal "Lehrbuch" aus.


</div>

</section>


<section class="dynFlex">

<div class="flex-child">


- 5. Aussehen von LiaScript: Hier kannst du in den Dunkelmodus wechseln oder die Themefarben anpassen. Auch kannst du die Vorlesegeschwindigkeit sowie Stimmhöhe anpassen.


</div>

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Modus](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/modetheme.gif)

</div>
</center>
$\,$




</div>

</section>





<section class="dynFlex">

<div class="flex-child">


- 6. Automatische Übersetzung in andere Sprachen. Diese Funktion kann aber auch durch die Lehrkraft blockiert sein.


</div>

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Sprache](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/language.gif)

</div>
</center>
$\,$




</div>

</section>



<section class="dynFlex">

<div class="flex-child">


- 7. Gruppenraum eröffnen: (Für dich wohl unwichtig, aber für Lehrkräfte eventuell interessanter)

</div>

</section>



<section class="dynFlex">

<div class="flex-child">


- 8. Informationen zum Kurs: Hier steht welche Version das Arbeitsblatt besitzt und wer das Arbeitsblatt erstellt hat.


</div>

</section>




---

---

> [!CAUTION]
> <h2>**Schrifterkennung**</h2>


Wenn du nicht weißt wie man eine Lösung eintippt, kannst du mit der mathematischen Schrifterkennung deine Lösungen übergeben. Wenn du die Lösung wie im Mathematikunterricht erlernt niederschreibst und dabei sauber schreibst, sollte die Schrifterkennung deine Lösungsvorschläge erkennen. Beim ersten Mal wird die Schrifterkennung etwas länger zum Laden brauchen, danach kann sie schneller aktiviert werden.


<section class="dynFlex">

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:400px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">


<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=400px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/canvas.png)

</div>
</center>
$\,$




</div>

<div class="flex-child">


<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Schrifterkennung](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/ocr.gif)

</div>
</center>
$\,$




</div>

</section>




1. Öffnet oder schließt die Schreibfläche.

2. Macht die letzte Änderung auf der Schreibfläche rückgängig.

3. Stellt das letzte "Rückgängig machen" wieder her.

4. Radierer mit Submenü für Radierergröße oder komplettes löschen.

5. Stift mit Submenü für Farbauswahl, Stiftdicke und Transparenz.

6. Legt ein Grid oder Linien in den Hintergrund.

7. Lässt ein Feld ziehen, welches mittels Schrifterkennung an das Eingabefeld als Lösung übergibt.

8. Unten rechs an der Ecke kann die Canvas verkleinert oder vergrößert werden.

9. Das klassische Eingabefeld für ein Quiz, um die Lösung einzutragen oder zu bearbeiten.


> **Steuerung mit Maus**

- Linke Maustaste: Zeichnen, Radieren, Ziehen

- Rechte Maustaste: Schreibfläche hin- und herziehen

- Mausrad: Zoom


> **Steuerung mit Touchscreen**

- Ein Finger:  Zeichnen, Radieren, Ziehen

- Zwei Finger (Abstand zwischen den Fingern gleichbleibend): Schreibfläche hin- und herziehen

- Zwei Finger (Abstand zwischen den Fingern verändern): Zoom


---

---

> [!CAUTION]
> <h2>**Annotationen**</h2>



<section class="dynFlex">

<div class="flex-child">

Mit der Annotationsbar am linken Rand kannst du überall hinschreiben und dir Notizen machen. Du kannst sie auch ein- und ausblenden. Auch die Schrifterkennung kann hier angewendet werden.

</div>

<div class="flex-child">

<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Annotation](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/annotation.gif)

</div>
</center>
$\,$


</div>

</section>


---


---




> [!CAUTION]
> <h2>**Dynamsisches Geometriesystem**</h2>


Mit dem dynamischen Geometriesystem (DGS) können geometrische Figuren konstruiert und anschließend verändert werden. Für die folgenden Aufgaben werden insbesondere das Vieleckwerkzeug und das Geodreieck benötigt.

<section class="dynFlex">

<div class="flex-child">

- Öffne das DGS über die Menüschaltfläche mit den drei Strichen.
- Wähle das Vieleckwerkzeug, um die Eckpunkte eines Dreiecks zu setzen.
- Schließe das Dreieck, indem du zum Schluss erneut den ersten Eckpunkt auswählst.
- Nutze das Geodreieck, um Winkel zu konstruieren oder zu überprüfen.
- Mit dem Radierer können nicht benötigte Objekte entfernt werden.




</div>

<div class="flex-child">


<center>
<div style="display: block; margin-block-end: -2rem; max-width:500px; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Schrifterkennung](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/dgs.gif)

</div>
</center>
$\,$




</div>

</section>



---


---



> [!CAUTION]
> <h2>Gamifizierung</h2>


<section class="dynFlex">

<div class="flex-child">

Du hast Ressourcen:
- `Energie` um den Prüfenbutton benutzen zu können
- `Münzen` um den Hinweisbutton benutzen zu können
- `Diamanten` um den Auflösenbutton benutzen zu können

Außerdem kannst du `Truhen` mit Ressourcen finden. Manche Inhalte sind aber verschlossen und du musst zuvor den `Schlüssel` finden. Andere Inhalte sind `versteckt`; dafür brauchst du die Lupe. Manche versteckte Inhalte kannst du schon erahnen, andere nicht. Mit den Portalen kannst du außerdem zu anderen Folien wechseln.

Schau dich gut um, denn überall könnte etwas versteckt sein. Du bekommst Erfolge, wenn du besonders viel gefunden oder die Aufgaben besonders gut gemacht hast.

</div>

<div class="flex-child">

<center>
<div style="display: block; max-width:500px; margin-block-end: -2rem; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Inhaltsverzeichnis](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/game.gif)

</div>
</center>
$\,$




</div>

</section>


---



<section class="dynFlex">

<div class="flex-child">

Weitere Items:
- `Schaufel` um im Erdhaufen versteckte Inhalte auszugraben
- `Gießkanne` um Blumen zum Blühen zu bringen und so versteckte Inhalte freizulegen
- `Puzzleteile` um mit der richtigen Kombination Tore zu öffnen



</div>

<div class="flex-child">

<center>
<div style="display: block; max-width:500px; margin-block-end: -2rem; outline: 5px solid rgb(var(--color-highlight)); outline-offset: -3px; border-radius: 8px; display: inline-block;">

<!-- style="display: block; margin-block-end: -2rem; border: 0px solid rgb(var(--color-highlight)); border-radius: 8px; max-width=500px" -->
![Inhaltsverzeichnis](https://raw.githubusercontent.com/MINT-the-GAP/Wochenaufgabe/refs/heads/main/pic/game2.gif)

</div>
</center>
$\,$


</div>

</section>




---

---