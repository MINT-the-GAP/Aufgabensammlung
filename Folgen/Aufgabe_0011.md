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


tags: Folgen, sehr schwer, normal, Angeben

comment: Welche Zahl, welches Symbol kommt als nächstes?

author: Martin Lommatzsch

-->




# Folgen von Zahlen und Symbolen

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child"> 

$0 \quad 1 \quad 6 \quad 15 \quad 28 \quad 45 \quad 66 \quad 91 \quad 120 \quad$ [[ 153 ]] $\quad$ [[ 190 ]] $\quad$ [[ 231 ]] \

[[?]] Musterbeschreibung: Der Folgenterm ist $n\cdot(2\cdot n -1)$.

</div>

</section>

<br>
<br>
<br>
<br>