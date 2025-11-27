<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags: 

comment: 

author: Martin Lommatzsch


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

.tree2 {
  position: relative;
  width: 520px;
  height: 260px;
  margin: 1em auto;
  font-family: sans-serif;
}

/* SVG als Hintergrund-Layer */
.tree2 svg {
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
}

/* Labels & Eingabefelder oben drauf */
.tree2 .tree-node {
  position: absolute;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 0.9rem;
}
@end



import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/mermaid_template/0.1.4/README.md
        https://raw.githubusercontent.com/liaTemplates/ABCjs/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/Speech-Recognition-Quiz/refs/heads/main/README.md
        https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/mec2/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/refs/heads/main/README.md
        https://github.com/LiaTemplates/PeriodicTable/blob/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

-->




# Baumdiagramm



<div class="tree2">

<!-- Baumstruktur als SVG -->
<svg viewBox="0 0 100 60">
  <!-- erste Stufe -->
  <line x1="50" y1="10" x2="25" y2="25" stroke="black" />
  <line x1="50" y1="10" x2="75" y2="25" stroke="black" />
  <!-- zweite Stufe links -->
  <line x1="25" y1="25" x2="15" y2="50" stroke="black" />
  <line x1="25" y1="25" x2="35" y2="50" stroke="black" />
  <!-- zweite Stufe rechts -->
  <line x1="75" y1="25" x2="65" y2="50" stroke="black" />
  <line x1="75" y1="25" x2="85" y2="50" stroke="black" />
</svg>

<!-- Knotenbeschriftungen -->
<span class="tree-node" style="left:50%; top:10%;">Start</span>

<span class="tree-node" style="left:25%; top:25%;">$A$</span>
<span class="tree-node" style="left:75%; top:25%;">$\bar{A}$</span>

<span class="tree-node" style="left:15%; top:50%;">$B \mid A$</span>
<span class="tree-node" style="left:35%; top:50%;">$\bar{B} \mid A$</span>

<span class="tree-node" style="left:65%; top:50%;">$B \mid \bar{A}$</span>
<span class="tree-node" style="left:85%; top:50%;">$\bar{B} \mid \bar{A}$</span>

<!-- Eingabefelder für die Wahrscheinlichkeiten auf den Ästen -->
<span class="tree-node" style="left:33%; top:18%;">
  $P(A) = $ [[ 0.4 ]]
</span>

<span class="tree-node" style="left:67%; top:18%;">
  $P(\bar{A}) = $ [[ 0.6 ]]
</span>

<span class="tree-node" style="left:20%; top:40%;">
  $P(B \mid A) = $ [[ 0.3 ]]
</span>

<span class="tree-node" style="left:30%; top:40%;">
  $P(\bar{B} \mid A) = $ [[ 0.7 ]]
</span>

<span class="tree-node" style="left:70%; top:40%;">
  $P(B \mid \bar{A}) = $ [[ 0.2 ]]
</span>

<span class="tree-node" style="left:80%; top:40%;">
  $P(\bar{B} \mid \bar{A}) = $ [[ 0.8 ]]
</span>

</div>



# Brüche markieren



Teile den Kreis mittels des Schieberegler passend ein und markiere durch klicken den angegeben Bruchteil.


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $\dfrac{2}{7}$

<!-- data-solution-button="5"-->
@circleQuiz(2/7)

</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{8}{9}$

<!-- data-solution-button="5"-->
@circleQuiz(8/9)

</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{3}{5}$

<!-- data-solution-button="5"-->
@circleQuiz(3/5)

</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{3}{8}$

<!-- data-solution-button="5"-->
@circleQuiz(3/8)

</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{5}{12}$

<!-- data-solution-button="5"-->
@circleQuiz(5/12)

</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{3}{20}$


<!-- data-solution-button="5"-->
@circleQuiz(3/20)

</div>

</section>

