<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md







import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md
        https://cdn.jsdelivr.net/gh/LiaTemplates/JSXGraph@main/README.md




tags: Mengen, Differenz, Vereinigung, Durchschnitt, Infimum, Supremum, mittel, normal, Bestimmen

comment: Erst Mengenoperationen, dann Grenzen und Schranken bestimmen.

author: Martin Lommatzsch

-->




# Grenzen nach Mengenoperatoren

**Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.

__$a)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $ [[   3   ]] 
@Algebrite.check(3)

__$b)\;\;$__   $  \text{max} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $ [[   9   ]] 
@Algebrite.check(9)

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $ [[   2   ]] 
@Algebrite.check(2)

__$d)\;\;$__   $  \text{sup}  \left( \left(  \mathbb{L} \cup  \mathbb{M} \right)  \cap \mathbb{K}  \right) =  $ [[   9   ]] 
@Algebrite.check(9)





