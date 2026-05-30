<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md


@style
input {
    text-align: center;
}
@end







import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md
        https://cdn.jsdelivr.net/gh/LiaTemplates/JSXGraph@main/README.md


tags: Kontingenztafel, Vierfeldertafel, bedingte Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Fülle die Vierfeldertafel für eine bedingte Wahrscheinlichkeit aus.

author: Martin Lommatzsch

-->




# bedingte Vierfeldertafel

**Fülle** alle Felder der Kontingenztafel (Vierfeldertafel) für eine bedingte Wahrscheinlichkeit in relativen Zahlen mit Dezimalzahlen **aus**.



<!-- data-type="none" 
     data-sortable="false"
     data-group="true" 
     data-show-partial-solution="true" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       | [[ 0,21 ]] | [[ 0,45 ]] |    0,66    |
| $\bar{B}$ |    0,22    | [[ 0,12 ]] | [[ 0,34 ]] |
|           | [[ 0,43 ]] |    0,57    |      1     |
@Algebrite.check([ 21/100; 45/100; 12/100; 34/100; 43/100 ])
