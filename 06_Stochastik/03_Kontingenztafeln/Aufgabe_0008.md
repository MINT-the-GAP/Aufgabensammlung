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
| $B$       | [[ 0,09 ]] |    0,78    |    0,87    |
| $\bar{B}$ | [[ 0,02 ]] | [[ 0,11 ]] | [[ 0,13 ]] |
|           |    0,11    | [[ 0,89 ]] |      1     |
@Algebrite.check([ 9/100; 2/100; 11/100; 13/100; 89/100 ])
