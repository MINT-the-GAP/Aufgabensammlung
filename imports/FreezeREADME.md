<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: LiaScript-Abgabelink mit exakterer Zustandsprotokollierung und Freeze

mode: Presentation

import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md
import: https://cdn.jsdelivr.net/gh/LiaTemplates/JSXGraph@main/README.md

script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/Freeze.js

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MatheREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/DeutschREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/MarkerREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCRREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/AnnotationREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FlexChildREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/TafelREADME.md





















@Abgabe
<div class="lia-submit-box">
  <h2>Abgabeerstellung</h2>

  <label for="lia-name">Name</label>
  <input id="lia-name" data-snapshot-admin="1" type="text" placeholder="Name eingeben">

  <div class="lia-submit-actions">
    <button
      id="lia-create-link"
      data-snapshot-admin="1"
      type="button"
      onclick="console.warn('[LIA-FREEZE] INLINE-CREATE-LINK-CLICK'); if(window.__liaSubmissionDemo && typeof window.__liaSubmissionDemo.createLink ===   'function') { window.__liaSubmissionDemo.createLink(); } else { console.error('[LIA-FREEZE] createLink not available on window.__liaSubmissionDemo'); } return false;"
    >Abgabelink erstellen</button>

    <button
      id="lia-copy-link"
      data-snapshot-admin="1"
      type="button"
      disabled
      onclick="console.warn('[LIA-FREEZE] INLINE-COPY-LINK-CLICK'); if(window.__liaSubmissionDemo && typeof window.__liaSubmissionDemo.copyLink === 'function') { window.__liaSubmissionDemo.copyLink(); } else { console.error('[LIA-FREEZE] copyLink not available on window.__liaSubmissionDemo'); } return false;"
    >Link kopieren</button>
  </div>

  <label for="lia-link">Abgabelink</label>
  <textarea id="lia-link" data-snapshot-admin="1" readonly placeholder="Hier erscheint der erzeugte Link"></textarea>

  <div id="lia-status"></div>
  <div id="lia-frozen-note" class="lia-frozen-note"></div>
</div>
@end



@Auswertung
<div data-snapshot-eval="1" style="display:none;"></div>
@end

@ADetails
<span class="lia-assignment-details" data-adetails="@0" style="display:none !important;"></span>
@end



-->

# Reine LiaScript-Abgabelink-Demo

Einfaches importieren: \
`import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md`

Abgabefeld über Makro: Am sinnvollsten wäre eine eigene letzte Folie dafür einzurichten. \
`@Abgabe`

Automatisches Auswerten: \
`@Auswertung`

Tracking von Betrugsversuchen über DevTools: \
`@Auswertung(F12)`

Tracking von Betrugsversuchen über Tab-/Fensterwechsel: \
`@Auswertung(Tab)`

Tracking von Betrugsversuchen im Allgemeinen: \
`@Auswertung(F12;Tab)`

Aufgaben mit Bewertungseinheiten und Tags versehen: \
`@ADetails(x=BE;Tag1,Tag2,...)` (mit einer Leerzeile hinter dem Quiz einfügen.)

Aufgaben ohne Bewertung: \
`@ADetails(0=BE)` (mit einer Leerzeile hinter dem Quiz einfügen.)




# Etablierte Quiz

$a)\;\;$ $7000+123=$ [[  7123  ]] @canvas

@ADetails(1=BE;Normal)

--- 

--- 



Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün

@ADetails(1=BE;Multiple)

--- 

--- 



Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün

@ADetails(1=BE;Radio)

--- 

--- 

Wähle rot aus.
[[(rot)|blau|grün|gelb]]

@ADetails(1=BE;Auswahl)

--- 

--- 



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]

@ADetails(1=BE;Kachel)


--- 

--- 



$b)\;\;$ $6000+123=$ [[  6123  ]] m @canvas

@ADetails(1=BE;Tag1,Tag2)

--- 

--- 



**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor


@ADetails(3=BE;Tabelle)


--- 

--- 




__Aufgabe 1:__ Hör dir den Satz an und schreib ihn korrekt in das Eingabefeld.


{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Anna

[[    Anna    ]]

@ADetails(4=BE; Diktat)


--- 


__Aufgabe 2:__ Lass dir die Wörter vorlesen, die in die Lücken kommen und schreibe diese in die Lücken.


<!-- data-show-partial-solution="true" -->
Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.

@ADetails(2=BE; Lückendiktat)



--- 


__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflösung ist blockiert.)


@orthography(`<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->`,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)

@ADetails(1=BE; Komma)


--- 

--- 

**Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{4}$

@rectQuiz(1/4)

@ADetails(1=BE;Rechteckbruch)

__$b)\;\;$__ $\dfrac{2}{5}$

@circleQuiz(2/5)

@ADetails(1=BE;Kreisbruch)


--- 

--- 


Markiere die korrekt.

<div class="markerquiz">
@markred(rot)
@TextmarkerQuiz
</div>

@ADetails(1=BE;Marker)


--- 

--- 


Kommentare werden auch eingefroren

[[___]]

@ADetails(0=BE)

[[___ ___ ___ ___]]

@ADetails(0=BE)

Einfach noch ein KaTeX-Testfeld: [[     passt     ]]  @canvas

@ADetails(0=BE)


--- 

--- 

$x = 5 \;\;\wedge\;\; y= 3$ \


$x$ = [[  5  ]] @canvas und $y$ = [[  3  ]] @canvas
@Algebrite.check([ 5 ; 3 ])


@ADetails(4=BE;Gleichungssysteme)



--- 

--- 





# Koordinatensystemquizze


@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=700;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(1|4)$.

@ErzeugePunkt(`A1;A;1;4`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)
</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(5|0)$.

@ErzeugePunkt(`A1;B;5;0`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(7|6)$.

@ErzeugePunkt(`A1;C;7;6`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>
</section>




# Wie entsteht hier der Bug?


**_Aufgabe 1:_** **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="dynFlex">

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  -->
__$a)\;\;$__ $ \dfrac{5}{8} =$ [[  0,625  ]]
@ADetails(1=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  -->
__$b)\;\;$__ $ \dfrac{7}{5} =$ [[  1,4  ]] 
@ADetails(1=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  -->
__$c)\;\;$__ $ \dfrac{12}{25} =$ [[  0,48  ]] 
@ADetails(1=BE;Dezimalzahlen)

</div>

</section>



--- 

--- 


**_Aufgabe 2:_** **Gib** die Zahl **an**, die $x$ sein muss, sodass die Brüche gleichwertig sind.


<section class="dynFlex">

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$a)\;\;$__ 
$ \dfrac{ 3 }{ 5 } = \dfrac{ 21 }{ x }  $ \
$x = $ [[  35  ]]
@ADetails(1=BE;Bruchrechnung)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$b)\;\;$__  
$ \dfrac{ 4 }{ 7 } = \dfrac{ x }{ 21 } $ \
$x = $ [[  12  ]]
@ADetails(1=BE;Bruchrechnung)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$c)\;\;$__  
$ \dfrac{ x }{ 8 } = \dfrac{ 9 }{ 12 } $ \
$x = $ [[  6  ]]
@ADetails(1=BE;Bruchrechnung)

</div>

</section>



--- 

--- 





**_Aufgabe 3:_** Höre die Tonspur an und **gib** den Wert des beschriebenen Terms **an**. (Schreibe für die Schrifterkennung sauber, falls du sie nutzen solltest.)


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Zu meinen drei Elftel werden vier Elftel hinzugefügt.

<!-- data-solution-button="5"-->
[[  7/11  ]] @canvas
@ADetails(1=BE;Bruchrechnung)
@Algebrite.check(7/11)


</div>

<div class="flex-child">

__$b)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe drei Zehntel und nochmal vier Zehntel.

<!-- data-solution-button="5"-->
[[  7/10  ]] @canvas
@ADetails(1=BE;Bruchrechnung)
@Algebrite.check(7/10)

</div>

</section>



--- 

--- 


**_Aufgabe 4:_** **Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="dynFlex">

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  data-show-partial-solution -->
__$a)\;\;$__ \
$24 \cdot 8 =$ [[  192 ]] \
 \
$24 \cdot 4 =$ [[  96  ]] \
 \
$24 \cdot 2 =$ [[  48  ]] \
 \
$24 \cdot 1 =$ [[  24  ]] \
 \
$24 \cdot \dfrac{1}{2} =$ [[  12  ]] \
 \
$24 \cdot \dfrac{1}{4} =$ [[   6  ]] \
 \
$24 \cdot \dfrac{1}{8} =$ [[  3   ]] \
@ADetails(2=BE;Bruchrechnung)
@Algebrite.check([ 192;96;48;24;12;6;3 ])


</div>

<div class="flex-child">



<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  data-show-partial-solution -->
__$b)\;\;$__ \

$4 : 4 =$ [[  1 ]] \
 \
$4 : 2 =$ [[  2  ]] \
 \
$4 : 1 =$ [[  4  ]] \
 \
$4 : \dfrac{1}{2} =$ [[  8  ]] \
 \
$4 : \dfrac{1}{4} =$ [[  16 ]] \
 \
$4 : \dfrac{1}{8} =$ [[  32 ]] \
 \
$4 : \dfrac{1}{16} =$ [[ 64  ]] \
@ADetails(2=BE;Bruchrechnung)
@Algebrite.check([ 1;2;4;8;16;32;64 ])


</div>

</section>







**_Aufgabe 2:_** **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="dynFlex">

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off"  -->
__$a)\;\;$__ $ 1,4 + 2,1 \cdot 0,3 =$ [[  2,09  ]] 
@ADetails(2=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$b)\;\;$__ $ 6,5 : 1,25 -1,6 =$ [[  3,6  ]] 
@ADetails(2=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$c)\;\;$__ $ 3,4 - 0,6 \cdot 1,1 =$ [[  2,84  ]]
@ADetails(2=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$d)\;\;$__ $ (4,8+2,5) \cdot 0,02 =$ [[  0,146  ]]
@ADetails(2=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$e)\;\;$__ $ 5,7:6-2,1:6 =$ [[  0,6  ]]
@ADetails(2=BE;Dezimalzahlen)

</div>

<div class="flex-child">

<!-- data-solution-timer="450s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" -->
__$f)\;\;$__ $ (0,8-0,45):0,7 =$ [[  0,5  ]]
@ADetails(2=BE;Dezimalzahlen)

</div> 
</section>




# Abgabe




@Abgabe

@Auswertung(F12;Tab)



