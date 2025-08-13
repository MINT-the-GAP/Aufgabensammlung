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

**Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,3,5,6,8 \}$, $\mathbb{L} = \{ 3,6,9 \} $  und $\mathbb{K} = \{ 1,3,5,7,9 \}$.

__$a)\;\;$__  $ \left(\mathbb{K} \setminus \mathbb{M}\right) \cup \mathbb{L} =  $     [[   {1,3,6,7,9}   ]]    


__$b)\;\;$__    $ \left(\mathbb{K} \cap \mathbb{L} \right) \setminus \mathbb{M} =  $  [[     {9}         ]]    


__$c)\;\;$__    $\mathbb{K} \cup  \left( \mathbb{L} \setminus \mathbb{M} \right) =  $ [[   {1,3,5,7,9}   ]]  





