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

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

@onload
(function () {
	const stateKey = "__BR0088_THIN_SECTORS__";
	const previous = window[stateKey];
	if (previous && previous.observer) previous.observer.disconnect();
	if (previous && previous.frame) clearTimeout(previous.frame);

	const state = { frame: 0, attempts: 0, observer: null };
	window[stateKey] = state;

	function applyThinSectorLines() {
		state.frame = 0;
		let sectorCount = 0;
		let circleCount = 0;
		const boards = new Set();

		Object.values(window.__sectorEntries || {}).forEach(function (entry) {
			if (!entry || !/^BR0088[a-d]$/.test(entry.boardId) || !entry.sector) return;
			entry.sector.setAttribute({ strokeWidth: 1, highlightStrokeWidth: 1 });
			sectorCount++;
			if (entry.board) boards.add(entry.board);
		});
		Object.values(window.__circleEntries || {}).forEach(function (entry) {
			if (!entry || !/^BR0088[a-d]$/.test(entry.boardId) || !entry.circle) return;
			entry.circle.setAttribute({ strokeWidth: 1, highlightStrokeWidth: 1 });
			circleCount++;
			if (entry.board) boards.add(entry.board);
		});

		boards.forEach(function (board) { board.update(); });
		state.attempts++;
		if ((sectorCount < 10 || circleCount < 4) && state.attempts < 240) {
			state.frame = setTimeout(applyThinSectorLines, 16);
		}
	}

	function queueThinSectorLines() {
		state.attempts = 0;
		if (!state.frame) state.frame = setTimeout(applyThinSectorLines, 0);
	}

	state.observer = new MutationObserver(queueThinSectorLines);
	state.observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["data-spec"]
	});
	queueThinSectorLines();
})();
@end

@UhrMinuten
@Strecke(`@0;[[0.8583;0.0902];[0.9488;0.0997]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.8441;0.1794];[0.9332;0.1983]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.8208;0.2667];[0.9073;0.2948]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.7884;0.351];[0.8715;0.388]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.6982;0.5073];[0.7718;0.5607]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.6413;0.5775];[0.709;0.6384]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.5775;0.6413];[0.6384;0.709]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.5073;0.6982];[0.5607;0.7718]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.351;0.7884];[0.388;0.8715]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.2667;0.8208];[0.2948;0.9073]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.1794;0.8441];[0.1983;0.9332]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.0902;0.8583];[0.0997;0.9488]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.0902;0.8583];[-0.0997;0.9488]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.1794;0.8441];[-0.1983;0.9332]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.2667;0.8208];[-0.2948;0.9073]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.351;0.7884];[-0.388;0.8715]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.5073;0.6982];[-0.5607;0.7718]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.5775;0.6413];[-0.6384;0.709]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.6413;0.5775];[-0.709;0.6384]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.6982;0.5073];[-0.7718;0.5607]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.7884;0.351];[-0.8715;0.388]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8208;0.2667];[-0.9073;0.2948]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8441;0.1794];[-0.9332;0.1983]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8583;0.0902];[-0.9488;0.0997]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8583;-0.0902];[-0.9488;-0.0997]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8441;-0.1794];[-0.9332;-0.1983]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.8208;-0.2667];[-0.9073;-0.2948]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.7884;-0.351];[-0.8715;-0.388]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.6982;-0.5073];[-0.7718;-0.5607]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.6413;-0.5775];[-0.709;-0.6384]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.5775;-0.6413];[-0.6384;-0.709]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.5073;-0.6982];[-0.5607;-0.7718]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.351;-0.7884];[-0.388;-0.8715]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.2667;-0.8208];[-0.2948;-0.9073]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.1794;-0.8441];[-0.1983;-0.9332]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[-0.0902;-0.8583];[-0.0997;-0.9488]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.0902;-0.8583];[0.0997;-0.9488]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.1794;-0.8441];[0.1983;-0.9332]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.2667;-0.8208];[0.2948;-0.9073]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.351;-0.7884];[0.388;-0.8715]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.5073;-0.6982];[0.5607;-0.7718]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.5775;-0.6413];[0.6384;-0.709]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.6413;-0.5775];[0.709;-0.6384]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.6982;-0.5073];[0.7718;-0.5607]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.7884;-0.351];[0.8715;-0.388]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.8208;-0.2667];[0.9073;-0.2948]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.8441;-0.1794];[0.9332;-0.1983]];#000000;\,=0;design=-;1.5px`)
@Strecke(`@0;[[0.8583;-0.0902];[0.9488;-0.0997]];#000000;\,=0;design=-;1.5px`)
@end


















tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Welcher Bruch ist dargestellt?

author: Martin Lommatzsch

-->




# Brüche erkennen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

<center>

@Koordinatensystem(`xmin=-1.08;xmax=1.08;ymin=-1.08;ymax=1.08;width=160;id=BR0088a;achsen=0;grid=0;border=0;static=1`)

@Punkt(`BR0088a;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0088a;P30=0;0.866;0.5;#000000;0;fix`)
@Punkt(`BR0088a;P60=0;0.5;0.866;#000000;0;fix`)
@Punkt(`BR0088a;P210=0;-0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0088a;P240=0;-0.5;-0.866;#000000;0;fix`)
@Kreissektor(`BR0088a;[M;P30;P60];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088a;[M;P210;P240];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)

@UhrMinuten(BR0088a)

@Strecke(`BR0088a;[[0.77;0];[0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0.6668;0.385];[0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0.385;0.6668];[0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0;0.77];[0;0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[-0.385;0.6668];[-0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[-0.6668;0.385];[-0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[-0.77;0];[-0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[-0.6668;-0.385];[-0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[-0.385;-0.6668];[-0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0;-0.77];[0;-0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0.385;-0.6668];[0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088a;[[0.6668;-0.385];[0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Kreis(`BR0088a;k=0;M;#000000;0;radius=1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  1/6  ]] @canvas
@Algebrite.check(1/6)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

@Koordinatensystem(`xmin=-1.08;xmax=1.08;ymin=-1.08;ymax=1.08;width=160;id=BR0088b;achsen=0;grid=0;border=0;static=1`)

@Punkt(`BR0088b;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0088b;P150=0;-0.866;0.5;#000000;0;fix`)
@Punkt(`BR0088b;P300=0;0.5;-0.866;#000000;0;fix`)
@Kreissektor(`BR0088b;[M;P150;P300];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)

@UhrMinuten(BR0088b)

@Strecke(`BR0088b;[[0.77;0];[0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0.6668;0.385];[0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0.385;0.6668];[0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0;0.77];[0;0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[-0.385;0.6668];[-0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[-0.6668;0.385];[-0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[-0.77;0];[-0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[-0.6668;-0.385];[-0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[-0.385;-0.6668];[-0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0;-0.77];[0;-0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0.385;-0.6668];[0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088b;[[0.6668;-0.385];[0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Kreis(`BR0088b;k=0;M;#000000;0;radius=1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  5/12  ]] @canvas
@Algebrite.check(5/12)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

@Koordinatensystem(`xmin=-1.08;xmax=1.08;ymin=-1.08;ymax=1.08;width=160;id=BR0088c;achsen=0;grid=0;border=0;static=1`)

@Punkt(`BR0088c;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0088c;P12=0;0.9781;0.2079;#000000;0;fix`)
@Punkt(`BR0088c;P60=0;0.5;0.866;#000000;0;fix`)
@Punkt(`BR0088c;P138=0;-0.7431;0.6691;#000000;0;fix`)
@Punkt(`BR0088c;P186=0;-0.9945;-0.1045;#000000;0;fix`)
@Punkt(`BR0088c;P282=0;0.2079;-0.9781;#000000;0;fix`)
@Punkt(`BR0088c;P288=0;0.309;-0.9511;#000000;0;fix`)
@Kreissektor(`BR0088c;[M;P12;P60];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088c;[M;P138;P186];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088c;[M;P282;P288];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)

@UhrMinuten(BR0088c)

@Strecke(`BR0088c;[[0.77;0];[0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0.6668;0.385];[0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0.385;0.6668];[0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0;0.77];[0;0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[-0.385;0.6668];[-0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[-0.6668;0.385];[-0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[-0.77;0];[-0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[-0.6668;-0.385];[-0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[-0.385;-0.6668];[-0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0;-0.77];[0;-0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0.385;-0.6668];[0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088c;[[0.6668;-0.385];[0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Kreis(`BR0088c;k=0;M;#000000;0;radius=1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  17/60  ]] @canvas
@Algebrite.check(17/60)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

@Koordinatensystem(`xmin=-1.08;xmax=1.08;ymin=-1.08;ymax=1.08;width=160;id=BR0088d;achsen=0;grid=0;border=0;static=1`)

@Punkt(`BR0088d;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0088d;P348=0;0.9781;-0.2079;#000000;0;fix`)
@Punkt(`BR0088d;P36=0;0.809;0.5878;#000000;0;fix`)
@Punkt(`BR0088d;P42=0;0.7431;0.6691;#000000;0;fix`)
@Punkt(`BR0088d;P126=0;-0.5878;0.809;#000000;0;fix`)
@Punkt(`BR0088d;P138=0;-0.7431;0.6691;#000000;0;fix`)
@Punkt(`BR0088d;P246=0;-0.4067;-0.9135;#000000;0;fix`)
@Punkt(`BR0088d;P252=0;-0.309;-0.9511;#000000;0;fix`)
@Punkt(`BR0088d;P276=0;0.1045;-0.9945;#000000;0;fix`)
@Kreissektor(`BR0088d;[M;P348;P36];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088d;[M;P42;P126];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088d;[M;P138;P246];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0088d;[M;P252;P276];#c3c3c3;1;\,=0;inhalt=0;umfang=0`)

@UhrMinuten(BR0088d)

@Strecke(`BR0088d;[[0.77;0];[0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0.6668;0.385];[0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0.385;0.6668];[0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0;0.77];[0;0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[-0.385;0.6668];[-0.477;0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[-0.6668;0.385];[-0.8262;0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[-0.77;0];[-0.954;0]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[-0.6668;-0.385];[-0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[-0.385;-0.6668];[-0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0;-0.77];[0;-0.954]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0.385;-0.6668];[0.477;-0.8262]];#000000;\,=0;design=-;3.5px`)
@Strecke(`BR0088d;[[0.6668;-0.385];[0.8262;-0.477]];#000000;\,=0;design=-;3.5px`)
@Kreis(`BR0088d;k=0;M;#000000;0;radius=1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  11/15  ]] @canvas
@Algebrite.check(11/15)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>


