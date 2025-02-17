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


tags: Addition, leicht, sehr niedrig, Bestimme

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
                  | " [[  71   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  33   ]] " | " [[   38  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 12 "     |      " 21 "     |      " 17 "     |
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
                  | " [[  161  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  94   ]] " | " [[  67   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 51 "     |      " 43"      |      " 24 "     |
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