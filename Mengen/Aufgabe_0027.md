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











tags: Mengen, Differenz, Vereinigung, Durchschnitt, Infimum, Supremum, schwer, hoch, Bestimmen

comment: Erarbeite dir die symmetrische Differenz von Mengen.

author: Martin Lommatzsch

-->




# Symmetrische Differenz

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
 Gegebenen sind die Mengen $\mathbb{M}= \{ 1,2,3,6 \}$, $\mathbb{L} = \{ 4,5,7,9 \} $  und $\mathbb{K} = \{ 3,4,6,8,9 \}$.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
__$a)\;\;$__  **Bestimme** das resultierende Mengenelement. $  \left(  \mathbb{L} \cup \mathbb{K}  \right) \setminus \left(  \mathbb{L} \cap \mathbb{K}  \right)  := \mathbb{L} \Delta \mathbb{K}  = $ [[   {3,5,6,7,8}   ]] @canvas 
[[?]] @Explain


@resetter

@ADetails(1=BE; Mengen, Symmetrische Differenz, Vereinigung, Schnittmenge, Differenz)
<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__  Im Aufgabenteil $a)$ wurde der Mengenoperator der symmetrischen Differenz $\Delta$ definiert. **Bestimme** das resultierende Mengenelement.  $  \mathbb{M} \Delta \mathbb{K} =  $ [[  {1,2,4,8,9}    ]] @canvas 
[[?]] @Explain


@resetter

@ADetails(1=BE; Mengen, Symmetrische Differenz)
__$c)\;\;$__  Skizziere über Mengenkreise $ \mathbb{M} \Delta \mathbb{K} $. 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[!]]
[[?]] @Explain
**************************************

<center>

@Koordinatensystem(`xmin=0;xmax=10;ymin=0;ymax=7;width=420;id=ME0027c;achsen=0;grid=0;border=0`)

@Flaeche(`ME0027c;[[0.1;0.1];[9.9;0.1];[9.9;6.9];[0.1;6.9]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`ME0027c;M_0=0;3.8;3.7;#000000;0;fix`)
@Punkt(`ME0027c;K_0=0;6.2;3.7;#000000;0;fix`)
@Kreis(`ME0027c;m_fuellung=0;M_0;#8fcfe3;1;radius=2.5`)
@Kreis(`ME0027c;k_fuellung=0;K_0;#8fcfe3;1;radius=2.5`)
@Flaeche(`ME0027c;[[5;5.893];[5.568;5.468];[5.965;4.95];[6.215;4.347];[6.3;3.7];[6.215;3.053];[5.965;2.45];[5.568;1.932];[5;1.507];[4.432;1.932];[4.035;2.45];[3.785;3.053];[3.7;3.7];[3.785;4.347];[4.035;4.95];[4.432;5.468]];#ffffff;1;inhalt=0;umfang=0`)
@Kreis(`ME0027c;m=0;M_0;#000000;0;radius=2.5`)
@Kreis(`ME0027c;k=0;K_0;#e63946;0;radius=2.5`)

@KoordText(`ME0027c;[2.5;4.5];$1$;#000000;1`)
@KoordText(`ME0027c;[3;2.7];$2$;#000000;1`)
@KoordText(`ME0027c;[4.7;4.3];$3$;#000000;1`)
@KoordText(`ME0027c;[5.2;3.2];$6$;#000000;1`)
@KoordText(`ME0027c;[6.4;5];$4$;#000000;1`)
@KoordText(`ME0027c;[7.4;4];$8$;#000000;1`)
@KoordText(`ME0027c;[6.4;2.5];$9$;#000000;1`)
@KoordText(`ME0027c;[2.1;0.75];$\mathbb{M}$;#000000;1`)
@KoordText(`ME0027c;[7.9;0.75];$\mathbb{K}$;#000000;1`)

</center>

**************************************


@resetter

@ADetails(1=BE; Mengen, Symmetrische Differenz, Mengenkreise)



