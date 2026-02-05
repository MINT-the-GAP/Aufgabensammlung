<!--
version: 0.0.1
language: de
narrator: Deutsch Female

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md


-->



# SchulLia-Tests



> Import

`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/README.md`


---

---

> Canvas

Klicke auf den Stift neben dem Eingabefeld um das Canvas zu öffnen

Canvas mit Farbauswahl, Lineatur und Radierer. Zoom ist auch dabei und mit den anderen Maustasten kann man auch die Canvas schieben. Touchsteuerung: 2-Finger Pinch/Pan.

Unten links und unten rechts sind unsichtbare Ziehflächen (nur „die Ecke“). Dort kannst du die Zeichenfläche stufenlos **höher/niedriger** und auch **breiter/schmaler** ziehen.


`Codebefehl: @canvas`


Testzwecke (2 ist Lösung):

<!--   data-solution-button="2" -->
[[ 2 ]] 
@canvas


---

---


> Textmarker

Klicke auf den Stift im Header und markiere im Text wie es dir beliebt. Wechsel Lehrbuch ↔ Präsentation ↔ Slides und ändere die Schriftgröße.


---

---

> Tafelmodus

Klicke auf das A im Header und ändere im Präsentationsmodus die Schriftgröße mit dem Slider. Empfehlung: Nightly

`https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md`



---

---

> Dynamsische Flex-Childs

Geh an den rechten vertikalen Trennstrich zwischen den Blöcken und schiebe diesen nach belieben hin und her. Funktioniert auch mit Textmarkern.

<section class="dynFlex">


<div class="flex-child">

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

> Deutschaufgabenmakros




<section class="dynFlex">

<div class="flex-child">

__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld. \

@diktat(Anna sitzt auf einem fliegenden Teppich.)

</div>

<div class="flex-child">

__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken. \

Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

</div>

<div class="flex-child">

__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.) \


@orthography(false,`Das ist der Tag an dem ich geblitzt wurde.`,`Das ist der Tag, an dem ich geblitzt wurde.`)

@orthography(2,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

</div>

<div class="flex-child">

__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 und 0 Versuchen) \

__$a)\;\;$__
@orthography(2,`Der Apfel ist rot sagte Ben`,`"Der Apfel ist rot", sagte Ben.`)

__$b)\;\;$__
@orthography(true,`Clara sagt Druck ist eine physikalische Größe`,`Clara sagt: "Druck ist eine physikalische Größe."`)

</div>

<div class="flex-child">

__Aufgabe 5:__ Korrigiere die Rechtschreibfehler im gezeigten Satz. (Auflösung geht noch nicht und ist deswegen blockiert.) \

@orthography(3,`Es ist jetze um sechse.`,`Es ist jetzt um sechs.`)

</div>



</section>


  
__Aufgabe 4:__ Setze die Satzzeichen so, dass der Satz eine korrekte wörtliche Rede darstellt. (Auflösung bei erst nach 2 und 0 Versuchen) \

__$a)\;\;$__
@orthography(2,`Der Apfel ist rot sagte Ben`,`"Der Apfel ist rot", sagte Ben.`)

__$b)\;\;$__
@orthography(true,`Clara sagt Druck ist eine physikalische Größe`,`Clara sagt: "Druck ist eine physikalische Größe."`)

