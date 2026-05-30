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

**Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.

__$a)\;\;$__   $  \text{sup} \left(  \mathbb{K} \cap \mathbb{M}  \right) =  $                                      [[   8   ]] 
@Algebrite.check(8)

__$b)\;\;$__   $  \text{max} \left(  \mathbb{L} \setminus \mathbb{M}  \right) =  $                                 [[  9    ]] 
@Algebrite.check(9)

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $                                      [[   1   ]] 
@Algebrite.check(1)

__$d)\;\;$__   $  \text{min} \left(  \mathbb{M} \setminus \left( \mathbb{L} \cup  \mathbb{K}  \right) \right) =  $ [[   7   ]] 
@Algebrite.check(7)




