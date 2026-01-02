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


tags: Mengen, Differenz, sehr leicht, sehr niedrig, Angeben

comment: Gib die Differenz von Mengen an.

author: Martin Lommatzsch

-->




# Differenz von Mengen

**Gib** die Differenz der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.




__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $\ und \mathbb{M} = \{ 1,2,4,5,7,8 \} $\

$\mathbb{M} \setminus \mathbb{K} =  $ [[   {1,4,7}   ]] $  $\ 



__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $\ und \mathbb{M} = \{ 2,3,5,6,8 \} $\

$\mathbb{M} \setminus \mathbb{K} =  $ [[  {2,5,8}    ]] $  $\ 



__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $\ und \mathbb{M} = \{ 3,4,5,6,7 \} $\

$\mathbb{M} \setminus \mathbb{K} =  $ [[   {4,6}     ]] $  $\ 




__$d)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $\ und \mathbb{M} = \{ 3,4,5,6,7 \} $\

$\mathbb{K} \setminus \mathbb{M} =  $ [[   {1,9}     ]] $  $\ 




