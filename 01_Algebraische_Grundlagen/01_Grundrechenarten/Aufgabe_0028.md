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


tags: Grundrechenarten, Vorrangsregeln, mittel, niedrig, Angeben

comment: Eine Gleichung ist nur dann gleich, wenn auf beiden Seiten vom Gleichheitszeichen das gleiche steht. Kannst du die passenden Rechenoperatoren einsetzen, sodass die Gleichung korrekt ist?

author: Martin Lommatzsch

-->




# Rechenoperatoren einsetzen

**Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $12$ [[$+$|$-$|$\cdot$|($:$)]] $3$ [[($+$)|$-$|$\cdot$|$:$]] $5 = 9$

</div>
<div class="flex-child">

__$b)\;\;$__ $6$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|($-$)|$\cdot$|$:$]] $8$ [[$+$|$-$|($\cdot$)|$:$]] $2 = 2$

</div>
<div class="flex-child">

__$c)\;\;$__ $25$ [[$+$|($-$)|$\cdot$|$:$]] $11$ [[$+$|($-$)|$\cdot$|$:$]] $9$  [[($+$)|$-$|$\cdot$|$:$]] $3 = 8$

</div>
</section>





