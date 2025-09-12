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





tags: Bruchrechnung, leicht, normal, Bestimmen

comment: Bilde eine Dominoreihe aus vier Dominosteinen, auf denen Bruchrechnung zu finden ist.

author: Martin Lommatzsch

-->




# Bruchrechnungsdomino


**Ordne** die Dominosteine in der richtigen Reihenfolge **an**.



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{3}{4}$ 
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{5}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{6}} \right\|\boxed{ \dfrac{3}{5} + \dfrac{1}{10}}  $]]
 [->[$\left. \boxed{ =  \dfrac{14}{20}} \right\|\boxed{ \dfrac{7}{8} : \dfrac{7}{12}}  $]]
 [->[$\left. \boxed{ =  \dfrac{9}{6}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
$= \dfrac{2}{3}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__ $\dfrac{2}{5}$ 
 [->[$\left. \boxed{ =  \dfrac{4}{10}} \right\|\boxed{ \dfrac{3}{2} \cdot \dfrac{2}{5}}  $]]
 [->[$\left. \boxed{ =  \dfrac{6}{10}} \right\|\boxed{ \dfrac{9}{4} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{12}{8}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
 [->[$\left. \boxed{ =  \dfrac{4}{6}} \right\|\boxed{ \dfrac{1}{2} + \dfrac{1}{3}}  $]]
$= \dfrac{5}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__ $\dfrac{7}{10}$ 
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{5}} \right\| \boxed{ \dfrac{3}{4} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{2}{4}} \right\|\boxed{ \dfrac{9}{8} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{6}{8}} \right\|\boxed{ \dfrac{3}{2} : \dfrac{3}{1}}  $]]
 [->[$\left. \boxed{ =  \dfrac{5}{10}} \right\|\boxed{ \dfrac{1}{2} : \dfrac{2}{1}}  $]]
$= \dfrac{1}{4}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__ $\dfrac{5}{12}$
 [->[$\left. \boxed{ = \dfrac{10}{24}} \right\| \boxed{ \dfrac{3}{2} - \dfrac{5}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{12}} \right\| \boxed{ \dfrac{7}{4} - \dfrac{5}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{22}{24}} \right\| \boxed{ \dfrac{11}{8} : \dfrac{11}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{6}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
$= \dfrac{7}{9}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{9}} \right\| \boxed{ \dfrac{8}{3} : \dfrac{4}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{9}} \right\| \boxed{ \dfrac{3}{5} + \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{51}{60}} \right\| \boxed{ \dfrac{17}{10} : \dfrac{17}{24}} $]]
 [->[$\left. \boxed{ = \dfrac{24}{10}} \right\| \boxed{ \dfrac{5}{6} - \dfrac{5}{12}} $]]
$= \dfrac{5}{12}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__ $\dfrac{2}{7}$
 [->[$\left. \boxed{ = \dfrac{4}{14}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{15}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{10}} \right\| \boxed{ \dfrac{7}{6} - \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{10}{12}} \right\| \boxed{ \dfrac{9}{5} - \dfrac{3}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{8}} \right\| \boxed{ \dfrac{9}{5} : \dfrac{3}{1}} $]]
$= \dfrac{3}{5}$


