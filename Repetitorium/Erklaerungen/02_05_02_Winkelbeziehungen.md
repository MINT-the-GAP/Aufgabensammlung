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













tags: Erklärung, Winkelbeziehungen

comment: In diesem Abschnitt werden Nebenwinkel, Scheitelwinkel, Stufenwinkel und Wechselwinkel sowie ihre Beziehungen an sich schneidenden und parallelen Geraden erklärt.

author: Martin Lommatzsch

-->

# Winkelbeziehungen

{{|>}}
***************************

Wenn sich zwei Geraden schneiden, entstehen an ihrem Schnittpunkt vier Winkel. Diese stehen in festen Beziehungen zueinander. In der folgenden Abbildung sind sie mit $\alpha$, $\beta$, $\gamma$ und $\delta$ bezeichnet.

<center>

@Koordinatensystem(`xmin=-3.2;xmax=3.2;ymin=-2.7;ymax=2.7;width=520;id=WINKELBEZIEHUNGEN01;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`WINKELBEZIEHUNGEN01;[[-3.2;-2.7];[3.2;-2.7];[3.2;2.7];[-3.2;2.7]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`WINKELBEZIEHUNGEN01;[[-2.7;0];[2.7;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`WINKELBEZIEHUNGEN01;[[-2.25;-2.25];[2.25;2.25]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`WINKELBEZIEHUNGEN01;[[-0.45962;-0.45962];[-0.43493;-0.48304];[-0.40906;-0.50514];[-0.38206;-0.52586];[-0.35402;-0.54514];[-0.325;-0.56292];[-0.29509;-0.57915];[-0.26438;-0.5938];[-0.23294;-0.60683];[-0.20086;-0.61819];[-0.16823;-0.62785];[-0.13514;-0.6358];[-0.10168;-0.642];[-0.06794;-0.64644];[-0.03402;-0.64911];[0;-0.65];[0.03402;-0.64911];[0.06794;-0.64644];[0.10168;-0.642];[0.13514;-0.6358];[0.16823;-0.62785];[0.20086;-0.61819];[0.23294;-0.60683];[0.26438;-0.5938];[0.29509;-0.57915];[0.325;-0.56292];[0.35402;-0.54514];[0.38206;-0.52586];[0.40906;-0.50514];[0.43493;-0.48304];[0.45962;-0.45962];[0.48304;-0.43493];[0.50514;-0.40906];[0.52586;-0.38206];[0.54514;-0.35402];[0.56292;-0.325];[0.57915;-0.29509];[0.5938;-0.26438];[0.60683;-0.23294];[0.61819;-0.20086];[0.62785;-0.16823];[0.6358;-0.13514];[0.642;-0.10168];[0.64644;-0.06794];[0.64911;-0.03402];[0.65;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN01;[0.42095;-1.01627];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN01;[[0.85;0];[0.84884;0.04449];[0.84534;0.08885];[0.83954;0.13297];[0.83143;0.17672];[0.82104;0.22];[0.8084;0.26266];[0.79354;0.30461];[0.77651;0.34573];[0.75736;0.38589];[0.73612;0.425];[0.71287;0.46294];[0.68766;0.49962];[0.66057;0.53492];[0.63167;0.56876];[0.60104;0.60104]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN01;[1.20104;0.49749];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN01;[[0.45962;0.45962];[0.43493;0.48304];[0.40906;0.50514];[0.38206;0.52586];[0.35402;0.54514];[0.325;0.56292];[0.29509;0.57915];[0.26438;0.5938];[0.23294;0.60683];[0.20086;0.61819];[0.16823;0.62785];[0.13514;0.6358];[0.10168;0.642];[0.06794;0.64644];[0.03402;0.64911];[0;0.65];[-0.03402;0.64911];[-0.06794;0.64644];[-0.10168;0.642];[-0.13514;0.6358];[-0.16823;0.62785];[-0.20086;0.61819];[-0.23294;0.60683];[-0.26438;0.5938];[-0.29509;0.57915];[-0.325;0.56292];[-0.35402;0.54514];[-0.38206;0.52586];[-0.40906;0.50514];[-0.43493;0.48304];[-0.45962;0.45962];[-0.48304;0.43493];[-0.50514;0.40906];[-0.52586;0.38206];[-0.54514;0.35402];[-0.56292;0.325];[-0.57915;0.29509];[-0.5938;0.26438];[-0.60683;0.23294];[-0.61819;0.20086];[-0.62785;0.16823];[-0.6358;0.13514];[-0.642;0.10168];[-0.64644;0.06794];[-0.64911;0.03402];[-0.65;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN01;[-0.42095;1.01627];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN01;[[-0.85;0];[-0.84884;-0.04449];[-0.84534;-0.08885];[-0.83954;-0.13297];[-0.83143;-0.17672];[-0.82104;-0.22];[-0.8084;-0.26266];[-0.79354;-0.30461];[-0.77651;-0.34573];[-0.75736;-0.38589];[-0.73612;-0.425];[-0.71287;-0.46294];[-0.68766;-0.49962];[-0.66057;-0.53492];[-0.63167;-0.56876];[-0.60104;-0.60104]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN01;[-1.20104;-0.49749];$\Large \delta$;rgb(var(--color-text,51,51,51));1`)

</center>

Die vier Winkel bilden zusammen einen vollen Winkel:

$$
\alpha+\beta+\gamma+\delta=360^\circ.
$$

{{|>}} Zwei benachbarte Winkel an diesem Schnittpunkt haben einen gemeinsamen Schenkel. Ihre beiden anderen Schenkel bilden zusammen eine Gerade. Solche Winkel heißen Nebenwinkel.

Jede der beiden Geraden unterteilt den vollen Winkel in zwei gestreckte Winkel. Deshalb ergänzen sich Nebenwinkel immer zu $180^\circ$. Dies ist der Nebenwinkelsatz. Für die Abbildung gilt

$$
\begin{aligned}
\delta+\alpha&=180^\circ,\\
\beta+\alpha&=180^\circ,\\
\gamma+\beta&=180^\circ,\\
\gamma+\delta&=180^\circ.
\end{aligned}
$$

{{|>}} Ist einer der beiden Nebenwinkel bekannt, kann der andere berechnet werden, indem das bekannte Winkelmaß von $180^\circ$ abgezogen wird. Durch Umstellen ergeben sich die Beziehungen

$$
\begin{aligned}
\delta&=180^\circ-\alpha,
&\qquad \alpha&=180^\circ-\delta,\\
\beta&=180^\circ-\alpha,
&\qquad \alpha&=180^\circ-\beta,\\
\gamma&=180^\circ-\beta,
&\qquad \beta&=180^\circ-\gamma,\\
\gamma&=180^\circ-\delta,
&\qquad \delta&=180^\circ-\gamma.
\end{aligned}
$$

{{|>}} Die sich am Schnittpunkt gegenüberliegenden Winkel heißen Scheitelwinkel. Sie sind jeweils gleich groß. Dies folgt bereits aus dem Nebenwinkelsatz: Sowohl $\beta$ als auch $\delta$ ergänzen $\alpha$ zu $180^\circ$, also gilt $\beta=\delta$. Ebenso ergänzen $\alpha$ und $\gamma$ den Winkel $\beta$ zu $180^\circ$.

Der Scheitelwinkelsatz lautet für die Abbildung daher

$$
\begin{aligned}
\delta&=\beta,\\
\gamma&=\alpha.
\end{aligned}
$$

Nebenwinkel und Scheitelwinkel beziehen sich jeweils auf denselben Schnittpunkt. Ihre Beziehungen gelten für zwei sich schneidende Geraden unabhängig davon, wie groß die einzelnen Winkel sind.

{{|>}} Weitere Beziehungen entstehen, wenn eine dritte Gerade $h$ zwei parallele Geraden $f$ und $g$ schneidet. Es gilt also $f\parallel g$. An jedem der beiden Schnittpunkte entstehen wieder vier Winkel.

<center>

@Koordinatensystem(`xmin=-5.7;xmax=3.9;ymin=-4.2;ymax=2.9;width=760;id=WINKELBEZIEHUNGEN02;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`WINKELBEZIEHUNGEN02;[[-5.7;-4.2];[3.9;-4.2];[3.9;2.9];[-5.7;2.9]];rgb(var(--color-background,255,255,255));1;inhalt=0;umfang=0`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-3;0];[3;0]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-5;-2];[1;-2]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-3.6;-3.6];[2.2;2.2]];rgb(var(--color-text,51,51,51));;-;2.5px`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-0.45962;-0.45962];[-0.43493;-0.48304];[-0.40906;-0.50514];[-0.38206;-0.52586];[-0.35402;-0.54514];[-0.325;-0.56292];[-0.29509;-0.57915];[-0.26438;-0.5938];[-0.23294;-0.60683];[-0.20086;-0.61819];[-0.16823;-0.62785];[-0.13514;-0.6358];[-0.10168;-0.642];[-0.06794;-0.64644];[-0.03402;-0.64911];[0;-0.65];[0.03402;-0.64911];[0.06794;-0.64644];[0.10168;-0.642];[0.13514;-0.6358];[0.16823;-0.62785];[0.20086;-0.61819];[0.23294;-0.60683];[0.26438;-0.5938];[0.29509;-0.57915];[0.325;-0.56292];[0.35402;-0.54514];[0.38206;-0.52586];[0.40906;-0.50514];[0.43493;-0.48304];[0.45962;-0.45962];[0.48304;-0.43493];[0.50514;-0.40906];[0.52586;-0.38206];[0.54514;-0.35402];[0.56292;-0.325];[0.57915;-0.29509];[0.5938;-0.26438];[0.60683;-0.23294];[0.61819;-0.20086];[0.62785;-0.16823];[0.6358;-0.13514];[0.642;-0.10168];[0.64644;-0.06794];[0.64911;-0.03402];[0.65;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[0.42095;-1.01627];$\Large \alpha$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[0.85;0];[0.84884;0.04449];[0.84534;0.08885];[0.83954;0.13297];[0.83143;0.17672];[0.82104;0.22];[0.8084;0.26266];[0.79354;0.30461];[0.77651;0.34573];[0.75736;0.38589];[0.73612;0.425];[0.71287;0.46294];[0.68766;0.49962];[0.66057;0.53492];[0.63167;0.56876];[0.60104;0.60104]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[1.20104;0.49749];$\Large \beta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[0.45962;0.45962];[0.43493;0.48304];[0.40906;0.50514];[0.38206;0.52586];[0.35402;0.54514];[0.325;0.56292];[0.29509;0.57915];[0.26438;0.5938];[0.23294;0.60683];[0.20086;0.61819];[0.16823;0.62785];[0.13514;0.6358];[0.10168;0.642];[0.06794;0.64644];[0.03402;0.64911];[0;0.65];[-0.03402;0.64911];[-0.06794;0.64644];[-0.10168;0.642];[-0.13514;0.6358];[-0.16823;0.62785];[-0.20086;0.61819];[-0.23294;0.60683];[-0.26438;0.5938];[-0.29509;0.57915];[-0.325;0.56292];[-0.35402;0.54514];[-0.38206;0.52586];[-0.40906;0.50514];[-0.43493;0.48304];[-0.45962;0.45962];[-0.48304;0.43493];[-0.50514;0.40906];[-0.52586;0.38206];[-0.54514;0.35402];[-0.56292;0.325];[-0.57915;0.29509];[-0.5938;0.26438];[-0.60683;0.23294];[-0.61819;0.20086];[-0.62785;0.16823];[-0.6358;0.13514];[-0.642;0.10168];[-0.64644;0.06794];[-0.64911;0.03402];[-0.65;0]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-0.42095;1.01627];$\Large \gamma$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-0.85;0];[-0.84884;-0.04449];[-0.84534;-0.08885];[-0.83954;-0.13297];[-0.83143;-0.17672];[-0.82104;-0.22];[-0.8084;-0.26266];[-0.79354;-0.30461];[-0.77651;-0.34573];[-0.75736;-0.38589];[-0.73612;-0.425];[-0.71287;-0.46294];[-0.68766;-0.49962];[-0.66057;-0.53492];[-0.63167;-0.56876];[-0.60104;-0.60104]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-1.20104;-0.49749];$\Large \delta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-2.45962;-2.45962];[-2.43493;-2.48304];[-2.40906;-2.50514];[-2.38206;-2.52586];[-2.35402;-2.54514];[-2.325;-2.56292];[-2.29509;-2.57915];[-2.26438;-2.5938];[-2.23294;-2.60683];[-2.20086;-2.61819];[-2.16823;-2.62785];[-2.13514;-2.6358];[-2.10168;-2.642];[-2.06794;-2.64644];[-2.03402;-2.64911];[-2;-2.65];[-1.96598;-2.64911];[-1.93206;-2.64644];[-1.89832;-2.642];[-1.86486;-2.6358];[-1.83177;-2.62785];[-1.79914;-2.61819];[-1.76706;-2.60683];[-1.73562;-2.5938];[-1.70491;-2.57915];[-1.675;-2.56292];[-1.64598;-2.54514];[-1.61794;-2.52586];[-1.59094;-2.50514];[-1.56507;-2.48304];[-1.54038;-2.45962];[-1.51696;-2.43493];[-1.49486;-2.40906];[-1.47414;-2.38206];[-1.45486;-2.35402];[-1.43708;-2.325];[-1.42085;-2.29509];[-1.4062;-2.26438];[-1.39317;-2.23294];[-1.38181;-2.20086];[-1.37215;-2.16823];[-1.3642;-2.13514];[-1.358;-2.10168];[-1.35356;-2.06794];[-1.35089;-2.03402];[-1.35;-2]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-1.57905;-3.01627];$\Large \eta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-1.15;-2];[-1.15116;-1.95551];[-1.15466;-1.91115];[-1.16046;-1.86703];[-1.16857;-1.82328];[-1.17896;-1.78];[-1.1916;-1.73734];[-1.20646;-1.69539];[-1.22349;-1.65427];[-1.24264;-1.61411];[-1.26388;-1.575];[-1.28713;-1.53706];[-1.31234;-1.50038];[-1.33943;-1.46508];[-1.36833;-1.43124];[-1.39896;-1.39896]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-0.79896;-1.50251];$\Large \epsilon$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-1.54038;-1.54038];[-1.56507;-1.51696];[-1.59094;-1.49486];[-1.61794;-1.47414];[-1.64598;-1.45486];[-1.675;-1.43708];[-1.70491;-1.42085];[-1.73562;-1.4062];[-1.76706;-1.39317];[-1.79914;-1.38181];[-1.83177;-1.37215];[-1.86486;-1.3642];[-1.89832;-1.358];[-1.93206;-1.35356];[-1.96598;-1.35089];[-2;-1.35];[-2.03402;-1.35089];[-2.06794;-1.35356];[-2.10168;-1.358];[-2.13514;-1.3642];[-2.16823;-1.37215];[-2.20086;-1.38181];[-2.23294;-1.39317];[-2.26438;-1.4062];[-2.29509;-1.42085];[-2.325;-1.43708];[-2.35402;-1.45486];[-2.38206;-1.47414];[-2.40906;-1.49486];[-2.43493;-1.51696];[-2.45962;-1.54038];[-2.48304;-1.56507];[-2.50514;-1.59094];[-2.52586;-1.61794];[-2.54514;-1.64598];[-2.56292;-1.675];[-2.57915;-1.70491];[-2.5938;-1.73562];[-2.60683;-1.76706];[-2.61819;-1.79914];[-2.62785;-1.83177];[-2.6358;-1.86486];[-2.642;-1.89832];[-2.64644;-1.93206];[-2.64911;-1.96598];[-2.65;-2]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-2.42095;-0.98373];$\Large \theta$;rgb(var(--color-text,51,51,51));1`)
@Strecke(`WINKELBEZIEHUNGEN02;[[-2.85;-2];[-2.84884;-2.04449];[-2.84534;-2.08885];[-2.83954;-2.13297];[-2.83143;-2.17672];[-2.82104;-2.22];[-2.8084;-2.26266];[-2.79354;-2.30461];[-2.77651;-2.34573];[-2.75736;-2.38589];[-2.73612;-2.425];[-2.71287;-2.46294];[-2.68766;-2.49962];[-2.66057;-2.53492];[-2.63167;-2.56876];[-2.60104;-2.60104]];rgb(var(--color-text,51,51,51));;-;2px`)
@KoordText(`WINKELBEZIEHUNGEN02;[-3.20104;-2.49749];$\Large \mu$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`WINKELBEZIEHUNGEN02;[3.35;0.22];$\Large f$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`WINKELBEZIEHUNGEN02;[1.4;-1.8];$\Large g$;rgb(var(--color-text,51,51,51));1`)
@KoordText(`WINKELBEZIEHUNGEN02;[2.48;2.03];$\Large h$;rgb(var(--color-text,51,51,51));1`)

</center>

Die Winkel am Schnittpunkt von $f$ und $h$ heißen weiterhin $\alpha$, $\beta$, $\gamma$ und $\delta$. Am Schnittpunkt von $g$ und $h$ werden sie mit $\eta$, $\epsilon$, $\theta$ und $\mu$ bezeichnet.

{{|>}} Stufenwinkel liegen an den beiden Schnittpunkten in derselben Lage zu den parallelen Geraden und zur schneidenden Geraden $h$.

Verschiebt man die obere Schnittfigur entlang $h$ zum unteren Schnittpunkt, liegt $f$ auf $g$. Da sich bei der Verschiebung die Richtungen der Geraden nicht ändern, stimmen die entsprechenden Winkel überein. Stufenwinkel an parallelen Geraden sind deshalb gleich groß:

$$
\begin{aligned}
\alpha&=\eta,\\
\beta&=\epsilon,\\
\gamma&=\theta,\\
\delta&=\mu.
\end{aligned}
$$

Beispielsweise liegen $\beta$ und $\epsilon$ jeweils oberhalb der zugehörigen parallelen Geraden und rechts von $h$.

{{|>}} Wechselwinkel liegen an verschiedenen Schnittpunkten auf entgegengesetzten Seiten der schneidenden Geraden $h$. Bei einem Wechselwinkelpaar liegen entweder beide Winkel zwischen den parallelen Geraden oder beide außerhalb.

Auch Wechselwinkel an parallelen Geraden sind gleich groß:

$$
\begin{aligned}
\gamma&=\eta,\\
\delta&=\epsilon,\\
\alpha&=\theta,\\
\beta&=\mu.
\end{aligned}
$$

Die Paare $\delta$ und $\epsilon$ sowie $\alpha$ und $\theta$ sind innere Wechselwinkel. Die Paare $\gamma$ und $\eta$ sowie $\beta$ und $\mu$ sind äußere Wechselwinkel.

Diese Gleichheiten lassen sich aus Stufen- und Scheitelwinkeln herleiten. Beispielsweise gilt $\delta=\mu$ wegen der Stufenwinkelbeziehung und $\mu=\epsilon$ wegen der Scheitelwinkelbeziehung am unteren Schnittpunkt. Damit folgt $\delta=\epsilon$.

{{|>}} Für die Gleichheit der Stufenwinkel und der Wechselwinkel ist die Voraussetzung $f\parallel g$ entscheidend. Sind die beiden von $h$ geschnittenen Geraden nicht parallel, müssen diese Winkelpaare nicht gleich groß sein.

Mit diesen Beziehungen lassen sich unbekannte Winkelmaße aus bekannten bestimmen. Das vereinfacht viele geometrische Probleme, auch in umfangreicheren Figuren.

***************************
