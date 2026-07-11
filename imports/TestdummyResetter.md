<!--
version:  0.0.1
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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md
author: Martin Lommatzsch
comment: Resetter v0.0.1




import: 


import: TimerREADME.md
import: MarkerREADME.md
import: MatheREADME.md
import: DeutschREADME.md
import: KoordREADME.md
import: FlexChildREADME.md
import: AnnotationREADME.md



@onload
(function () {
	if (!document.getElementById("lia-reset-icon-css")) {
		const s = document.createElement("style");
		s.id = "lia-reset-icon-css";
		s.textContent = [
			".lia-quiz .lia-quiz__answers { position: relative; }",
			".lia-resetall-sep { border: 0 !important; border-top: 1px solid var(--lia-reset-accent, #0b5fff) !important; opacity: 0.55; }",
			"body.lia-reset-rehydrate-mask .lia-slide.active, body.lia-reset-rehydrate-mask .lia-slide.current, body.lia-reset-rehydrate-mask .lia-slide[aria-hidden='false'] { visibility: hidden !important; }",
			".lia-quiz.lia-reset-icons-hidden .lia-quiz__answers i.icon, .lia-quiz.lia-reset-icon-success .lia-quiz__answers i.icon, .lia-quiz.lia-reset-icon-error .lia-quiz__answers i.icon, .lia-quiz.lia-reset-icon-resolve .lia-quiz__answers i.icon { display:none !important; }",
			".lia-quiz.lia-reset-icon-success .lia-quiz__answers::after { content: '\\2713'; position: absolute; top: 1rem; right: 1rem; color: #198754; font-weight: 700; line-height: 1; }",
				".lia-quiz.lia-reset-icon-error .lia-quiz__answers::after { content: '\\2715'; position: absolute; top: 1rem; right: 1rem; color: #dc3545; font-weight: 700; line-height: 1; }",
			".lia-quiz.lia-reset-icon-success .lia-quiz__answers input, .lia-quiz.lia-reset-icon-success .lia-quiz__answers textarea, .lia-quiz.lia-reset-icon-success .lia-quiz__answers [role='textbox'] { border-color: var(--lia-success, #198754) !important; }",
			".lia-quiz.lia-reset-icon-error .lia-quiz__answers input, .lia-quiz.lia-reset-icon-error .lia-quiz__answers textarea, .lia-quiz.lia-reset-icon-error .lia-quiz__answers [role='textbox'] { border-color: var(--lia-error, #dc3545) !important; }",
			".lia-quiz.lia-reset-icon-resolve .lia-quiz__answers input, .lia-quiz.lia-reset-icon-resolve .lia-quiz__answers textarea, .lia-quiz.lia-reset-icon-resolve .lia-quiz__answers [role='textbox'] { border-color: var(--lia-text-disabled, #6c757d) !important; }",
		].join("\n");
		(document.head || document.body).appendChild(s);
	}

	function pickAccentFrom(doc) {
		try {
			const win = doc.defaultView || window;
			const cs = win.getComputedStyle(doc.documentElement);
			const vars = ["--lia-accent", "--lia-primary", "--lia-color-primary", "--primary", "--color-primary", "--accent-color"];
			for (let i = 0; i < vars.length; i++) {
				const val = String(cs.getPropertyValue(vars[i]) || "").trim();
				if (val) return val;
			}
			const a = doc.querySelector("a");
			if (a) {
				const c = win.getComputedStyle(a).color;
				if (c && c !== "rgba(0, 0, 0, 0)") return c;
			}
			const b = doc.querySelector(".lia-btn");
			if (b) {
				const bg = win.getComputedStyle(b).backgroundColor;
				if (bg && bg !== "rgba(0, 0, 0, 0)") return bg;
			}
		} catch (e) {}
		return "";
	}

	function ensureRoundedTileStyles() {
		return;
	}

	ensureRoundedTileStyles();

	let lastAccent = "";
	function updateResetAccent(force) {
		const acc = pickAccentFrom(document) || "#0b5fff";
		if (force || acc !== lastAccent) {
			lastAccent = acc;
			try { document.documentElement.style.setProperty("--lia-reset-accent", acc); } catch (e) {}
		}
	}

	updateResetAccent(true);
	setTimeout(function () { updateResetAccent(false); }, 120);
	setTimeout(function () { updateResetAccent(false); }, 420);
	window.addEventListener("hashchange", function () {
		setTimeout(function () { updateResetAccent(false); }, 80);
		setTimeout(function () { updateResetAccent(false); }, 320);
	});
})();

// =========================
// Timer-Reset-Funktionen (fr Problem 1, 2, 3)
// =========================
window.__liaResetCleanupTimerUI = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let removed = 0;
	// Entferne Timer-Badges und Start-Buttons (data-sol-timer-ui="1")
	try {
		const timerUIs = Array.from(host.querySelectorAll("[data-sol-timer-ui='1']"));
		timerUIs.forEach(function (el) {
			try { el.remove(); removed += 1; } catch (e) {}
		});
	} catch (e) {}
	// Zeige versteckte Prfen-Buttons wieder
	try {
		const hiddenChecks = Array.from(host.querySelectorAll("[data-__solTimerChkHidden='1']"));
		hiddenChecks.forEach(function (el) {
			if (!el || !el.style) return;
			el.style.display = el.dataset.__solTimerPrevDisplayChk || "";
			el.removeAttribute("hidden");
			el.removeAttribute("aria-hidden");
			delete el.dataset.__solTimerChkHidden;
			delete el.dataset.__solTimerPrevDisplayChk;
		});
	} catch (e) {}
	// Zeige versteckte Lsungs-Buttons wieder
	try {
		const hiddenSols = Array.from(host.querySelectorAll("[data-__solTimerPrevDisplay]"));
		hiddenSols.forEach(function (el) {
			if (!el || !el.style) return;
			el.style.display = el.dataset.__solTimerPrevDisplay || "";
			delete el.dataset.__solTimerPrevDisplay;
			delete el.dataset.__solTimerBound;
			delete el.dataset.__solTimerArmed;
		});
	} catch (e) {}
	return removed;
};

window.__liaResetResetTimerState = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let cleared = 0;
	
	// 1. Entferne Timer-Marker auf ALLEN Elementen (mit data-solution-timer oder ohne)
	try {
		const allElements = Array.from(host.querySelectorAll("*"));
		allElements.forEach(function (el) {
			if (!el || !el.dataset) return;
			Object.keys(el.dataset).forEach(function (k) {
				if (/^__solTimer/i.test(k)) {
					try { 
						delete el.dataset[k]; 
						cleared += 1; 
					} catch (e) {}
				}
			});
		});
	} catch (e) {}
	
	// 2. Spezielle Behandlung fr Quiz-Elemente mit data-solution-timer
	// Stelle sicher, dass diese auch wirklich gelscht werden
	try {
		const timerTargets = Array.from(host.querySelectorAll("[data-solution-timer]"));
		timerTargets.forEach(function (el) {
			if (!el || !el.dataset) return;
			// Doppelte berprfung - manchmal werden die Marker nicht wirklich gelscht
			Object.keys(el.dataset).forEach(function (k) {
				if (/^__solTimer/i.test(k)) {
					try { 
						el.removeAttribute("data-" + k.replace(/([A-Z])/g, "-$1").toLowerCase());
						delete el.dataset[k]; 
						cleared += 1; 
					} catch (e) {}
				}
			});
		});
	} catch (e) {}
	
	return cleared;
};

window.__liaResetEnforceTimerByQuizState = function (scope) {
	const root = scope && scope.querySelectorAll ? scope : null;
	if (!root) return { gatedOff: 0, restored: 0 };
	let gatedOff = 0;
	let restored = 0;
	const B_MAIN = "data-lia-reset-timer-bak";
	const B_START = "data-lia-reset-timer-start-bak";
	const B_BADGE = "data-lia-reset-timer-badge-bak";
	const B_LABEL = "data-lia-reset-timer-start-label-bak";

	const quizzes = root.matches && root.matches(".lia-quiz, lia-quiz")
		? [root]
		: Array.from(root.querySelectorAll(".lia-quiz, lia-quiz"));

	quizzes.forEach(function (quiz) {
		if (!quiz || !quiz.querySelectorAll || !quiz.classList) return;
		const isOutcome = quiz.classList.contains("solved") || quiz.classList.contains("resolved");
		const timerNodes = [];
		if (quiz.matches && (quiz.matches("[data-solution-timer]") || quiz.matches("[" + B_MAIN + "]"))) {
			timerNodes.push(quiz);
		}
		Array.prototype.push.apply(timerNodes, Array.from(quiz.querySelectorAll("[data-solution-timer], [" + B_MAIN + "]")));

		timerNodes.forEach(function (el) {
			if (!el || !el.getAttribute || !el.setAttribute) return;

			if (isOutcome) {
				if (el.hasAttribute("data-solution-timer") && !el.hasAttribute(B_MAIN)) {
					el.setAttribute(B_MAIN, String(el.getAttribute("data-solution-timer") || ""));
				}
				if (el.hasAttribute("data-solution-timer-start") && !el.hasAttribute(B_START)) {
					el.setAttribute(B_START, String(el.getAttribute("data-solution-timer-start") || ""));
				}
				if (el.hasAttribute("data-solution-timer-badge") && !el.hasAttribute(B_BADGE)) {
					el.setAttribute(B_BADGE, String(el.getAttribute("data-solution-timer-badge") || ""));
				}
				if (el.hasAttribute("data-solution-timer-start-label") && !el.hasAttribute(B_LABEL)) {
					el.setAttribute(B_LABEL, String(el.getAttribute("data-solution-timer-start-label") || ""));
				}

				if (el.hasAttribute("data-solution-timer")) {
					el.removeAttribute("data-solution-timer");
					gatedOff += 1;
				}
				el.removeAttribute("data-solution-timer-start");
				el.removeAttribute("data-solution-timer-badge");
				el.removeAttribute("data-solution-timer-start-label");
			} else {
				if (!el.hasAttribute("data-solution-timer") && el.hasAttribute(B_MAIN)) {
					el.setAttribute("data-solution-timer", String(el.getAttribute(B_MAIN) || ""));
					restored += 1;
				}
				if (!el.hasAttribute("data-solution-timer-start") && el.hasAttribute(B_START)) {
					el.setAttribute("data-solution-timer-start", String(el.getAttribute(B_START) || ""));
				}
				if (!el.hasAttribute("data-solution-timer-badge") && el.hasAttribute(B_BADGE)) {
					el.setAttribute("data-solution-timer-badge", String(el.getAttribute(B_BADGE) || ""));
				}
				if (!el.hasAttribute("data-solution-timer-start-label") && el.hasAttribute(B_LABEL)) {
					el.setAttribute("data-solution-timer-start-label", String(el.getAttribute(B_LABEL) || ""));
				}
			}

			if (el.dataset) {
				Object.keys(el.dataset).forEach(function (k) {
					if (!/^__solTimer/i.test(k)) return;
					try { delete el.dataset[k]; } catch (e) {}
				});
			}
		});
	});

	return { gatedOff: gatedOff, restored: restored };
};

window.__liaResetReinitializeTimer = function (host) {
	if (!host || !host.querySelectorAll) return;
	// Trigger Timer-Reinitialisierung nur fr OFFENE Quizzes (nicht fr resolved/solved!)
	try {
		const timerElements = Array.from(host.querySelectorAll("[data-solution-timer]"));
		timerElements.forEach(function (el) {
			if (!el) return;
			// Prfe: Ist das Quiz noch offen?
			const quiz = el.closest ? el.closest(".lia-quiz, lia-quiz") : null;
			if (quiz && quiz.classList) {
				// Wenn resolved oder solved ? Timer NICHT neu initialisieren
				if (quiz.classList.contains("resolved") || quiz.classList.contains("solved")) {
					window.__liaResetDebugWrite("timer reinit skipped (quiz already resolved/solved)");
					return;
				}
			}
			// Nur fr offene Quizzes: Triggere Mutation durch Attribute-Change
			const attr = el.getAttribute("data-solution-timer") || "";
			el.removeAttribute("data-solution-timer");
			window.setTimeout(function () {
				try { el.setAttribute("data-solution-timer", attr); } catch (e) {}
			}, 10);
		});
		if (timerElements.length > 0) {
			window.__liaResetDebugWrite("timer reinit triggered; count=" + String(timerElements.length));
		}
	} catch (e) {}
};

window.__liaResetCatalog = window.__liaResetCatalog || Object.create(null);
window.__liaResetDoneByHash = window.__liaResetDoneByHash || Object.create(null);
window.__liaResetEpoch = window.__liaResetEpoch || 0;
window.__liaResetUidCounter = window.__liaResetUidCounter || 0;
window.__liaResetDebug = window.__liaResetDebug || { boot: Date.now(), count: 0, last: "init" };
window.__liaResetExpectedByQuizId = window.__liaResetExpectedByQuizId || Object.create(null);
window.__liaResetNativeFeedbackByQuizId = window.__liaResetNativeFeedbackByQuizId || Object.create(null);
window.__liaResetNativeFeedbackDefaults = window.__liaResetNativeFeedbackDefaults || { solved: "", resolved: "", failed: "" };
window.__liaResetInitialCommentsByQuizId = window.__liaResetInitialCommentsByQuizId || Object.create(null);
window.__liaResetTraceEnabled = window.__liaResetTraceEnabled !== false;
window.__liaResetAllowFallback = window.__liaResetAllowFallback !== false;
window.__liaResetNavDebugState = window.__liaResetNavDebugState || {
	installed: false,
	lastHash: "",
	lastSlideSig: "",
	lastHashEventTs: 0,
	pollTimer: 0,
	observer: null,
	lastMutationTs: 0,
};
window.__liaResetRehydrateState = window.__liaResetRehydrateState || {
	token: 0,
	lastHash: "",
	lastStartTs: 0,
};
window.__liaResetInteractionState = window.__liaResetInteractionState || {
	lastTs: 0,
	installed: false,
};
window.__liaResetQuizTouchById = window.__liaResetQuizTouchById || Object.create(null);
window.__liaResetChoiceInputTouchById = window.__liaResetChoiceInputTouchById || Object.create(null);
window.__liaResetStateByHash = window.__liaResetStateByHash || Object.create(null);
window.__liaResetDragHomeById = window.__liaResetDragHomeById || Object.create(null);
window.__liaResetTilePristineByQuizId = window.__liaResetTilePristineByQuizId || Object.create(null);
window.__liaResetMaskToken = window.__liaResetMaskToken || 0;
window.__liaResetDebugEnabled = window.__liaResetDebugEnabled !== false;
window.__liaResetLastTextByUid = window.__liaResetLastTextByUid || Object.create(null);
window.__liaResetDiktatFieldUidSet = window.__liaResetDiktatFieldUidSet || Object.create(null);
window.__liaResetLastTextByField = window.__liaResetLastTextByField || (typeof WeakMap !== "undefined" ? new WeakMap() : null);
window.__liaResetDiktatFieldSet = window.__liaResetDiktatFieldSet || (typeof WeakSet !== "undefined" ? new WeakSet() : null);

window.__liaResetDebugWrite = function (message) {
	if (!window.__liaResetDebugEnabled) return;
	const msg = String(message || "");
	if (!/^diktat:/i.test(msg)) return;
	window.__liaResetDebug.count += 1;
	window.__liaResetDebug.last = msg;

	const line = "[resetall#" + String(window.__liaResetDebug.count) + "] " + msg + " | hash=" + String(window.location.hash || "") + " | boot=" + String(window.__liaResetDebug.boot);
	try { console.log(line); } catch (e) {}
};

window.__liaResetApplyQuizIconState = function (quizRoot, state) {
	if (!quizRoot || !quizRoot.classList) return;
	quizRoot.classList.remove("lia-reset-icons-hidden", "lia-reset-icon-success", "lia-reset-icon-error", "lia-reset-icon-resolve");
	if (state === "success") {
		quizRoot.classList.add("lia-reset-icon-success");
	} else if (state === "error") {
		quizRoot.classList.add("lia-reset-icon-error");
	} else if (state === "resolve") {
		quizRoot.classList.add("lia-reset-icon-resolve");
	} else {
		quizRoot.classList.add("lia-reset-icons-hidden");
	}
};

window.__liaResetSetQuizLocked = function (quizRoot, shouldLock) {
	if (!quizRoot || !quizRoot.querySelectorAll) return;
	const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
		const tag = String(el.tagName || "").toLowerCase();
		const t = String(el.type || "").toLowerCase();
		const isChoice = t === "checkbox" || t === "radio" || tag === "select";
		return isChoice;
	});

	controls.forEach(function (el) {
		if (!el) return;
		if (shouldLock) {
			try { el.disabled = true; } catch (e) {}
			el.setAttribute("disabled", "disabled");
		} else {
			try { el.disabled = false; } catch (e) {}
			el.removeAttribute("disabled");
		}
	});

	Array.from(quizRoot.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")).forEach(function (btn) {
		if (!btn) return;
		if (shouldLock) {
			try { btn.disabled = true; } catch (e) {}
			btn.setAttribute("disabled", "disabled");
			btn.setAttribute("aria-disabled", "true");
			btn.classList.add("is-disabled", "lia-btn--disabled");
			btn.style.pointerEvents = "none";
			btn.style.opacity = "0.6";
		} else {
			try { btn.disabled = false; } catch (e) {}
			btn.removeAttribute("disabled");
			btn.removeAttribute("aria-disabled");
			btn.classList.remove("is-disabled", "lia-btn--disabled");
			btn.removeAttribute("tabindex");
			btn.style.removeProperty("pointer-events");
			btn.style.removeProperty("opacity");
		}
	});
};

window.__liaResetForceEnableQuizActionButtons = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let touched = 0;
	Array.from(host.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")).forEach(function (btn) {
		if (!btn) return;
		try { btn.disabled = false; } catch (e) {}
		btn.removeAttribute("disabled");
		btn.removeAttribute("aria-disabled");
		btn.classList.remove("is-disabled", "lia-btn--disabled");
		btn.style.removeProperty("pointer-events");
		btn.style.removeProperty("opacity");
		btn.style.removeProperty("filter");
		touched += 1;
	});
	return touched;
};

window.__liaResetDumpQuizState = function (host, tag) {
	if (!host || !host.querySelectorAll) return;
	const quizzes = Array.from(host.querySelectorAll(".lia-quiz, lia-quiz"));
	const out = [];

	quizzes.forEach(function (quiz, idx) {
		const check = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
		const resolve = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
		const feedback = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;

		function pack(btn, name) {
			if (!btn) return name + "=none";
			const onclick = String(btn.getAttribute("onclick") || "");
			const onkeydown = String(btn.getAttribute("onkeydown") || "");
			const ds = btn.dataset ? Object.keys(btn.dataset).sort().join(",") : "";
			return (
				name + "={dis=" + String(btn.disabled ? 1 : 0) +
				",cls='" + String(btn.className || "") +
				"',txt='" + String((btn.textContent || "").trim()).slice(0, 30) +
				"',oc=" + String(onclick.length) +
				",ok=" + String(onkeydown.length) +
				",ds='" + ds + "'}"
			);
		}

		const fb = feedback
			? "fb={kind='" + String(feedback.getAttribute("data-kind") || "") +
			"',cls='" + String(feedback.className || "") +
			"',txt='" + String((feedback.textContent || "").trim()).slice(0, 40) + "'}"
			: "fb=none";

		out.push(
			"q" + String(idx) + "{root='" + String(quiz.className || "") +
			"',solved=" + String(quiz.classList && quiz.classList.contains("solved") ? 1 : 0) +
			",resolved=" + String(quiz.classList && quiz.classList.contains("resolved") ? 1 : 0) +
			", " + pack(check, "check") + ", " + pack(resolve, "resolve") + ", " + fb + "}"
		);
	});

	window.__liaResetDebugWrite(String(tag || "dump") + ": " + out.join(" || "));
};

window.__liaResetReadAttrFromCommentText = function (commentText, attrName) {
	const raw = String(commentText || "");
	const name = String(attrName || "").trim();
	if (!raw || !name) return "";

	const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	let m = raw.match(new RegExp(esc + "\\s*=\\s*\"([^\"]*)\"", "i"));
	if (m && m[1] != null) return String(m[1]).trim();
	m = raw.match(new RegExp(esc + "\\s*=\\s*'([^']*)'", "i"));
	if (m && m[1] != null) return String(m[1]).trim();
	m = raw.match(new RegExp(esc + "\\s*=\\s*([^\\s>]+)", "i"));
	if (m && m[1] != null) return String(m[1]).trim();
	return "";
};

window.__liaResetReadQuizDataText = function (quiz, attrName) {
	if (!quiz || !attrName) return "";
	const direct = String(quiz.getAttribute(attrName) || "").trim();
	if (direct) return direct;
	const inDesc = quiz.querySelector ? quiz.querySelector("[" + attrName + "]") : null;
	if (inDesc) {
		const t = String(inDesc.getAttribute(attrName) || "").trim();
		if (t) return t;
	}
	const checkBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
	if (checkBtn) {
		const t = String(checkBtn.getAttribute(attrName) || "").trim();
		if (t) return t;
	}
	const resolveBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
	if (resolveBtn) {
		const t = String(resolveBtn.getAttribute(attrName) || "").trim();
		if (t) return t;
	}

	const ownComments = typeof window.__liaResetExtractQuizComments === "function"
		? window.__liaResetExtractQuizComments(quiz)
		: [];
	for (let i = 0; i < ownComments.length; i++) {
		const t = window.__liaResetReadAttrFromCommentText(ownComments[i], attrName);
		if (t) return t;
	}

	const quizId = String(quiz.getAttribute("data-resetall-id") || "");
	const baselineComments = quizId && window.__liaResetInitialCommentsByQuizId
		? window.__liaResetInitialCommentsByQuizId[quizId]
		: null;
	if (Array.isArray(baselineComments)) {
		for (let i = 0; i < baselineComments.length; i++) {
			const t = window.__liaResetReadAttrFromCommentText(baselineComments[i], attrName);
			if (t) return t;
		}
	}

	return "";
};

window.__liaResetSyncResolveVisibility = function (quiz) {
	if (!quiz || !(quiz instanceof Element)) return;
	const resolveBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
	if (!resolveBtn || !resolveBtn.classList) return;

	const gateRaw = String(window.__liaResetReadQuizDataText(quiz, "data-solution-button") || "").trim();
	const gate = Number(gateRaw);
	if (!Number.isFinite(gate) || gate <= 0) return;

	const checkBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
	const countText = String((checkBtn && checkBtn.textContent) || "");
	const m = countText.match(/\s(\d+)\s*$/);
	const attempts = m ? Number(m[1]) : 0;

	if (attempts >= gate) {
		resolveBtn.classList.remove("hide");
	} else {
		resolveBtn.classList.add("hide");
	}
};

window.__liaResetMarkQuizTouched = function (node, source) {
	if (!node || !node.closest) return;
	const quiz = node.closest(".lia-quiz, lia-quiz");
	if (!quiz) return;
	const id = String(quiz.getAttribute("data-resetall-id") || "");
	if (!id) return;
	window.__liaResetQuizTouchById[id] = Date.now();
	window.__liaResetDebugWrite("quiz touched; id=" + id + "; source=" + String(source || "unknown"));
};

window.__liaResetWasQuizTouched = function (quizId) {
	const id = String(quizId || "");
	if (!id) return false;
	const a = Number(window.__liaResetQuizTouchById[id] || 0);
	const b = Number(window.__liaResetChoiceInputTouchById[id] || 0);
	return a > 0 || b > 0;
};

window.__liaResetWasChoiceInputTouched = function (quizId) {
	const id = String(quizId || "");
	if (!id) return false;
	const t = Number(window.__liaResetChoiceInputTouchById[id] || 0);
	return t > 0;
};

window.__liaResetClearChoiceControl = function (ctrl, emitEvents) {
	if (!ctrl) return false;
	const wasChecked = !!ctrl.checked;
	ctrl.checked = false;
	try { ctrl.defaultChecked = false; } catch (e) {}
	ctrl.removeAttribute("checked");
	if (emitEvents) {
		try { ctrl.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
		try { ctrl.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
	}
	return wasChecked;
};

// Freeze the `checked` property on an untouched choice input so that
// LiaScript's async vDOM re-render cannot restore the old checked state.
window.__liaResetFreezeChoiceInput = function (ctrl) {
	if (!ctrl) return false;
	if (ctrl.__liaFrozen) {
		// Already frozen  still ensure defaultChecked/attribute are cleared.
		try { ctrl.defaultChecked = false; } catch (e) {}
		ctrl.removeAttribute("checked");
		return false;
	}
	var wasChecked = !!ctrl.checked;
	// Clear via native setter before we shadow it.
	ctrl.checked = false;
	try { ctrl.defaultChecked = false; } catch (e) {}
	ctrl.removeAttribute("checked");
	try {
		Object.defineProperty(ctrl, "checked", {
			get: function () { return false; },
			set: function (v) { /* block LiaScript re-render */ },
			configurable: true,
			enumerable: true,
		});
	} catch (e) {
		// defineProperty failed (e.g. cross-origin)  fall back silently.
		return wasChecked;
	}
	ctrl.__liaFrozen = true;
	return wasChecked;
};

// Restore the native `checked` IDL attribute on a previously frozen input.
window.__liaResetThawChoiceInput = function (ctrl) {
	if (!ctrl || !ctrl.__liaFrozen) return;
	try { delete ctrl.checked; } catch (e) {}
	ctrl.__liaFrozen = false;
};

// Thaw all choice inputs belonging to a given quiz.
window.__liaResetThawQuizChoiceInputs = function (quizId, scope) {
	if (!quizId) return;
	var quizEl = null;
	if (scope && typeof scope.getAttribute === "function" &&
		String(scope.getAttribute("data-resetall-id") || "") === String(quizId)) {
		quizEl = scope;
	} else {
		var host = (scope && scope.querySelectorAll) ? scope : document;
		quizEl = host.querySelector("[data-resetall-id='" + String(quizId).replace(/'/g, "\\'") + "']");
	}
	if (!quizEl) return;
	Array.from(quizEl.querySelectorAll("input[type='checkbox'], input[type='radio']")).forEach(function (ctrl) {
		window.__liaResetThawChoiceInput(ctrl);
	});
};

window.__liaResetRunMicrotask = function (fn) {
	if (typeof fn !== "function") return;
	if (typeof queueMicrotask === "function") {
		try { queueMicrotask(fn); return; } catch (e) {}
	}
	try { Promise.resolve().then(fn); } catch (e) {}
};

window.__liaResetSanitizeUntouchedChoiceQuizzes = function (host, source, quiet) {
	if (!host || !host.querySelectorAll) return 0;
	let fixed = 0;
	Array.from(host.querySelectorAll(".lia-quiz, lia-quiz")).forEach(function (quiz) {
		if (!quiz || !quiz.classList) return;
		if (quiz.classList.contains("solved") || quiz.classList.contains("resolved")) return;
		const id = String(quiz.getAttribute("data-resetall-id") || "");
		if (!id) return;
		if (window.__liaResetWasChoiceInputTouched(id)) return;

		const choices = Array.from(quiz.querySelectorAll("input[type='checkbox'], input[type='radio']"));
		if (!choices.length) return;

		let hadChecked = false;
		choices.forEach(function (ctrl) {
			const changed = window.__liaResetFreezeChoiceInput(ctrl);
			if (changed) hadChecked = true;
		});
		if (hadChecked) fixed += 1;
	});

	if (fixed > 0 && !quiet) {
		window.__liaResetDebugWrite("sanitize untouched choice quizzes; fixed=" + String(fixed) + "; source=" + String(source || "unknown"));
	}
	return fixed;
};

window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes = function (host, source) {
	const root = host && host.querySelectorAll ? host : window.__liaGetResetHost(null);
	if (!root || !root.querySelectorAll) return;
	window.__liaResetRunMicrotask(function () {
		const liveHost = window.__liaGetResetHost(null) || root;
		const fixed = window.__liaResetSanitizeUntouchedChoiceQuizzes(liveHost, String(source || "unknown") + "-microtask", false);
		if (fixed > 0) {
			window.__liaResetDebugWrite("sanitize sweep fixed=" + String(fixed) + "; source=" + String(source || "unknown") + "; delay=microtask");
		}
	});

	const delays = [24, 96];
	delays.forEach(function (ms) {
		window.setTimeout(function () {
			const liveHost = window.__liaGetResetHost(null) || root;
			const fixed = window.__liaResetSanitizeUntouchedChoiceQuizzes(liveHost, String(source || "unknown") + "-sweep-" + String(ms) + "ms", false);
			if (fixed > 0) {
				window.__liaResetDebugWrite("sanitize sweep fixed=" + String(fixed) + "; source=" + String(source || "unknown") + "; delay=" + String(ms));
			}
		}, ms);
	});
};

window.__liaResetInstallChoiceMutationGuard = function () {
	if (window.__liaResetChoiceMutationGuardInstalled) return;
	window.__liaResetChoiceMutationGuardInstalled = true;
	if (!window.MutationObserver || !document.body) return;

	const maybeSanitizeControl = function (ctrl) {
		if (!ctrl || !(ctrl instanceof Element)) return 0;
		const type = String(ctrl.type || "").toLowerCase();
		if (type !== "checkbox" && type !== "radio") return 0;
		const quiz = ctrl.closest ? ctrl.closest(".lia-quiz, lia-quiz") : null;
		if (!quiz || !quiz.classList) return 0;
		if (quiz.classList.contains("solved") || quiz.classList.contains("resolved")) return 0;
		const id = String(quiz.getAttribute("data-resetall-id") || "");
		if (!id || window.__liaResetWasChoiceInputTouched(id)) return 0;
		const had = !!ctrl.checked || !!ctrl.defaultChecked || ctrl.hasAttribute("checked");
		if (!had) return 0;
		window.__liaResetFreezeChoiceInput(ctrl);
		return 1;
	};

	const obs = new MutationObserver(function (mutations) {
		let fixed = 0;
		mutations.forEach(function (m) {
			if (!m) return;
			if (m.target && m.target instanceof Element) {
				fixed += maybeSanitizeControl(m.target);
			}
			if (!m.addedNodes || !m.addedNodes.length) return;
			Array.from(m.addedNodes).forEach(function (node) {
				if (!node || node.nodeType !== 1) return;
				const el = node;
				fixed += maybeSanitizeControl(el);
				if (el.querySelectorAll) {
					Array.from(el.querySelectorAll("input[type='checkbox'], input[type='radio']")).forEach(function (c) {
						fixed += maybeSanitizeControl(c);
					});
				}
			});
		});
		if (fixed > 0) {
			window.__liaResetDebugWrite("choice mutation guard sanitized; fixed=" + String(fixed));
		}
	});

	obs.observe(document.body, {
		subtree: true,
		childList: true,
		attributes: true,
		attributeFilter: ["checked", "class"],
	});
	window.__liaResetChoiceMutationObserver = obs;
};

window.__liaResetEnsureNodeUid = function (node) {
	if (!node || !(node instanceof Element)) return "";
	let uid = String(node.getAttribute("data-reset-uid") || "").trim();
	if (uid) return uid;
	window.__liaResetUidCounter = Number(window.__liaResetUidCounter || 0) + 1;
	uid = "rnu_" + String(window.__liaResetUidCounter);
	node.setAttribute("data-reset-uid", uid);
	return uid;
};

window.__liaResetPrimeDragHomes = function (host) {
	if (!host || !host.querySelectorAll) return;
	const sources = typeof window.__liaResetGetTileQuizSourcesFromRoot === "function"
		? window.__liaResetGetTileQuizSourcesFromRoot(host)
		: Array.from(host.querySelectorAll("[draggable], [onclick*='dragsource'], [onkeydown*='dragsource'], [ondragstart*='dragstart'], [ondragend*='dragend']"));
	window.__liaResetDebugWrite("primeDragHomes: sourcesFound=" + String(sources.length));
	let primed = 0;
	let skippedInTarget = 0;
	let skippedAlreadyPrimed = 0;
	sources.forEach(function (el) {
		if (!el || !(el instanceof Element)) return;
		const tileRoot = typeof window.__liaResetGetTileQuizRootFromNode === "function"
			? window.__liaResetGetTileQuizRootFromNode(el, host)
			: null;
		const targets = tileRoot && typeof window.__liaResetGetTileQuizTargetsFromRoot === "function"
			? window.__liaResetGetTileQuizTargetsFromRoot(tileRoot)
			: [];
		const chip = typeof window.__liaResetResolveTileChipNode === "function"
			? window.__liaResetResolveTileChipNode(el, tileRoot || host, targets)
			: el;
		if (!chip || !(chip instanceof Element)) return;
		const id = window.__liaResetEnsureNodeUid(chip);
		if (!id || window.__liaResetDragHomeById[id]) { skippedAlreadyPrimed += 1; return; }

		let insideTileTarget = false;
		if (
			typeof window.__liaResetGetTileQuizRootFromNode === "function" &&
			typeof window.__liaResetGetTileQuizTargetsFromRoot === "function"
		) {
			insideTileTarget = targets.some(function (t) {
				return !!(t && (t === chip || (t.contains && t.contains(chip))));
			});
		}
		if (insideTileTarget) { skippedInTarget += 1; return; }

		const parent = chip.parentElement;
		if (!parent) return;
		const parentId = window.__liaResetEnsureNodeUid(parent);
		const nextEl = chip.nextElementSibling;
		const nextId = nextEl ? window.__liaResetEnsureNodeUid(nextEl) : "";
		window.__liaResetDragHomeById[id] = {
			parentId: String(parentId || ""),
			nextId: String(nextId || ""),
			wasDraggable: String(chip.getAttribute("draggable") || "").toLowerCase() === "true" ? 1 : 0,
		};
		primed += 1;
		window.__liaResetDebugWrite("primeDragHomes: primed id=" + id + "; chipTag=" + String(chip.tagName || "") + "; chipClass=" + String(chip.className || "").slice(0, 60) + "; parentId=" + String(parentId || ""));
	});
	window.__liaResetDebugWrite("primeDragHomes: done; primed=" + String(primed) + "; skippedAlreadyPrimed=" + String(skippedAlreadyPrimed) + "; skippedInTarget=" + String(skippedInTarget));
};

window.__liaResetRestoreDragHomes = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let moved = 0;
	const ids = Object.keys(window.__liaResetDragHomeById || {});
	window.__liaResetDebugWrite("dragHomes: mapSize=" + String(ids.length));
	ids.forEach(function (id) {
		if (!id) return;
		const el = host.querySelector("[data-reset-uid='" + String(id) + "']");
		if (!el) {
			window.__liaResetDebugWrite("dragHome: id=" + id + "; CHIP_NOT_FOUND");
			return;
		}
		const home = window.__liaResetDragHomeById[id];
		if (!home || !home.parentId) {
			window.__liaResetDebugWrite("dragHome: id=" + id + "; NO_HOME_ENTRY");
			return;
		}
		const parent = host.querySelector("[data-reset-uid='" + String(home.parentId) + "']");
		if (!parent) {
			window.__liaResetDebugWrite("dragHome: id=" + id + "; PARENT_NOT_FOUND; parentId=" + String(home.parentId));
			return;
		}
		const next = home.nextId ? host.querySelector("[data-reset-uid='" + String(home.nextId) + "']") : null;
		if (el.parentElement === parent && (!next || el.nextElementSibling === next)) {
			window.__liaResetDebugWrite("dragHome: id=" + id + "; ALREADY_HOME");
			return;
		}
		window.__liaResetDebugWrite("dragHome: id=" + id + "; MOVING; parentId=" + String(home.parentId) + "; chipTag=" + String(el.tagName || "") + "; chipClass=" + String(el.className || "").slice(0, 60));
		try {
			parent.insertBefore(el, next || null);
			moved += 1;
		} catch (e) {
			window.__liaResetDebugWrite("dragHome: id=" + id + "; insertBefore ERROR; " + String(e));
		}

		if (Number(home.wasDraggable || 0) === 1) {
			try { el.setAttribute("draggable", "true"); } catch (e) {}
		}
		el.classList.remove("is-disabled", "lia-btn--disabled");
		el.style.removeProperty("pointer-events");
		el.style.removeProperty("opacity");
		el.style.removeProperty("filter");
		el.style.removeProperty("cursor");
	});
	return moved;
};

window.__liaResetResetSelectControls = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let changed = 0;
	const selects = Array.from(host.querySelectorAll("select"));
	selects.forEach(function (sel) {
		if (!sel || !sel.options || !sel.options.length) return;
		let idx = -1;
		for (let i = 0; i < sel.options.length; i++) {
			const txt = String((sel.options[i].textContent || "")).trim().toLowerCase();
			if (txt === "auswahl") {
				idx = i;
				break;
			}
		}
		if (idx < 0) {
			for (let i = 0; i < sel.options.length; i++) {
				if (sel.options[i].defaultSelected) {
					idx = i;
					break;
				}
			}
		}
		if (idx < 0) idx = 0;
		if (sel.selectedIndex !== idx) {
			sel.selectedIndex = idx;
			changed += 1;
		}
		try { sel.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
		try { sel.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
	});
	return changed;
};

window.__liaResetResetDropdownControls = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let changed = 0;
	const dropdowns = Array.from(host.querySelectorAll(".lia-dropdown"));
	dropdowns.forEach(function (dropdown) {
		if (!dropdown || !dropdown.querySelectorAll) return;

		const dropdownId = String(dropdown.getAttribute("data-resetall-id") || "");

		// Find the selected display element and the first option
		const selectedEl = dropdown.querySelector(".lia-dropdown__selected");
		const firstOption = dropdown.querySelector(".lia-dropdown__option");

		if (!selectedEl || !firstOption) return;

		// Reset display text to neutral placeholder after reset.
		const resetPlaceholderText = "Auswahl";
		const selectedSpan = selectedEl.querySelector("span");
		if (selectedSpan) {
			selectedSpan.textContent = resetPlaceholderText;
		}

		changed += 1;
		window.__liaResetDebugWrite("dropdown selected text reset; id=" + dropdownId + "; text='" + resetPlaceholderText + "'");
	});

	return changed;
};

window.__liaResetHasTileHandler = function (el, names, pattern) {
	if (!el || !(el instanceof Element)) return false;
	const attrs = Array.isArray(names) ? names : [names];
	for (let i = 0; i < attrs.length; i++) {
		const raw = String(el.getAttribute(attrs[i]) || "");
		if (pattern.test(raw)) return true;
	}
	return false;
};

window.__liaResetFilterTopLevelTileNodes = function (nodes, predicate) {
	if (!Array.isArray(nodes)) return [];
	return nodes.filter(function (el) {
		if (!el || !(el instanceof Element)) return false;
		let parent = el.parentElement;
		while (parent) {
			if (predicate(parent)) return false;
			parent = parent.parentElement;
		}
		return true;
	});
};

window.__liaResetResolveTileChipNode = function (node, tileRoot, targets) {
	if (!node || !(node instanceof Element)) return null;
	const root = tileRoot && tileRoot instanceof Element ? tileRoot : null;
	const innerQuiz = root ? window.__liaResetGetTileQuizInnerQuiz(root) : null;
	const targetList = Array.isArray(targets) ? targets.filter(function (t) { return !!t; }) : [];
	const rawSelector = "[onclick],[onkeydown],[ondragstart],[ondragend],[draggable],[data-reset-tile-role='source']";
	let cur = node;
	let bestSource = window.__liaResetIsTileQuizSource(node) ? node : null;
	let best = node;
	while (cur && cur instanceof Element) {
		const parent = cur.parentElement;
		if (window.__liaResetIsTileQuizSource(cur)) {
			bestSource = cur;
		}
		if (!parent || parent === root || parent === document.body) return bestSource || cur;

		const rawDescendants = Array.from(cur.querySelectorAll(rawSelector)).filter(function (el) {
			return window.__liaResetIsTileQuizSource(el);
		});
		const distinctSources = window.__liaResetFilterTopLevelTileNodes(rawDescendants.concat([cur]).filter(function (el) {
			return !!el && el instanceof Element && window.__liaResetIsTileQuizSource(el);
		}), function (parentEl) {
			return window.__liaResetIsTileQuizSource(parentEl);
		});
		if (distinctSources.length > 1) {
			return bestSource || best;
		}

		best = cur;
		if (parent === innerQuiz || targetList.indexOf(parent) >= 0) return bestSource || cur;
		cur = parent;
	}
	return bestSource || best;
};

window.__liaResetIsTileQuizTarget = function (el) {
	if (!el || !(el instanceof Element)) return false;
	if (String(el.getAttribute("data-reset-tile-role") || "") === "target") return true;
	return window.__liaResetHasTileHandler(
		el,
		["onclick", "onkeydown", "ondragover", "ondragleave"],
		/cmd\s*:\s*['\"](dragtarget|dragenter)['\"]/i
	);
};

window.__liaResetIsTileQuizSource = function (el) {
	if (!el || !(el instanceof Element)) return false;
	if (String(el.getAttribute("data-reset-tile-role") || "") === "source") return true;
	return (
		el.hasAttribute("draggable") ||
		window.__liaResetHasTileHandler(
			el,
			["onclick", "onkeydown", "ondragstart", "ondragend"],
			/cmd\s*:\s*['\"](dragsource|dragstart|dragend)['\"]/i
		)
	);
};

window.__liaResetGetTileQuizTargetsFromRoot = function (root) {
	if (!root || !root.querySelectorAll) return [];
	const nodes = Array.from(root.querySelectorAll("[onclick],[onkeydown],[ondragover],[ondragleave],[data-reset-tile-role='target']"));
	return nodes.filter(function (el) {
		return window.__liaResetIsTileQuizTarget(el);
	});
};

window.__liaResetGetTileQuizSourcesFromRoot = function (root) {
	if (!root || !root.querySelectorAll) return [];
	const nodes = Array.from(root.querySelectorAll("[onclick],[onkeydown],[ondragstart],[ondragend],[draggable],[data-reset-tile-role='source']"));
	const sources = nodes.filter(function (el) {
		return window.__liaResetIsTileQuizSource(el);
	});
	return window.__liaResetFilterTopLevelTileNodes(sources, function (parent) {
		return window.__liaResetIsTileQuizSource(parent);
	});
};

window.__liaResetGetTileQuizInnerQuiz = function (root) {
	if (!root || !(root instanceof Element)) return null;
	const directChildren = Array.from(root.children || []);
	for (let i = 0; i < directChildren.length; i++) {
		const child = directChildren[i];
		if (child && child.classList && child.classList.contains("lia-quiz")) return child;
	}
	if (root.classList && root.classList.contains("lia-quiz")) return root;
	return root.querySelector(".lia-quiz");
};

window.__liaResetGetTileQuizRootFromNode = function (node, host) {
	if (!node || !(node instanceof Element)) return null;
	const taggedRoot = node.closest ? node.closest("[data-reset-tile-root='1']") : null;
	if (taggedRoot) {
		const taggedTargets = window.__liaResetGetTileQuizTargetsFromRoot(taggedRoot);
		const taggedQuizzes = taggedRoot.querySelectorAll ? taggedRoot.querySelectorAll(".lia-quiz, lia-quiz") : [];
		if (taggedTargets.length > 0 && taggedQuizzes.length === 1) return taggedRoot;
	}
	const stop = host || document.body;
	let cur = node;
	while (cur && cur !== stop && cur !== document.body) {
		if (String(cur.getAttribute && cur.getAttribute("data-reset-tile-root") || "") === "1") {
			const curTargets = window.__liaResetGetTileQuizTargetsFromRoot(cur);
			const curQuizzes = cur.querySelectorAll ? cur.querySelectorAll(".lia-quiz, lia-quiz") : [];
			if (curTargets.length > 0 && curQuizzes.length === 1) return cur;
		}
		const hasOwnTargets = window.__liaResetGetTileQuizTargetsFromRoot(cur).length > 0;
		const hasOwnSources = window.__liaResetGetTileQuizSourcesFromRoot(cur).length > 0;
		const innerQuiz = window.__liaResetGetTileQuizInnerQuiz(cur);
		const quizCount = cur.querySelectorAll ? cur.querySelectorAll(".lia-quiz, lia-quiz").length : 0;
		if ((hasOwnTargets || hasOwnSources) && innerQuiz && quizCount === 1) return cur;
		cur = cur.parentElement;
	}
	return null;
};

window.__liaResetCollectTileQuizRoots = function (host) {
	if (!host || !host.querySelectorAll) return [];
	const nodes = window.__liaResetGetTileQuizTargetsFromRoot(host)
		.concat(window.__liaResetGetTileQuizSourcesFromRoot(host))
		.concat(Array.from(host.querySelectorAll("[data-reset-tile-root='1']")));
	const out = [];
	const seen = new Set();
	nodes.forEach(function (node) {
		const root = window.__liaResetGetTileQuizRootFromNode(node, host);
		if (!root || seen.has(root)) return;
		const targets = window.__liaResetGetTileQuizTargetsFromRoot(root);
		const quizzes = root.querySelectorAll ? root.querySelectorAll(".lia-quiz, lia-quiz") : [];
		if (targets.length === 0 || quizzes.length !== 1) return;
		seen.add(root);
		out.push(root);
	});
	return out;
};

window.__liaResetPrimeTileStructure = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let marked = 0;
	Array.from(host.querySelectorAll("[data-reset-tile-root='1']")).forEach(function (el) {
		if (!el || !(el instanceof Element)) return;
		const t = window.__liaResetGetTileQuizTargetsFromRoot(el);
		const q = el.querySelectorAll ? el.querySelectorAll(".lia-quiz, lia-quiz") : [];
		if (t.length > 0 && q.length === 1) return;
		try { el.removeAttribute("data-reset-tile-root"); } catch (e) {}
		marked += 1;
	});
	const roots = window.__liaResetCollectTileQuizRoots(host);
	roots.forEach(function (root) {
		if (!root || !(root instanceof Element)) return;
		if (String(root.getAttribute("data-reset-tile-root") || "") !== "1") {
			try { root.setAttribute("data-reset-tile-root", "1"); } catch (e) {}
			marked += 1;
		}
		window.__liaResetGetTileQuizTargetsFromRoot(root).forEach(function (target) {
			if (!target || !(target instanceof Element)) return;
			if (String(target.getAttribute("data-reset-tile-role") || "") !== "target") {
				try { target.setAttribute("data-reset-tile-role", "target"); } catch (e) {}
				marked += 1;
			}
		});
		window.__liaResetGetTileQuizSourcesFromRoot(root).forEach(function (source) {
			const chip = window.__liaResetResolveTileChipNode(source, root, window.__liaResetGetTileQuizTargetsFromRoot(root)) || source;
			if (!chip || !(chip instanceof Element)) return;
			window.__liaResetEnsureNodeUid(chip);
			if (String(chip.getAttribute("data-reset-tile-role") || "") !== "source") {
				try { chip.setAttribute("data-reset-tile-role", "source"); } catch (e) {}
				marked += 1;
			}
		});
	});
	if (marked > 0) {
		window.__liaResetDebugWrite("tile structure primed; roots=" + String(roots.length) + "; marked=" + String(marked));
	}
	return marked;
};

window.__liaResetSetTileTargetDisplay = function (target, value) {
	if (!target) return;
	// Remove any stale non-source, non-placeholder children (chips left in target by LiaScript)
	Array.from(target.children || []).forEach(function (child) {
		if (!child) return;
		if (String(child.getAttribute && child.getAttribute("data-reset-tile-placeholder") || "") === "1") return;
		if (window.__liaResetIsTileQuizSource(child)) return;
		try { target.removeChild(child); } catch (e) {}
	});
	let box = null;
	const childElements = Array.from(target.children || []);
	for (let i = 0; i < childElements.length; i++) {
		const candidate = childElements[i];
		if (!candidate) continue;
		if (String(candidate.getAttribute && candidate.getAttribute("data-reset-tile-placeholder") || "") === "1") {
			box = candidate;
			break;
		}
		if (window.__liaResetIsTileQuizSource(candidate)) continue;
		box = candidate;
		break;
	}
	if (!box || window.__liaResetIsTileQuizSource(box)) {
		box = document.createElement("div");
		try { box.setAttribute("data-reset-tile-placeholder", "1"); } catch (e) {}
		target.appendChild(box);
	}
	if (value) {
		box.textContent = String(value);
	} else {
		box.textContent = "?";
	}
};

window.__liaResetRefreshTileTargetStyles = function (host) {
	return 0;
};

window.__liaResetResetTileControls = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let changed = 0;
	const roots = window.__liaResetCollectTileQuizRoots(host);

	roots.forEach(function (tileRoot) {
		const targets = window.__liaResetGetTileQuizTargetsFromRoot(tileRoot);
		if (!targets.length) return;

		// Safety: Skip complex manipulation for multi-quiz tile roots.
		// These are edge cases (overlays or duplicates) that can cause DOM re-render loops.
		const quizzes = Array.from(tileRoot.querySelectorAll(".lia-quiz, lia-quiz"));
		if (quizzes.length > 1) {
			window.__liaResetDebugWrite("tileControls: skipping multiQuiz root (count=" + String(quizzes.length) + ")");
			// Still unlock sources to make them draggable
			const sources = window.__liaResetGetTileQuizSourcesFromRoot(tileRoot).filter(function (node) {
				const chip = window.__liaResetResolveTileChipNode(node, tileRoot, targets) || node;
				let inside = false;
				for (let i = 0; i < targets.length; i++) {
					if (targets[i] === chip || (targets[i].contains && targets[i].contains(chip))) {
						inside = true;
						break;
					}
				}
				return !inside;
			});
			sources.forEach(function (source) {
				const unlockNodes = [source].concat(Array.from(source.querySelectorAll("[draggable], [onclick*='dragsource'], [onkeydown*='dragsource'], [ondragstart*='dragstart'], [ondragend*='dragend']")));
				unlockNodes.forEach(function (node) {
					if (!node || !(node instanceof Element)) return;
					try { node.setAttribute("draggable", "true"); } catch (e) {}
					node.classList.remove("is-disabled", "lia-btn--disabled");
				});
			});
			return;
		}

		function isInsideAnyTarget(node) {
			for (let i = 0; i < targets.length; i++) {
				const t = targets[i];
				if (!t) continue;
				if (t === node || (t.contains && t.contains(node))) return true;
			}
			return false;
		}

		function resolveHomeParent(node) {
			if (!node || !(node instanceof Element)) return null;
			const uid = window.__liaResetEnsureNodeUid(node);
			const home = uid ? window.__liaResetDragHomeById[uid] : null;
			if (home && home.parentId) {
				const homeParent = host.querySelector("[data-reset-uid='" + String(home.parentId) + "']");
				if (homeParent) return homeParent;
			}
			return null;
		}

		const outsideSources = window.__liaResetGetTileQuizSourcesFromRoot(tileRoot).filter(function (node) {
			const chip = window.__liaResetResolveTileChipNode(node, tileRoot, targets) || node;
			return !isInsideAnyTarget(chip);
		});
		const fallbackSourceBank = (outsideSources.length > 0 ? outsideSources[0].parentElement : null) || tileRoot;
		window.__liaResetDebugWrite("tileControls: root=" + String(tileRoot.tagName || "") + "; targets=" + String(targets.length) + "; outsideSources=" + String(outsideSources.length) + "; fallbackSourceBank=" + String(fallbackSourceBank ? (fallbackSourceBank.tagName + "." + String(fallbackSourceBank.className || "").slice(0, 40)) : "null"));
		targets.forEach(function (target) {
			if (!target || !target.querySelectorAll) return;

			const embeddedSources = window.__liaResetGetTileQuizSourcesFromRoot(target).map(function (source) {
				return window.__liaResetResolveTileChipNode(source, tileRoot, targets) || source;
			}).filter(function (source, idx, arr) {
				return !!source && arr.indexOf(source) === idx;
			});
			window.__liaResetDebugWrite("tileControls: target=" + String(target.tagName || "") + "; embeddedSources=" + String(embeddedSources.length));

			const targetText = String((target.textContent || "")).replace(/\s+/g, " ").trim();
			const targetSeemsOccupied = embeddedSources.length > 0 || (targetText && targetText !== "?" && targetText !== "+");
			if (!targetSeemsOccupied) {
				target.classList.remove("is-disabled", "lia-btn--disabled");
				target.style.removeProperty("pointer-events");
				target.style.removeProperty("opacity");
				return;
			}

			// --- Parse track from target's ondragover/onclick attribute ---
			// Track format: [["quiz", slideIdx], ["input", quizId]]
			var _slideIdx = -1, _quizId = -1;
			try {
				var _attrRaw = target.getAttribute("ondragover") || target.getAttribute("onclick") || "";
				var _ti = _attrRaw.indexOf("track");
				if (_ti >= 0) {
					var _ts = _attrRaw.slice(_ti + 5).replace(/^\s*:\s*/, "");
					var _depth = 0, _end = -1;
					for (var _ci = 0; _ci < _ts.length; _ci++) {
						if (_ts[_ci] === "[") _depth++;
						else if (_ts[_ci] === "]") { _depth--; if (_depth === 0) { _end = _ci + 1; break; } }
					}
					if (_end > 0) {
						var _parsedTrack = JSON.parse(_ts.slice(0, _end));
						_parsedTrack.forEach(function(t) {
							if (Array.isArray(t) && t[0] === "quiz") _slideIdx = t[1];
							if (Array.isArray(t) && t[0] === "input") _quizId = t[1];
						});
					}
				}
			} catch (_etrack) { /* ignore parse errors */ }

			window.__liaResetDebugWrite("tileControls: slideIdx=" + _slideIdx + "; quizId=" + _quizId);

			// --- IndexedDB + Elm restore approach ---
			// Read the current quiz vector from IndexedDB, set solved=0 for the tile quiz
			// element, write back, and send a 'restore' message to Elm.
			// Elm's restore handler (Quiz/Update.elm) merges the vector: since the tile quiz
			// has randomize=Just [...], mergeHelper calls reset(body.state) which empties all
			// Drop slots. Combined with solved=Open, Elm re-renders the quiz correctly.
			if (_slideIdx >= 0 && _quizId >= 0 && window.LIA && typeof window.LIA.send === "function") {
				var _restoreTarget = target;
				var _restoreSlideIdx = _slideIdx;
				var _restoreQuizId = _quizId;
				(async function() {
					try {
						function _looksLikeVector(arr) {
							if (!Array.isArray(arr)) return false;
							if (_restoreQuizId < 0 || _restoreQuizId >= arr.length) return false;
							var _el = arr[_restoreQuizId];
							return !!(_el && typeof _el === "object" && Object.prototype.hasOwnProperty.call(_el, "solved"));
						}

						function _restoreVectorInPlace(vector) {
							if (!_looksLikeVector(vector)) throw new Error("vector shape mismatch");
							var _orig = vector[_restoreQuizId];
							vector[_restoreQuizId] = Object.assign({}, _orig, { solved: 0 });
							window.__liaResetDebugWrite("tileControls: elem[" + _restoreQuizId + "]=" + JSON.stringify(_orig).slice(0, 80));
							return vector;
						}

						function _sendRestore(vector) {
							window.LIA.send({
								reply: true,
								track: [["quiz", _restoreSlideIdx], ["input", _restoreQuizId]],
								service: "restore",
								message: { cmd: "restore", param: { value: vector } }  /* Elm: JD.field "value" */
							});
							window.__liaResetDebugWrite("tileControls: restore sent; vecLen=" + vector.length + "; elem6=" + JSON.stringify((vector[_restoreQuizId]||{solved:"?"}).solved));
						}

						// Helper: open DB by name, resolve to null on error
						async function _tryOpenDB(name) {
							return new Promise(function(resolve) {
								var _r = indexedDB.open(name);
								_r.onsuccess = function(e) { resolve(e.target.result); };
								_r.onerror = function() { resolve(null); };
							});
						}

						var _restored = false;
						var _dbs = await indexedDB.databases();
						var _allDBNames = _dbs.filter(function(d) { return !!d.name; });
						window.__liaResetDebugWrite("tileControls: IDB all dbs=[" + _allDBNames.map(function(d){return d.name;}).join(", ").slice(0, 140) + "]");

						// Path A: classic LiaScript DB with objectStore 'quiz'
						var _quizDB = null;
						var _quizDBName = "";
						for (var _di = 0; _di < _allDBNames.length; _di++) {
							var _nameA = _allDBNames[_di].name;
							var _dbA = await _tryOpenDB(_nameA);
							var _storesA = _dbA ? Array.from(_dbA.objectStoreNames) : [];
							window.__liaResetDebugWrite("tileControls: IDB scan '" + _nameA.slice(0, 40) + "' stores=[" + _storesA.join(",") + "]");
							if (_dbA && _dbA.objectStoreNames.contains("quiz")) {
								_quizDB = _dbA;
								_quizDBName = _nameA;
								break;
							}
							if (_dbA) _dbA.close();
						}

						if (_quizDB) {
							window.__liaResetDebugWrite("tileControls: IDB quiz-store db='" + _quizDBName.slice(0, 60) + "'");
							var _allRecs = await new Promise(function(resolve, reject) {
								var _txA = _quizDB.transaction(["quiz"], "readonly");
								var _storeA = _txA.objectStore("quiz");
								var _reqA = _storeA.getAll();
								_reqA.onsuccess = function(e) { resolve(e.target.result); };
								_reqA.onerror = function() { reject(new Error("getAll quiz failed")); };
							});

							var _slideRecs = _allRecs.filter(function(r) { return r && r.id === _restoreSlideIdx && Array.isArray(r.data); });
							if (_slideRecs.length > 0) {
								var _rec = _slideRecs.reduce(function(a, b) { return (a.version || 0) > (b.version || 0) ? a : b; });
								var _vector = _restoreVectorInPlace(_rec.data.slice());
								await new Promise(function(resolve, reject) {
									var _txAw = _quizDB.transaction(["quiz"], "readwrite");
									var _storeAw = _txAw.objectStore("quiz");
									var _reqAw = _storeAw.put({ id: _rec.id, version: _rec.version, data: _vector });
									_reqAw.onsuccess = function() { resolve(); };
									_reqAw.onerror = function(e) { reject(new Error("put quiz failed: " + String(e))); };
								});
								window.__liaResetDebugWrite("tileControls: IDB quiz-store written");
								_sendRestore(_vector);
								_restored = true;
							}
							_quizDB.close();
						}

						// Path B: keyval-store/keyval fallback (observed in Firefox)
						if (!_restored) {
							var _kvDB = await _tryOpenDB("keyval-store");
							if (_kvDB && _kvDB.objectStoreNames.contains("keyval")) {
								var _kvData = await new Promise(function(resolve, reject) {
									var _txB = _kvDB.transaction(["keyval"], "readonly");
									var _stB = _txB.objectStore("keyval");
									var _rk = _stB.getAllKeys();
									var _rv = _stB.getAll();
									var _keys = null;
									var _vals = null;
									function _done() { if (_keys && _vals) resolve({ keys: _keys, vals: _vals }); }
									_rk.onsuccess = function(e) { _keys = e.target.result || []; _done(); };
									_rv.onsuccess = function(e) { _vals = e.target.result || []; _done(); };
									_rk.onerror = function() { reject(new Error("keyval getAllKeys failed")); };
									_rv.onerror = function() { reject(new Error("keyval getAll failed")); };
								});

								window.__liaResetDebugWrite("tileControls: keyval entries=" + _kvData.vals.length);
								for (var _ki = 0; _ki < _kvData.vals.length; _ki++) {
									var _val = _kvData.vals[_ki];
								window.__liaResetDebugWrite("tileControls: keyval[" + _ki + "]=" + JSON.stringify(_val).slice(0, 300));
									var _path = "";
									var _vec = null;

									function _findVectorDeep(node, path, depth) {
										if (_vec || depth > 7) return;
										if (_looksLikeVector(node)) {
											_vec = node;
											_path = path || "self";
											return;
										}
										if (!node || typeof node !== "object") return;
										if (Array.isArray(node)) {
											for (var ai = 0; ai < node.length; ai++) {
												_findVectorDeep(node[ai], (path ? path : "self") + "[" + ai + "]", depth + 1);
												if (_vec) return;
											}
											return;
										}
										for (var k in node) {
											if (!Object.prototype.hasOwnProperty.call(node, k)) continue;
											_findVectorDeep(node[k], (path ? path + "." : "") + k, depth + 1);
											if (_vec) return;
										}
									}

									_findVectorDeep(_val, "", 0);
									if (!_vec) {
										window.__liaResetDebugWrite("tileControls: keyval idx=" + _ki + " no vector; type=" + String(typeof _val));
										continue;
									}

									var _vecNew = _restoreVectorInPlace(_vec.slice());
									if (_path === "self") {
										_val = _vecNew;
									} else {
										var _segs = _path.replace(/\[(\d+)\]/g, ".$1").split(".").filter(function(s){ return s.length > 0; });
										var _cursor = _val;
										for (var si = 0; si < _segs.length - 1; si++) {
											var _seg = _segs[si];
											if (!_cursor || typeof _cursor !== "object") { _cursor = null; break; }
											_cursor = _cursor[_seg];
										}
										if (_cursor && typeof _cursor === "object") {
											_cursor[_segs[_segs.length - 1]] = _vecNew;
										}
									}

									await new Promise(function(resolve, reject) {
										var _txBw = _kvDB.transaction(["keyval"], "readwrite");
										var _stBw = _txBw.objectStore("keyval");
										var _reqBw = _stBw.put(_val, _kvData.keys[_ki]);
										_reqBw.onsuccess = function() { resolve(); };
										_reqBw.onerror = function(e) { reject(new Error("keyval put failed: " + String(e))); };
									});

									window.__liaResetDebugWrite("tileControls: keyval updated; idx=" + _ki + "; path=" + _path + "; solvedBefore=" + String(_vec[_restoreQuizId] && _vec[_restoreQuizId].solved));
									_sendRestore(_vecNew);
									_restored = true;
									break;
								}
								_kvDB.close();
							}
						}

						// If IDB/keyval both failed, send a synthetic vector directly.
						// Elm's mergeMap with randomize=Just calls reset(body.state) when solved=Open(0).
						// State format from LiaScript Block.Json: Multi Drop slot = [false, false, []]
						if (!_restored) {
							window.__liaResetDebugWrite("tileControls: no IDB match; sending synthetic vector");
							var _synVec = [];
							for (var _ssi = 0; _ssi <= _restoreQuizId; _ssi++) {
								_synVec.push({
									solved: 0,
									state: (_ssi === _restoreQuizId) ? { Multi: [[false, false, []]] } : { Multi: [] },
									trial: 0, hint: -1, error_msg: ""
								});
							}
							_sendRestore(_synVec);
						}
					} catch (_err) {
						window.__liaResetDebugWrite("tileControls: restore error: " + String(_err).slice(0, 100));
					}
				})();
			} else {
				window.__liaResetDebugWrite("tileControls: no valid track/LIA; skipping restore");
			}

			target.classList.remove("is-disabled", "lia-btn--disabled");
			target.style.removeProperty("pointer-events");
			target.style.removeProperty("opacity");

			// Poll until the chip leaves the target (Elm re-renders after restore).
			var _pollTileRoot = tileRoot;
			var _pollHost = host;
			var _pollAttempt = 0;
			var _pollMax = 12;       // 12  150ms = 1.8s max
			var _pollMs = 150;

			function _pollSettle() {
				_pollAttempt++;
				var pts = window.__liaResetGetTileQuizTargetsFromRoot(_pollTileRoot);
				var pss = window.__liaResetGetTileQuizSourcesFromRoot(_pollTileRoot);

				var stillIn = pss.filter(function (s) {
					var c = window.__liaResetResolveTileChipNode(s, _pollTileRoot, pts) || s;
					return pts.some(function (t) { return t === c || (t.contains && t.contains(c)); });
				});

				window.__liaResetDebugWrite(
					"poll#" + _pollAttempt + ": chipsInTarget=" + stillIn.length +
					"; tgt='" + String((pts[0] ? pts[0].textContent : "")).replace(/\s+/g, " ").trim().slice(0, 15) + "'"
				);

				var settled = stillIn.length === 0 || _pollAttempt >= _pollMax;
				if (!settled) {
					window.setTimeout(_pollSettle, _pollMs);
					return;
				}

				// Re-prime now that Elm has (hopefully) updated the DOM.
				window.__liaResetPrimeTileStructure(_pollHost);
				window.__liaResetPrimeDragHomes(_pollHost);

				var fTgts = window.__liaResetGetTileQuizTargetsFromRoot(_pollTileRoot);
				var fSrcs = window.__liaResetGetTileQuizSourcesFromRoot(_pollTileRoot);

				// Unlock chips that are outside targets.
				fSrcs.forEach(function (s) {
					var chip = window.__liaResetResolveTileChipNode(s, _pollTileRoot, fTgts) || s;
					var inTgt = fTgts.some(function (t) { return t === chip || (t.contains && t.contains(chip)); });
					var txt = String(chip.textContent || "").replace(/\s+/g, " ").trim().slice(0, 10);
					window.__liaResetDebugWrite("settle: chip='" + txt + "'; inTarget=" + (inTgt ? 1 : 0));
					if (!inTgt) {
						var ul = [chip].concat(Array.from(chip.querySelectorAll ? chip.querySelectorAll("[draggable]") : []));
						ul.forEach(function (n) {
							if (!n || !(n instanceof Element)) return;
							try { n.setAttribute("draggable", "true"); } catch (e) {}
							n.classList.remove("is-disabled", "lia-btn--disabled");
							n.style.removeProperty("pointer-events");
							n.style.removeProperty("opacity");
						});
					}
				});

				// Unlock targets.
				fTgts.forEach(function (lt) {
					lt.classList.remove("is-disabled", "lia-btn--disabled");
					lt.style.removeProperty("pointer-events");
					lt.style.removeProperty("opacity");
				});

				if (stillIn.length > 0) {
					window.__liaResetDebugWrite("settle: chip still in target after " + _pollAttempt + " polls");
					// KRITIK: Elm re-render hat Chip nicht bewegt. Wir MSSEN Chip raus aus
					// dem Target bringen  aber NIEMALS lschen, sonst geht die Kachel verloren.
					// Bestimme Source-Bank (Parent eines auenstehenden Chips) als Rescue-Ziel.
					var _outsideForBank = fSrcs.filter(function (sx) {
						var cx = window.__liaResetResolveTileChipNode(sx, _pollTileRoot, fTgts) || sx;
						return !fTgts.some(function (t) { return t === cx || (t.contains && t.contains(cx)); });
					});
					var _settleSourceBank = (_outsideForBank.length > 0 && _outsideForBank[0].parentElement) ? _outsideForBank[0].parentElement : null;

					stillIn.forEach(function (s) {
						var chip = window.__liaResetResolveTileChipNode(s, _pollTileRoot, fTgts) || s;
						var chipTxt = String(chip.textContent || "").replace(/\s+/g, " ").trim();
						var hasDupe = fSrcs.some(function (s2) {
							var chip2 = window.__liaResetResolveTileChipNode(s2, _pollTileRoot, fTgts) || s2;
							if (chip2 === chip) return false;
							var out2 = !fTgts.some(function (t) { return t === chip2 || (t.contains && t.contains(chip2)); });
							return out2 && String(chip2.textContent || "").replace(/\s+/g, " ").trim() === chipTxt;
						});

						var moveSucceeded = false;

						// Strategie 1: Original-Home ber UID-Mapping
						var chipUid = window.__liaResetEnsureNodeUid(chip);
						var chipHome = chipUid ? window.__liaResetDragHomeById[chipUid] : null;
						if (chipHome && chipHome.parentId) {
							try {
								var homeParent = _pollHost.querySelector("[data-reset-uid='" + String(chipHome.parentId) + "']");
								var inTgtHP = homeParent ? fTgts.some(function (t) { return t === homeParent || (t.contains && t.contains(homeParent)); }) : false;
								if (homeParent && homeParent instanceof Element && !inTgtHP) {
									var homeNextEl = chipHome.nextId ? _pollHost.querySelector("[data-reset-uid='" + String(chipHome.nextId) + "']") : null;
									homeParent.insertBefore(chip, (homeNextEl && homeNextEl.parentElement === homeParent) ? homeNextEl : null);
									window.__liaResetDebugWrite("settle: chip moved to home; text='" + chipTxt + "'; uid=" + chipUid);
									moveSucceeded = true;
								}
							} catch (e) {}
						}

						// Strategie 2: In den Source-Bank-Container verschieben
						if (!moveSucceeded && _settleSourceBank) {
							try {
								_settleSourceBank.appendChild(chip);
								window.__liaResetDebugWrite("settle: chip moved to sourceBank; text='" + chipTxt + "'");
								moveSucceeded = true;
							} catch (e) {}
						}

						// Strategie 3: Vor das Target im Tile-Root einhngen
						if (!moveSucceeded) {
							try {
								var tParent = fTgts[0] && fTgts[0].parentElement;
								var inTgtTP = tParent ? fTgts.some(function (t) { return t === tParent || (t.contains && t.contains(tParent)); }) : true;
								if (tParent && !inTgtTP) {
									tParent.insertBefore(chip, fTgts[0]);
									window.__liaResetDebugWrite("settle: chip moved to targetParent; text='" + chipTxt + "'");
									moveSucceeded = true;
								}
							} catch (e) {}
						}

						// NUR wenn Duplikat auerhalb existiert: lschen ist sicher
						if (!moveSucceeded && hasDupe) {
							try {
								if (chip.parentElement) chip.parentElement.removeChild(chip);
								window.__liaResetDebugWrite("settle: orphan chip removed (dupe outside); text='" + chipTxt + "'");
								moveSucceeded = true;
							} catch (e) {}
						}

						if (moveSucceeded) {
							try { chip.setAttribute("draggable", "true"); } catch (e) {}
							chip.classList.remove("is-disabled", "lia-btn--disabled");
							chip.style.removeProperty("pointer-events");
							chip.style.removeProperty("opacity");
							chip.style.removeProperty("display");
						} else {
							window.__liaResetDebugWrite("settle: chip rescue FAILED; text='" + chipTxt + "'  kept in place to preserve chip");
						}
					});

					// Target-Display zurcksetzen, sofern leer
					fTgts.forEach(function (lt) {
						if (lt && lt.querySelector && lt.querySelector("[draggable]") === null) {
							try { window.__liaResetSetTileTargetDisplay(lt, ""); } catch (e) {}
						}
					});
				}
			}

			window.setTimeout(_pollSettle, _pollMs);
			changed += 1;
		});

		const sources = window.__liaResetGetTileQuizSourcesFromRoot(tileRoot).map(function (node) {
			return window.__liaResetResolveTileChipNode(node, tileRoot, targets) || node;
		}).filter(function (node, idx, arr) {
			if (!node) return false;
			if (arr.indexOf(node) !== idx) return false;
			return !isInsideAnyTarget(node);
		});
		sources.forEach(function (source) {
			const unlockNodes = [source].concat(Array.from(source.querySelectorAll("[draggable], [onclick*='dragsource'], [onkeydown*='dragsource'], [ondragstart*='dragstart'], [ondragend*='dragend']")));
			unlockNodes.forEach(function (node) {
				if (!node || !(node instanceof Element)) return;
				node.style.display = "";
				try { node.setAttribute("aria-grabbed", "false"); } catch (e) {}
				try { node.setAttribute("draggable", "true"); } catch (e) {}
				try { node.removeAttribute("tabindex"); } catch (e) {}
				node.classList.remove("is-disabled", "lia-btn--disabled");
				node.style.removeProperty("pointer-events");
				node.style.removeProperty("opacity");
				node.style.removeProperty("filter");
				node.style.removeProperty("cursor");
			});
			changed += 1;
		});
	});

	if (changed > 0) {
		window.__liaResetDebugWrite("tile controls reset; roots=" + String(roots.length) + "; touched=" + String(changed));
	}

	// === ZUSTZLICHER SICHERHEITS-PASS: Verzgertes forciertes Cleanup ===
	// Falls nach dem Restore/Polling noch Chips in Targets sind (Restore fehlgeschlagen oder zu langsam)
	// Dieser Pass luft NACH dem Polling und stellt sicher, dass alle Chips wirklich raus sind.
	window.setTimeout(function () {
		const finalRoots = window.__liaResetCollectTileQuizRoots(host);
		let forcedRemoved = 0;
		
		finalRoots.forEach(function (tileRoot) {
			const targets = window.__liaResetGetTileQuizTargetsFromRoot(tileRoot);
			if (!targets.length) return;

			const allSrcs = window.__liaResetGetTileQuizSourcesFromRoot(tileRoot);
			function _safeIsInsideTarget(node) {
				for (let i = 0; i < targets.length; i++) {
					const t = targets[i];
					if (!t) continue;
					if (t === node || (t.contains && t.contains(node))) return true;
				}
				return false;
			}
			const safeOutside = allSrcs.filter(function (s) {
				const c = window.__liaResetResolveTileChipNode(s, tileRoot, targets) || s;
				return !_safeIsInsideTarget(c);
			});
			const safeBank = (safeOutside.length > 0 && safeOutside[0].parentElement) ? safeOutside[0].parentElement : null;

			targets.forEach(function (target) {
				if (!target || !target.querySelectorAll) return;

				const embeddedSources = Array.from(target.querySelectorAll("[draggable], [onclick*='dragsource'], [ondragstart], [ondragend]"))
					.map(function (node) {
						return window.__liaResetResolveTileChipNode(node, tileRoot, targets) || node;
					})
					.filter(function (node, idx, arr) {
						return !!node && node instanceof Element && arr.indexOf(node) === idx &&
							window.__liaResetIsTileQuizSource(node);
					});

				if (embeddedSources.length === 0) {
					const targetText = String((target.textContent || "")).replace(/\s+/g, " ").trim();
					if (targetText && targetText !== "?" && targetText !== "+") {
						try { window.__liaResetSetTileTargetDisplay(target, ""); } catch (e) {}
					}
					return;
				}

				embeddedSources.forEach(function (chip) {
					const chipText = String((chip.textContent || "")).replace(/\s+/g, " ").trim();
					// Duplikat auerhalb? Wenn ja, ist der Chip im Target ein Orphan und darf gelscht werden.
					const hasDupeOutside = safeOutside.some(function (s2) {
						const c2 = window.__liaResetResolveTileChipNode(s2, tileRoot, targets) || s2;
						return c2 !== chip && String(c2.textContent || "").replace(/\s+/g, " ").trim() === chipText;
					});
					let rescued = false;

					// Strategie 1: Original-Home ber UID
					try {
						const uid = window.__liaResetEnsureNodeUid(chip);
						const home = uid ? window.__liaResetDragHomeById[uid] : null;
						if (home && home.parentId) {
							const hp = host.querySelector("[data-reset-uid='" + String(home.parentId) + "']");
							if (hp && hp instanceof Element && !_safeIsInsideTarget(hp)) {
								const nx = home.nextId ? host.querySelector("[data-reset-uid='" + String(home.nextId) + "']") : null;
								hp.insertBefore(chip, (nx && nx.parentElement === hp) ? nx : null);
								window.__liaResetDebugWrite("tile safety: rescued to home; text='" + chipText + "'");
								forcedRemoved += 1;
								rescued = true;
							}
						}
					} catch (e) {}

					// Strategie 2: Source-Bank-Container
					if (!rescued && safeBank) {
						try {
							safeBank.appendChild(chip);
							window.__liaResetDebugWrite("tile safety: rescued to sourceBank; text='" + chipText + "'");
							forcedRemoved += 1;
							rescued = true;
						} catch (e) {}
					}

					// Strategie 3: Vor das Target einhngen
					if (!rescued) {
						try {
							const tp = target.parentElement;
							if (tp && !_safeIsInsideTarget(tp)) {
								tp.insertBefore(chip, target);
								window.__liaResetDebugWrite("tile safety: rescued to targetParent; text='" + chipText + "'");
								forcedRemoved += 1;
								rescued = true;
							}
						} catch (e) {}
					}

					// Nur wenn Duplikat auerhalb existiert: lschen ist sicher
					if (!rescued && hasDupeOutside) {
						try {
							if (chip.parentElement) chip.parentElement.removeChild(chip);
							window.__liaResetDebugWrite("tile safety: orphan removed (dupe outside); text='" + chipText + "'");
							forcedRemoved += 1;
							rescued = true;
						} catch (e) {}
					}

					if (rescued) {
						try { chip.setAttribute("draggable", "true"); } catch (e) {}
						chip.classList.remove("is-disabled", "lia-btn--disabled");
						chip.style.removeProperty("pointer-events");
						chip.style.removeProperty("opacity");
						chip.style.removeProperty("display");
					} else {
						window.__liaResetDebugWrite("tile safety: rescue FAILED; text='" + chipText + "'  kept in place to preserve chip");
					}
				});

				// Target leer? Display zurcksetzen.
				if (target.querySelector("[draggable]") === null) {
					try { window.__liaResetSetTileTargetDisplay(target, ""); } catch (e) {}
				}

				// Target wieder droppable machen
				target.classList.remove("is-disabled", "lia-btn--disabled");
				target.style.removeProperty("pointer-events");
				target.style.removeProperty("opacity");
			});
		});

		if (forcedRemoved > 0) {
			window.__liaResetDebugWrite("tile safety cleanup completed; chipsForced=" + String(forcedRemoved));
		}

		try { window.__liaResetRefreshTileTargetStyles(host); } catch (e) {}
	}, 2100);  // Nach dem Polling (max 1800ms) + Puffer

	return changed;
};

window.__liaResetResetHiddenInputs = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let changed = 0;
	const hidden = Array.from(host.querySelectorAll("input[type='hidden']"));
	hidden.forEach(function (el) {
		if (!el) return;
		const nextVal = String(el.defaultValue || el.getAttribute("value") || "");
		if (String(el.value || "") !== nextVal) {
			el.value = nextVal;
			changed += 1;
		}
		try { el.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
		try { el.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
	});
	return changed;
};

window.__liaResetApplyRehydrateMask = function (source) {
	window.__liaResetMaskToken = Number(window.__liaResetMaskToken || 0) + 1;
	const token = window.__liaResetMaskToken;
	if (document.body && document.body.classList) {
		document.body.classList.add("lia-reset-rehydrate-mask");
	}
	window.__liaResetDebugWrite("rehydrate mask on; source=" + String(source || "unknown") + "; token=" + String(token));
	return token;
};

window.__liaResetReleaseRehydrateMask = function (token, source) {
	if (token && Number(token) !== Number(window.__liaResetMaskToken || 0)) return;
	if (document.body && document.body.classList) {
		document.body.classList.remove("lia-reset-rehydrate-mask");
	}
	window.__liaResetDebugWrite("rehydrate mask off; source=" + String(source || "unknown") + "; token=" + String(token || 0));
};

window.__liaResetRestoreNonQuizTargetsFromCatalog = function (host, hash, reason) {
	if (!host || !host.querySelectorAll) return 0;
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	const bucket = window.__liaResetCatalog && window.__liaResetCatalog[targetHash] ? window.__liaResetCatalog[targetHash] : null;
	if (!bucket) return 0;
	let replaced = 0;
	const targets = window.__liaCollectResetTargets(host).filter(function (el) {
		if (!el || !el.matches) return false;
		// Exclude dropdowns from catalog restore - their state is managed separately
		return !el.matches(".lia-quiz, lia-quiz, .lia-dropdown");
	});
	targets.forEach(function (el) {
		const id = String(el.getAttribute("data-resetall-id") || "");
		const html = id && bucket[id] ? String(bucket[id] || "") : "";
		if (!id || !html) return;
		const parent = el.parentNode;
		if (!parent) return;
		const probe = document.createElement("div");
		probe.innerHTML = html;
		const fresh = probe.firstElementChild;
		if (!fresh) return;
		try {
			parent.replaceChild(fresh, el);
			replaced += 1;
		} catch (e) {}
	});
	if (replaced > 0) {
		window.__liaResetDebugWrite("non-quiz restore from catalog; hash=" + targetHash + "; count=" + String(replaced) + "; reason=" + String(reason || "unknown"));
	}
	return replaced;
};

window.__liaResetRestoreTilePristineRoots = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	if (window.__liaResetDisableTilePristineRestore !== false) {
		window.__liaResetDebugWrite("tile pristine restore disabled");
		return 0;
	}
	let replaced = 0;
	const roots = window.__liaResetCollectTileQuizRoots(host);
	roots.forEach(function (tileRoot) {
		if (!tileRoot || !(tileRoot instanceof Element) || !tileRoot.parentNode) return;
		const tileTargets = window.__liaResetGetTileQuizTargetsFromRoot(tileRoot);
		if (!tileTargets.length) return;
		
		// Safety check: only restore if this tile root owns exactly ONE quiz.
		// If it contains multiple quiz elements (e.g., rs__2_8 and rs__2_9), skip pristine restore
		// to avoid duplicating all of them.
		const quizzes = Array.from(tileRoot.querySelectorAll(".lia-quiz, lia-quiz"));
		if (quizzes.length !== 1) {
			window.__liaResetDebugWrite("tile pristine restore skipped (multiQuiz root); quizzes=" + String(quizzes.length));
			return;
		}
		
		const ownerId = String(tileRoot.getAttribute("data-reset-tile-owner") || "");
		let quizId = ownerId;
		if (!quizId) {
			const innerQuiz = window.__liaResetGetTileQuizInnerQuiz(tileRoot);
			quizId = String(innerQuiz && innerQuiz.getAttribute ? innerQuiz.getAttribute("data-resetall-id") || "" : "");
		}
		const html = String((window.__liaResetTilePristineByQuizId && window.__liaResetTilePristineByQuizId[quizId]) || "");
		if (!quizId || !html) return;

		const probe = document.createElement("div");
		probe.innerHTML = html;
		const fresh = probe.firstElementChild;
		if (!fresh) return;

		try {
			tileRoot.parentNode.replaceChild(fresh, tileRoot);
			replaced += 1;
		} catch (e) {}
	});
	if (replaced > 0) {
		window.__liaResetDebugWrite("tile pristine restore; count=" + String(replaced));
	}
	return replaced;
};

window.__liaResetDedupeTileOwners = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let removed = 0;
	const owners = Object.create(null);
	Array.from(host.querySelectorAll("[data-reset-tile-owner]")).forEach(function (el) {
		if (!el || !(el instanceof Element) || !el.parentNode) return;
		const owner = String(el.getAttribute("data-reset-tile-owner") || "").trim();
		if (!owner) return;
		if (!owners[owner]) {
			owners[owner] = el;
			return;
		}
		try {
			el.parentNode.removeChild(el);
			removed += 1;
		} catch (e) {}
	});
	if (removed > 0) {
		window.__liaResetDebugWrite("tile owner dedupe removed=" + String(removed));
	}
	return removed;
};

window.__liaResetCaptureQuizSignature = function (quizRoot) {
	if (!quizRoot || !(quizRoot instanceof Element)) return "";
	const fb = quizRoot.querySelector ? quizRoot.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
	const vals = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).map(function (el) {
		if (el.type === "checkbox" || el.type === "radio") return el.checked ? "1" : "0";
		if ("value" in el) return String(el.value || "");
		return String(el.textContent || "");
	}).join("|");
	return [
		String(quizRoot.className || ""),
		fb ? String(fb.className || "") : "",
		fb ? String((fb.textContent || "").trim()) : "",
		vals
	].join("||");
};

window.__liaResetQuizIconState = function (quizRoot) {
	if (!quizRoot || !quizRoot.classList) return "hidden";
	if (quizRoot.classList.contains("lia-reset-icon-success")) return "success";
	if (quizRoot.classList.contains("lia-reset-icon-error")) return "error";
	if (quizRoot.classList.contains("lia-reset-icon-resolve")) return "resolve";
	return "hidden";
};

window.__liaResetExtractQuizComments = function (quizRoot) {
	if (!quizRoot || !(quizRoot instanceof Element)) return [];
	const comments = [];
	let node = quizRoot.nextSibling;
	while (node) {
		if (node.nodeType === 8) {
			comments.push(String(node.nodeValue || ""));
		} else if (node.nodeType === 1) {
			break;
		} else if (node.nodeType === 3 && String(node.nodeValue || "").trim().length === 0) {
			node = node.nextSibling;
			continue;
		} else {
			break;
		}
		node = node.nextSibling;
	}
	return comments;
};

window.__liaResetRestoreQuizComments = function (quizRoot, comments) {
	if (!quizRoot || !(quizRoot instanceof Element) || !Array.isArray(comments)) return;
	if (comments.length === 0) return;

	const parent = quizRoot.parentNode;
	if (!parent) return;

	let insertPoint = quizRoot.nextSibling;
	const nodesToRemove = [];
	let node = insertPoint;
	while (node && node.nodeType === 8) {
		nodesToRemove.push(node);
		node = node.nextSibling;
	}
	nodesToRemove.forEach(function (n) { try { parent.removeChild(n); } catch (e) {} });

	comments.forEach(function (text) {
		const comment = document.createComment(String(text || ""));
		try { parent.insertBefore(comment, insertPoint); } catch (e) {}
	});
};

window.__liaResetCaptureDropdownState = function (host) {
	if (!host || !host.querySelectorAll) return {};
	const state = {};
	const dropdowns = Array.from(host.querySelectorAll(".lia-dropdown"));
	
	dropdowns.forEach(function (dropdown) {
		if (!dropdown || !(dropdown instanceof Element)) return;
		const id = String(dropdown.getAttribute("data-resetall-id") || "");
		if (!id) return;
		
		const selectedEl = dropdown.querySelector(".lia-dropdown__selected");
		const selectedText = selectedEl ? String((selectedEl.textContent || "")).trim() : "";
		const isDisabled = dropdown.classList && dropdown.classList.contains("is-disabled");
		
		// Try to find a hidden input that stores the value
		const hiddenInput = dropdown.querySelector("input[type='hidden']");
		const hiddenValue = hiddenInput ? String(hiddenInput.value || "") : "";
		
		state[id] = {
			selectedText: selectedText,
			selectedValue: hiddenValue,
			isDisabled: !!isDisabled,
		};
	});
	
	return state;
};

window.__liaResetRestoreDropdownState = function (host, savedState) {
	if (!host || !host.querySelectorAll || !savedState) return 0;
	let restored = 0;
	
	const dropdowns = Array.from(host.querySelectorAll(".lia-dropdown"));
	dropdowns.forEach(function (dropdown) {
		if (!dropdown || !(dropdown instanceof Element)) return;
		const id = String(dropdown.getAttribute("data-resetall-id") || "");
		if (!id || !savedState[id]) return;
		
		const saved = savedState[id];
		const selectedEl = dropdown.querySelector(".lia-dropdown__selected");
		if (!selectedEl) return;
		
		// Restore selected text
		if (saved.selectedText) {
			const selectedSpan = selectedEl.querySelector("span");
			if (selectedSpan) {
				selectedSpan.textContent = saved.selectedText;
			} else {
				selectedEl.textContent = saved.selectedText;
			}
		}
		
		// Restore hidden input value if it exists
		if (saved.selectedValue) {
			const hiddenInput = dropdown.querySelector("input[type='hidden']");
			if (hiddenInput) {
				hiddenInput.value = saved.selectedValue;
				try { hiddenInput.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
				try { hiddenInput.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
			}
		}
		
		// Restore disabled state
		if (saved.isDisabled && dropdown.classList) {
			dropdown.classList.add("is-disabled");
		} else if (!saved.isDisabled && dropdown.classList) {
			dropdown.classList.remove("is-disabled");
		}
		
		restored += 1;
	});
	
	return restored;
};

window.__liaResetCaptureSlideState = function (hash, host, reason) {
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	const root = host && host.querySelectorAll ? host : window.__liaGetResetHost(null);
	if (!root || !root.querySelectorAll) return false;

	window.__liaPrimeSlideResetCatalog(null);

	const quizzes = Array.from(root.querySelectorAll(".lia-quiz, lia-quiz"));
	const rows = quizzes.map(function (quiz, idx) {
		const quizId = String(quiz.getAttribute("data-resetall-id") || ("rs_tmp_" + String(idx + 1)));
		const check = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
		const resolve = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
		const feedback = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});

		return {
			quizId: quizId,
			solved: !!(quiz.classList && quiz.classList.contains("solved")),
			resolved: !!(quiz.classList && quiz.classList.contains("resolved")),
			open: !!(quiz.classList && quiz.classList.contains("open")),
			icon: window.__liaResetQuizIconState(quiz),
			feedbackText: String((feedback && feedback.textContent) || ""),
			feedbackKind: feedback && feedback.classList && feedback.classList.contains("text-success")
				? "success"
				: feedback && feedback.classList && feedback.classList.contains("text-error")
					? "error"
					: feedback && feedback.classList && feedback.classList.contains("text-disabled")
						? "disabled"
						: "",
			checkDisabled: !!(check && (check.disabled || check.getAttribute("aria-disabled") === "true" || check.hasAttribute("disabled"))),
			resolveDisabled: !!(resolve && (resolve.disabled || resolve.getAttribute("aria-disabled") === "true" || resolve.hasAttribute("disabled"))),
			checkText: String((check && check.textContent) || ""),
			resolveText: String((resolve && resolve.textContent) || ""),
			quizComments: window.__liaResetExtractQuizComments(quiz),
			values: controls.map(function (el) {
				const t = String(el.type || "").toLowerCase();
				if (t === "checkbox" || t === "radio") {
					const isOutcome = !!(quiz.classList && (quiz.classList.contains("solved") || quiz.classList.contains("resolved")));
					const touched = window.__liaResetWasChoiceInputTouched(quizId);
					if (!isOutcome && !touched) return "0";
					return el.checked ? "1" : "0";
				}
				if ("value" in el) return String(el.value || "");
				return String(el.textContent || "");
			}),
			fieldStates: controls.map(function (el) {
				return {
					disabled: !!el.disabled,
					readOnly: !!el.readOnly,
				};
			}),
		};
	});

	window.__liaResetStateByHash[targetHash] = {
		ts: Date.now(),
		hash: targetHash,
		rows: rows,
		reason: String(reason || "capture"),
	};

	window.__liaResetDebugWrite(
		"state captured; hash=" + targetHash +
		"; quizzes=" + String(rows.length) +
		"; reason=" + String(reason || "capture")
	);
	return true;
};

window.__liaResetApplySlideState = function (hash, host, reason) {
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	const root = host && host.querySelectorAll ? host : window.__liaGetResetHost(null);
	const snap = window.__liaResetStateByHash[targetHash];
	if (!root || !root.querySelectorAll || !snap || !Array.isArray(snap.rows) || !snap.rows.length) return false;

	window.__liaPrimeSlideResetCatalog(null);
	window.__liaResetPrimeDragHomes(root);

	const quizzes = Array.from(root.querySelectorAll(".lia-quiz, lia-quiz"));
	let applied = 0;

	function applyBtnState(btn, disabled, text) {
		if (!btn) return;
		if (String(text || "").length > 0) btn.textContent = String(text);
		if (disabled) {
			try { btn.disabled = true; } catch (e) {}
			btn.setAttribute("disabled", "disabled");
			btn.setAttribute("aria-disabled", "true");
			btn.classList.add("is-disabled", "lia-btn--disabled");
			btn.style.pointerEvents = "none";
			btn.style.opacity = "0.6";
		} else {
			try { btn.disabled = false; } catch (e) {}
			btn.removeAttribute("disabled");
			btn.removeAttribute("aria-disabled");
			btn.classList.remove("is-disabled", "lia-btn--disabled");
			btn.removeAttribute("tabindex");
			btn.style.removeProperty("pointer-events");
			btn.style.removeProperty("opacity");
		}
	}

	quizzes.forEach(function (quiz, idx) {
		if (!quiz || !(quiz instanceof Element)) return;
		const quizId = String(quiz.getAttribute("data-resetall-id") || "");
		let row = null;
		if (quizId) {
			row = snap.rows.find(function (r) { return String(r && r.quizId || "") === quizId; }) || null;
		}
		if (!row && idx < snap.rows.length) row = snap.rows[idx];
		if (!row) return;

		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});
		controls.forEach(function (el, cIdx) {
			const saved = String((row.values || [])[cIdx] || "");
			const t = String(el.type || "").toLowerCase();
			if (t === "checkbox" || t === "radio") {
				const isOutcome = !!(row.solved || row.resolved);
				const touched = window.__liaResetWasChoiceInputTouched(row.quizId);
				// Thaw first so the native setter can actually update C++ state.
				window.__liaResetThawChoiceInput(el);
				el.checked = isOutcome || touched ? (saved === "1") : false;
				if (!el.checked) {
					try { el.defaultChecked = false; } catch (e) {}
					el.removeAttribute("checked");
				}
			} else if ("value" in el) {
				el.value = saved;
			} else {
				el.textContent = saved;
			}
			const savedState = (row.fieldStates || [])[cIdx] || { disabled: false, readOnly: false };
			try { el.disabled = !!savedState.disabled; } catch (e) {}
			try { el.readOnly = !!savedState.readOnly; } catch (e) {}
			if (savedState.disabled) {
				el.setAttribute("disabled", "disabled");
			} else {
				el.removeAttribute("disabled");
			}
			if (savedState.readOnly) {
				el.setAttribute("readonly", "readonly");
			} else {
				el.removeAttribute("readonly");
			}
			try { el.style.borderColor = ""; el.style.outline = ""; } catch (e) {}
			try {
				el.classList.remove(
					"is-success", "is-failure", "is-error", "is-warning",
					"lia-input--disabled", "lia-input--success", "lia-input--failure",
					"lia-input--error", "is-disabled"
				);
			} catch (e) {}
		});

		quiz.classList.remove("solved", "resolved", "open");
		if (row.solved) quiz.classList.add("solved");
		else if (row.resolved) quiz.classList.add("resolved");
		else quiz.classList.add(row.open ? "open" : "open");

		if (!row.solved && !row.resolved) {
			controls.forEach(function (el) {
				try { el.disabled = false; } catch (e) {}
				el.removeAttribute("disabled");
			});
		}

		const gateStats = window.__liaResetEnforceTimerByQuizState(quiz);
		if (gateStats && (gateStats.gatedOff > 0 || gateStats.restored > 0)) {
			window.__liaResetDebugWrite(
				"state-restore: timer gated; quiz=" + String(quizId) +
				"; off=" + String(gateStats.gatedOff) +
				"; restored=" + String(gateStats.restored)
			);
		}

		window.__liaResetApplyQuizIconState(quiz, String(row.icon || "hidden"));

		const feedback = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		if (feedback && feedback.classList) {
			feedback.classList.remove("text-success", "text-error", "text-disabled");
			if (row.feedbackKind === "success") feedback.classList.add("text-success");
			if (row.feedbackKind === "error") feedback.classList.add("text-error");
			if (row.feedbackKind === "disabled") feedback.classList.add("text-disabled");
			feedback.textContent = String(row.feedbackText || "");
		}

		const check = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
		const resolve = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
		applyBtnState(check, !!row.checkDisabled, row.checkText);
		applyBtnState(resolve, !!row.resolveDisabled, row.resolveText);
		window.__liaResetSyncResolveVisibility(quiz);

		// WICHTIG: Comments (mit Timer-Attributen) sollten NUR fr OFFENE Quizzes wiederhergestellt werden!
		// Nicht fr bereits solved/resolved Quizzes, sonst triggert das Timer-Reinitialisierung
		if (!row.solved && !row.resolved && row.quizComments && Array.isArray(row.quizComments)) {
			window.__liaResetRestoreQuizComments(quiz, row.quizComments);
			window.__liaResetDebugWrite("state-restore: comments restored (open quiz only); quiz=" + String(quizId) + "; count=" + String(row.quizComments.length));
		} else if (row.quizComments && Array.isArray(row.quizComments) && row.quizComments.length > 0) {
			window.__liaResetDebugWrite("state-restore: comments skipped (solved/resolved); quiz=" + String(quizId) + "; solved=" + String(row.solved) + "; resolved=" + String(row.resolved));
		}

		applied += 1;
	});

	// Dropdowns entsperren die LiaScript beim Re-Render wieder gesperrt hat
	Array.from(root.querySelectorAll(".lia-dropdown.is-disabled")).forEach(function (dd) {
		dd.classList.remove("is-disabled");
		dd.style.removeProperty("pointer-events");
		dd.style.removeProperty("cursor");
		dd.style.removeProperty("opacity");
		dd.style.removeProperty("filter");
		window.__liaResetDebugWrite("state-restore: dropdown unlocked; id=" + String(dd.getAttribute("data-resetall-id") || ""));
	});

	if (applied > 0) {
		window.__liaResetRestoreDragHomes(root);
		window.__liaResetResetSelectControls(root);
		window.__liaResetDebugWrite(
			"state restored; hash=" + targetHash +
			"; quizzes=" + String(applied) +
			"; reason=" + String(reason || "apply")
		);
		// Re-freeze untouched choice inputs so LiaScript's re-render can't restore old state.
		window.__liaResetSanitizeUntouchedChoiceQuizzes(root, "apply-state-prime");
		window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes(root, "apply-state");
		return true;
	}

	return false;
};

window.__liaResetControlValue = function (el) {
	if (!el) return "";
	const t = String(el.type || "").toLowerCase();
	if (t === "checkbox" || t === "radio") return el.checked ? "1" : "0";
	const hasContentEditable = !!(el.hasAttribute && el.hasAttribute("contenteditable"));
	const ceAttr = String(el.getAttribute && el.getAttribute("contenteditable") || "").toLowerCase();
	const isEditableBox = hasContentEditable && ceAttr !== "false";
	if (isEditableBox || String(el.getAttribute && el.getAttribute("role") || "").toLowerCase() === "textbox") {
		return String((el.innerText || el.textContent || "")).trim();
	}
	if ("value" in el) return String(el.value || "").trim();
	return String(el.textContent || "").trim();
};

window.__liaResetFieldValueForDebug = function (el) {
	if (!el) return "";
	const t = String(el.type || "").toLowerCase();
	if (t === "checkbox" || t === "radio") return el.checked ? "1" : "0";
	const hasContentEditable = !!(el.hasAttribute && el.hasAttribute("contenteditable"));
	const ceAttr = String(el.getAttribute && el.getAttribute("contenteditable") || "").toLowerCase();
	const isEditableBox = hasContentEditable && ceAttr !== "false";
	if (isEditableBox || String(el.getAttribute && el.getAttribute("role") || "").toLowerCase() === "textbox") {
		return String((el.innerText || el.textContent || "")).trim();
	}
	if ("value" in el) return String(el.value || "");
	return String(el.textContent || "");
};

window.__liaResetIsTextualEditableField = function (field) {
	if (!field || !(field instanceof Element)) return false;
	const tag = String(field.tagName || "").toLowerCase();
	const type = String(field.type || "").toLowerCase();
	if (tag === "textarea") return true;
	if (tag === "input") {
		if (!type) return true;
		return !(type === "checkbox" || type === "radio" || type === "hidden" || type === "button" || type === "submit" || type === "reset" || type === "image" || type === "file" || type === "range" || type === "color" || type === "date" || type === "datetime-local" || type === "month" || type === "week" || type === "time");
	}
	const hasContentEditable = !!(field.hasAttribute && field.hasAttribute("contenteditable"));
	const ceAttr = String(field.getAttribute && field.getAttribute("contenteditable") || "").toLowerCase();
	if (hasContentEditable && ceAttr !== "false") return true;
	if (String(field.getAttribute && field.getAttribute("role") || "").toLowerCase() === "textbox") return true;
	return false;
};

window.__liaResetRememberTextField = function (field, source) {
	if (!field || !(field instanceof Element)) return;
	if (!window.__liaResetIsTextualEditableField(field)) return;
	const live = String(window.__liaResetFieldValueForDebug(field) || "");
	const byField = window.__liaResetLastTextByField || null;
	if (byField && typeof byField.get === "function" && typeof byField.set === "function") {
		const rowByField = byField.get(field) || { last: "", lastNonEmpty: "", ts: 0, source: "" };
		rowByField.last = live;
		if (String(live || "").trim().length > 0) rowByField.lastNonEmpty = live;
		rowByField.ts = Date.now();
		rowByField.source = String(source || "unknown");
		byField.set(field, rowByField);
		return;
	}
	const uid = window.__liaResetEnsureNodeUid(field);
	if (!uid) return;
	const store = window.__liaResetLastTextByUid || (window.__liaResetLastTextByUid = Object.create(null));
	const row = store[uid] || { last: "", lastNonEmpty: "", ts: 0, source: "" };
	row.last = live;
	if (String(live || "").trim().length > 0) row.lastNonEmpty = live;
	row.ts = Date.now();
	row.source = String(source || "unknown");
	store[uid] = row;
};

window.__liaResetGetRememberedFieldValue = function (field) {
	if (!field || !(field instanceof Element)) return "";
	const byField = window.__liaResetLastTextByField || null;
	let row = null;
	if (byField && typeof byField.get === "function") {
		row = byField.get(field) || null;
	}
	if (!row) {
		const uid = window.__liaResetEnsureNodeUid(field);
		if (uid) {
			const store = window.__liaResetLastTextByUid || Object.create(null);
			row = store[uid] || null;
		}
	}
	if (!row) return "";
	const current = String(window.__liaResetFieldValueForDebug(field) || "");
	if (String(current || "").trim().length > 0) return current;
	if (String(row.lastNonEmpty || "").trim().length > 0) return String(row.lastNonEmpty || "");
	return String(row.last || "");
};

window.__liaResetCollectDiktatEditableFields = function (host) {
	if (!host || !host.querySelectorAll) return [];
	const out = [];
	const seen = new Set();
	const hiddenHintSelector = "span.lia-diktat-measure, span[style*='left: -9999px'], span[style*='left:-9999px'], span[style*='left: -10000px'], span[style*='left:-10000px']";
	window.__liaResetDiktatFieldUidSet = Object.create(null);

	function addField(field) {
		if (!field || !(field instanceof Element)) return;
		if (!window.__liaResetIsTextualEditableField(field)) return;
		if (seen.has(field)) return;
		seen.add(field);
		const setByField = window.__liaResetDiktatFieldSet || null;
		if (setByField && typeof setByField.add === "function") {
			setByField.add(field);
		}
		const uid = window.__liaResetEnsureNodeUid(field);
		if (uid) window.__liaResetDiktatFieldUidSet[uid] = 1;
		out.push(field);
	}

	function collectFromScope(scope) {
		if (!scope || !scope.querySelectorAll) return;
		Array.from(scope.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).forEach(addField);
	}

	function collectNearestInputFromHint(hint) {
		if (!hint || !(hint instanceof Element)) return;
		let cur = hint.parentElement;
		let hops = 0;
		while (cur && hops < 5) {
			const local = cur.querySelector("input.lia-quiz__input, textarea.lia-quiz__input, input[aria-label='quiz answer'], textarea[aria-label='quiz answer']");
			if (local) {
				addField(local);
				return;
			}
			cur = cur.parentElement;
			hops += 1;
		}

		let sib = hint.parentElement ? hint.parentElement.nextElementSibling : null;
		let s = 0;
		while (sib && s < 8) {
			const near = sib.matches && sib.matches("input.lia-quiz__input, textarea.lia-quiz__input, input[aria-label='quiz answer'], textarea[aria-label='quiz answer']")
				? sib
				: (sib.querySelector ? sib.querySelector("input.lia-quiz__input, textarea.lia-quiz__input, input[aria-label='quiz answer'], textarea[aria-label='quiz answer']") : null);
			if (near) {
				addField(near);
				return;
			}
			sib = sib.nextElementSibling;
			s += 1;
		}
	}

	Array.from(host.querySelectorAll(".lia-diktat, [id^='lia-diktat-']")).forEach(collectFromScope);

	const hiddenHints = Array.from(host.querySelectorAll(hiddenHintSelector));
	hiddenHints.forEach(function (hint) {
		const parent = hint && hint.parentElement ? hint.parentElement : null;
		if (parent) collectFromScope(parent);
		const near = hint && hint.closest ? hint.closest("label, .lia-quiz__item, .lia-quiz__input-wrap, .lia-quiz") : null;
		if (near && near !== parent) collectFromScope(near);
		collectNearestInputFromHint(hint);
	});

	return out;
};

window.__liaResetIsDiktatField = function (field) {
	if (!field || !(field instanceof Element)) return false;
	if (!window.__liaResetIsTextualEditableField(field)) return false;
	const setByField = window.__liaResetDiktatFieldSet || null;
	if (setByField && typeof setByField.has === "function" && setByField.has(field)) return true;
	const uid = window.__liaResetEnsureNodeUid(field);
	if (uid && window.__liaResetDiktatFieldUidSet && window.__liaResetDiktatFieldUidSet[uid]) return true;
	const hiddenHintSelector = "span.lia-diktat-measure, span[style*='left: -9999px'], span[style*='left:-9999px'], span[style*='left: -10000px'], span[style*='left:-10000px']";
	const host = field.closest ? field.closest(".lia-diktat, [id^='lia-diktat-']") : null;
	if (host) return true;
	const hintByOwnContainer = field.parentElement && field.parentElement.querySelector
		? field.parentElement.querySelector(hiddenHintSelector)
		: null;
	if (hintByOwnContainer) return true;
	let cur = field.parentElement;
	let hops = 0;
	while (cur && hops < 8) {
		if (cur.querySelector) {
			const hint = cur.querySelector(hiddenHintSelector);
			if (hint) return true;
		}
		cur = cur.parentElement;
		hops += 1;
	}
	return false;
};

window.__liaResetGetDiktatValues = function (scope) {
	const root = scope && scope.querySelectorAll ? scope : null;
	if (!root) return [];
	const fields = Array.from(root.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']"))
		.filter(function (field) { return window.__liaResetIsDiktatField(field); });
	return fields.map(function (field, idx) {
		const live = String(window.__liaResetFieldValueForDebug(field) || "");
		const remembered = String(window.__liaResetGetRememberedFieldValue(field) || "");
		return {
			i: idx,
			value: String(live || remembered || ""),
			live: live,
			remembered: remembered,
		};
	});
};

window.__liaResetCollectEditableFields = function (host) {
	if (!host || !host.querySelectorAll) return [];
	const selector = "input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']";
	const targets = window.__liaCollectResetTargets(host);
	const pool = targets.length
		? Array.from(host.querySelectorAll(selector)).filter(function (field) {
			return targets.some(function (t) { return t && t.contains && t.contains(field); });
		})
		: Array.from(host.querySelectorAll(selector));

	const diktatPool = window.__liaResetCollectDiktatEditableFields(host);
	const merged = pool.slice();
	diktatPool.forEach(function (field) {
		if (merged.indexOf(field) < 0) merged.push(field);
	});

	return merged.filter(function (field) {
		const isDiktat = window.__liaResetIsDiktatField(field);
		const type = String(field.type || "").toLowerCase();
		const isHidden = type === "hidden";
		const isControlInput = type === "button" || type === "submit" || type === "reset" || type === "image" || type === "file";
		const isReadonlyDisplay = field.hasAttribute("readonly") || field.getAttribute("aria-readonly") === "true";
		const isNonEditableRole = field.getAttribute("contenteditable") === "false";
		if (isDiktat) return !(isHidden || isControlInput);
		return !(isHidden || isControlInput || isReadonlyDisplay || isNonEditableRole);
	});
};

window.__liaResetTraceFields = function (host, tag) {
	if (!window.__liaResetTraceEnabled) return;
	if (!host || !host.querySelectorAll) return;
	const rows = window.__liaResetCollectEditableFields(host).map(function (field, idx) {
		const quiz = field.closest ? field.closest(".lia-quiz, lia-quiz") : null;
		const quizId = quiz ? String(quiz.getAttribute("data-resetall-id") || "") : "";
		const expected = window.__liaResetExtractExpectedFromControl(field);
		const label = String(field.getAttribute("aria-label") || field.getAttribute("name") || field.id || "");
		return {
			i: idx,
			quiz: quizId,
			tag: String(field.tagName || "").toLowerCase(),
			type: String(field.type || "").toLowerCase(),
			label: label.slice(0, 40),
			value: window.__liaResetFieldValueForDebug(field).slice(0, 80),
			expected: String(expected || "").slice(0, 80),
		};
	});
	window.__liaResetDebugWrite(String(tag || "field-trace") + "; count=" + String(rows.length) + "; data=" + JSON.stringify(rows));
};

window.__liaResetTraceQuizOutcomes = function (host, tag) {
	if (!window.__liaResetTraceEnabled) return;
	if (!host || !host.querySelectorAll) return;
	const rows = Array.from(host.querySelectorAll(".lia-quiz, lia-quiz")).map(function (quiz, idx) {
		const quizId = String(quiz.getAttribute("data-resetall-id") || "");
		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});
		let comparable = 0;
		let equal = 0;
		const pairs = controls.map(function (ctrl, cIdx) {
			const got = window.__liaResetControlValue(ctrl);
			const ex = String(window.__liaResetExtractExpectedFromControl(ctrl) || "").trim();
			const canCompare = !!ex;
			if (canCompare) comparable += 1;
			if (canCompare && got === ex) equal += 1;
			return {
				i: cIdx,
				got: String(got || "").slice(0, 60),
				expected: ex.slice(0, 60),
				match: canCompare ? (got === ex ? 1 : 0) : -1,
			};
		});
		const fb = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		const fbKind = fb && fb.classList && fb.classList.contains("text-success")
			? "success"
			: fb && fb.classList && fb.classList.contains("text-error")
				? "error"
				: fb && fb.classList && fb.classList.contains("text-disabled")
					? "disabled"
					: "";
		const inferred = comparable > 0 ? (equal === comparable ? "success" : "error") : "unknown";
		return {
			i: idx,
			quiz: quizId,
			cls: String(quiz.className || "").slice(0, 80),
			solved: quiz.classList && quiz.classList.contains("solved") ? 1 : 0,
			resolved: quiz.classList && quiz.classList.contains("resolved") ? 1 : 0,
			feedback: fbKind,
			inferred: inferred,
			comparable: comparable,
			equal: equal,
			pairs: pairs,
		};
	});
	window.__liaResetDebugWrite(String(tag || "quiz-trace") + "; quizzes=" + String(rows.length) + "; data=" + JSON.stringify(rows));
};

window.__liaResetActiveSlideSignature = function () {
	const host = window.__liaGetResetHost(null);
	if (!host) return "none";
	const id = String(host.getAttribute ? (host.getAttribute("id") || "") : "");
	const idx = String(host.getAttribute ? (host.getAttribute("data-slide") || host.getAttribute("data-index") || "") : "");
	const aria = String(host.getAttribute ? (host.getAttribute("aria-hidden") || "") : "");
	const headingEl = host.querySelector ? host.querySelector("h1, h2, h3") : null;
	const heading = String((headingEl && headingEl.textContent) || "").trim().slice(0, 60);
	const quizCount = host.querySelectorAll ? host.querySelectorAll(".lia-quiz, lia-quiz").length : 0;
	const cls = String(host.className || "").slice(0, 60);
	return [id, idx, aria, heading, cls, String(quizCount)].join("|");
};

window.__liaResetNeedsRehydrate = function (host) {
	if (!host || !host.querySelectorAll) return false;

	const quizzes = Array.from(host.querySelectorAll(".lia-quiz, lia-quiz"));
	for (let i = 0; i < quizzes.length; i++) {
		const quiz = quizzes[i];
		if (!quiz || !quiz.classList) continue;
		if (quiz.classList.contains("solved") || quiz.classList.contains("resolved")) return true;
		const fb = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		if (fb && String((fb.textContent || "").trim()).length > 0) return true;
	}

	const fields = window.__liaResetCollectEditableFields(host);
	for (let j = 0; j < fields.length; j++) {
		const val = String(window.__liaResetFieldValueForDebug(fields[j]) || "").trim();
		if (val.length > 0) return true;
	}

	// Auch prfen ob ein Dropdown noch gesperrt ist
	const lockedDropdowns = Array.from(host.querySelectorAll(".lia-dropdown.is-disabled"));
	if (lockedDropdowns.length > 0) return true;

	return false;
};

window.__liaResetScheduleRehydrate = function (hash, source) {
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	if (!window.__liaResetDoneByHash[targetHash]) return;

	const state = window.__liaResetRehydrateState || (window.__liaResetRehydrateState = { token: 0, lastHash: "", lastStartTs: 0 });
	const now = Date.now();
	if (state.lastHash === targetHash && now - Number(state.lastStartTs || 0) < 220) {
		window.__liaResetDebugWrite("rehydrate schedule skipped (debounced); hash=" + targetHash + "; source=" + String(source || "unknown"));
		return;
	}
	state.token += 1;
	state.lastHash = targetHash;
	state.lastStartTs = now;
	const token = state.token;
	const scheduleTs = now;
	let restoredOnce = false;

	window.__liaResetDebugWrite("rehydrate schedule start; hash=" + targetHash + "; source=" + String(source || "unknown"));
	[80, 260, 620].forEach(function (ms) {
		window.setTimeout(function () {
			if (!window.__liaResetRehydrateState || window.__liaResetRehydrateState.token !== token) return;
			if ((window.__liaGetResetHash() || "#1") !== targetHash) return;
			if (!window.__liaResetDoneByHash[targetHash]) return;
			const host = window.__liaGetResetHost(null);
			const active = document && document.activeElement ? document.activeElement : null;
			const typingActive = !!(host && active && host.contains && host.contains(active) && window.__liaResetIsTextualEditableField(active));
			if (typingActive) {
				window.__liaResetDebugWrite(
					"rehydrate pass skipped (active typing field); hash=" + targetHash +
					"; source=" + String(source || "unknown") +
					"; delay=" + String(ms)
				);
				return;
			}
			if (window.__liaResetInteractionState && Number(window.__liaResetInteractionState.lastTs || 0) > scheduleTs) {
				window.__liaResetDebugWrite(
					"rehydrate pass skipped (user interaction); hash=" + targetHash +
					"; source=" + String(source || "unknown") +
					"; delay=" + String(ms)
				);
				return;
			}
			window.__liaPrimeSlideResetCatalog(null);
			if (restoredOnce) {
				window.__liaResetDebugWrite(
					"rehydrate pass skipped (state already restored); hash=" + targetHash +
					"; source=" + String(source || "unknown") +
					"; delay=" + String(ms)
				);
				return;
			}
			if (window.__liaResetApplySlideState(targetHash, host, "rehydrate-" + String(source || "nav") + "-" + String(ms) + "ms")) {
				restoredOnce = true;
				return;
			}
			if (!window.__liaResetNeedsRehydrate(host)) {
				window.__liaResetDebugWrite(
					"rehydrate pass skipped (already stable); hash=" + targetHash +
					"; source=" + String(source || "unknown") +
					"; delay=" + String(ms)
				);
				return;
			}
			window.__liaResetPass(null, "rehydrate-" + String(source || "nav") + "-" + String(ms) + "ms");
		}, ms);
	});
};

window.__liaResetMarkQuizInteraction = function (source) {
	const state = window.__liaResetInteractionState || (window.__liaResetInteractionState = { lastTs: 0, installed: false });
	state.lastTs = Date.now();
	window.__liaResetDebugWrite("quiz interaction; source=" + String(source || "unknown"));
};

window.__liaResetInstallInteractionGuard = function () {
	const state = window.__liaResetInteractionState || (window.__liaResetInteractionState = { lastTs: 0, installed: false });
	if (state.installed) return;
	state.installed = true;

	document.addEventListener("input", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		window.__liaResetRememberTextField(t, "input");
		if (!t.closest(".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz, .lia-dropdown")) return;
		window.__liaResetMarkQuizInteraction("input");
		window.__liaResetMarkQuizTouched(t, "input");
		let shouldSanitizeChoice = false;
		const q = t.closest(".lia-quiz, lia-quiz");
		if (q) {
			const qid = String(q.getAttribute("data-resetall-id") || "");
			const tag = String(t.tagName || "").toLowerCase();
			const type = String(t.type || "").toLowerCase();
			const isChoice = type === "checkbox" || type === "radio" || tag === "select";
			shouldSanitizeChoice = isChoice;
			if (qid && isChoice) {
				window.__liaResetChoiceInputTouchById[qid] = Date.now();
				window.__liaResetDebugWrite("choice input touched; id=" + qid + "; type=" + type + "; tag=" + tag);
			}
		}
		if (shouldSanitizeChoice) {
			const host = window.__liaGetResetHost(t);
			window.__liaResetSanitizeUntouchedChoiceQuizzes(host, "interaction-input");
			window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes(host, "interaction-input");
		}
	}, true);

	document.addEventListener("change", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		window.__liaResetRememberTextField(t, "change");
	}, true);

	document.addEventListener("blur", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		window.__liaResetRememberTextField(t, "blur");
	}, true);

	document.addEventListener("keyup", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		window.__liaResetRememberTextField(t, "keyup");
	}, true);

	document.addEventListener("click", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		
		// Handle dropdown option clicks
		const dropdownOption = t.closest(".lia-dropdown__option");
		if (dropdownOption) {
			const dropdown = dropdownOption.closest(".lia-dropdown");
			if (dropdown) {
				const dropdownId = String(dropdown.getAttribute("data-resetall-id") || "");
				if (dropdownId) {
					window.__liaResetQuizTouchById[dropdownId] = Date.now();
					window.__liaResetMarkQuizInteraction("dropdown-click");
					window.__liaResetDebugWrite("dropdown option clicked; id=" + dropdownId);
				}
			}
		}

		// Dropdown-Toggle: Falls Elm den Klick auf .lia-dropdown__selected ignoriert
		// (weil kein Handler registriert), ffnen/schlieen wir die Optionen manuell.
		const selectedToggle = t.closest(".lia-dropdown__selected");
		if (selectedToggle && !dropdownOption) {
			const ddForToggle = selectedToggle.closest(".lia-dropdown");
			if (ddForToggle && !ddForToggle.classList.contains("is-disabled")) {
				const optionsEl = ddForToggle.querySelector(".lia-dropdown__options");
				const wasVisible = !!(optionsEl && optionsEl.classList.contains("is-visible"));
				window.setTimeout(function () {
					if (!optionsEl) return;
					const isNowVisible = optionsEl.classList.contains("is-visible");
					if (isNowVisible === wasVisible) {
						// Elm hat nicht reagiert  manuell toggeln
						if (wasVisible) {
							optionsEl.classList.remove("is-visible");
							selectedToggle.setAttribute("aria-expanded", "false");
						} else {
							optionsEl.classList.add("is-visible");
							selectedToggle.setAttribute("aria-expanded", "true");
						}
						window.__liaResetDebugWrite("dropdown toggle manual; id=" + String(ddForToggle.getAttribute("data-resetall-id") || "") + "; nowVisible=" + String(!wasVisible ? 1 : 0));
					}
				}, 0);
			}
		}

		// Nach Optionsklick: Dropdown schlieen falls Elm es nicht tut
		if (dropdownOption) {
			const ddForClose = dropdownOption.closest(".lia-dropdown");
			if (ddForClose && !ddForClose.classList.contains("is-disabled")) {
				const selEl = ddForClose.querySelector(".lia-dropdown__selected");
				const optEl = ddForClose.querySelector(".lia-dropdown__options");
				window.setTimeout(function () {
					if (optEl && optEl.classList.contains("is-visible")) {
						// Noch offen  LiaScript hat nicht geschlossen, manuell schlieen
						optEl.classList.remove("is-visible");
						if (selEl) selEl.setAttribute("aria-expanded", "false");
						// Angezeigte Auswahl aktualisieren (Text aus geklickter Option)
						const optionText = String((dropdownOption.textContent || "")).trim();
						const selectedSpan = selEl ? selEl.querySelector("span") : null;
						if (selectedSpan && optionText) selectedSpan.textContent = optionText;
					}
				}, 50);
			}
		}
		
		const btn = t.closest(".lia-quiz__check, .lia-quiz__resolve");
		if (!btn) return;
		const diktatQuizRoot = btn.closest ? btn.closest(".lia-quiz, lia-quiz") : null;
		const diktatValuesBefore = window.__liaResetGetDiktatValues(diktatQuizRoot);
		if (diktatValuesBefore.length > 0) {
			const modeBefore = btn.classList && btn.classList.contains("lia-quiz__resolve") ? "resolve" : "check";
			window.__liaResetDebugWrite(
				"diktat: button fire; mode=" + modeBefore +
				"; valuesBefore=" + JSON.stringify(diktatValuesBefore)
			);
		}
		// Thaw the quiz being checked/resolved so LiaScript can read correct state.
		const quizEl = btn.closest ? btn.closest(".lia-quiz, lia-quiz") : null;
		if (quizEl) {
			const qid = String(quizEl.getAttribute("data-resetall-id") || "");
			if (qid) {
				window.__liaResetThawQuizChoiceInputs(qid, quizEl);
				window.__liaResetChoiceInputTouchById[qid] = Date.now();
			}
		}
		window.__liaResetMarkQuizInteraction("quiz-button");
		window.__liaResetMarkQuizTouched(btn, "quiz-button");
		const host = window.__liaGetResetHost(btn);
		window.__liaResetSanitizeUntouchedChoiceQuizzes(host, "interaction-quiz-button");
		window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes(host, "interaction-quiz-button");
	}, true);

	// Thaw frozen choice inputs on actual mousedown so the browser's click
	// default action (toggling checked) uses the native setter, not our frozen one.
	document.addEventListener("mousedown", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev.target;
		if (!t || !t.__liaFrozen) return;
		if (!(t instanceof Element)) return;
		const type = String(t.type || "").toLowerCase();
		if (type !== "checkbox" && type !== "radio") return;
		const quiz = t.closest ? t.closest(".lia-quiz, lia-quiz") : null;
		if (!quiz) return;
		const qid = String(quiz.getAttribute("data-resetall-id") || "");
		if (!qid) return;
		window.__liaResetThawQuizChoiceInputs(qid, quiz);
		window.__liaResetChoiceInputTouchById[qid] = Date.now();
		window.__liaResetQuizTouchById[qid] = Date.now();
		window.__liaResetDebugWrite("choice input thawed on mousedown; id=" + qid);
	}, true);
};

window.__liaResetDebugNavigationChange = function (source) {
	const state = window.__liaResetNavDebugState;
	if (!state) return false;
	const sourceText = String(source || "unknown");
	const hash = window.__liaGetResetHash() || "#1";
	const sig = window.__liaResetActiveSlideSignature();
	const isMutationLike = /^mutation|^poll-/i.test(sourceText);
	const changed = hash !== state.lastHash || (!isMutationLike && sig !== state.lastSlideSig);
	if (!changed) return false;

	const now = Date.now();
	const hashReallyChanged = hash !== state.lastHash;
	const shouldMutationRehydrate = !!(window.__liaResetDoneByHash[hash] && isMutationLike && hashReallyChanged);
	let preMaskToken = 0;
	if (shouldMutationRehydrate) {
		preMaskToken = window.__liaResetApplyRehydrateMask("nav-" + sourceText + "-mutation-premask");
		window.setTimeout(function () {
			window.__liaResetReleaseRehydrateMask(preMaskToken, "nav-mutation-premask-failsafe");
		}, 140);
	}
	let mutationGhostLike = false;
	if (isMutationLike && hashReallyChanged) {
		const lastHashEventTs = Number(state.lastHashEventTs || 0);
		if (!lastHashEventTs || now - lastHashEventTs > 700) {
			const prevHashGhost = state.lastHash || "";
			const prevSigGhost = state.lastSlideSig || "";
			mutationGhostLike = true;
			window.__liaResetDebugWrite(
				"nav-change flagged (mutation/poll ghost); source=" + sourceText +
				"; fromHash=" + prevHashGhost +
				"; toHash=" + hash +
				"; fromSig='" + prevSigGhost.slice(0, 120) +
				"'; toSig='" + sig.slice(0, 120) + "'"
			);
		}
	}

	const prevHash = state.lastHash || "";
	const prevSig = state.lastSlideSig || "";
	state.lastHash = hash;
	state.lastSlideSig = sig;
	const hashOnlyGhost = isMutationLike && hashReallyChanged && sig === prevSig;
	if (hashOnlyGhost) {
		window.__liaResetDebugWrite(
			"nav-change skipped (hash-only ghost); source=" + sourceText +
			"; fromHash=" + prevHash +
			"; toHash=" + hash +
			"; sig='" + sig.slice(0, 120) + "'"
		);
		return true;
	}

	window.__liaResetDebugWrite(
		"nav-change; source=" + sourceText +
		"; fromHash=" + prevHash +
		"; toHash=" + hash +
		"; fromSig='" + prevSig.slice(0, 120) +
		"'; toSig='" + sig.slice(0, 120) +
		"'; done=" + String(window.__liaResetDoneByHash[hash] ? 1 : 0)
	);
	window.__liaPrimeSlideResetCatalog(null);

	const host = window.__liaGetResetHost(null);
	if (host && host.querySelectorAll && !isMutationLike) {
		window.__liaResetTraceFields(host, "nav-change-" + String(source || "unknown") + "-fields");
		window.__liaResetTraceQuizOutcomes(host, "nav-change-" + String(source || "unknown") + "-quiz");
	}
	const isHashEventSource = /^hashchange|^popstate/i.test(sourceText);
	const hashEventRecent = now - Number(state.lastHashEventTs || 0) <= 260;
	if (window.__liaResetDoneByHash[hash] && isHashEventSource) {
		window.__liaResetScheduleRehydrate(hash, "nav-" + sourceText);
	}
	if (window.__liaResetDoneByHash[hash] && isMutationLike && hashReallyChanged && hashEventRecent) {
		window.__liaResetDebugWrite(
			"nav-change skipped (mutation deferred to hashchange); source=" + sourceText +
			"; hash=" + hash
		);
		window.__liaResetReleaseRehydrateMask(preMaskToken, "nav-mutation-deferred");
		return true;
	}
	if (window.__liaResetDoneByHash[hash] && isMutationLike && hashReallyChanged) {
		window.__liaResetDebugWrite(
			"nav-change skipped (mutation/poll rehydrate disabled); source=" + sourceText +
			"; hash=" + hash
		);
		window.__liaResetReleaseRehydrateMask(preMaskToken, "nav-mutation-disabled");
		return true;
	}
	return true;
};

window.__liaResetInstallNavigationDebug = function () {
	const state = window.__liaResetNavDebugState;
	if (!state || state.installed) return;
	state.installed = true;
	state.lastHash = window.__liaGetResetHash() || "#1";
	state.lastSlideSig = window.__liaResetActiveSlideSignature();
	window.__liaResetDebugWrite("nav-debug installed; hash=" + state.lastHash + "; sig='" + state.lastSlideSig.slice(0, 120) + "'");

	window.addEventListener("popstate", function () {
		state.lastHashEventTs = Date.now();
		window.__liaResetDebugNavigationChange("popstate");
	});

	window.addEventListener("hashchange", function () {
		state.lastHashEventTs = Date.now();
		window.__liaResetDebugNavigationChange("hashchange-global");
	});

	state.pollTimer = window.setInterval(function () {
		window.__liaResetDebugNavigationChange("poll-250ms");
	}, 250);

	if (window.MutationObserver && document.body) {
		state.observer = new MutationObserver(function () {
			const now = Date.now();
			if (now - Number(state.lastMutationTs || 0) < 24) return;
			state.lastMutationTs = now;
			window.__liaResetDebugNavigationChange("mutation");
		});
		state.observer.observe(document.body, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["class", "aria-hidden", "id", "data-slide", "data-index"],
		});
	}
};

window.__liaResetRememberNativeFeedback = function (kind, text) {
	const key = kind === "solved" || kind === "resolved" || kind === "failed" ? kind : "";
	const value = String(text || "").trim();
	if (!key || !value) return;
	if (!window.__liaResetNativeFeedbackDefaults[key]) {
		window.__liaResetNativeFeedbackDefaults[key] = value;
		window.__liaResetDebugWrite("learn native feedback default; kind=" + key + "; text='" + value.slice(0, 70) + "'");
	}
};

window.__liaResetReadNativeFeedbackText = function (quiz, kind) {
	if (!quiz || !kind) return "";
	const quizId = String(quiz.getAttribute("data-resetall-id") || "");
	const cached = quizId && window.__liaResetNativeFeedbackByQuizId[quizId]
		? String(window.__liaResetNativeFeedbackByQuizId[quizId][kind] || "").trim()
		: "";
	const attrName = kind === "solved"
		? "data-text-solved"
		: kind === "resolved"
			? "data-text-resolved"
			: "data-text-failed";
	const nativeText = window.__liaResetReadQuizDataText(quiz, attrName);
	const globalDefault = String((window.__liaResetNativeFeedbackDefaults && window.__liaResetNativeFeedbackDefaults[kind]) || "").trim();
	return nativeText || cached || globalDefault;
};

window.__liaResetEnsureResolvedFeedbackText = function (quiz) {
	if (!quiz || !(quiz instanceof Element)) return;
	if (!(quiz.classList && quiz.classList.contains("resolved"))) return;
	const fb = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
	if (!fb || !fb.classList) return;
	const current = String((fb.textContent || "").trim());
	if (current.length > 0) return;
	const txt = String(window.__liaResetReadNativeFeedbackText(quiz, "resolved") || "Aufgelste Antwort").trim();
	fb.classList.remove("text-success", "text-error");
	fb.classList.add("text-disabled");
	fb.textContent = txt;
};

window.__liaResetResolveQuizRootFromButton = function (btn) {
	if (!btn || !(btn instanceof Element)) return null;
	const directQuiz = btn.closest ? btn.closest(".lia-quiz, lia-quiz") : null;
	if (directQuiz) return directQuiz;

	const host = window.__liaGetResetHost(btn);
	const selector = btn.classList && btn.classList.contains("lia-quiz__resolve")
		? ".lia-quiz__resolve"
		: ".lia-quiz__check";
	const explicit = btn.closest ? btn.closest(".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz") : null;
	const candidates = host ? window.__liaCollectResetTargets(host).filter(function (el) {
		return el && el.matches && el.matches(".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz");
	}) : [];

	if (explicit && candidates.indexOf(explicit) >= 0 && explicit.contains(btn)) {
		return explicit;
	}

	const buttons = host ? Array.from(host.querySelectorAll(selector)) : [];
	const buttonIndex = buttons.indexOf(btn);
	if (buttonIndex >= 0 && buttonIndex < candidates.length) {
		return candidates[buttonIndex];
	}

	if (explicit) return explicit;
	return null;
};

window.__liaResetLearnExpectedFromSolved = function (host) {
	if (!host || !host.querySelectorAll) return;
	window.__liaCollectResetTargets(host).forEach(function (quizRoot) {
		if (!quizRoot || !(quizRoot instanceof Element)) return;
		const id = String(quizRoot.getAttribute("data-resetall-id") || "");
		if (!id) return;

		const fb = quizRoot.querySelector ? quizRoot.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		const fbText = String((fb && fb.textContent) || "").trim();
		if (!window.__liaResetNativeFeedbackByQuizId[id]) {
			window.__liaResetNativeFeedbackByQuizId[id] = { solved: "", resolved: "", failed: "" };
		}
		if (fbText) {
			if (quizRoot.classList && quizRoot.classList.contains("solved")) {
				window.__liaResetNativeFeedbackByQuizId[id].solved = fbText;
				window.__liaResetRememberNativeFeedback("solved", fbText);
			}
			if (quizRoot.classList && quizRoot.classList.contains("resolved")) {
				window.__liaResetNativeFeedbackByQuizId[id].resolved = fbText;
				window.__liaResetRememberNativeFeedback("resolved", fbText);
			}
			if (
				fb && fb.classList && fb.classList.contains("text-error") &&
				!(quizRoot.classList && (quizRoot.classList.contains("solved") || quizRoot.classList.contains("resolved")))
			) {
				window.__liaResetNativeFeedbackByQuizId[id].failed = fbText;
				window.__liaResetRememberNativeFeedback("failed", fbText);
			}
		}

		const isSolved = !!(quizRoot.classList && (quizRoot.classList.contains("solved") || quizRoot.classList.contains("resolved")));
		if (!isSolved) return;

		const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});
		if (!controls.length) {
			// Dropdown-Quiz (lia-quiz-multi ohne Eingabefelder): korrekte Antwort
			// aus dem Geschwister-.lia-dropdown ableiten wenn das Quiz solved ist.
			if (isSolved) {
				const parent = quizRoot.parentElement;
				const dropdownEl = parent ? parent.querySelector(".lia-dropdown") : null;
				if (dropdownEl) {
					const selectedSpan = dropdownEl.querySelector(".lia-dropdown__selected span");
					const selectedText = String((selectedSpan && selectedSpan.textContent) || "").trim();
					if (selectedText) {
						window.__liaResetExpectedByQuizId[id] = ["dropdown:" + selectedText];
						window.__liaResetDebugWrite("learn dropdown expected; id=" + id + "; text='" + selectedText + "'");
						return;
					}
				}

				const tileRoot = window.__liaResetGetTileQuizRootFromNode(quizRoot, host || document.body);
				const tileTargets = tileRoot ? window.__liaResetGetTileQuizTargetsFromRoot(tileRoot) : [];
				if (tileTargets.length > 0) {
					const vals = tileTargets.map(function (target) {
						const txt = String((target.textContent || "")).replace(/\s+/g, " ").trim();
						return (!txt || txt === "?" || txt === "+") ? "" : txt;
					});
					window.__liaResetExpectedByQuizId[id] = ["tile:" + JSON.stringify(vals)];
					window.__liaResetDebugWrite("learn tile expected; id=" + id + "; values=" + JSON.stringify(vals));
				}
			}
			return;
		}

		const values = controls.map(function (el) { return window.__liaResetControlValue(el); });
		if (values.some(function (v) { return String(v || "").length > 0; })) {
			window.__liaResetExpectedByQuizId[id] = values;
			window.__liaResetDebugWrite("learn expected for " + id + ": " + JSON.stringify(values));
		}
	});
};

window.__liaResetExtractExpectedFromControl = function (ctrl) {
	if (!ctrl || !(ctrl instanceof Element)) return "";
	const quizRoot = ctrl.closest ? ctrl.closest(".lia-quiz, lia-quiz") : null;
	const quizId = quizRoot ? String(quizRoot.getAttribute("data-resetall-id") || "") : "";
	if (quizRoot && quizId && window.__liaResetExpectedByQuizId[quizId]) {
		const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});
		const idx = controls.indexOf(ctrl);
		if (idx >= 0) {
			const learned = String((window.__liaResetExpectedByQuizId[quizId] || [])[idx] || "").trim();
			if (learned) return learned;
		}
	}

	const keys = ["data-answer", "data-solution", "data-correct", "answer", "solution", "correct"];
	for (let i = 0; i < keys.length; i++) {
		const v = String(ctrl.getAttribute(keys[i]) || "").trim();
		if (v) return v;
	}
	const pattern = String(ctrl.getAttribute("pattern") || "").trim();
	const m = pattern.match(/^\^?([^\^\$\[\]\(\)\{\}\|\+\*\?\\]+)\$?$/);
	if (m && m[1]) return m[1];
	const dv = "defaultValue" in ctrl ? String(ctrl.defaultValue || "").trim() : "";
	if (dv) return dv;
	return "";
};

window.__liaResetFallbackSolveDropdown = function (btn, quiz, dropdown, mode) {
	const quizId = String(quiz.getAttribute("data-resetall-id") || "");

	// Korrekte Antwort aus gespeichertem Wert holen
	const rawExpected = String((window.__liaResetExpectedByQuizId[quizId] || [])[0] || "").trim();
	const expectedText = rawExpected.startsWith("dropdown:") ? rawExpected.slice(9) : rawExpected;
	if (!expectedText) {
		window.__liaResetDebugWrite("dropdown fallback: no expected answer; id=" + quizId);
		return false;
	}

	const fb = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
	const solvedText = window.__liaResetReadNativeFeedbackText(quiz, "solved");
	const resolvedText = window.__liaResetReadNativeFeedbackText(quiz, "resolved");
	const failedText = window.__liaResetReadNativeFeedbackText(quiz, "failed") || "Leider war die Antwort nicht korrekt.";

	if (mode === "resolve") {
		// Korrekte Antwort im Dropdown anzeigen
		const selectedSpan = dropdown.querySelector(".lia-dropdown__selected span");
		if (selectedSpan) selectedSpan.textContent = expectedText;
		quiz.classList.remove("solved", "open", "resolved");
		quiz.classList.add("resolved");
		if (fb) {
			fb.classList.remove("text-success", "text-error");
			fb.classList.add("text-disabled");
			fb.textContent = resolvedText || ("Richtige Antwort: " + expectedText);
		}
		window.__liaResetApplyQuizIconState(quiz, "resolve");
		window.__liaResetSetQuizLocked(quiz, true);
		dropdown.classList.add("is-disabled");
		window.__liaResetEnsureResolvedFeedbackText(quiz);
		window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-dropdown-resolve");
		window.__liaResetDebugWrite("dropdown fallback resolve; id=" + quizId + "; expected='" + expectedText + "'");
		return true;
	}

	// mode === "check": Aktuell angezeigte Auswahl mit Erwartung vergleichen
	const selectedSpan = dropdown.querySelector(".lia-dropdown__selected span");
	const got = String((selectedSpan && selectedSpan.textContent) || "").trim();
	if (!got) {
		window.__liaResetDebugWrite("dropdown fallback: nothing selected; id=" + quizId);
		return false;
	}

	const ok = (got === expectedText);
	quiz.classList.remove("resolved", "solved", "open");
	quiz.classList.add(ok ? "solved" : "open");

	if (fb) {
		fb.classList.remove("text-success", "text-error", "text-disabled");
		if (ok) {
			fb.classList.add("text-success");
			fb.textContent = solvedText || "";
		} else {
			fb.classList.add("text-error");
			fb.textContent = failedText;
		}
	}
	window.__liaResetApplyQuizIconState(quiz, ok ? "success" : "error");
	window.__liaResetSetQuizLocked(quiz, ok);
	if (ok) dropdown.classList.add("is-disabled");

	const checkBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
	if (checkBtn) {
		const m = String(checkBtn.textContent || "").match(/\s(\d+)\s*$/);
		const n = m ? Number(m[1]) + 1 : 1;
		const base = String(checkBtn.textContent || "").replace(/\s+\d+\s*$/, "").trim() || "Prfen";
		checkBtn.textContent = base + " " + String(n);
	}
	window.__liaResetSyncResolveVisibility(quiz);
	window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-dropdown-check");
	window.__liaResetDebugWrite("dropdown fallback check; ok=" + String(ok ? 1 : 0) + "; id=" + quizId + "; got='" + got + "'; expected='" + expectedText + "'");
	return true;
};

window.__liaResetGetTileExpectedValues = function (quiz) {
	if (!quiz || !(quiz instanceof Element)) return [];
	const quizId = String(quiz.getAttribute("data-resetall-id") || "");
	const rawExpected = String((window.__liaResetExpectedByQuizId[quizId] || [])[0] || "").trim();
	if (!rawExpected || rawExpected.indexOf("tile:") !== 0) return [];
	const payload = rawExpected.slice(5);
	if (!payload) return [];
	try {
		const parsed = JSON.parse(payload);
		if (!Array.isArray(parsed)) return [];
		return parsed.map(function (v) {
			return String(v == null ? "" : v).replace(/\s+/g, " ").trim();
		});
	} catch (e) {
		window.__liaResetDebugWrite("tile fallback: parse expected failed; id=" + quizId);
		return [];
	}
};

window.__liaResetGetTileCurrentValues = function (targets) {
	if (!Array.isArray(targets)) return [];
	return targets.map(function (target) {
		const txt = String((target && target.textContent) || "").replace(/\s+/g, " ").trim();
		return (!txt || txt === "?" || txt === "+") ? "" : txt;
	});
};

window.__liaResetFallbackSolveTile = function (btn, quiz, tileRoot, mode) {
	if (!quiz || !tileRoot) return false;
	const quizId = String(quiz.getAttribute("data-resetall-id") || "");
	const targets = window.__liaResetGetTileQuizTargetsFromRoot(tileRoot);
	if (!targets.length) return false;

	const expected = window.__liaResetGetTileExpectedValues(quiz);
	if (!expected.length) {
		window.__liaResetDebugWrite("tile fallback: no expected answer; id=" + quizId);
		return false;
	}

	const fb = quiz.querySelector ? quiz.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
	const solvedText = window.__liaResetReadNativeFeedbackText(quiz, "solved");
	const resolvedText = window.__liaResetReadNativeFeedbackText(quiz, "resolved");
	const failedText = window.__liaResetReadNativeFeedbackText(quiz, "failed") || "Leider war die Antwort nicht korrekt.";

	if (mode === "resolve") {
		quiz.classList.remove("solved", "open", "resolved");
		quiz.classList.add("resolved");
		if (fb) {
			fb.classList.remove("text-success", "text-error");
			fb.classList.add("text-disabled");
			fb.textContent = resolvedText || "Aufgelste Antwort";
		}
		window.__liaResetApplyQuizIconState(quiz, "resolve");
		window.__liaResetSetQuizLocked(quiz, true);
		window.__liaResetEnsureResolvedFeedbackText(quiz);
		window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-tile-resolve");
		window.__liaResetDebugWrite("tile fallback resolve; id=" + quizId + "; values=" + JSON.stringify(expected));
		return true;
	}

	const got = window.__liaResetGetTileCurrentValues(targets);
	const comparable = Math.max(expected.length, got.length, targets.length);
	let ok = comparable > 0;
	for (let i = 0; i < comparable; i++) {
		const e = String(expected[i] || "").replace(/\s+/g, " ").trim();
		const g = String(got[i] || "").replace(/\s+/g, " ").trim();
		if (e !== g) {
			ok = false;
			break;
		}
	}

	quiz.classList.remove("solved", "open", "resolved");
	quiz.classList.add(ok ? "solved" : "open");
	if (fb) {
		fb.classList.remove("text-success", "text-error", "text-disabled");
		if (ok) {
			fb.classList.add("text-success");
			fb.textContent = solvedText || "Herzlichen Glckwunsch, das war die richtige Antwort";
		} else {
			fb.classList.add("text-error");
			fb.textContent = failedText;
		}
	}
	window.__liaResetApplyQuizIconState(quiz, ok ? "success" : "error");
	window.__liaResetSetQuizLocked(quiz, !!ok);
	window.__liaResetSyncResolveVisibility(quiz);
	window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-tile-check");
	window.__liaResetDebugWrite("tile fallback check; ok=" + String(ok ? 1 : 0) + "; id=" + quizId + "; got=" + JSON.stringify(got) + "; expected=" + JSON.stringify(expected));
	return true;
};

window.__liaResetFallbackSolve = function (btn, mode) {
	const quiz = window.__liaResetResolveQuizRootFromButton(btn);
	if (!quiz) return false;

	const checkBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__check") : null;
	const resolveBtn = quiz.querySelector ? quiz.querySelector(".lia-quiz__resolve") : null;
	const resolveHidden = !!(resolveBtn && resolveBtn.classList && resolveBtn.classList.contains("hide"));
	if (mode === "resolve" && resolveHidden) {
		window.__liaResetDebugWrite(
			"fallback resolve skipped (guard active); id=" + String(quiz.getAttribute("data-resetall-id") || "") +
			"; timerGuard=0" +
			"; resolveHidden=" + String(resolveHidden ? 1 : 0)
		);
		return false;
	}

	if (mode === "resolve") {
		const solutionGateRaw = String(window.__liaResetReadQuizDataText(quiz, "data-solution-button") || "").trim();
		const solutionGate = Number(solutionGateRaw);
		if (Number.isFinite(solutionGate) && solutionGate > 0) {
			const countText = String((checkBtn && checkBtn.textContent) || "");
			const m = countText.match(/\s(\d+)\s*$/);
			const attempts = m ? Number(m[1]) : 0;
			if (attempts < solutionGate) {
				window.__liaResetDebugWrite(
					"fallback resolve skipped (solution-button gate); id=" + String(quiz.getAttribute("data-resetall-id") || "") +
					"; attempts=" + String(attempts) +
					"; required=" + String(solutionGate)
				);
				return false;
			}
		}
	}

	const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']")).filter(function (el) {
		const t = String(el.type || "").toLowerCase();
		return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
	});
	if (!controls.length) {
		// Dropdown-Quiz: Geschwister-.lia-dropdown suchen und separat auswerten
		const quizParent = quiz.parentElement;
		const dropdownEl = quizParent ? quizParent.querySelector(".lia-dropdown") : null;
		if (dropdownEl) {
			return window.__liaResetFallbackSolveDropdown(btn, quiz, dropdownEl, mode);
		}

		// Kachelquiz ohne klassische Eingabefelder
		const tileRoot = window.__liaResetGetTileQuizRootFromNode(quiz, window.__liaGetResetHost(btn) || document.body);
		const tileTargets = tileRoot ? window.__liaResetGetTileQuizTargetsFromRoot(tileRoot) : [];
		if (tileTargets.length > 0) {
			return window.__liaResetFallbackSolveTile(btn, quiz, tileRoot, mode);
		}

		return false;
	}

	const hasChoiceLikeControls = controls.some(function (el) {
		const tag = String(el.tagName || "").toLowerCase();
		const type = String(el.type || "").toLowerCase();
		return tag === "select" || type === "checkbox" || type === "radio";
	});
	const quizIdForTouch = String(quiz.getAttribute("data-resetall-id") || "");
	if (mode === "check" && hasChoiceLikeControls) {
		const touched = quizIdForTouch ? Number(window.__liaResetChoiceInputTouchById[quizIdForTouch] || 0) : 0;
		if (!touched) {
			window.__liaResetDebugWrite(
				"fallback check skipped (choice quiz untouched); id=" + String(quizIdForTouch || "")
			);
			return false;
		}
	}

	const expected = controls.map(function (c) { return window.__liaResetExtractExpectedFromControl(c); });
	const hasExpected = expected.some(function (x) { return !!String(x || "").trim(); });
	if (!hasExpected) return false;

	const fb = quiz.querySelector(".lia-quiz__feedback") || quiz.querySelector("[class*='feedback']");
	const solvedText = window.__liaResetReadNativeFeedbackText(quiz, "solved");
	const resolvedText = window.__liaResetReadNativeFeedbackText(quiz, "resolved");
	const failedText = window.__liaResetReadNativeFeedbackText(quiz, "failed") || "Leider war die Antwort nicht korrekt.";

	if (mode === "resolve") {
		controls.forEach(function (c, i) {
			const ex = String(expected[i] || "");
			if (!ex) return;
			const t = String(c.type || "").toLowerCase();
			const tag = String(c.tagName || "").toLowerCase();
			if (t === "checkbox" || t === "radio") {
				c.checked = ex === "1";
			} else if (tag === "select" && c.options && c.options.length) {
				let set = false;
				for (let k = 0; k < c.options.length; k++) {
					const opt = c.options[k];
					const ov = String(opt.value || "");
					const ot = String((opt.textContent || "")).trim();
					if (ov === ex || ot === ex) {
						c.selectedIndex = k;
						set = true;
						break;
					}
				}
				if (!set) c.value = ex;
			} else if ("value" in c) {
				c.value = ex;
			} else {
				c.textContent = ex;
			}
			try { c.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
			try { c.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
		});
		quiz.classList.remove("solved", "open", "resolved");
		quiz.classList.add("resolved");
		if (fb) {
			fb.classList.remove("text-success", "text-error");
			fb.classList.add("text-disabled");
			fb.textContent = resolvedText ? resolvedText : "Aufgelste Antwort";
		}
		window.__liaResetApplyQuizIconState(quiz, "resolve");
		window.__liaResetSetQuizLocked(quiz, true);
		window.__liaResetEnsureResolvedFeedbackText(quiz);
		window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-resolve");
		window.__liaResetDebugWrite("fallback resolve applied; id=" + String(quiz.getAttribute("data-resetall-id") || ""));
		return true;
	}

	let ok = true;
	let comparable = 0;
	let matches = 0;
	let anyNonEmptyInput = false;
	const gotList = [];
	const exList = [];
	controls.forEach(function (c, i) {
		const ex = String(expected[i] || "").trim();
		const got = String(window.__liaResetControlValue(c) || "").trim();
		gotList.push(got);
		exList.push(ex);
		if (got && got !== "0") anyNonEmptyInput = true;
		if (!ex) return;
		comparable += 1;
		if (got === ex) matches += 1;
		else ok = false;
	});

	if (comparable > 0 && matches !== comparable) ok = false;
	if (!anyNonEmptyInput) ok = false;

	quiz.classList.remove("resolved", "solved", "open");
	quiz.classList.add(ok ? "solved" : "open");
	if (fb) {
		fb.classList.remove("text-success", "text-error", "text-disabled");
		if (ok) {
			fb.classList.add("text-success");
			fb.textContent = solvedText ? solvedText : "";
		} else {
			fb.classList.add("text-error");
			fb.textContent = failedText ? failedText : "";
		}
	}
	window.__liaResetApplyQuizIconState(quiz, ok ? "success" : "error");
	window.__liaResetSetQuizLocked(quiz, !!ok);

	const checkBtnForCount = quiz.querySelector(".lia-quiz__check");
	if (checkBtnForCount) {
		const m = String(checkBtnForCount.textContent || "").match(/\s(\d+)\s*$/);
		const n = m ? Number(m[1]) + 1 : 1;
		const base = String(checkBtnForCount.textContent || "").replace(/\s+\d+\s*$/, "").trim() || "Pruefen";
		checkBtnForCount.textContent = base + " " + String(n);
	}
	window.__liaResetSyncResolveVisibility(quiz);

	window.__liaResetDebugWrite(
		"fallback check applied; ok=" + String(ok ? 1 : 0) +
		"; id=" + String(quiz.getAttribute("data-resetall-id") || "") +
		"; comparable=" + String(comparable) +
		"; matches=" + String(matches) +
		"; anyInput=" + String(anyNonEmptyInput ? 1 : 0) +
		"; got=" + JSON.stringify(gotList) +
		"; expected=" + JSON.stringify(exList)
	);
	window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(btn), "fallback-check");
	return true;
};

window.__liaResetClearExpandoState = function (el) {
	if (!el || !(el instanceof Element)) return 0;
	let n = 0;
	Object.keys(el).forEach(function (k) {
		if (!k) return;
		// Only clear our own temporary reset properties, never LiaScript internals.
		if (!/^__liaReset/i.test(k)) return;
		try {
			delete el[k];
			n += 1;
		} catch (e) {}
	});
	return n;
};

window.__liaResetForceReparseCurrentSlide = function (hash) {
	const current = String(hash || window.__liaGetResetHash() || "#1");
	if (!/^#\d+$/.test(current)) {
		window.__liaResetDebugWrite("reparse skipped: invalid current hash " + current);
		return;
	}
	if (window.__liaResetHashHopActive) {
		window.__liaResetDebugWrite("reparse skipped: hash-hop already active");
		return;
	}

	const currentN = Number(current.slice(1)) || 1;
	let alt = "#" + String(currentN + 1);
	if (alt === current) alt = "#" + String(Math.max(1, currentN - 1));
	if (alt === current) alt = "#1";
	if (alt === current) {
		window.__liaResetDebugWrite("reparse skipped: no alternate hash");
		return;
	}

	window.__liaResetHashHopActive = true;
	window.__liaResetDebugWrite("reparse start: " + current + " -> " + alt + " -> " + current);

	window.setTimeout(function () {
		try { window.location.hash = alt; } catch (e) {}
	}, 20);

	window.setTimeout(function () {
		try { window.location.hash = current; } catch (e) {}
	}, 180);

	window.setTimeout(function () {
		window.__liaResetHashHopActive = false;
		window.__liaResetDebugWrite("reparse done: back on " + String(window.location.hash || ""));
	}, 520);
};

window.__liaResetHardRebuildCurrentSlide = function (hash, button) {
	const current = String(hash || window.__liaGetResetHash() || "#1");
	if (!/^#\d+$/.test(current)) return;
	if (window.__liaResetHardHopActive) return;

	const n = Number(current.slice(1)) || 1;
	let alt = "#" + String(n + 1);
	if (alt === current) alt = "#" + String(Math.max(1, n - 1));
	if (alt === current) alt = "#1";
	if (alt === current) return;

	window.__liaResetHardHopActive = true;
	window.__liaResetDebugWrite("hard-rebuild start: " + current + " -> " + alt + " -> " + current);

	if (document.body && document.body.classList) {
		document.body.classList.add("lia-snapshot-mode", "lia-reset-suppress-freeze");
	}

	window.setTimeout(function () {
		try { window.location.hash = alt; } catch (e) {}
	}, 20);

	window.setTimeout(function () {
		try { window.location.hash = current; } catch (e) {}
	}, 180);

	window.setTimeout(function () {
		if (document.body && document.body.classList) {
			document.body.classList.remove("lia-reset-suppress-freeze", "lia-snapshot-mode");
		}
		window.__liaResetHardHopActive = false;
		const host = window.__liaGetResetHost(button instanceof HTMLElement ? button : null);
		window.__liaResetDumpQuizState(host, "hard-rebuild-after-hop");
		window.__liaResetPass(button instanceof HTMLElement ? button : null, "hard-rebuild-pass");
		window.__liaResetDebugWrite("hard-rebuild done");
	}, 620);
};

window.__liaResetPass = function (button, phaseLabel) {
	const host = window.__liaGetResetHost(button);
	if (!host) {
		window.__liaResetDebugWrite(String(phaseLabel || "pass") + ": no host");
		return;
	}
	const phase = String(phaseLabel || "pass");
	const isRehydratePass = /^rehydrate-/i.test(phase);
	if (isRehydratePass) {
		const active = document && document.activeElement ? document.activeElement : null;
		const typingActive = !!(active && host.contains && host.contains(active) && window.__liaResetIsTextualEditableField(active));
		if (typingActive) {
			window.__liaResetDebugWrite(phase + ": skipped (active typing field)");
			return;
		}
	}
	window.__liaResetPrimeDragHomes(host);
	window.__liaResetDumpQuizState(host, phase + "-before");
	window.__liaResetTraceFields(host, phase + "-fields-before");
	window.__liaResetTraceQuizOutcomes(host, phase + "-quiz-before");

	let editableSeen = 0;
	let editableReset = 0;
	let editableSkipped = 0;
	let expandoCleared = 0;
	let diktatResetCount = 0;
	const appliedRows = [];
	const editableFields = window.__liaResetCollectEditableFields(host);
	const diktatCandidates = editableFields.filter(function (field) {
		return window.__liaResetIsDiktatField(field);
	}).map(function (field, idx) {
		const cls = String(field.className || "").replace(/\s+/g, " ").trim().slice(0, 80);
		const live = String(window.__liaResetFieldValueForDebug(field) || "");
		const remembered = String(window.__liaResetGetRememberedFieldValue(field) || "");
		return {
			i: idx,
			tag: String(field.tagName || "").toLowerCase(),
			type: String(field.type || "").toLowerCase(),
			name: String(field.getAttribute && (field.getAttribute("name") || field.getAttribute("aria-label") || field.id) || "").slice(0, 80),
			className: cls,
			value: String(live || remembered || "").slice(0, 120),
			live: live.slice(0, 120),
			remembered: remembered.slice(0, 120),
		};
	});
	window.__liaResetDebugWrite("diktat: candidates; count=" + String(diktatCandidates.length) + "; data=" + JSON.stringify(diktatCandidates));

	editableFields.forEach(function (field) {
		const tag = String(field.tagName || "").toLowerCase();
		const type = String(field.type || "").toLowerCase();
		const isDiktatField = window.__liaResetIsDiktatField(field);
		const isHidden = type === "hidden";
		const isControlInput = type === "button" || type === "submit" || type === "reset" || type === "image" || type === "file";
		const isReadonlyDisplay = field.hasAttribute("readonly") || field.getAttribute("aria-readonly") === "true";
		const isNonEditableRole = field.getAttribute("contenteditable") === "false";

		editableSeen += 1;

		if (isHidden || isControlInput || (!isDiktatField && (isReadonlyDisplay || isNonEditableRole))) {
			editableSkipped += 1;
			return;
		}

		const beforeLive = String(window.__liaResetFieldValueForDebug(field) || "");
		const beforeRemembered = String(window.__liaResetGetRememberedFieldValue(field) || "");
		const beforeVal = String(beforeLive || beforeRemembered || "");

		if (isDiktatField) {
			if (String(beforeVal || "").length > 0) diktatResetCount += 1;
			if (tag === "input" || tag === "textarea" || tag === "select") {
				field.value = "";
				try { field.defaultValue = ""; } catch (e) {}
				field.removeAttribute("value");
				if (tag === "select") {
					try { field.selectedIndex = -1; } catch (e) {}
				}
			} else {
				field.textContent = "";
				if ("innerText" in field) {
					try { field.innerText = ""; } catch (e) {}
				}
			}
			window.__liaResetDebugWrite(
				"diktat: reset field; before=" + JSON.stringify(String(beforeVal || "")) +
				"; after=" + JSON.stringify(String(window.__liaResetFieldValueForDebug(field) || "")) +
				"; liveBefore=" + JSON.stringify(beforeLive) +
				"; rememberedBefore=" + JSON.stringify(beforeRemembered)
			);
			window.__liaResetRememberTextField(field, "reset-clear");
		} else if (type === "checkbox" || type === "radio") {
			const inQuiz = !!(field.closest && field.closest(".lia-quiz, lia-quiz"));
			// For quiz options always reset to empty user selection.
			field.checked = inQuiz ? false : !!field.defaultChecked;
			if (inQuiz) {
				try { field.defaultChecked = false; } catch (e) {}
				field.removeAttribute("checked");
			}
		} else if (tag === "select") {
			let set = false;
			Array.from(field.options || []).forEach(function (opt, idx) {
				if (!set && opt.defaultSelected) {
					field.selectedIndex = idx;
					set = true;
				}
			});
			if (!set && field.options && field.options.length) {
				field.selectedIndex = 0;
			}
		} else if (type === "range") {
			const fallback = field.defaultValue || field.getAttribute("min") || "0";
			field.value = String(fallback);
		} else if (tag === "textarea" || tag === "input") {
			field.value = String(field.defaultValue || "");
		} else {
			if (field.hasAttribute("data-reset-default")) {
				field.textContent = String(field.getAttribute("data-reset-default") || "");
			} else {
				field.setAttribute("data-reset-default", String(field.textContent || ""));
				field.textContent = String(field.getAttribute("data-reset-default") || "");
			}
		}

		try { field.disabled = false; } catch (e) {}
		try { field.readOnly = false; } catch (e) {}
		field.removeAttribute("disabled");
		field.removeAttribute("readonly");
		try { field.style.borderColor = ""; field.style.outline = ""; } catch (e) {}
		try {
			field.classList.remove(
				"is-success", "is-failure", "is-error", "is-warning",
				"lia-input--disabled", "lia-input--success", "lia-input--failure",
				"lia-input--error", "is-disabled"
			);
		} catch (e) {}

		const isChoiceControl = type === "checkbox" || type === "radio";
		if (!isRehydratePass && !isChoiceControl) {
			try { field.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
			try { field.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
		} else if (!isRehydratePass && isChoiceControl) {
			try { field.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
		}
		const afterVal = window.__liaResetFieldValueForDebug(field);
		const expected = window.__liaResetExtractExpectedFromControl(field);
		appliedRows.push({
			i: editableSeen - 1,
			tag: tag,
			type: type,
			before: String(beforeVal || "").slice(0, 60),
			after: String(afterVal || "").slice(0, 60),
			expected: String(expected || "").slice(0, 60),
		});
		expandoCleared += window.__liaResetClearExpandoState(field);
		editableReset += 1;
	});

	let quizRootsTouched = 0;
	Array.from(host.querySelectorAll(".lia-quiz, lia-quiz")).forEach(function (quizRoot) {
		if (!quizRoot || !quizRoot.classList) return;
		quizRoot.classList.remove("solved", "resolved", "is-disabled");
		quizRoot.classList.add("open");
		quizRoot.style.removeProperty("pointer-events");
		quizRoot.style.removeProperty("cursor");

		// MutationObserver: verhindert, dass LiaScript is-disabled nach Re-Render
		// wieder auf den Quiz-Container setzt (besonders bei lia-quiz-multi ohne Pairs)
		if (typeof MutationObserver !== "undefined") {
			(function (qr) {
				const qid = String(qr.getAttribute("data-resetall-id") || "");
				const obs = new MutationObserver(function (mutations) {
					for (let i = 0; i < mutations.length; i++) {
						if (mutations[i].attributeName === "class" && qr.classList.contains("is-disabled")) {
							qr.classList.remove("is-disabled");
							qr.style.removeProperty("pointer-events");
							qr.style.removeProperty("cursor");
							window.__liaResetDebugWrite("quiz is-disabled re-add intercepted; id=" + qid);
							break;
						}
					}
				});
				obs.observe(qr, { attributes: true, attributeFilter: ["class"] });
				window.setTimeout(function () { obs.disconnect(); }, 800);
			})(quizRoot);
		}

		expandoCleared += window.__liaResetClearExpandoState(quizRoot);

		const checkBtn = quizRoot.querySelector ? quizRoot.querySelector(".lia-quiz__check") : null;
		if (checkBtn) {
			const current = String(checkBtn.textContent || "").trim();
			const base = current.replace(/\s+\d+\s*$/, "").trim() || "Pruefen";
			checkBtn.textContent = base;
		}

		const feedback = quizRoot.querySelector ? quizRoot.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
		if (feedback && feedback.classList) {
			feedback.classList.remove("text-success", "text-error", "text-disabled");
			feedback.textContent = "";
		}

		window.__liaResetApplyQuizIconState(quizRoot, "hidden");
		window.__liaResetSetQuizLocked(quizRoot, false);

		let solutionMarkersCleared = 0;
		const markerNodes = [quizRoot].concat(Array.from(quizRoot.querySelectorAll("*")));
		markerNodes.forEach(function (node) {
			if (!node || !node.removeAttribute) return;

			if (node.dataset) {
				Object.keys(node.dataset).forEach(function (key) {
					if (!/^__liaReset/i.test(String(key || ""))) return;
					const attrName = "data-" + String(key).replace(/([A-Z])/g, "-$1").toLowerCase();
					try { node.removeAttribute(attrName); } catch (e) {}
					try { delete node.dataset[key]; } catch (e) {}
					solutionMarkersCleared += 1;
				});
			}

		});
		expandoCleared += solutionMarkersCleared;
		if (solutionMarkersCleared > 0) {
			window.__liaResetDebugWrite(
				phase + ": cleared solution markers; quiz=" + String(quizRoot.getAttribute("data-resetall-id") || quizRootsTouched) +
				"; count=" + String(solutionMarkersCleared)
			);
		}

		const quizId = String(quizRoot.getAttribute("data-resetall-id") || "");
		if (quizId) {
			window.__liaResetQuizTouchById[quizId] = 0;
			window.__liaResetChoiceInputTouchById[quizId] = 0;
		}

		const passGateStats = window.__liaResetEnforceTimerByQuizState(quizRoot);
		if (passGateStats && (passGateStats.gatedOff > 0 || passGateStats.restored > 0)) {
			window.__liaResetDebugWrite(
				phase + ": timer gate enforced; quiz=" + String(quizId || quizRootsTouched) +
				"; off=" + String(passGateStats.gatedOff) +
				"; restored=" + String(passGateStats.restored)
			);
		}

		// ==== FIX 1: Timer-UI und Timer-State cleanup (vor Comment-Restore) ====
		const timerUICleared = window.__liaResetCleanupTimerUI(host);
		const timerStateCleared = window.__liaResetResetTimerState(host);
		if (timerUICleared > 0 || timerStateCleared > 0) {
			window.__liaResetDebugWrite(
				phase + ": timer cleanup; quiz=" + String(quizId || quizRootsTouched) +
				"; uiCleared=" + String(timerUICleared) +
				"; stateCleared=" + String(timerStateCleared)
			);
		}

		const baselineComments = quizId && window.__liaResetInitialCommentsByQuizId[quizId]
			? window.__liaResetInitialCommentsByQuizId[quizId]
			: [];
		window.__liaResetRestoreQuizComments(quizRoot, Array.isArray(baselineComments) ? baselineComments : []);
		window.__liaResetDebugWrite(
			phase + ": comments restored; quiz=" + String(quizId || quizRootsTouched) +
			"; count=" + String(Array.isArray(baselineComments) ? baselineComments.length : 0)
		);
		window.__liaResetSyncResolveVisibility(quizRoot);

		quizRootsTouched += 1;
	});

	let dropdownsTouched = 0;
	Array.from(host.querySelectorAll(".lia-dropdown")).forEach(function (dropdown) {
		if (!dropdown || !(dropdown instanceof Element)) return;
		const dropdownId = String(dropdown.getAttribute("data-resetall-id") || "");
		expandoCleared += window.__liaResetClearExpandoState(dropdown);

		const selectedEl = dropdown.querySelector(".lia-dropdown__selected");
		if (selectedEl) {
			expandoCleared += window.__liaResetClearExpandoState(selectedEl);
		}

		const optionsContainer = dropdown.querySelector(".lia-dropdown__options");
		if (optionsContainer) {
			expandoCleared += window.__liaResetClearExpandoState(optionsContainer);
		}

		// Dropdown entsperren: is-disabled entfernen und mit MutationObserver
		// verhindern, dass LiaScript es beim nchsten Re-Render wieder setzt.
		function __clearDropdownDisabled(el) {
			el.classList.remove("is-disabled");
			try { el.removeAttribute("disabled"); } catch (e) {}
			try { el.removeAttribute("aria-disabled"); } catch (e) {}
			el.style.removeProperty("pointer-events");
			el.style.removeProperty("opacity");
			el.style.removeProperty("filter");
			el.style.removeProperty("cursor");
		}
		__clearDropdownDisabled(dropdown);

		// Bewache das Attribut fr 800 ms gegen LiaScript-Re-Render
		if (typeof MutationObserver !== "undefined") {
			(function (dd, clearFn) {
				const obs = new MutationObserver(function (mutations) {
					for (let i = 0; i < mutations.length; i++) {
						if (mutations[i].attributeName === "class" && dd.classList.contains("is-disabled")) {
							clearFn(dd);
							window.__liaResetDebugWrite("dropdown is-disabled re-add intercepted; id=" + String(dd.getAttribute("data-resetall-id") || ""));
							break;
						}
					}
				});
				obs.observe(dd, { attributes: true, attributeFilter: ["class"] });
				window.setTimeout(function () { obs.disconnect(); }, 800);
			})(dropdown, __clearDropdownDisabled);
		}

		if (dropdownId) {
			window.__liaResetQuizTouchById[dropdownId] = 0;
		}

		dropdownsTouched += 1;
	});

	let controlsUnlocked = 0;
	Array.from(host.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")).forEach(function (btn) {
		try { btn.disabled = false; } catch (e) {}
		btn.removeAttribute("disabled");
		btn.removeAttribute("aria-disabled");
		btn.removeAttribute("tabindex");
		btn.style.removeProperty("pointer-events");
		btn.style.removeProperty("opacity");
		btn.style.removeProperty("filter");
		btn.style.removeProperty("cursor");
		expandoCleared += window.__liaResetClearExpandoState(btn);
		controlsUnlocked += 1;
	});
	window.setTimeout(function () {
		Array.from(host.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve")).forEach(function (btn) {
			if (!btn) return;
			try { btn.disabled = false; } catch (e) {}
			btn.removeAttribute("disabled");
			btn.removeAttribute("aria-disabled");
			btn.style.removeProperty("pointer-events");
			btn.style.removeProperty("opacity");
		});
	}, 60);

	const selectResetCount = window.__liaResetResetSelectControls(host);
	const dropdownResetCount = window.__liaResetResetDropdownControls(host);
	const hiddenResetCount = 0;
	const pristineResetCount = 0;
	const dragResetCount = window.__liaResetRestoreDragHomes(host);
	const tileResetCount = window.__liaResetResetTileControls(host);

	// === ZUSTZLICHE TILE-SICHERHEIT: Schneller Inline-Rescue ===
	// Wenn nach dem Tile-Reset noch Chips in Targets stecken, MSSEN sie zurck
	// in die Source-Bank verschoben werden  NIEMALS gelscht, sonst geht die
	// Kachel permanent verloren und kann nicht erneut gezogen werden.
	if (tileResetCount > 0) {
		window.setTimeout(function () {
			try {
				const tileRoots = window.__liaResetCollectTileQuizRoots(host);
				let inlineFixed = 0;
				tileRoots.forEach(function (tRoot) {
					const targets = window.__liaResetGetTileQuizTargetsFromRoot(tRoot);
					if (!targets.length) return;
					const allSources = window.__liaResetGetTileQuizSourcesFromRoot(tRoot);

					// Bestimme den Source-Bank-Container: Parent eines Chips, der NICHT
					// in einem Target steckt. Das ist der Heim"-Container.
					function _isInsideAnyTarget(node) {
						for (let i = 0; i < targets.length; i++) {
							const t = targets[i];
							if (!t) continue;
							if (t === node || (t.contains && t.contains(node))) return true;
						}
						return false;
					}
					const outsideSources = allSources.filter(function (s) {
						const c = window.__liaResetResolveTileChipNode(s, tRoot, targets) || s;
						return !_isInsideAnyTarget(c);
					});
					let sourceBank = null;
					if (outsideSources.length > 0 && outsideSources[0].parentElement) {
						sourceBank = outsideSources[0].parentElement;
					}

					targets.forEach(function (target) {
						if (!target || !target.querySelectorAll) return;
						// Sammle alle Chips, die im Target stecken
						const orphans = Array.from(target.querySelectorAll("[draggable], [onclick*='dragsource'], [ondragstart], [ondragend]"))
							.map(function (n) { return window.__liaResetResolveTileChipNode(n, tRoot, targets) || n; })
							.filter(function (n, i, arr) {
								return !!n && n instanceof Element && arr.indexOf(n) === i &&
									window.__liaResetIsTileQuizSource(n) && _isInsideAnyTarget(n);
							});
						if (orphans.length === 0) return;

						orphans.forEach(function (orphan) {
							const txt = String((orphan.textContent || "")).replace(/\s+/g, " ").trim().slice(0, 20);
							let moved = false;

							// Strategie 1: ber data-reset-uid den ursprnglichen Home-Parent finden
							try {
								const uid = window.__liaResetEnsureNodeUid(orphan);
								const home = uid ? window.__liaResetDragHomeById[uid] : null;
								if (home && home.parentId) {
									const hp = host.querySelector("[data-reset-uid='" + String(home.parentId) + "']");
									if (hp && hp instanceof Element && !_isInsideAnyTarget(hp)) {
										const nx = home.nextId ? host.querySelector("[data-reset-uid='" + String(home.nextId) + "']") : null;
										hp.insertBefore(orphan, (nx && nx.parentElement === hp) ? nx : null);
										inlineFixed += 1;
										moved = true;
										window.__liaResetDebugWrite(
											"pass: inline tile rescue (home); text='" + txt + "'; uid=" + uid
										);
									}
								}
							} catch (e) {}

							// Strategie 2: In den ermittelten Source-Bank-Container verschieben
							if (!moved && sourceBank && !_isInsideAnyTarget(sourceBank)) {
								try {
									sourceBank.appendChild(orphan);
									inlineFixed += 1;
									moved = true;
									window.__liaResetDebugWrite(
										"pass: inline tile rescue (sourceBank); text='" + txt + "'; bank=" + String(sourceBank.tagName || "")
									);
								} catch (e) {}
							}

							// Strategie 3: Vor das Target im Tile-Root einhngen (statt lschen)
							if (!moved) {
								try {
									const beforeNode = targets[0];
									const tParent = beforeNode && beforeNode.parentElement;
									if (tParent && !_isInsideAnyTarget(tParent)) {
										tParent.insertBefore(orphan, beforeNode);
										inlineFixed += 1;
										moved = true;
										window.__liaResetDebugWrite(
											"pass: inline tile rescue (targetParent); text='" + txt + "'"
										);
									}
								} catch (e) {}
							}

							// KEIN DELETE-Fallback hier! Lieber stehen lassen, als Kachel zu verlieren.
							if (!moved) {
								window.__liaResetDebugWrite(
									"pass: inline tile rescue FAILED; text='" + txt + "'  kept in place to preserve chip"
								);
							} else {
								// Chip wieder draggable + sichtbar machen
								try { orphan.setAttribute("draggable", "true"); } catch (e) {}
								orphan.classList.remove("is-disabled", "lia-btn--disabled");
								orphan.style.removeProperty("pointer-events");
								orphan.style.removeProperty("opacity");
								orphan.style.removeProperty("display");
							}
						});

						// Target-Display nur zurcksetzen, wenn jetzt wirklich leer
						if (target.querySelector("[draggable]") === null) {
							window.__liaResetSetTileTargetDisplay(target, "");
						}
					});

					// Re-Prime der Drag-Homes, damit verschobene Chips wieder gefunden werden
					if (inlineFixed > 0) {
						try { window.__liaResetPrimeDragHomes(host); } catch (e) {}
					}
				});
				if (inlineFixed > 0) {
					window.__liaResetDebugWrite("pass: inline tile rescue done; rescued=" + String(inlineFixed));
				}
			} catch (eOuter) {
				window.__liaResetDebugWrite("pass: inline tile rescue error: " + String(eOuter).slice(0, 100));
			}
		}, 50);
	}

	window.__liaResetDebugWrite(
		phase + ": pass done; fieldsSeen=" + String(editableSeen) +
		"; fieldsReset=" + String(editableReset) +
		"; fieldsSkipped=" + String(editableSkipped) +
		"; quizRootsTouched=" + String(quizRootsTouched) +
		"; dropdownsTouched=" + String(dropdownsTouched) +
		"; controlsUnlocked=" + String(controlsUnlocked) +
		"; expandoCleared=" + String(expandoCleared) +
		"; selectsReset=" + String(selectResetCount) +
		"; dropdownsReset=" + String(dropdownResetCount) +
		"; pristineRestore=" + String(pristineResetCount) +
		"; tilesReset=" + String(tileResetCount) +
		"; hiddenReset=" + String(hiddenResetCount) +
		"; draggablesReset=" + String(dragResetCount)
	);
	if (window.__liaResetTraceEnabled) {
		window.__liaResetDebugWrite(phase + ": field-reconstruct=" + JSON.stringify(appliedRows));
	}
	window.__liaResetDumpQuizState(host, phase + "-after");
	window.__liaResetTraceFields(host, phase + "-fields-after");
	window.__liaResetTraceQuizOutcomes(host, phase + "-quiz-after");
	window.__liaResetDebugWrite("diktat: reset phase=" + phase + "; fields=" + String(diktatResetCount));
	window.__liaResetSanitizeUntouchedChoiceQuizzes(host, phase + "-prime");
	window.__liaResetCaptureSlideState(window.__liaGetResetHash(), host, phase + "-after");
	window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes(host, phase + "-after");
};

window.__liaGetResetHost = function (button) {
	const btn = button instanceof HTMLElement ? button : null;
	if (btn && btn.closest) {
		const fromBtn = btn.closest(".lia-slide__content, .lia-content, .lia-slide, main, article, section");
		if (fromBtn) return fromBtn;
	}

	const active =
		document.querySelector(".lia-slide.active .lia-slide__content") ||
		document.querySelector(".lia-slide.current .lia-slide__content") ||
		document.querySelector(".lia-slide[aria-hidden='false'] .lia-slide__content") ||
		document.querySelector(".lia-slide.active") ||
		document.querySelector(".lia-slide.current") ||
		document.querySelector(".lia-slide[aria-hidden='false']");
	if (active) return active;

	const anyQuiz = document.querySelector(".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz, .lia-dropdown");
	if (anyQuiz && anyQuiz.closest) {
		const fromQuiz = anyQuiz.closest(".lia-slide__content, .lia-content, .lia-slide, main, article, section");
		if (fromQuiz) return fromQuiz;
	}

	return (
		document.body
	);
};

window.__liaGetResetHash = function () {
	const m = String(window.location.hash || "").match(/^#\d+/);
	return m ? m[0] : "#1";
};

window.__liaCollectResetTargets = function (host) {
	if (!host || !host.querySelectorAll) return [];
	return Array.from(host.querySelectorAll(
		".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz, .lia-dropdown"
	));
};

window.__liaPrimeSlideResetCatalog = function (button) {
	const host = window.__liaGetResetHost(button);
	const hash = window.__liaGetResetHash();
	if (!host || !hash) return;

	const bucket = window.__liaResetCatalog[hash] || (window.__liaResetCatalog[hash] = Object.create(null));

	window.__liaCollectResetTargets(host).forEach(function (el, idx) {
		if (!el || !(el instanceof Element)) return;
		const hashPart = String(hash || "#1").replace(/[^0-9a-zA-Z_-]+/g, "_");
		const existingId = String(el.getAttribute("data-resetall-id") || "");
		const id = existingId || ("rs_" + hashPart + "_" + String(idx + 1));
		el.setAttribute("data-resetall-id", id);
		if (!window.__liaResetInitialCommentsByQuizId[id]) {
			window.__liaResetInitialCommentsByQuizId[id] = window.__liaResetExtractQuizComments(el);
		}
		if (!bucket[id]) {
			bucket[id] = String(el.outerHTML || "");
		}
		if (el.matches && el.matches(".lia-quiz, lia-quiz")) {
			const tileRoot = window.__liaResetGetTileQuizRootFromNode(el, host);
			const tileTargets = tileRoot ? window.__liaResetGetTileQuizTargetsFromRoot(tileRoot) : [];
			if (tileRoot && tileTargets.length > 0) {
				if (!String(tileRoot.getAttribute("data-reset-tile-owner") || "")) {
					try { tileRoot.setAttribute("data-reset-tile-owner", id); } catch (e) {}
				}
			}
			if (tileRoot && tileTargets.length > 0 && !window.__liaResetTilePristineByQuizId[id]) {
				window.__liaResetTilePristineByQuizId[id] = String(tileRoot.outerHTML || "");
			}
		}
	});
	window.__liaResetPrimeTileStructure(host);
	window.__liaResetPrimeDragHomes(host);
};

window.__liaResetTryImmediateRehydrate = function (hash, source) {
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	if (!window.__liaResetDoneByHash[targetHash]) return false;
	const host = window.__liaGetResetHost(null);
	if (!host || !host.querySelectorAll) return false;
	const active = document && document.activeElement ? document.activeElement : null;
	const typingActive = !!(active && host.contains && host.contains(active) && window.__liaResetIsTextualEditableField(active));
	if (typingActive) {
		window.__liaResetDebugWrite("immediate rehydrate skipped (active typing field); hash=" + targetHash + "; source=" + String(source || "nav"));
		return false;
	}
	window.__liaPrimeSlideResetCatalog(null);
	if (window.__liaResetApplySlideState(targetHash, host, "immediate-" + String(source || "nav"))) {
		window.__liaResetEnforceTimerByQuizState(host);
		window.__liaResetDebugWrite("immediate rehydrate applied; hash=" + targetHash + "; source=" + String(source || "nav"));
		return true;
	}
	return false;
};

window.__liaResetCurrentSlideOnly = function (button) {
	const btn = button instanceof HTMLElement ? button : null;
	window.__liaResetEpoch += 1;
	window.__liaResetLastRunTs = Date.now();
	window.__liaResetDebugWrite("reset function start");
	if (btn) btn.disabled = true;

	try {
		const host = window.__liaGetResetHost(btn);
		if (!host) {
			window.__liaResetDebugWrite("aborted: no host");
			return;
		}
		const hash = window.__liaGetResetHash() || "#1";
		window.__liaResetDebugWrite("host found; hash=" + hash);
		window.__liaResetDoneByHash[hash] = 1;
		window.__liaResetDedupeTileOwners(host);

		let replacedCount = 0;
		try {
			window.__liaPrimeSlideResetCatalog(btn);
			window.__liaResetLearnExpectedFromSolved(host);
			// Keep quiz nodes listener-safe, but restore non-quiz widgets (e.g. dropdown/tile)
			// from the initial catalog so custom UIs reset to their pristine DOM state.
			replacedCount = window.__liaResetRestoreNonQuizTargetsFromCatalog(host, hash, "primary-prepass");
			window.__liaResetDebugWrite(
				"snapshot replace skipped (listener-safe); nonQuizRestored=" + String(replacedCount)
			);
		} catch (err) {
			console.warn("[resetall] snapshot restore failed", err);
			window.__liaResetDebugWrite("snapshot failed");
		}

		window.__liaResetPass(btn, "primary");
		const forceEnabledNow = window.__liaResetForceEnableQuizActionButtons(host);
		if (forceEnabledNow > 0) {
			window.__liaResetDebugWrite("primary: force-enabled quiz action buttons; count=" + String(forceEnabledNow));
		}
		window.setTimeout(function () {
			const liveHost = window.__liaGetResetHost(btn);
			if (!liveHost) return;
			window.__liaResetForceEnableQuizActionButtons(liveHost);
		}, 80);
		window.setTimeout(function () {
			const liveHost = window.__liaGetResetHost(btn);
			if (!liveHost) return;
			window.__liaResetForceEnableQuizActionButtons(liveHost);
		}, 260);
		// Keep reset deterministic: avoid a second asynchronous pass that can race with user input.
		window.__liaResetDebugWrite("safe-mode reset applied");

		if (btn && replacedCount === 0) {
			btn.title = "Fallback-Reset ausgefuehrt";
		}
		window.__liaResetDebugWrite("reset finished");

	} catch (err) {
		window.__liaResetDebugWrite("error: " + String(err && err.message ? err.message : err));
		try { console.error("[resetall] fatal", err); } catch (e) {}

	} finally {
		window.setTimeout(function () {
			if (btn) {
				btn.disabled = false;
				btn.title = "Reset ausgefuehrt";
				btn.textContent = "Folie zurckgesetzt";
				window.setTimeout(function () { btn.textContent = "Folie zurcksetzen"; }, 700);
			}
		}, 260);
	}
};

setTimeout(function () { window.__liaPrimeSlideResetCatalog(null); }, 0);
setTimeout(function () { window.__liaPrimeSlideResetCatalog(null); }, 140);
setTimeout(function () { window.__liaPrimeSlideResetCatalog(null); }, 420);
setTimeout(function () { window.__liaResetInstallNavigationDebug(); }, 0);
setTimeout(function () { window.__liaResetInstallInteractionGuard(); }, 0);
setTimeout(function () { window.__liaResetInstallChoiceMutationGuard(); }, 0);
setTimeout(function () { window.__liaResetDebugNavigationChange("startup-120ms"); }, 120);
window.addEventListener("hashchange", function () {
	window.__liaResetEpoch += 1;
	if (window.__liaResetNavDebugState) {
		window.__liaResetNavDebugState.lastHashEventTs = Date.now();
	}
	const hashNow = window.__liaGetResetHash() || "#1";
	window.__liaResetDebugWrite("hashchange detected; to=" + hashNow + "; done=" + String(window.__liaResetDoneByHash[hashNow] ? 1 : 0));

	if (window.__liaResetDoneByHash[hashNow]) {
		// Timer darf nur auf bereits reset-verwalteten Folien angefasst werden.
		const hostEarly = window.__liaGetResetHost(null);
		if (hostEarly && hostEarly.querySelectorAll) {
			const uiClearedEarly = window.__liaResetCleanupTimerUI(hostEarly);
			const stateClearedEarly = window.__liaResetResetTimerState(hostEarly);
			const gateEarly = window.__liaResetEnforceTimerByQuizState(hostEarly);
			if (uiClearedEarly > 0 || stateClearedEarly > 0) {
				window.__liaResetDebugWrite("hashchange: early timer cleanup; uiCleared=" + String(uiClearedEarly) + "; stateCleared=" + String(stateClearedEarly));
			}
			if (gateEarly && (gateEarly.gatedOff > 0 || gateEarly.restored > 0)) {
				window.__liaResetDebugWrite(
					"hashchange: timer gate enforced; off=" + String(gateEarly.gatedOff) +
					"; restored=" + String(gateEarly.restored)
				);
			}
		}
	}
	
	let maskToken = 0;
	if (window.__liaResetDoneByHash[hashNow]) {
		maskToken = window.__liaResetApplyRehydrateMask("hashchange-main");
		setTimeout(function () { window.__liaResetReleaseRehydrateMask(maskToken, "hashchange-failsafe-120ms"); }, 120);
	}
	window.__liaResetDebugNavigationChange("hashchange-main");
	setTimeout(function () {
		const host = window.__liaGetResetHost(null);
		if (!host || !host.querySelectorAll) return;
		window.__liaResetTraceFields(host, "hashchange+40-fields");
		window.__liaResetTraceQuizOutcomes(host, "hashchange+40-quiz");
	}, 40);
	setTimeout(function () { window.__liaPrimeSlideResetCatalog(null); }, 80);
	window.__liaResetTryImmediateRehydrate(hashNow, "hashchange-main-sync");
	setTimeout(function () { window.__liaResetTryImmediateRehydrate(hashNow, "hashchange-main-0ms"); }, 0);
	setTimeout(function () { window.__liaResetTryImmediateRehydrate(hashNow, "hashchange-main-24ms"); }, 24);
	if (window.__liaResetDoneByHash[hashNow]) {
		window.__liaResetScheduleRehydrate(hashNow, "hashchange-main");
	}

	if (window.__liaResetDoneByHash[hashNow]) {
		// Timer-Reinit nur auf reset-verwalteten Folien.
		window.setTimeout(function () {
			const host = window.__liaGetResetHost(null);
			if (!host || !host.querySelectorAll) return;
			window.__liaResetEnforceTimerByQuizState(host);
			window.__liaResetReinitializeTimer(host);
		}, 130);
	}
});

if (!window.__liaResetClickBridgeInstalled) {
	window.__liaResetClickBridgeInstalled = true;
	document.addEventListener("click", function (ev) {
		const target = ev.target && ev.target.closest ? ev.target.closest(".lia-resetall-btn, [data-resetall-btn='1']") : null;
		if (!target) return;
		window.__liaResetDebugWrite("bridge click");
		ev.preventDefault();
		ev.stopPropagation();
		window.__liaResetCurrentSlideOnly(target);
	}, true);
	window.__liaResetDebugWrite("bridge installed");
}

if (!window.__liaResetQuizProbeInstalled) {
	window.__liaResetQuizProbeInstalled = true;
	document.addEventListener("click", function (ev) {
		const target = ev.target && ev.target.closest ? ev.target.closest(".lia-quiz__check, .lia-quiz__resolve") : null;
		if (!target) return;
		const clickEpoch = window.__liaResetEpoch;

		const rootPre = window.__liaResetResolveQuizRootFromButton(target) || target.parentElement;
		const preSig = window.__liaResetCaptureQuizSignature(rootPre);

		const bodyFrozen = !!(document.body && document.body.classList && (
			document.body.classList.contains("lia-snapshot-mode") ||
			document.body.classList.contains("lia-frozen-scope") ||
			document.body.classList.contains("lia-frozen-static-quiz")
		));
		const inFrozenScope = !!target.closest(".lia-frozen-scope, .lia-frozen-static-quiz");
		const disabled = !!target.disabled || target.getAttribute("aria-disabled") === "true";

		window.__liaResetDebugWrite(
			"probe click; cls=" + String(target.className || "") +
			"; disabled=" + String(disabled ? 1 : 0) +
			"; frozenScope=" + String(inFrozenScope ? 1 : 0) +
			"; bodyFrozen=" + String(bodyFrozen ? 1 : 0)
		);

		if (target.classList && target.classList.contains("lia-quiz__check")) {
			var _obsTarget = target;
			var _obsRoot = window.__liaResetResolveQuizRootFromButton(_obsTarget) || _obsTarget.parentElement;
			var _preSig = preSig;
			if (_obsRoot && window.MutationObserver) {
				var _obs = new MutationObserver(function (mutations) {
					if (clickEpoch !== window.__liaResetEpoch) {
						_obs.disconnect();
						return;
					}
					var curSig = window.__liaResetCaptureQuizSignature(_obsRoot);
					var changed = curSig !== _preSig;
					var isSolved = !!(_obsRoot.classList && _obsRoot.classList.contains("solved"));
					var feedback = _obsRoot.querySelector ? _obsRoot.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
					var hasFeedbackSuccess = !!(feedback && feedback.classList && feedback.classList.contains("text-success"));
					var hasFeedbackError = !!(feedback && feedback.classList && feedback.classList.contains("text-error"));
					if (changed && (isSolved || hasFeedbackSuccess || hasFeedbackError)) {
						var _state = (isSolved || hasFeedbackSuccess) ? "success" : "error";
						window.__liaResetApplyQuizIconState(_obsRoot, _state);
						window.__liaResetSetQuizLocked(_obsRoot, _state === "success");
						try { window.__liaResetRefreshTileTargetStyles(_obsRoot); } catch (e) {}
						_obs.disconnect();
					}
				});
				_obs.observe(_obsRoot, { attributes: true, attributeFilter: ["class"], subtree: true, childList: true });
				// Sicherheitsnetz: Observer nach 8s abbrechen
				window.setTimeout(function () { try { _obs.disconnect(); } catch (e) {} }, 8000);
			}
		}

		window.setTimeout(function () {
			if (clickEpoch !== window.__liaResetEpoch) return;
			const root = window.__liaResetResolveQuizRootFromButton(target) || target.parentElement;
			const diktatValuesAfter = window.__liaResetGetDiktatValues(root);
			const isCheckBtn = target.classList && target.classList.contains("lia-quiz__check");
			const isResolveBtn = target.classList && target.classList.contains("lia-quiz__resolve");
			if (isCheckBtn && root) {
				const changed = window.__liaResetCaptureQuizSignature(root) !== preSig;
				const isSolved = !!(root.classList && root.classList.contains("solved"));
				const feedback = root.querySelector ? root.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
				const hasFeedbackSuccess = !!(feedback && feedback.classList && feedback.classList.contains("text-success"));
				const hasFeedbackError = !!(feedback && feedback.classList && feedback.classList.contains("text-error"));
				if (changed && (isSolved || hasFeedbackSuccess || hasFeedbackError)) {
					const stateNow = (isSolved || hasFeedbackSuccess) ? "success" : "error";
					window.__liaResetApplyQuizIconState(root, stateNow);
					window.__liaResetSetQuizLocked(root, stateNow === "success");
					try { window.__liaResetRefreshTileTargetStyles(root); } catch (e) {}
				}
				window.__liaResetSyncResolveVisibility(root);
			}
			if (isResolveBtn && root) {
				const changed = window.__liaResetCaptureQuizSignature(root) !== preSig;
				const isResolved = !!(root.classList && root.classList.contains("resolved"));
				const feedback = root.querySelector ? root.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
				const hasFeedbackResolve = !!(feedback && feedback.classList && feedback.classList.contains("text-disabled"));
				if (changed && (isResolved || hasFeedbackResolve)) {
					window.__liaResetApplyQuizIconState(root, "resolve");
					window.__liaResetSetQuizLocked(root, true);
					window.__liaResetEnsureResolvedFeedbackText(root);
					try { window.__liaResetRefreshTileTargetStyles(root); } catch (e) {}
				}
			}
			const state = root && root.classList
				? "solved=" + String(root.classList.contains("solved") ? 1 : 0) + ";resolved=" + String(root.classList.contains("resolved") ? 1 : 0)
				: "solved=?;resolved=?";
			const feedback = root && root.querySelector ? root.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
			const feedbackText = feedback ? String((feedback.textContent || "").trim()).slice(0, 90) : "";
			if (diktatValuesAfter.length > 0) {
				const modeAfter = isResolveBtn ? "resolve" : (isCheckBtn ? "check" : "unknown");
				window.__liaResetDebugWrite(
					"diktat: button post; mode=" + modeAfter +
					"; " + state +
					"; feedback=" + JSON.stringify(feedbackText) +
					"; valuesAfter=" + JSON.stringify(diktatValuesAfter)
				);
			}
			window.__liaResetDebugWrite("probe post-120ms; " + state + "; feedback='" + feedbackText + "'");
			const host = window.__liaGetResetHost(target);
			window.__liaResetDumpQuizState(host, "probe-post-120ms-dump");

			const afterSig = window.__liaResetCaptureQuizSignature(root);
			if (preSig === afterSig) {
					if (window.__liaResetAllowFallback) {
					const mode = target.classList && target.classList.contains("lia-quiz__resolve") ? "resolve" : "check";
					const applied = !!window.__liaResetFallbackSolve(target, mode);
					window.__liaResetDebugWrite("fallback result; mode=" + mode + "; applied=" + String(applied ? 1 : 0));
					window.setTimeout(function () {
						window.__liaResetDumpQuizState(host, "probe-fallback-dump");
					}, 20);
				} else {
					window.__liaResetDebugWrite("fallback skipped (disabled); btn='" + String(target.className || "") + "'");
				}
			}
			if (preSig === afterSig) {
				window.__liaResetDebugWrite("no-op after reset detected (reload disabled by design)");
			}
			window.__liaResetCaptureSlideState(window.__liaGetResetHash(), window.__liaGetResetHost(target), "probe-post-120ms");
		}, 120);
	}, true);
	window.__liaResetDebugWrite("probe installed");
}
@end

@resetall: <br><hr class="lia-resetall-sep"/><br><hr class="lia-resetall-sep"/><div style="text-align:center"><br><button class="lia-btn lia-btn--outline lia-resetall-btn" data-resetall-btn="1" type="button" onclick="window.__liaResetDebugWrite && window.__liaResetDebugWrite('inline click'); window.__liaResetCurrentSlideOnly && window.__liaResetCurrentSlideOnly(this); return false;">Folie zurcksetzen</button></div>


-->


# Nutzung 1


Was ist $3+8$?

[[ 11 ]]


# Nutzung 2


Was ist $3+8$?

[[ 11 ]]


--- 

--- 



Was ist $3+8$?

<!-- data-solution-button="2" -->
[[ 11 ]]


--- 

--- 


Was ist $3+8$?

<!-- data-solution-timer="3s" data-solution-timer-start="oncheck" -->
[[ 11 ]]


--- 

--- 


Whle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grn


--- 

--- 



Whle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grn


--- 

--- 

Whle rot aus.
[[(rot)|blau|grn|gelb]]


--- 

--- 






**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  nicht definiert
- [    ( )           (X)             ( )     ]  Skalar
- [    [X]           [ ]             [ ]     ]  Vektor




--- 

--- 



__Aufgabe 2:__ Lass dir die Wrter vorlesen, die in die Lcken kommen und schreibe diese in die Lcken.


<!-- data-show-partial-solution="true" -->
Anna ging in einen @diktat(Zoo). Dort konnte sie auf einem @diktat(Lama) reiten.




--- 

--- 




--- 

--- 





--- 

--- 





--- 

--- 


@resetall 





# Nutzung 3




Whle gelb aus.
[->[rot|blau|grn|(gelb)]]





--- 


__Aufgabe 3:__ Setze das Komma an die richtige Stelle. (Auflsung ist blockiert.)



@orthography(`<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->`,`Der Bruder den ich mag.`,`Der Bruder, den ich mag.`)





--- 

--- 

**Stelle** die passende Teilung der Flche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.

__$a)\;\;$__ $\dfrac{1}{4}$

@rectQuiz(1/4)



__$b)\;\;$__ $\dfrac{2}{5}$

@circleQuiz(2/5)



--- 

--- 


Markiere die korrekt.

<div class="markerquiz">
@markred(rot, rot)
@TextmarkerQuiz
</div>




@markedred(rot, rot)




--- 

--- 


Kommentare werden auch eingefroren

[[___]]



[[___ ___ ___ ___]]





--- 

--- 

$x = 5 \;\;\wedge\;\; y= 3$ \


$x$ = [[  5  ]] @canvas und $y$ = [[  3  ]] @canvas
@Algebrite.check([ 5 ; 3 ])






--- 

--- 


@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=700;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(1|4)$.

@ErzeugePunkt(`A1;A;1;4`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)
</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(5|0)$.

@ErzeugePunkt(`A1;B;5;0`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(7|6)$.

@ErzeugePunkt(`A1;C;7;6`,`<!--  -->`)

@ADetails(BE=1;Koordinatensystem)

</div>
</section>






--- 

--- 




@resetall 

