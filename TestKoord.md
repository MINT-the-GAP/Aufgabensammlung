<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author:

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/imports/TestdummyKoord.md?cb=2


import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md





-->



# Klappt es?




@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)



---
<br>
---



@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)



Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)