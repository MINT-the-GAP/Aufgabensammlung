<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author:


import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/imports/TestdummyKoord.md




-->



# Plot Funktion


> Updateversuch für neue Features am 19.03. um 07:02 Uhr




Alles klappt nur wenn `import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md` im Header ist!


@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)
```



# Punkt auf Koordinate



@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)



Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)
```




# Punkt auf Graph

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)
```





# Graph selbst plotten

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)
```


