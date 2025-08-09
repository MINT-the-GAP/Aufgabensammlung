<!--
version:  0.0.1
language: de
narrator: Deutsch Female

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Erklärung, Addition

comment: In diesem Abschnitt wird die Addition ausführlich erklärt.

author: Martin Lommatzsch



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->




# Vernetzte Lücken

Entweder [[  positiv  ]] oder [[  negativ  ]] oder [[  magnetisch  ]]?
<script>
@input.map(s => s.toLowerCase()).sort().join() === "magnetisch,negativ,positiv"
</script>



# Algebrite


6 + 6

[[12]]
@Algebrite.check(12)

---

try different expressions of `x ^ 2 - 1`

[[x ^ 2 - 1]]
@Algebrite.check(x^2-1)

---

x=[[ 1/3 ]]m
@Algebrite.check2(1/3,0.001)

---

[[ 5,5 ]] m
@Algebrite.check_margin(5.1,6.1)



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

# circuitikz
 


<center>

```latex  @tikz

\begin{tikzpicture} [scale=2, >=latex]

    \draw[thick] (0,0) to [R] (2,0) ; 

\end{tikzpicture}

```
</center>

# Math

A = (<script input="range" min="0" max="100" value="50" step="1" default="50" output="A0">
@input
</script>,
<script input="range" min="-100" max="100" value="50" step="1" default="50" output="A1">
@input
</script>
)

B = (<script input="range" min="0" max="100" value="96" step="1" default="96" output="B0">
@input
</script>,
<script input="range" min="-100" max="100" value="27" step="1" default="27" output="B1">
@input
</script>
)


C = (<script input="range" min="0" max="100" value="20" step="1" default="20" output="C0">
@input
</script>,
<script input="range" min="-100" max="100" value="20" step="1" default="20" output="C1">
@input
</script>
)

Rotation: 
<script input="range" min="0" max="360" value="0" step="1" default="0" output="rotation">
@input
</script>°


``` js @GGBScript
UserAxisLimits(0,150,0,60);

const A = Punkt(@input(`A0`), @input(`A1`), "A");
const B = Punkt(@input(`B0`), @input(`B1`), "B");
const C = Punkt(@input(`C0`), @input(`C1`), "C");

const P = Polygon("A", "B", "C");

Farbe(P, "red");

const M = Mittelpunkt(P);

const P2 = Rotation(P, M, @input(`rotation`), "P2");

Farbe("P2", "green");

Kreis(M, 16, "Kreis");
```




<!-- data-type="none"
data-sortable="false" 
data-orientation="vertical|horizontal"-->