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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: Addition, Subtraktion schwer

-->




# Aufgabe 1

Bestimme die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.



<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__

``` ascii
                           +-----------------+
                           |                 |
                           |     " 63 "      |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  28   ]] " |     " 35 "      |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  13   ]] " |      " 15 "     | " [[  20   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   7   ]] " |      " 6 "      | " [[   9   ]] " | " [[  11   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```

</div>
</section>



<section class="flex-container">
<div class="flex-child">

__$b)\;\;$__

``` ascii
                           +-----------------+
                           |                 |
                           | " [[ 136   ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 62 "     | " [[  74   ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 30 "     | " [[  32   ]] " |      " 42 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  17   ]] " |     " 13 "      | " [[  19   ]] " | " [[  23   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
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