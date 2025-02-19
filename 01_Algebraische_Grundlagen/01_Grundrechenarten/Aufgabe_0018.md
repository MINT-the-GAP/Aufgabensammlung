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

tags: Addition, Subtraktion, mittel, sehr niedrig, Bestimme

comment: Eine Rechenmauer der Addition. Kannst du alle fehlenden Felder ausfüllen?

author: Martin Lommatzsch

-->




# Rechenmauer der Additon


**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.



<br> 
<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " 73 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  36   ]] " |     " 37 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 17 "      | " [[  19   ]] " | " [[  18   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```

<br> 
</div>
<div class="flex-child">
<br> 

__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " 98 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " 41 "      | " [[  57   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 28 "      | " [[  13   ]] " | " [[  44   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```
 

</div>
</section>
<br>
<br>
<br>
<br>
<br>
<br>
<br>