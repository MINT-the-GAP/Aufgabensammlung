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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md



import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md












tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md




-->



### Zeug

Bruchrechnung, Einheiten

<!-- data-hint-button="5"  -->
Test : [[ Test ]]
[[?]] @Explain

@ADetails(BE=1; Bruchrechnung)



### Zeug

https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/Proposal/README.md



### `@Kachelfolge` — Reihenfolge egal

`import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md`


Erzeugt eine Kachelsequenz, bei der die Reihenfolge der Antworten egal ist.

```markdown
<!-- data-randomize="true" -->
Wähle die richtigen Farben aus:
@Kachelfolge(`[->[(rot)]][->[(blau)]][->[(grün)|Haus]]`)
```

**Syntax der Kacheln:** `[->[(Antwort)]]` oder `[->[(Antwort)|Beschriftung]]`

- `(Antwort)` — die korrekte Antwort (in runden Klammern)
- Alternativen ohne Klammern werden als falsche Optionen angeboten (z.B. `[->[(rot)|blau|grün]]`)

Wähle die richtigen Farben aus:
@Kachelfolge(`[->[(rot)]][->[(blau)]][->[(grün)|Haus]]`)

### `@KachelfolgeN` — Sequenziell (unbekannte Anzahl)

Zeigt immer nur das nächste freie Feld an — nützlich wenn die Anzahl der zu wählenden Kacheln unbekannt ist.

```markdown
Wähle alle roten Farbtöne aus:
@KachelfolgeN(`[->[(Karmesin)]][->[(Scharlach)]][->[(Rubinrot)|Kobalt]]`)
```

Wähle alle roten Farbtöne aus:
@KachelfolgeN(`[->[(Karmesin)]][->[(Scharlach)]][->[(Rubinrot)|Kobalt]]`)

### `<div class="Kachel">` — Inline-Kachelbereich

Für normale LiaScript-Tile-Quizze (ohne Makro) kann der Drag-&-Drop-Bereich mit einem `<div class="Kachel">` umschlossen werden, damit das Plugin ihn erkennt und Touch-Support aktiviert:

```markdown
<div class="Kachel">

Wähle in den ersten drei Feldern gelb und danach rot aus.

<!-- data-solution-button="5" 
data-hint-button="3" data-randomize="true" -->
In diese Lücke muss [->[(gelb)]] rein. \
In diese muss auch [->[(gelb)]] rein und in diese [->[(gelb)]] auch. \
Das Adjektiv [->[(rot)]] ist [->[pink|grün|(rot)]].

</div>
```



<div class="Kachel">

Wähle in den ersten drei Feldern gelb und danach rot aus.

<!-- data-solution-button="5" 
data-hint-button="3" data-randomize="true" -->
In diese Lücke muss [->[(Test)]] rein. \
In diese muss auch [->[(Test)]] rein und in diese [->[(Nope)]] auch. \
Das Adjektiv [->[(Nope)]] ist [->[(Test)]].

</div>







# Vernetzte Lücken





Entweder [[  positiv  ]] oder [[  negativ  ]] oder [[  magnetisch  ]]?
<script>
@input.map(s => s.toLowerCase()).sort().join() === "magnetisch,negativ,positiv"
</script>









Vorher Text [[ Kohlendioxid ]] Nachher Text
<script>
  const raw = (`@input`).trim(); 
  let s = raw;

  try {
    const v = JSON.parse(raw);
    if (Array.isArray(v)) s = String(v[0] ?? "");
  } catch (e) {}

  s = s.trim(); 

  s === "Kohlendioxid" ||
  s === "Kohlenstoffdioxid" ||
  s === "CO2" ||
  s === "CO₂";
</script>




# Algebrite


6 + 6

[[12]]
@Algebrite.check(12)

---

0.4?

[[0,4]]
@Algebrite.check(0.4)

---

try different expressions of `x ^ 2 - 1`

[[x ^ 2 - 1]]
@Algebrite.check(x^2-1)

---

x=[[ 1/3 ]] m
@Algebrite.check2(1/3,0.001)

---

44,444

x=[[ 44,444 ]] m
@Algebrite.check2(44.44,0.1)

---

Inline 3/4 und 2/5

P( [[ 3/4 ]] | [[ 2/5 ]] )
@Algebrite.check([ 3/4 ; 2/5 ])

P( [[ 3/4 ]] | [[ 2/5 ]] )
@Algebrite.check2([ 3/4 ; 2/5 ] , [ 0.01 ; 0.1 ])

---

[[ 5,5 ]] m
@Algebrite.check_margin(5.1,6.1)



---

$P(t) =$ [[ - (K / 2) * t^(-3/2) ]]
@Algebrite.check(`- (K/2) * t^(-3/2)`)
*************

Die richtige Lösung ist:

$- (K / 2) * t^(-3/2)$

*************

---


[[x ^ 2 - 1 = 2x]]
@Algebrite.check_expression(x^2-1-2x=0)

# Lösungen
 
You have only two trials, without a solution button ;-)

<!--
  data-max-trials="2"
  data-solution-button="off"
  data-randomize
-->
[( )] Wrong
[(X)] Right


<!--
  data-max-trials="4"
  data-solution-button="2"
  data-randomize
-->
[( )] Wrong
[(X)] Right





<!-- data-type="none"
data-sortable="false" 
data-orientation="vertical|horizontal"-->


