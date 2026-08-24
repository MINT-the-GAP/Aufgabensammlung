<!--
version:  1.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md



@style
.unit-ladders {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1.5rem;
  align-items: start;
  max-width: 1100px;
  margin: 1.5rem auto;
}

.unit-ladder {
  width: 100%;
  height: auto;
  color: currentColor;
}

.unit-ladder rect,
.unit-ladder path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}

.unit-ladder marker path {
  fill: currentColor;
  stroke: none;
}

.unit-ladder text {
  fill: currentColor;
  font-family: Georgia, "Times New Roman", serif;
  text-anchor: middle;
}

.unit-ladder .unit-title {
  font-size: 26px;
  font-weight: 700;
}

.unit-ladder .unit-name {
  font-size: 25px;
}

.unit-ladder .unit-factor {
  font-size: 15px;
}
@end










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



{{|>}} Bei einigen *Einheiten* existieren trotz der flächendeckenden Einführung des *Dezimalsystems* nach der französischen Revolution nach wie vor Besonderheiten. So konnte sich bei der Zeit das *Dezimalsystem* nicht durchsetzen, sodass $1\,\text{y}=1\,\text{a} = 365\,\text{d} \;;\; 1\,\text{d} = 24\,\text{h}  \;;\; 1\,\text{h} = 60\,\text{min}  \;;\; 1\,\text{min} = 60\,\text{s} $ gilt. Hierbei wurde ein Kalenderjahr $1\,$a gewählt, während das Bankenjahr nur $360$ Tage besitzt. Durch die Bewegung der Erde um die Sonne ist genau ein Jahr physikalisch mit $1\,\text{a}\approx 365,25636\,\text{d}$ definiert, sodass in guter Näherung lediglich das Schaltjahr mit betrachtet wird $1\,\text{a} = 365,25\,\text{d}$. In der Regel wird mit dem Kalenderjahr gerechnet.  Bei der Masse muss beachtet werden, dass Kilogramm $1\,\text{kg}$ die *SI-Einheit* ist und dass eine Tonne $\,\text{1t} = 1000\,\text{kg}$ entspricht und dass in der deutschsprachigen Region zwei Pfund einem Kilogramm entsprechen. Bei den *Flächen* sind noch "Ar" ($1\,\text{a} = 100\,\text{m}^2$) und Hektar ($1\,\text{ha} = 10000\,\text{m}^2$) zu erwähnen. Für *Volumina* gilt die Definition für einen Liter $1\,\text{dm}^3 = 1\,\ell$. 


{{|>}} So können für einheitenbehafteten Größen eine Umrechnungstabelle erstellt werden. 






<div class="unit-ladders">

<svg class="unit-ladder" viewBox="0 0 340 470" role="img" aria-labelledby="unit-length-title unit-length-desc">
  <title id="unit-length-title">Umrechnungsleiter für Längeneinheiten</title>
  <desc id="unit-length-desc">Von Kilometer bis Millimeter: abwärts wird multipliziert, aufwärts dividiert.</desc>
  <defs>
    <marker id="unit-arrow-length" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" />
    </marker>
  </defs>

  <rect x="85" y="10" width="170" height="55" rx="4" />
  <text class="unit-title" x="170" y="46">Länge</text>
  <rect x="105" y="80" width="130" height="70" />
  <rect x="105" y="150" width="130" height="70" />
  <rect x="105" y="220" width="130" height="70" />
  <rect x="105" y="290" width="130" height="70" />
  <rect x="105" y="360" width="130" height="70" />
  <text class="unit-name" x="170" y="124">km</text>
  <text class="unit-name" x="170" y="194">m</text>
  <text class="unit-name" x="170" y="264">dm</text>
  <text class="unit-name" x="170" y="334">cm</text>
  <text class="unit-name" x="170" y="404">mm</text>
  <path d="M105,122 C70,127 70,173 105,178" marker-end="url(#unit-arrow-length)" />
  <path d="M235,178 C270,173 270,127 235,122" marker-end="url(#unit-arrow-length)" />
  <text class="unit-factor" x="38" y="155">· 1000</text>
  <text class="unit-factor" x="302" y="155">: 1000</text>
  <path d="M105,192 C70,197 70,243 105,248" marker-end="url(#unit-arrow-length)" />
  <path d="M235,248 C270,243 270,197 235,192" marker-end="url(#unit-arrow-length)" />
  <text class="unit-factor" x="42" y="225">· 10</text>
  <text class="unit-factor" x="298" y="225">: 10</text>
  <path d="M105,262 C70,267 70,313 105,318" marker-end="url(#unit-arrow-length)" />
  <path d="M235,318 C270,313 270,267 235,262" marker-end="url(#unit-arrow-length)" />
  <text class="unit-factor" x="42" y="295">· 10</text>
  <text class="unit-factor" x="298" y="295">: 10</text>
  <path d="M105,332 C70,337 70,383 105,388" marker-end="url(#unit-arrow-length)" />
  <path d="M235,388 C270,383 270,337 235,332" marker-end="url(#unit-arrow-length)" />
  <text class="unit-factor" x="42" y="365">· 10</text>
  <text class="unit-factor" x="298" y="365">: 10</text>
</svg>

<svg class="unit-ladder" viewBox="0 0 340 470" role="img" aria-labelledby="unit-mass-title unit-mass-desc">
  <title id="unit-mass-title">Umrechnungsleiter für Masseneinheiten</title>
  <desc id="unit-mass-desc">Von Tonne bis Milligramm: abwärts wird mit 1000 multipliziert, aufwärts durch 1000 dividiert.</desc>
  <defs>
    <marker id="unit-arrow-mass" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" />
    </marker>
  </defs>

  <rect x="85" y="10" width="170" height="55" rx="4" />
  <text class="unit-title" x="170" y="46">Masse</text>
  <rect x="105" y="80" width="130" height="85" />
  <rect x="105" y="165" width="130" height="85" />
  <rect x="105" y="250" width="130" height="85" />
  <rect x="105" y="335" width="130" height="85" />
  <text class="unit-name" x="170" y="132">t</text>
  <text class="unit-name" x="170" y="217">kg</text>
  <text class="unit-name" x="170" y="302">g</text>
  <text class="unit-name" x="170" y="387">mg</text>
  <path d="M105,129 C70,134 70,195 105,200" marker-end="url(#unit-arrow-mass)" />
  <path d="M235,200 C270,195 270,134 235,129" marker-end="url(#unit-arrow-mass)" />
  <text class="unit-factor" x="38" y="168">· 1000</text>
  <text class="unit-factor" x="302" y="168">: 1000</text>
  <path d="M105,214 C70,219 70,280 105,285" marker-end="url(#unit-arrow-mass)" />
  <path d="M235,285 C270,280 270,219 235,214" marker-end="url(#unit-arrow-mass)" />
  <text class="unit-factor" x="38" y="253">· 1000</text>
  <text class="unit-factor" x="302" y="253">: 1000</text>
  <path d="M105,299 C70,304 70,365 105,370" marker-end="url(#unit-arrow-mass)" />
  <path d="M235,370 C270,365 270,304 235,299" marker-end="url(#unit-arrow-mass)" />
  <text class="unit-factor" x="38" y="338">· 1000</text>
  <text class="unit-factor" x="302" y="338">: 1000</text>
</svg>

<svg class="unit-ladder" viewBox="0 0 340 470" role="img" aria-labelledby="unit-time-title unit-time-desc">
  <title id="unit-time-title">Umrechnungsleiter für Zeiteinheiten</title>
  <desc id="unit-time-desc">Von Jahr bis Sekunde mit den Umrechnungsfaktoren 365,25636, 24, 60 und 60.</desc>
  <defs>
    <marker id="unit-arrow-time" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" />
    </marker>
  </defs>

  <rect x="85" y="10" width="170" height="55" rx="4" />
  <text class="unit-title" x="170" y="46">Zeit</text>
  <rect x="105" y="80" width="130" height="70" />
  <rect x="105" y="150" width="130" height="70" />
  <rect x="105" y="220" width="130" height="70" />
  <rect x="105" y="290" width="130" height="70" />
  <rect x="105" y="360" width="130" height="70" />
  <text class="unit-name" x="170" y="124">a</text>
  <text class="unit-name" x="170" y="194">d</text>
  <text class="unit-name" x="170" y="264">h</text>
  <text class="unit-name" x="170" y="334">min</text>
  <text class="unit-name" x="170" y="404">s</text>
  <path d="M105,122 C70,127 70,173 105,178" marker-end="url(#unit-arrow-time)" />
  <path d="M235,178 C270,173 270,127 235,122" marker-end="url(#unit-arrow-time)" />
  <text class="unit-factor" x="38" y="152" style="font-size: 11px">· 365,25636</text>
  <text class="unit-factor" x="302" y="152" style="font-size: 11px">: 365,25636</text>
  <path d="M105,192 C70,197 70,243 105,248" marker-end="url(#unit-arrow-time)" />
  <path d="M235,248 C270,243 270,197 235,192" marker-end="url(#unit-arrow-time)" />
  <text class="unit-factor" x="42" y="225">· 24</text>
  <text class="unit-factor" x="298" y="225">: 24</text>
  <path d="M105,262 C70,267 70,313 105,318" marker-end="url(#unit-arrow-time)" />
  <path d="M235,318 C270,313 270,267 235,262" marker-end="url(#unit-arrow-time)" />
  <text class="unit-factor" x="42" y="295">· 60</text>
  <text class="unit-factor" x="298" y="295">: 60</text>
  <path d="M105,332 C70,337 70,383 105,388" marker-end="url(#unit-arrow-time)" />
  <path d="M235,388 C270,383 270,337 235,332" marker-end="url(#unit-arrow-time)" />
  <text class="unit-factor" x="42" y="365">· 60</text>
  <text class="unit-factor" x="298" y="365">: 60</text>
</svg>

</div>







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
