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

