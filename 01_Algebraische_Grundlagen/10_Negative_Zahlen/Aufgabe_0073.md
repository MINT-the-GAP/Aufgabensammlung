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
 
<br>
__$a)\;\;$__ $ -(-96) : (-(-(-12))) =$ [[  -8  ]]
<br> 
<br>
__$b)\;\;$__ $ -5 \cdot (-(-(-(-(-(-(-9))))))) =$ [[  45  ]]
<br> 
<br>
__$c)\;\;$__ $ -(-7) \cdot (-(-(-(-(-(-(-9))))))) =$ [[  -63  ]]
<br> 
<br>
__$d)\;\;$__ $ -(-(-(36))) : (-(-(-(-2))) \cdot (-(-(-(-2)))))  =$ [[  -8  ]]
<br> 
<br>
<br>
<br>
<br>

