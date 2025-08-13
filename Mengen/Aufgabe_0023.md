<!--
version:  0.0.1

language: de

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


tags: Mengen, Differenz, Vereinigung, Durchschnitt, leicht, niedrig, Angeben

comment: Gib die resultierende Menge an.

author: Martin Lommatzsch

-->




# Mengenoperatoren


**Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.


__$a)\;\;$__  $  \mathbb{K} \cap \left( \mathbb{M} \setminus \mathbb{L} \right)  =  $       [[   {9}       ]] 


__$b)\;\;$__ $   \mathbb{K} \setminus \left( \mathbb{M} \setminus  \mathbb{L} \right)  =  $ [[  {2,3,4}    ]] 


__$c)\;\;$__ $  \left( \mathbb{K} \cap  \mathbb{L} \right) \cap  \mathbb{M} =  $            [[   {2}       ]] 





