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


.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Negative Zahlen, Vorrangsregeln, mittel, niedrig, Angeben

comment: Eine Gleichung ist nur dann gleich, wenn auf beiden Seiten vom Gleichheitszeichen das gleiche steht. Kannst du die passenden Rechenoperatoren einsetzen, sodass die Gleichung korrekt ist?

author: Martin Lommatzsch

-->




# Rechenoperatoren einsetzen

**Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.

<br>
<br>
__$a)\;\;$__ $-(9$ [[$+$|($-$)|$\cdot$|$:$]] $(-6))$ [[$+$|$-$|$\cdot$|($:$)]] $3 = -5$
<br>
<br>
__$b)\;\;$__ $-7$ [[($+$)|$-$|$\cdot$|$:$]] $(-2)$ [[$+$|$-$|($\cdot$)|$:$]] $(-8) = 5$
<br>
<br>
__$c)\;\;$__ $8$ [[$+$|($-$)|$\cdot$|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $|-4|$ [[$+$|$-$|$\cdot$|($:$)]] $(-6) = 10$

<br>
<br>
<br>
<br>
<br>

