<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: LaTeX-OCR (Browser/LiaScript) v0.0.1 — robust: Canvas->RawImage, Output-Key-Fallback, Preview der Preprocess-Grafik, JSON-Debug wenn leer.





script: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/OCR.js








@canvas: @canvas_(@uid)

@canvas_
<span class="lia-canvas-pair">
  <span class="lia-canvas-anchor" data-seed="@0">
    <button class="lia-canvas-launch" type="button" aria-label="Zeichenfläche öffnen/schließen">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path class="launch-stroke" d="M3 21l3.2-0.6L19 7.6a2.2 2.2 0 0 0 0-3.1l-0.5-0.5a2.2 2.2 0 0 0-3.1 0L2.6 16.8 3 21z"/>
        <path class="launch-stroke" d="M14.2 5.2l4.6 4.6"/>
      </svg>
    </button>
  </span>
  <span class="lia-canvas-mount" data-open="0" data-uid="@0"></span>
</span>
@end




-->




# Test D

Narf...

# Road to OCR from Canvas 

>  <h2> ACHTUNG: BITTE WARTET AB BIS BEI LOADED "YES" STEHT. DAS DAUERT BEIM ERSTEN MAL LEIDER ETWAS LÄNGER! </h2>



<center>

<!-- style="width:200px" -->
![Navigation](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/Readme/canvas.png)

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


---

---


> **Beispielaufgaben**

**Aufgabe 1:** Berechne den Wert des Terms


__$a)\;\;$__
$1470+8 =$ [[     1478    ]] 

@canvas



mit partial-solution

<!-- data-show-partial-solution="true" -->
__$b)\;\;$__
$5100+30 =$ [[     5130    ]] 
@canvas
$5100+30 =$ [[     5130    ]] 
@canvas







__$c)\;\;$__
$4200+89 =$ [[     4289    ]] 

@canvas

