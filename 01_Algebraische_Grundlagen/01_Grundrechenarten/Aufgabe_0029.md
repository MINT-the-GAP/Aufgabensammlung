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
<br>
__$a)\;\;$__ $26$ [[$+$|($-$)|$\cdot$|$:$]] $12$ [[($+$)|$-$|$\cdot$|$:$]] $7 = 218$
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $96$ [[$+$|$-$|$\cdot$|($:$)]] $8$ [[($+$)|$-$|$\cdot$|$:$]] $45$ [[$+$|$-$|$\cdot$|($:$)]] $9 = 17$
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $4$ [[$+$|$-$|($\cdot$)|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $5$ [[$+$|($-$)|$\cdot$|$:$]] $13 = 47$

</div>
</section>
<br>
<br>
<br>
<br>

