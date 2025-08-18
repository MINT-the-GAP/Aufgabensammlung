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


tags: Multiplikation, Division, Negative Zahlen, leicht, sehr niedrig, Angeben

comment: Rechne mit ganzen Zahlen im Kopf. Beachte die Vorzeichen.

author: Martin Lommatzsch

-->




# Vorzeichen bei ganzen Zahlen

**Gib** den Wert des Terms **an**.
 

__$a)\;\;$__ $ -(-(-(4))) \cdot (-(-(-(-5)))) =$ [[  -20  ]]
 

__$b)\;\;$__ $ -72:(-(-(-(-(-4))))) =$ [[  18  ]]
 

__$c)\;\;$__ $ -(-(-(-(-6)))) \cdot (-(-(-(-8)))) =$ [[  -48  ]]
 

__$d)\;\;$__ $ -(-(-3)) \cdot (-(-(-(-(-2))))) \cdot (-(-(-(-5))))  =$ [[  16  ]]
 





