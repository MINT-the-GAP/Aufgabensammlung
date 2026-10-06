<!--
version:  1.0.0
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













tags: Erklärung, Rotationskörper, Bogenlänge

comment: In diesem Abschnitt werden Volumen und Mantelflächen von Rotationskörpern bei Rotation um beide Koordinatenachsen sowie die Bogenlänge eines Funktionsgraphen hergeleitet.

author: Martin Lommatzsch

-->

# Rotationskörper

{{|>}}
***************************

Mit dem [Integral](05_04_01_Integration.md) lassen sich nicht nur Flächeninhalte, sondern auch Volumina und Oberflächeninhalte berechnen. Dreht man eine ebene Fläche vollständig um eine Gerade in ihrer Ebene, entsteht ein Rotationskörper. So können beispielsweise rotationssymmetrische Vasen beschrieben werden. Bei einem hohlen Gefäß müssen Innenraum und Materialkörper getrennt betrachtet werden.

Zunächst rotiert die Fläche zwischen dem Graphen einer stetigen, nichtnegativen Funktion $f$, der Abszissenachse und den Begrenzungen $x=a$ und $x=b$ mit $a<b$ um die Abszissenachse. Der Radius des entstehenden Körpers ist an jeder Stelle $x$ gleich $f(x)$.

Die Skizze zeigt $f(x)=1+\frac12\sin x$ zwischen $a=1$ und $b=5$. Die Kreisränder sind räumlich als Ellipsen dargestellt; die gestrichelte Kurve zeigt das gegenüberliegende Profil.

<center>

@Koordinatensystem(`xmin=-0.6;xmax=6.2;ymin=-2.1;ymax=2.4;width=760;id=ROTATION01;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=ROTATION01;xlabel=$\Large x$;ylabel=$\Large y$`)

<!-- Die Wurzelterme begrenzen den reellen Plot auf [1,5]; innerhalb des Intervalls addieren sie null. -->
@PlotFunktion(`ROTATION01;f=0;1+0.5*sin(x)+0*sqrt((x-1)*(5-x));color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`ROTATION01;profil=0;-1-0.5*sin(x)+0*sqrt((x-1)*(5-x));color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=dashed`)
@Strecke(`ROTATION01;[[1.710368;0];[1.708847;0.092921];[1.70429;0.185443];[1.696718;0.277172];[1.686163;0.367713];[1.672669;0.45668];[1.656294;0.543692];[1.637109;0.628375];[1.615197;0.710368];[1.590649;0.789318];[1.563573;0.864889];[1.534083;0.936756];[1.502306;1.004612];[1.468378;1.068165];[1.432444;1.127145];[1.394659;1.181298];[1.355184;1.230393];[1.314188;1.274219];[1.271846;1.312588];[1.22834;1.345337];[1.183857;1.372325];[1.138586;1.393436];[1.092722;1.408581];[1.04646;1.417694];[1;1.420735];[0.95354;1.417694];[0.907278;1.408581];[0.861414;1.393436];[0.816143;1.372325];[0.77166;1.345337];[0.728154;1.312588];[0.685812;1.274219];[0.644816;1.230393];[0.605341;1.181298];[0.567556;1.127145];[0.531622;1.068165];[0.497694;1.004612];[0.465917;0.936756];[0.436427;0.864889];[0.409351;0.789318];[0.384803;0.710368];[0.362891;0.628375];[0.343706;0.543692];[0.327331;0.45668];[0.313837;0.367713];[0.303282;0.277172];[0.29571;0.185443];[0.291153;0.092921];[0.289632;0];[0.291153;-0.092921];[0.29571;-0.185443];[0.303282;-0.277172];[0.313837;-0.367713];[0.327331;-0.45668];[0.343706;-0.543692];[0.362891;-0.628375];[0.384803;-0.710368];[0.409351;-0.789318];[0.436427;-0.864889];[0.465917;-0.936756];[0.497694;-1.004612];[0.531622;-1.068165];[0.567556;-1.127145];[0.605341;-1.181298];[0.644816;-1.230393];[0.685812;-1.274219];[0.728154;-1.312588];[0.77166;-1.345337];[0.816143;-1.372325];[0.861414;-1.393436];[0.907278;-1.408581];[0.95354;-1.417694];[1;-1.420735];[1.04646;-1.417694];[1.092722;-1.408581];[1.138586;-1.393436];[1.183857;-1.372325];[1.22834;-1.345337];[1.271846;-1.312588];[1.314188;-1.274219];[1.355184;-1.230393];[1.394659;-1.181298];[1.432444;-1.127145];[1.468378;-1.068165];[1.502306;-1.004612];[1.534083;-0.936756];[1.563573;-0.864889];[1.590649;-0.789318];[1.615197;-0.710368];[1.637109;-0.628375];[1.656294;-0.543692];[1.672669;-0.45668];[1.686163;-0.367713];[1.696718;-0.277172];[1.70429;-0.185443];[1.708847;-0.092921];[1.710368;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`ROTATION01;[[5.260269;0];[5.259712;0.034045];[5.258042;0.067944];[5.255268;0.101552];[5.2514;0.134725];[5.246456;0.167321];[5.240457;0.199201];[5.233428;0.230228];[5.2254;0.260269];[5.216406;0.289195];[5.206485;0.316883];[5.195681;0.343214];[5.184038;0.368076];[5.171607;0.391361];[5.158442;0.41297];[5.144598;0.432811];[5.130134;0.450799];[5.115114;0.466856];[5.099601;0.480914];[5.083661;0.492913];[5.067363;0.502801];[5.050776;0.510536];[5.033972;0.516085];[5.017022;0.519423];[5;0.520538];[4.982978;0.519423];[4.966028;0.516085];[4.949224;0.510536];[4.932637;0.502801];[4.916339;0.492913];[4.900399;0.480914];[4.884886;0.466856];[4.869866;0.450799];[4.855402;0.432811];[4.841558;0.41297];[4.828393;0.391361];[4.815962;0.368076];[4.804319;0.343214];[4.793515;0.316883];[4.783594;0.289195];[4.7746;0.260269];[4.766572;0.230228];[4.759543;0.199201];[4.753544;0.167321];[4.7486;0.134725];[4.744732;0.101552];[4.741958;0.067944];[4.740288;0.034045];[4.739731;0];[4.740288;-0.034045];[4.741958;-0.067944];[4.744732;-0.101552];[4.7486;-0.134725];[4.753544;-0.167321];[4.759543;-0.199201];[4.766572;-0.230228];[4.7746;-0.260269];[4.783594;-0.289195];[4.793515;-0.316883];[4.804319;-0.343214];[4.815962;-0.368076];[4.828393;-0.391361];[4.841558;-0.41297];[4.855402;-0.432811];[4.869866;-0.450799];[4.884886;-0.466856];[4.900399;-0.480914];[4.916339;-0.492913];[4.932637;-0.502801];[4.949224;-0.510536];[4.966028;-0.516085];[4.982978;-0.519423];[5;-0.520538];[5.017022;-0.519423];[5.033972;-0.516085];[5.050776;-0.510536];[5.067363;-0.502801];[5.083661;-0.492913];[5.099601;-0.480914];[5.115114;-0.466856];[5.130134;-0.450799];[5.144598;-0.432811];[5.158442;-0.41297];[5.171607;-0.391361];[5.184038;-0.368076];[5.195681;-0.343214];[5.206485;-0.316883];[5.216406;-0.289195];[5.2254;-0.260269];[5.233428;-0.230228];[5.240457;-0.199201];[5.246456;-0.167321];[5.2514;-0.134725];[5.255268;-0.101552];[5.258042;-0.067944];[5.259712;-0.034045];[5.260269;0]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`ROTATION01;[[1;0];[1;1.4207354924]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ROTATION01;[[5;0];[5;0.5205378627]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`ROTATION01;[2.5;1.85];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)
@KoordText(`ROTATION01;[1.28;0.7];$\Large f(a)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION01;[5.55;0.65];$\Large f(b)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION01;[1.18;-0.42];$\Large a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION01;[5.55;-0.45];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)

</center>

{{|>}} Ausgangspunkt ist das Volumen eines [Zylinders](02_10_04_Zylinder.md) mit Radius $r$ und Höhe $h$:

$$
V_Z=\pi r^2h.
$$

Der Rotationskörper wird näherungsweise in dünne Zylinderscheiben zerlegt. Eine Scheibe der Dicke $\Delta x$ besitzt ungefähr das Volumen $\pi[f(x)]^2\Delta x$. Werden die Scheiben immer dünner, geht die Summe ihrer Volumina in ein Integral über. In Differentialschreibweise gilt:

$$
\begin{aligned}
dV&=\pi[f(x)]^2\,dx,\\
V_x&=\pi\int_a^b[f(x)]^2\,dx.
\end{aligned}
$$

Der Index $x$ kennzeichnet die Rotation um die Abszissenachse. Auch für negative Funktionswerte bleibt der Radius ein Abstand, also $|f(x)|$; im Volumenintegral ergibt das Quadrieren denselben Integranden.

{{|>}} Bei einer Rotation um die Ordinatenachse werden die Kreisscheiben nach ihrer Ordinate $y$ aufgeschichtet. Dazu betrachten wir nun die Fläche zwischen der Ordinatenachse und dem Graphen $x=g(y)$, begrenzt durch zwei feste Ordinaten. Das ist im Allgemeinen eine andere Fläche als die zuvor zwischen Graph und Abszissenachse betrachtete Fläche.

Sei $f$ auf $[a,b]$ stetig und streng monoton, mit $0\le a<b$. Dann existiert die [Umkehrfunktion](04_05_08_Umkehrfunktion.md) $g=f^{-1}$. Die untere und obere Integrationsgrenze sind

$$
y_-=\min\{f(a),f(b)\},\qquad
y_+=\max\{f(a),f(b)\}.
$$

Die folgende Skizze zeigt $f(x)=\frac12x^2+\frac12$ auf $[1,3]$. Hier ist $g(y)=\sqrt{2y-1}$ der Radius, und die Grenzen sind $y_-=1$ und $y_+=5$. Die linke gestrichelte Kurve ist das gegenüberliegende Profil des Rotationskörpers, nicht ein zusätzlicher Ast der hier betrachteten Funktion $f$.

<center>

@Koordinatensystem(`xmin=-4.1;xmax=4.1;ymin=-0.6;ymax=6.5;width=700;id=ROTATION02;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=ROTATION02;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`ROTATION02;f=0;0.5*x^2+0.5+0*sqrt((x-1)*(3-x));color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@PlotFunktion(`ROTATION02;profil=0;0.5*x^2+0.5+0*sqrt((x+3)*(-1-x));color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=dashed`)
@Strecke(`ROTATION02;[[1;1];[0.997859;1.021801];[0.991445;1.043509];[0.980785;1.06503];[0.965926;1.086273];[0.94693;1.107146];[0.92388;1.127561];[0.896873;1.14743];[0.866025;1.166667];[0.83147;1.18519];[0.793353;1.20292];[0.75184;1.219782];[0.707107;1.235702];[0.659346;1.250613];[0.608761;1.264451];[0.55557;1.277157];[0.5;1.288675];[0.442289;1.298958];[0.382683;1.30796];[0.321439;1.315643];[0.258819;1.321975];[0.19509;1.326928];[0.130526;1.330482];[0.065403;1.33262];[0;1.333333];[-0.065403;1.33262];[-0.130526;1.330482];[-0.19509;1.326928];[-0.258819;1.321975];[-0.321439;1.315643];[-0.382683;1.30796];[-0.442289;1.298958];[-0.5;1.288675];[-0.55557;1.277157];[-0.608761;1.264451];[-0.659346;1.250613];[-0.707107;1.235702];[-0.75184;1.219782];[-0.793353;1.20292];[-0.83147;1.18519];[-0.866025;1.166667];[-0.896873;1.14743];[-0.92388;1.127561];[-0.94693;1.107146];[-0.965926;1.086273];[-0.980785;1.06503];[-0.991445;1.043509];[-0.997859;1.021801];[-1;1];[-0.997859;0.978199];[-0.991445;0.956491];[-0.980785;0.93497];[-0.965926;0.913727];[-0.94693;0.892854];[-0.92388;0.872439];[-0.896873;0.85257];[-0.866025;0.833333];[-0.83147;0.81481];[-0.793353;0.79708];[-0.75184;0.780218];[-0.707107;0.764298];[-0.659346;0.749387];[-0.608761;0.735549];[-0.55557;0.722843];[-0.5;0.711325];[-0.442289;0.701042];[-0.382683;0.69204];[-0.321439;0.684357];[-0.258819;0.678025];[-0.19509;0.673072];[-0.130526;0.669518];[-0.065403;0.66738];[0;0.666667];[0.065403;0.66738];[0.130526;0.669518];[0.19509;0.673072];[0.258819;0.678025];[0.321439;0.684357];[0.382683;0.69204];[0.442289;0.701042];[0.5;0.711325];[0.55557;0.722843];[0.608761;0.735549];[0.659346;0.749387];[0.707107;0.764298];[0.75184;0.780218];[0.793353;0.79708];[0.83147;0.81481];[0.866025;0.833333];[0.896873;0.85257];[0.92388;0.872439];[0.94693;0.892854];[0.965926;0.913727];[0.980785;0.93497];[0.991445;0.956491];[0.997859;0.978199];[1;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`ROTATION02;[[3;5];[2.993577;5.065403];[2.974335;5.130526];[2.942356;5.19509];[2.897777;5.258819];[2.84079;5.321439];[2.771639;5.382683];[2.690618;5.442289];[2.598076;5.5];[2.494409;5.55557];[2.38006;5.608761];[2.255519;5.659346];[2.12132;5.707107];[1.978037;5.75184];[1.826284;5.793353];[1.666711;5.83147];[1.5;5.866025];[1.326866;5.896873];[1.14805;5.92388];[0.964318;5.94693];[0.776457;5.965926];[0.585271;5.980785];[0.391579;5.991445];[0.196209;5.997859];[0;6];[-0.196209;5.997859];[-0.391579;5.991445];[-0.585271;5.980785];[-0.776457;5.965926];[-0.964318;5.94693];[-1.14805;5.92388];[-1.326866;5.896873];[-1.5;5.866025];[-1.666711;5.83147];[-1.826284;5.793353];[-1.978037;5.75184];[-2.12132;5.707107];[-2.255519;5.659346];[-2.38006;5.608761];[-2.494409;5.55557];[-2.598076;5.5];[-2.690618;5.442289];[-2.771639;5.382683];[-2.84079;5.321439];[-2.897777;5.258819];[-2.942356;5.19509];[-2.974335;5.130526];[-2.993577;5.065403];[-3;5];[-2.993577;4.934597];[-2.974335;4.869474];[-2.942356;4.80491];[-2.897777;4.741181];[-2.84079;4.678561];[-2.771639;4.617317];[-2.690618;4.557711];[-2.598076;4.5];[-2.494409;4.44443];[-2.38006;4.391239];[-2.255519;4.340654];[-2.12132;4.292893];[-1.978037;4.24816];[-1.826284;4.206647];[-1.666711;4.16853];[-1.5;4.133975];[-1.326866;4.103127];[-1.14805;4.07612];[-0.964318;4.05307];[-0.776457;4.034074];[-0.585271;4.019215];[-0.391579;4.008555];[-0.196209;4.002141];[0;4];[0.196209;4.002141];[0.391579;4.008555];[0.585271;4.019215];[0.776457;4.034074];[0.964318;4.05307];[1.14805;4.07612];[1.326866;4.103127];[1.5;4.133975];[1.666711;4.16853];[1.826284;4.206647];[1.978037;4.24816];[2.12132;4.292893];[2.255519;4.340654];[2.38006;4.391239];[2.494409;4.44443];[2.598076;4.5];[2.690618;4.557711];[2.771639;4.617317];[2.84079;4.678561];[2.897777;4.741181];[2.942356;4.80491];[2.974335;4.869474];[2.993577;4.934597];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Strecke(`ROTATION02;[[0;1];[1;1]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ROTATION02;[[0;5];[3;5]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@KoordText(`ROTATION02;[-0.65;0.45];$\Large y_-$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION02;[-0.6;4.65];$\Large y_+$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION02;[0.6;1.35];$\Large a$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION02;[1.7;5.35];$\Large b$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION02;[2.8;3.5];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Der Radius einer Kreisscheibe ist nun $g(y)=f^{-1}(y)$, ihre Dicke wird durch $dy$ beschrieben. Somit lautet das Volumen:

$$
\begin{aligned}
V_y
&=\pi\int_{y_-}^{y_+}[g(y)]^2\,dy\\
&=\pi\int_{\min\{f(a),f(b)\}}^{\max\{f(a),f(b)\}}
[f^{-1}(y)]^2\,dy.
\end{aligned}
$$

{{|>}} Ist $f$ außerdem stetig differenzierbar, kann durch [Substitution](05_04_02_Integrationsregeln.md) wieder nach $x$ integriert werden:

$$
y=f(x),\qquad
g(y)=x,\qquad
dy=f'(x)\,dx.
$$

Für eine wachsende Funktion entsprechen die Grenzen $y_-$ und $y_+$ den Stellen $a$ und $b$. Bei einer fallenden Funktion ist diese Zuordnung umgekehrt. Deshalb ergibt sich

$$
V_y=
\begin{cases}
\displaystyle\pi\int_a^b x^2f'(x)\,dx,
& f\text{ streng monoton steigend},\\[6pt]
\displaystyle\pi\int_b^a x^2f'(x)\,dx,
& f\text{ streng monoton fallend}.
\end{cases}
$$

Beide Fälle lassen sich zusammenfassen:

$$
V_y=\pi\int_a^b x^2|f'(x)|\,dx.
$$

Der Betrag entsteht durch die Berücksichtigung der Integrationsrichtung; die Differentialbeziehung bleibt $dy=f'(x)\,dx$. Ist $f$ nicht streng monoton, muss zunächst geprüft werden, welche Umkehrzweige die betrachtete Fläche begrenzen. Sich überlappende Teilkörper dürfen nicht mehrfach gezählt werden.

{{|>}} Zur Bestimmung der Oberfläche wird zunächst die Mantelfläche betrachtet. Beim Zylinder ist der Umfang $U=2\pi r$ konstant, sodass $M=U\cdot h$ gilt. Bei einem allgemeinen Rotationskörper ändert sich jedoch der Radius entlang des Profils. Daher wird der jeweilige Kreisumfang mit einem kleinen Stück der Profilbogenlänge verknüpft:

$$
dM=2\pi r\,ds.
$$

Dazu benötigen wir die Bogenlänge $l$ des Funktionsgraphen. Grund- und Deckflächen gehören nicht zum Mantel und werden später gesondert berücksichtigt.

{{|>}} Zwei benachbarte Punkte des Graphen werden zunächst durch eine gerade Strecke verbunden:

$$
A\bigl(x_k\mid f(x_k)\bigr),\qquad
B\bigl(x_{k+1}\mid f(x_{k+1})\bigr).
$$

Diese Strecke heißt Sehne. Ihre Länge $l_{AB}$ nähert die Bogenlänge zwischen $A$ und $B$ an; bei einem gekrümmten Graphen sind beide Längen im Allgemeinen nicht gleich.

Die Abbildung zeigt wie im Ausgangsbeispiel $f(x)=2\sqrt{x}$ mit $x_k=2$ und $x_{k+1}=5$. Die rote Sehne bildet mit den Koordinatendifferenzen ein rechtwinkliges Dreieck.

<center>

@Koordinatensystem(`xmin=-0.8;xmax=6.6;ymin=-0.7;ymax=5.9;width=760;id=ROTATION03;achsen=1;grid=1;border=0;static=1`)
@AchsenBeschriftung(`id=ROTATION03;xlabel=$\Large x$;ylabel=$\Large y$`)

@PlotFunktion(`ROTATION03;f=0;2*sqrt(x);color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);linestyle=solid`)
@Strecke(`ROTATION03;[[2;0];[2;2.8284271247]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`ROTATION03;[[5;0];[5;2.8284271247]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px;linestyle=dashed`)
@Strecke(`ROTATION03;[[2;2.8284271247];[5;2.8284271247];[5;4.472135955];[2;2.8284271247]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);;-;2px`)
@Strecke(`ROTATION03;[[4.8;2.8284271247];[4.8;3.0284271247];[5;3.0284271247]];color-mix(in srgb, rgb(var(--color-text,51,51,51)) 75%, rgb(var(--color-background,255,255,255)));;-;2px`)
@Punkt(`ROTATION03;A=0;2;2.8284271247;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@Punkt(`ROTATION03;B=0;5;4.472135955;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1;fix`)
@KoordText(`ROTATION03;[1.65;3.15];$\Large A$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION03;[5.2;4.75];$\Large B$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION03;[3.3;3.2];$\Large l_{AB}$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION03;[3.5;2.55];$\Large \Delta x$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION03;[5.5;3.5];$\Large \Delta f$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #ff2020);1`)
@KoordText(`ROTATION03;[2.2;-0.45];$\Large x_k$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ROTATION03;[5.25;-0.45];$\Large x_{k+1}$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`ROTATION03;[3.2;4.25];$\Large f(x)$;color-mix(in srgb, rgb(var(--color-text,51,51,51)) 55%, #167aff);1`)

</center>

{{|>}} Mit $\Delta x=x_{k+1}-x_k>0$ und $\Delta f=f(x_{k+1})-f(x_k)$ liefert der Satz des Pythagoras:

$$
\begin{aligned}
l_{AB}
&=\sqrt{(x_{k+1}-x_k)^2+
\bigl(f(x_{k+1})-f(x_k)\bigr)^2}\\
&=\sqrt{(\Delta x)^2+(\Delta f)^2}\\
&=\Delta x\sqrt{1+\left(\frac{\Delta f}{\Delta x}\right)^2}.
\end{aligned}
$$

Die Ordinate darf dabei zu- oder abnehmen; durch das Quadrieren ist das Vorzeichen von $\Delta f$ für die Sehnenlänge unerheblich.

{{|>}} Nun wird das gesamte Intervall $[a,b]$ in $n$ gleich breite Teilintervalle zerlegt:

$$
\Delta x=\frac{b-a}{n},\qquad
x_k=a+k\Delta x,\qquad k=0,\ldots,n.
$$

Mit $\Delta f_k=f(x_{k+1})-f(x_k)$ ergibt sich die Länge des Polygonzugs aus der Summe aller Sehnenlängen:

$$
l_n=\sum_{k=0}^{n-1}
\Delta x\sqrt{1+\left(\frac{\Delta f_k}{\Delta x}\right)^2}.
$$

{{|>}} Ist $f$ auf $[a,b]$ stetig differenzierbar, konvergieren diese Polygonzuglängen für $n\to\infty$ gegen die Bogenlänge. Die Differenzenquotienten gehen dabei in den Differentialquotienten über. So entsteht

$$
\begin{aligned}
l
&=\lim_{n\to\infty}l_n\\
&=\int_a^b\sqrt{1+\left(\frac{df}{dx}\right)^2}\,dx\\
&=\int_a^b\sqrt{1+[f'(x)]^2}\,dx.
\end{aligned}
$$

In Differentialschreibweise wird das Bogenelement bei zunehmendem $x$ durch

$$
\begin{aligned}
ds&=\sqrt{(dx)^2+(df)^2}\\
&=\sqrt{1+\left(\frac{df}{dx}\right)^2}\,dx\\
&=\sqrt{1+[f'(x)]^2}\,dx
\end{aligned}
$$

beschrieben. Das Differential $dx$ steht hier für das Integrationselement; es ist nicht der Zahlenwert des Grenzwerts $\lim_{n\to\infty}\Delta x=0$.

{{|>}} Für die Rotation um die Abszissenachse wird der Radius $r=f(x)\ge0$ mit dem Bogenelement kombiniert. Aus $dM=2\pi r\,ds$ folgt für eine stetig differenzierbare Funktion:

$$
\begin{aligned}
M_x&=\int_a^b 2\pi f(x)\sqrt{1+[f'(x)]^2}\,dx\\
&=2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx.
\end{aligned}
$$

Bei negativen Funktionswerten wird für den Radius $|f(x)|$ eingesetzt. Soll der gesamte Oberflächeninhalt des durch zwei Kreisscheiben abgeschlossenen Körpers bestimmt werden, kommen die Endflächen hinzu:

$$
O_x=M_x+\pi[f(a)]^2+\pi[f(b)]^2.
$$

{{|>}} Bei der Rotation um die Ordinatenachse betrachten wir wieder den oben beschriebenen Körper mit $g=f^{-1}$ und $0\le a<b$. Ist auch $g$ auf $[y_-,y_+]$ stetig differenzierbar, lautet der Mantelflächeninhalt:

$$
\begin{aligned}
M_y
&=2\pi\int_{y_-}^{y_+}
g(y)\sqrt{1+[g'(y)]^2}\,dy\\
&=2\pi\int_{\min\{f(a),f(b)\}}^{\max\{f(a),f(b)\}}
f^{-1}(y)\sqrt{1+\left[\frac{d}{dy}f^{-1}(y)\right]^2}\,dy.
\end{aligned}
$$

Dabei wird die Umkehrfunktion nach $y$ abgeleitet; dies ist nicht die Umkehrfunktion von $f'$.

Alternativ lässt sich der Mantel direkt mit dem ursprünglichen Graphen $y=f(x)$ beschreiben. Der Radius ist dann $x$, das Bogenelement weiterhin $\sqrt{1+[f'(x)]^2}\,dx$. Für das stetig differenzierbare, streng monotone $f$ folgt daher auch ohne Ableitung der Umkehrfunktion:

$$
M_y=2\pi\int_a^b x\sqrt{1+[f'(x)]^2}\,dx.
$$

Bei einem durch Kreisscheiben abgeschlossenen Körper besitzen die Endflächen die Radien $a$ und $b$. Somit gilt

$$
O_y=M_y+\pi a^2+\pi b^2.
$$

Bei offenen oder hohlen Körpern werden nur die tatsächlich vorhandenen Flächen berücksichtigt; gegebenenfalls kommen innere Mantelflächen und ringförmige Randflächen hinzu. Werden alle Längen in Metern gemessen, erhält man $l$ in Metern, $M$ und $O$ in Quadratmetern sowie $V$ in Kubikmetern.

***************************
