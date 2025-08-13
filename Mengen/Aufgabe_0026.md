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


tags: Mengen, Differenz, Vereinigung, Durchschnitt, Infimum, Supremum, mittel, normal, Bestimmen

comment: Erst Mengenoperationen, dann Grenzen und Schranken bestimmen.

author: Martin Lommatzsch

-->




# Grenzen nach Mengenoperatoren

**Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.

__$a)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $ [[   3   ]] 

__$b)\;\;$__   $  \text{max} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $ [[   9   ]] 

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $ [[   2   ]] 

__$d)\;\;$__   $  \text{sup}  \left( \left(  \mathbb{L} \cup  \mathbb{M} \right)  \cap \mathbb{K}  \right) =  $ [[   9   ]] 





