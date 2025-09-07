<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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


tags: Erklärung, Einheiten

comment: In diesem Abschnitt werden die Einheiten und deren Anwendungen erklärt.

author: Martin Lommatzsch

-->

# Einheiten



{{|>}}
***************************

Ohne *Einheiten* haben wissenschaftliche Aussagen (außer in der Mathematik) keine Bedeutung. Um Verwirrungen zwischen den verschiedenen *Einheiten* zu vermeiden, wurde das *SI-Einheitensystem* für alltägliche Phänomene eingeführt. Das *SI-Einheitensystem* besitzt sieben *Grundeinheiten*, aus denen alle anderen *Einheiten* zusammengesetzt werden können. In der mathematischen Beschreibung von Phänomenen verändert die Wahl der *Einheiten* nahezu alles. Aus diesem Grund sollte immer mit *SI-Einheiten* gerechnet werden, solange kein anderes *Einheitensystem* für eine Beschreibung explizit gefordert ist. Die *SI-Einheiten* sind in der nachfolgenden Tabelle aufgelistet, wobei in die zweite Spalte die üblich gewählte *Parameternamen* zur *Größe* angegeben sind.



| Größenname      |  Formelzeichen  |         Einheit  |  Einheitenzeichen |
|:----:|:----:|:----:|:----:|
| Länge |  $l,h,s,x,r,...$     |  Meter  |  m |
| Masse |  $m$      |  Kilogramm  |  kg |
| Zeit |  $t$      |  Sekunde  |  s |
| Stromstärke |  $I$      |  Ampere |  A |
| Temperatur |  $T,\Theta$      |  Kelvin  |  K |
| Stoffmenge |  $n$      |  Mol  |  mol |
| Lichtstärke |  $I_V$     |  Candela  |  cd |



{{|>}} Oftmals kommen die *SI-Einheiten* mit einem Präfix vor. Diese sind nur Abkürzungen hinter denen sich lediglich Nullen verstecken. Statt eines Präfix kann einfach die dazugehörige Zahl eingesetzt werden (z.B.: k $= 1000$). Eine Übersichtsliste:




<!-- data-type="none" data-sortable="false" -->
|Symbol | Name | 10er Potenz | Ausgeschrieben | Sprachlich   			 |
|:----:|:----:|:----:|:----:|:----:|
|Y | Yotta | $10^{24}$ | 1.000.000.000.000.000.000.000.000 | Quadrillion   			 |
|Z | Zetta | $10^{21}$ | 1.000.000.000.000.000.000.000  | Trilliade   			 |
|E | Exa  | $10^{18}$ | 1.000.000.000.000.000.000  | Trillion   			 |
|P | Peta | $10^{15}$ | 1.000.000.000.000.000  | Billarde   			 |
|T | Tera | $10^{12}$ | 1.000.000.000.000  | Billion   			 |
|G | Giga | $10^{9}$ | 1.000.000.000  | Milliarde   			 |
|M | Mega | $10^{6}$ | 1.000.000  | Million   			 | 
|k | Kilo | $10^{3}$ | 1.000  | Tausend   			 | 
|h | Hekto | $10^{2}$ | 100  | Hundert   			 |  
|da | Deka | $10^{1}$ | 10  | Zehn   			 |
|   |      | $10^{0}$ | 1  | Eins  			 | 
|d | dezi | $10^{-1}$ | 0,1  | Zehntel   			 |
|c | centi | $10^{-2}$ | 0,01  | Hundertstel   			 |
|m | milli | $10^{-3}$ | 0,001  | Tausendstel   			 |
|µ | mikro | $10^{-6}$ | 0,000.001  | Millionstel   			 |
|n | nano | $10^{-9}$ | 0,000.000.001  | Milliardstel   			 |
|p | piko | $10^{-12}$ | 0,000.000.000.001  | Billionstel   			 |
|f | femto | $10^{-15}$ | 0,000.000.000.000.001  | Billiardstel   			 |
|a | atto | $10^{-18}$ | 0,000.000.000.000.000.001  | Trillionstel   			 |
|z | zepto | $10^{-21}$ | 0,000.000.000.000.000.000.001  | Trilliardstel   			 |
|y | yokto | $10^{-24}$ | 0,000.000.000.000.000.000.000.001  | Quadrillionstel   			 |





{{|>}} *Einheiten* behaftete *Größen* können nur mit *Größen* *addiert* oder *subtrahiert* werden, wenn diese die gleiche *Einheit* besitzen, somit ist eine *Einheit* ähnlich wie ein *Parameter* zu behandeln, welcher allerdings nur eine Sinnbedeutung besitzt. 




$$
\begin{align*}
		2 \cdot (3\,\text{m} + 4\,\text{s}) = 6\,\text{m} + 8\,\text{s} \\
  \end{align*}
$$




{{|>}} alle *Einheiten* werden stets hinter der Zahl geschrieben. Präfixe wie Millimeter mm für Verwirrung sorgen könnten, da der Buchstabe mehrere Bedeutungen zugesprochen bekommt. Meistens wird die genaue Bedeutung allerdings im Zusammenhang der Rechnung klar. Da *Gleichungen* teilweise nur eine Aussagekraft in bestimmten *Einheiten* besitzen, werden Variablen mit diesen gekennzeichnet:


$$
\begin{align*}
		x\left[\text{m}\right] =  100 \cdot x\left[\text{cm}\right] \;\; , \\
  \end{align*}
$$



{{|>}} wobei die eckigen *Klammern* die zu wählende *Einheit* für die *Variable* beherbergen.



{{|>}} Bei einigen *Einheiten* existieren trotz der flächendeckenden Einführung des *Dezimalsystems* nach der französischen Revolution nach wie vor Besonderheiten. So konnte sich bei der Zeit das *Dezimalsystem* nicht durchsetzen, sodass $1\,\text{y}=1\,\text{a} = 365\,\text{d} \;;\; 1\,\text{d} = 24\,\text{h}  \;;\; 1\,\text{h} = 60\,\text{min}  \;;\; 1\,\text{min} = 60\,\text{s} $ gilt. Hierbei wurde ein Kalenderjahr $1\,$a gewählt, während das Bankenjahr nur $360$ Tage besitzt. Durch die Bewegung der Erde um die Sonne ist genau ein Jahr physikalisch mit $1\,\text{a}\approx 365,25636\,\text{d}$ definiert, sodass in guter Näherung lediglich das Schaltjahr mit betrachtet wird $1\,\text{a} = 365,25\,\text{d}$. In der Regel wird mit dem Kalenderjahr gerechnet.  Bei der Masse muss beachtet werden, dass Kilogramm $1\,\text{kg}$ die *SI-Einheit* ist und dass eine Tonne $\,\text{1t} = 1000\,\text{kg}$ entspricht und dass in der deutschsprachigen Region zwei Pfund einem Kilogramm entsprechen. Bei den *Flächen* sind noch "Ar" ($1\,\text{a} = 100\,\text{m}^2$) und Hektar ($1\,\text{ha} = 10000\,\text{m}^2$) zu erwähnen. Für *Volumina* gilt die Definition für einen Liter $1\,\text{dm}^3 = 1\,\text{l}$. 


{{|>}} So können für einheitenbehafteten Größen eine Umrechnungstabelle erstellt werden. 






<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Einheit1.png)

</center>







{{|>}} Andere *Einheiten* als die *SI-Einheiten* sind meistens zusammengesetzte *Einheiten*, welche als Abkürzung eingeführt wurden. Die wichtigsten zusammengesetzten *Einheiten* sind von oft vorkommenden *Größen* der Physik. (Hier sind nur *Größen* aufgelistet, welche in späteren Übungsaufgaben mit Bezug zu *Einheitenrechnungen* verwendet werden könnten.) 



{{|>}} 
*************************************

Kraft $F$ in $1\,\text{N} = 1\,\dfrac{\text{m} \cdot \text{kg}}{\text{s}^2}$ 

Dichte $\rho$ in $1\,\dfrac{\text{kg} }{\text{m}^3}$ 

Frequenz $f$ in $1\,\text{Hz} = \,1\dfrac{1}{\text{s}}$ 

Geschwindigkeit $v$ in $1 \,\frac{\text{m}}{\text{s}}$ 

Beschleunigung $a$ in $1 \,\frac{\text{m}}{\text{s}^2}$ 

Druck $p$ in $1\,\text{Pa} = 1\,\dfrac{\text{kg}}{\text{m} \cdot \text{s}^2}$ 


Druck $p$ in $10\,\text{bar} = 1\,\text{MPa}$ 


Energie $E$ in $1J = 1 \,\text{N} \cdot \text{m} = 1\,\dfrac{\text{m}^2 \cdot \text{kg}}{\text{s}^2} $ 


Leistung $P$ in $1W = 1 \,\text{A} \cdot \text{V} = 1 \,\dfrac{\text{J}}{\text{s}} $ 


elektrische Ladung $Q$ in $1\,\text{C} = 1 \,\text{A} \cdot \text{s} $ 


elektrische Spannung $U$ in $1\,\text{V} = 1 \,\dfrac{\text{W}}{\text{A}} = 1 \,\dfrac{\text{J}}{\text{C}} $ 


elektrischer Widerstand $R$ in $1\Omega = 1\, \dfrac{\text{V}}{\text{A}} $ 


magnetische Flussdichte $B$ in $1\,\text{T} = 1 \,\dfrac{\text{V} \cdot \text{s}}{\text{m}^2} $ 


Induktivität $L$ in $1\,\text{H} = 1 \,\dfrac{\text{V} \cdot \text{s}}{\text{A}} $ 


Kapazität $C$ in $1\,\text{F} = 1\, \dfrac{\text{C}}{\text{V}} $ 


Drehmoment $M$ in $1 \,\text{N} \cdot \text{m} $ 



Des Weiteren sind besonders häufig die folgenden Naturkonstanten in vielen Rechnungen vorzufinden:


Lichtgeschwindigkeit $c = 299792458 \, \dfrac{\text{m} }{\text{s}} $ 

Dielektrizitätskonstante des Vakuums $\epsilon_0 \approx 8,854187817 \cdot 10^{-12}\, \dfrac{\text{A} \cdot \text{s} }{\text{V} \cdot \text{m}} $ 

Vakuumpermeabilität $\mu_0 = 4 \pi 10^{-7} \,\dfrac{\text{N} }{\text{A}^2} $ 

Boltzmann-Konstante $k_B \approx 1,38064852 \,\dfrac{\text{J} }{\text{K}} $ 

Plancksches Wirkungsquantum $\hbar \approx 1,05447800 \cdot 10^{-34} \,\text{J} \cdot \text{s} $ 

*******************************



{{|>}} Mittels einer *Einheitenrechnung* lassen sich *Gleichungen* auf ihre Richtigkeit überprüfen. Dazu werden die *Einheiten* der *Größen* der *Gleichung* statt den *Parametern* und *Variablen* niedergeschrieben. Wenn auf beiden Seiten der *Gleichung* die gleiche *Einheit* nachgewiesen werden kann, ist dies ein Indiz für die Richtigkeit der *Gleichung*. Außerdem können so *Umrechnungsfaktoren* von Präfixen mit berücksichtigt werden.



$$
\begin{align*}
  r = \frac{m v}{q B}   \quad \Rightarrow \quad \left[  1\,\text{m} \right] & =   \left[  1 \,\frac{\text{kg}  \cdot \frac{\text{m}}{\text{s}}}{\text{C} \cdot \text{T}}  \right]   =   \left[ 1 \, \frac{\text{kg} \cdot \text{m}}{\text{s} \cdot \text{A}  \cdot \text{s} \cdot \frac{\text{V}  \cdot \text{s} }{ \text{m}^2}}  \right]    =   \left[ 1 \, \frac{\text{kg} \cdot \text{m} \cdot \text{m}^2}{\text{s} \cdot \text{A}  \cdot \text{s} \cdot \text{V}  \cdot \text{s} }  \right]   	  	 \;\;   \\
    & =    \left[ 1 \, \frac{\text{kg} \cdot \text{m}^3  }{\text{s}^3 \cdot \text{A}   \cdot \frac{\text{J}}{\text{C}}   }  \right]  =   \left[ 1 \, \frac{\text{kg} \cdot \text{m}^3 \cdot \text{C}  }{\text{s}^3 \cdot \text{A }  \cdot \text{J}  }  \right]   	  =   \left[ 1 \, \frac{\text{kg} \cdot \text{m}^3 \cdot \text{A} \cdot \text{s}  }{\text{s}^3 \cdot \text{A}   \cdot \frac{\text{m}^2 \cdot \text{kg}}{\text{s}^2}  }  \right]   	    \\ 
    &  =   \left[ 1 \, \frac{\text{kg} \cdot \text{m}^3 \cdot \text{s} \cdot \text{s}^2 }{\text{s}^3     \cdot \text{m}^2 \cdot \text{kg}  }  \right]  =   \left[ 1 \, \frac{\text{kg} \cdot \text{m}^3   }{  \text{m}^2 \cdot \text{kg}  }  \right]   	  =   \left[ 1 \, \frac{ \text{m}^3   }{  \text{m}^2    }  \right]     =   \left[ 1\,  \text{m}  \right]   	 \;\;   \\
  \end{align*}
$$






***************************
