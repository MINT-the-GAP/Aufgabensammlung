<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}


import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md





tags: Bruchrechnung, mittel, normal, Bestimmen

comment: Bilde eine Dominoreihe aus sechs Dominosteinen, auf denen Bruchrechnung zu finden ist.

author: Martin Lommatzsch

-->



# Bruchrechnungsdomino


**Ordne** die Dominosteine in der richtigen Reihenfolge **an**.


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__  $\dfrac{3}{5}$
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{10}} \right\| \boxed{ \dfrac{12}{7} \cdot \dfrac{7}{18}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{6}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{3}{5} \cdot \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{5} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{6} - \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{16} \cdot \dfrac{4}{3}} \right\| \boxed{ \dfrac{3}{4} : \dfrac{1}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{5} \cdot \dfrac{5}{2}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{1}{6}} $]]
$= \dfrac{5}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{2}{3} \cdot \dfrac{2}{3}} \right\| \boxed{ \dfrac{7}{5} - \dfrac{2}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{8} + \dfrac{3}{8}} \right\| \boxed{ \dfrac{10}{7} : \dfrac{5}{7}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{3} - \dfrac{1}{3}} \right\| \boxed{ \dfrac{9}{8} + \dfrac{3}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} + \dfrac{2}{3}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{2}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{9} : \dfrac{2}{3}} \right\| \boxed{ \dfrac{11}{12} + \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{9} : \dfrac{2}{3}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{4}} $]]
$= \dfrac{1}{2}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__ $\dfrac{3}{8}$
 [->[$\left. \boxed{ = \dfrac{1}{2} - \dfrac{1}{8}} \right\| \boxed{ \dfrac{3}{4} \cdot \dfrac{3}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{16}} \right\| \boxed{ \dfrac{5}{12} + \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{2} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{5}{8} + \dfrac{5}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{4} + \dfrac{3}{16}} \right\| \boxed{ \dfrac{5}{6} - \dfrac{5}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{12}} \right\| \boxed{ \dfrac{1}{6} + \dfrac{1}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{4}{3} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
$= \dfrac{7}{9}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{9}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{6}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{4} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{10} : \dfrac{3}{2}} \right\| \boxed{ 1 - \dfrac{1}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{4} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{4} + \dfrac{1}{6}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
$= \dfrac{2}{3}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__ $\dfrac{5}{14}$
 [->[$\left. \boxed{ = \dfrac{3}{7} - \dfrac{1}{14}} \right\| \boxed{ \dfrac{3}{2} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{4}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = 1 + \dfrac{1}{6}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{8}} \right\| \boxed{ \dfrac{3}{5} + \dfrac{3}{10}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{10}} \right\| \boxed{ \dfrac{9}{7} : \dfrac{3}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{7} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{2}{3} - \dfrac{1}{6}} $]]
$= \dfrac{1}{2}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__ $\dfrac{5}{18}$
 [->[$\left. \boxed{ = \dfrac{2}{9} + \dfrac{1}{18}} \right\| \boxed{ \dfrac{7}{6} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{4} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{3}{4} + \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{12}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{4}{3} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{2}{9}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{2}{9}} $]]
$= \dfrac{13}{18}$








