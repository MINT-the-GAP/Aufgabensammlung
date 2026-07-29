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








        




tags: Mengen, sehr leicht, sehr niedrig, Angeben

comment: Was ist die obere beziehungsweise untere Schranke der gegebenen Zahlenmenge?

author: Martin Lommatzsch

-->




# Mengenschranken

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die obere beziehungsweise untere Schranke der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.




__$a)\;\;$__ $ \mathbb{K} = \{ 15,28,17,34,26,24,14,32,29,22 \} $


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\inf(\mathbb{K}) = $ [[ 14 ]] @canvas \
$\sup(\mathbb{K}) = $ [[ 34 ]] @canvas \
@Algebrite.check([ 14 ; 34 ])
[[?]] @Explain


@resetter

@ADetails(1=BE; Mengen, Mengenschranken, Infimum, Supremum)

__$b)\;\;$__ $ \mathbb{K} = \{ 21,24,28,24,26,25,23,24,19,25,27,29,21,22,26 \} $


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\inf(\mathbb{K}) = $ [[ 19 ]] @canvas \
$\sup(\mathbb{K}) = $ [[ 29 ]] @canvas \
@Algebrite.check([ 19 ; 29 ])
[[?]] @Explain


@resetter

@ADetails(1=BE; Mengen, Mengenschranken, Infimum, Supremum)

__$c)\;\;$__ $ \mathbb{K} = \{ 14,19,16,15,17,15,18,9,19,11,13,17 \} $


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\inf(\mathbb{K}) = $ [[  9 ]] @canvas \
$\sup(\mathbb{K}) = $ [[ 19 ]] @canvas \
@Algebrite.check([ 9 ; 19 ])
[[?]] @Explain


@resetter

@ADetails(1=BE; Mengen, Mengenschranken, Infimum, Supremum)





