<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
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
<br> 
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
 

<br>
<br>
<br>
<br>
<br>
<br>
<br>