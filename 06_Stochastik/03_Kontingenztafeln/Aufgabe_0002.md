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


tags: Kontingenztafel, Vierfeldertafel, unbedingte Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Fülle die Vierfeldertafel für eine unbedingte Wahrscheinlichkeit aus.

author: Martin Lommatzsch

-->




# unbedingte Vierfeldertafel

**Fülle** alle Felder der Kontingenztafel (Vierfeldertafel) für eine unbedingte Wahrscheinlichkeit in relativen Zahlen **aus**.




<!-- data-type="none" 
     data-sortable="false"
     data-group="true" 
     data-show-partial-solution="true" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       | [[ 0,1  ]] | [[ 0,3  ]] | $0,4$      |
| $\bar{B}$ | [[ 0,15 ]] | [[ 0,45 ]] | [[ 0,6  ]] |
|           |   $25\%$   | [[ 0,75 ]] |      1     |
@Algebrite.check([ 10/100; 30/100; 15/100; 45/100; 60/100; 75/100 ])
