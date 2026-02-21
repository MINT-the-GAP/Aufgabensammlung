<!--
version: 0.0.1
language: de
narrator: Deutsch Female
author: Martin Lommatzsch

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md


-->






# SchulLia-Tests


Auf den folgenden Seiten werden die Features von SchulLia vorgestellt.


> Import

`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md`



## Tafelmodus

Klicke auf das A im Header und ändere im Präsentationsmodus die Schriftgröße mit dem Slider. Empfehlung: Nightly

`https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md`


Falls du den Kurs nicht auf Nightly geöffnet hast, ist oben ein Button zur direkten Weiterleitung des Kurses. Link zum normalen Kurs:

[https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md)




---

---




Im Präsentations- oder Folienmodus wird nun die maximale Breite des Bildschirms ausgenutzt, was man an der Länge dieser doch sehr langen Textzeile erkennen kann, wenn man die Schrift nicht allzu klein einstellt. Auch die Schriftgröße kann nun dynamisch angepasst werden. 




Mittels div-Bereichen kann man Bereiche nur für einen Modus sichtbar machen: 

```
<div data-lia-only="slides"> 
Das sehe ich nur bei Folien 
</div>
```

---

```
<div data-lia-only="presentation"> 
Das sehe ich nur bei Präsentation 
</div>
```

---

```
<div data-lia-only="textbook"> 
Das sehe ich nur bei Lehrbuch 
</div>
```

---

---

<h2>Beispiel im Text</h2>



Das hier ist ein Beispiel bei dem man bei den verschiedenen Modi unterschiedliche Inhalte angezeigt bekommt. Hier muss dann eine Leerzeile sein.

<div data-lia-only="textbook">

<!-- data-solution-button="5"-->
$4+5=$ [[ 9 ]] 

</div>
<div data-lia-only="presentation">  

<!-- style="width:200px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)


</div>
<div data-lia-only="slides">

- Das ist eine Liste,

- die man nur im Folienmodus

- sehen kann.

</div>

 Hier muss dann auch eine Leerzeile sein, aber dann geht eigentlich alles.





---

---


> Einzeltemplate - Nightlychecker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md`

> Einzeltemplate - Tafelmodus: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md`








## Besser Navigation

Öffne die Navigation und beachte die (▶/▼)-Symbole. Klicke darauf, um die weiteren Überschriften auf- oder einzuklappen



<center>

<!-- style="width:300px" -->
![Navigation](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/navigation.png)

</center>


> Einzeltemplate - einklappbare Navigation: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/NavigationREADME.md`


### Canvas



<center>

<!-- style="width:200px" -->
![Canvas](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)

</center>

1. Öffnet oder schließt die Schreibfläche.

2. Macht die letzte Änderung auf der Schreibfläche rückgängig.

3. Stellt das letzte "Rückgängig machen" wieder her.

4. Radierer mit Submenü für Radierergröße oder komplettes löschen.

5. Stift mit Submenü für Farbauswahl, Stiftdicke und Transparenz.

6. Legt ein Grid oder Linien in den Hintergrund.

7. Lässt ein Feld ziehen, welches mittels Schrifterkennung an das Eingabefeld als Lösung übergibt.

Die Schreibfläche kann unten links oder rechts an den Ecke in der Größe beliebig verändert werden.


> **Steuerung mit Maus**

- Linke Maustaste: Zeichnen, Radieren, Ziehen

- Rechte Maustaste: Schreibfläche hin- und herziehen

- Mausrad: Zoom


> **Steuerung mit Touchscreen**

- Ein Finger:  Zeichnen, Radieren, Ziehen

- Zwei Finger (Abstand zwischen den Fingern gleichbleibend): Schreibfläche hin- und herziehen

- Zwei Finger (Abstand zwischen den Fingern verändern): Zoom



`Codebefehl: @canvas`


Testzwecke (1479 ist Lösung):

<!--   data-solution-button="2" -->
[[ 1479 ]] 
@canvas


> Einzeltemplate - Canvas: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/CanvasREADME.md`

> Einzeltemplate - Canvas (mit Schrifterkennung): `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md`








### Textmarker

Klicke auf den Stift im Header und markiere im Text wie es dir beliebt. Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.



> Einzeltemplate - Textmarker: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md`

---

---


> Textmarkerquiz

**Markiere** mit der Textmarkerfunktion die Nomen in Rot und die Verben in blau.

<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>

---

---


```
<div class="markerquiz">
@markred(Haus) und @markblue(rennen laufen gehen)
@TextmarkerQuiz
</div>
```

Weitere Beispiele:

- `@markblue(words)`

- `@markred(words)`

- `@markgreen(words)`

- `@markyellow(words)`

- `@markpink(words)`

- `@markorange(words)`

Bei `@mark(Test zum Markieren)` ist die gewählte Farbe egal.

<div class="markerquiz">
@mark(Test zum Markieren)
@TextmarkerQuiz
</div>

---

---

> Schon markierte Bereiche




- `@markedred(red)`  @markedred(red)

- `@markedblue(blue)`  @markedblue(blue)

- `@markedyellow(yellow)`  @markedyellow(yellow)

- `@markedpink(pink)`  @markedpink(pink)

- `@markedgreen(green)`  @markedgreen(green)

- `@markedorange(orange)`  @markedorange(orange)






### Dynamsische Flex-Childs

Geh an den rechten vertikalen Trennstrich zwischen den Blöcken und schiebe diesen nach belieben hin und her. Funktioniert auch mit Textmarkern.

<section class="dynFlex">


<div class="flex-child">

<!--   data-solution-button="2" -->
__$f)\;\;$__ Lösung ist 3: [[ 3 ]]

__$g)\;\;$__ Lösung ist 4: [[ 4 ]]

__$h)\;\;$__ Lösung ist 5: [[ 5 ]]

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>

  <div class="flex-child">
    __$a)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$b)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$c)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$d)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
  </div>

  <div class="flex-child">
    __$e)\;\;$__ Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor. 
  </div>

</section>

---

---


```
<section class="dynFlex">
<div class="flex-child">

__$i)\;\;$__ Lösung ist 6: [[ 6 ]]

</div>
</section>
```


mit `<section class="dynFlex" data-start="30">` wird die Startbreite auf 30% gesetzt.



> Einzeltemplate - Dynamsische Flex-Childs: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FlexChildREADME.md`



### Deutschaufgabenmakros




<section class="dynFlex">

<div class="flex-child">

__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld. \

@diktat(Anna sitzt auf einem fliegenden Teppich.)

`@diktat(Anna sitzt auf einem fliegenden Teppich.)`

</div>

<div class="flex-child">

__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken. \

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

`@diktat(Zoo)`

</div>

<div class="flex-child">

__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.) \


@orthography(false,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)




__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 Versuchen) \

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)



__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung bei erst nach 0 Versuchen) \

@orthography(true,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)


`Beispiele sind leider nicht als Code darstellbar.`

</div>

</section>


> Einzeltemplate - Deutschmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md`



### Mathematikaufgabenmakros



<section class="dynFlex">



<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$b)\;\;$__ $\dfrac{7}{10}$

@circleQuiz(7/10)

`@circleQuiz(7/10)`

</div>

<div class="flex-child">

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.


__$a)\;\;$__ $\dfrac{7}{10}$

@rectQuiz(7/10)

`@rectQuiz(7/10)`

</div>


</section>



> Einzeltemplate - Mathematikmakros: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md`



### Timer bis Lösungzeigen

> Beispiele:
> - Sofortiger Start: `data-solution-timer="10s"`
> - Start erst nach erstem Prüfen: `data-solution-timer="2min" data-solution-timer-start="oncheck"`
> - ohne Badge: zusätzlich `data-solution-timer-badge="off"`
> - Manueller Start: `data-solution-timer-start="onclick"`

<!-- data-solution-timer="10s" -->
2+3 = [[ 5 ]]


Manueller Start nach erstem Prüfen

<!-- data-solution-timer="15s" data-solution-timer-start="oncheck" -->
7+8 = [[ 15 ]]


Manueller Start nach erstem Prüfen (Timer nicht sichtbar)

<!-- data-solution-timer="10s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
9+6 = [[ 15 ]]


Manueller Startbutton (Prüfen erscheint erst nach Klick)

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->
9+6 = [[ 15 ]]

Manueller Startbutton ohne Badge

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" data-solution-timer-badge="off" -->
5+5 = [[ 10 ]]




> Einzeltemplate - Aufgabentimer: `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TimerREADME.md`










