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


tags: Mengen, Differenz, Vereinigung, Durchschnitt, Infimum, Supremum, schwer, hoch, Bestimmen

comment: Erarbeite dir die symmetrische Differenz von Mengen.

author: Martin Lommatzsch

-->




# Symmetrische Differenz

 Gegebenen sind die Mengen $\mathbb{M}= \{ 1,2,3,6 \}$, $\mathbb{L} = \{ 4,5,7,9 \} $  und $\mathbb{K} = \{ 3,4,6,8,9 \}$.

__$a)\;\;$__  **Bestimme** das resultierende Mengenelement. $  \left(  \mathbb{L} \cup \mathbb{K}  \right) \setminus \left(  \mathbb{L} \cap \mathbb{K}  \right)  := \mathbb{L} \Delta \mathbb{K}  = $ [[   {3,5,6,7,8}   ]] 

__$b)\;\;$__  Im Aufgabenteil $a)$ wurde der Mengenoperator der symmetrischen Differenz $\Delta$ definiert. **Bestimme** das resultierende Mengenelement.  $  \mathbb{M} \Delta \mathbb{K} =  $ [[  {1,2,4,8,9}    ]] 

__$c)\;\;$__  Skizziere über Mengenkreise $ \mathbb{M} \Delta \mathbb{K} $. 

[[!]]
**************************************

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap1/Aufgabe27.png)

**************************************




