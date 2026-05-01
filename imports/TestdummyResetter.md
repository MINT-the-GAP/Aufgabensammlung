<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md



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
window.__liaResetMaskToken = window.__liaResetMaskToken || 0;
window.__liaResetDebugEnabled = window.__liaResetDebugEnabled !== false;

window.__liaResetDebugWrite = function (message) {
	if (!window.__liaResetDebugEnabled) return;
	const msg = String(message || "");
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
	const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
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
		// Already frozen — still ensure defaultChecked/attribute are cleared.
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
		// defineProperty failed (e.g. cross-origin) — fall back silently.
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
	const draggables = Array.from(host.querySelectorAll("[draggable='true']"));
	draggables.forEach(function (el) {
		if (!el || !(el instanceof Element)) return;
		const id = window.__liaResetEnsureNodeUid(el);
		if (!id || window.__liaResetDragHomeById[id]) return;
		const parent = el.parentElement;
		if (!parent) return;
		const parentId = window.__liaResetEnsureNodeUid(parent);
		const nextEl = el.nextElementSibling;
		const nextId = nextEl ? window.__liaResetEnsureNodeUid(nextEl) : "";
		window.__liaResetDragHomeById[id] = {
			parentId: String(parentId || ""),
			nextId: String(nextId || ""),
		};
	});
};

window.__liaResetRestoreDragHomes = function (host) {
	if (!host || !host.querySelectorAll) return 0;
	let moved = 0;
	const draggables = Array.from(host.querySelectorAll("[draggable='true'][data-reset-uid]"));
	draggables.forEach(function (el) {
		const id = String(el.getAttribute("data-reset-uid") || "");
		if (!id) return;
		const home = window.__liaResetDragHomeById[id];
		if (!home || !home.parentId) return;
		const parent = host.querySelector("[data-reset-uid='" + String(home.parentId) + "']");
		if (!parent) return;
		const next = home.nextId ? host.querySelector("[data-reset-uid='" + String(home.nextId) + "']") : null;
		if (el.parentElement === parent && (!next || el.nextElementSibling === next)) return;
		try {
			parent.insertBefore(el, next || null);
			moved += 1;
		} catch (e) {}
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
		return !el.matches(".lia-quiz, lia-quiz");
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

window.__liaResetCaptureQuizSignature = function (quizRoot) {
	if (!quizRoot || !(quizRoot instanceof Element)) return "";
	const fb = quizRoot.querySelector ? quizRoot.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
	const vals = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).map(function (el) {
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
		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
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

		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
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

		if (row.quizComments && Array.isArray(row.quizComments)) {
			window.__liaResetRestoreQuizComments(quiz, row.quizComments);
		}

		applied += 1;
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
	if ("value" in el) return String(el.value || "").trim();
	return String(el.textContent || "").trim();
};

window.__liaResetFieldValueForDebug = function (el) {
	if (!el) return "";
	const t = String(el.type || "").toLowerCase();
	if (t === "checkbox" || t === "radio") return el.checked ? "1" : "0";
	if ("value" in el) return String(el.value || "");
	return String(el.textContent || "");
};

window.__liaResetCollectEditableFields = function (host) {
	if (!host || !host.querySelectorAll) return [];
	const targets = window.__liaCollectResetTargets(host);
	const pool = targets.length
		? Array.from(host.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (field) {
			return targets.some(function (t) { return t && t.contains && t.contains(field); });
		})
		: Array.from(host.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']"));
	return pool.filter(function (field) {
		const type = String(field.type || "").toLowerCase();
		const isHidden = type === "hidden";
		const isControlInput = type === "button" || type === "submit" || type === "reset" || type === "image" || type === "file";
		const isReadonlyDisplay = field.hasAttribute("readonly") || field.getAttribute("aria-readonly") === "true";
		const isNonEditableRole = field.getAttribute("contenteditable") === "false";
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
		const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
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
			if (window.__liaResetInteractionState && Number(window.__liaResetInteractionState.lastTs || 0) > scheduleTs) {
				window.__liaResetDebugWrite(
					"rehydrate pass skipped (user interaction); hash=" + targetHash +
					"; source=" + String(source || "unknown") +
					"; delay=" + String(ms)
				);
				return;
			}
			window.__liaPrimeSlideResetCatalog(null);
			const host = window.__liaGetResetHost(null);
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
		if (!t.closest(".lia-quiz, lia-quiz, .orthography-wrap, .fq-widget, .markerquiz")) return;
		window.__liaResetMarkQuizInteraction("input");
		window.__liaResetMarkQuizTouched(t, "input");
		const q = t.closest(".lia-quiz, lia-quiz");
		if (q) {
			const qid = String(q.getAttribute("data-resetall-id") || "");
			const tag = String(t.tagName || "").toLowerCase();
			const type = String(t.type || "").toLowerCase();
			const isChoice = type === "checkbox" || type === "radio" || tag === "select";
			if (qid && isChoice) {
				window.__liaResetChoiceInputTouchById[qid] = Date.now();
				window.__liaResetDebugWrite("choice input touched; id=" + qid + "; type=" + type + "; tag=" + tag);
			}
		}
		const host = window.__liaGetResetHost(t);
		window.__liaResetSanitizeUntouchedChoiceQuizzes(host, "interaction-input");
		window.__liaResetScheduleSanitizeUntouchedChoiceQuizzes(host, "interaction-input");
	}, true);

	document.addEventListener("click", function (ev) {
		if (!ev || ev.isTrusted !== true) return;
		const t = ev && ev.target;
		if (!t || !t.closest) return;
		const btn = t.closest(".lia-quiz__check, .lia-quiz__resolve");
		if (!btn) return;
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
	const changed = hash !== state.lastHash || sig !== state.lastSlideSig;
	if (!changed) return false;

	const now = Date.now();
	const isMutationLike = /^mutation|^poll-/i.test(sourceText);
	const hashReallyChanged = hash !== state.lastHash;
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
	if (host && host.querySelectorAll) {
		window.__liaResetTraceFields(host, "nav-change-" + String(source || "unknown") + "-fields");
		window.__liaResetTraceQuizOutcomes(host, "nav-change-" + String(source || "unknown") + "-quiz");
	}
	const isHashEventSource = /^hashchange|^popstate/i.test(sourceText);
	if (window.__liaResetDoneByHash[hash] && isHashEventSource) {
		window.__liaResetScheduleRehydrate(hash, "nav-" + sourceText);
	}
	if (window.__liaResetDoneByHash[hash] && isMutationLike && hashReallyChanged) {
		const maskToken = window.__liaResetApplyRehydrateMask("nav-" + sourceText + "-mutation");
		const delay = mutationGhostLike ? 120 : 40;
		window.setTimeout(function () {
			if ((window.__liaGetResetHash() || "#1") !== hash) {
				window.__liaResetReleaseRehydrateMask(maskToken, "nav-mutation-hash-changed");
				return;
			}
			const applied = window.__liaResetTryImmediateRehydrate(hash, "nav-" + sourceText + "-mutation-" + String(delay) + "ms");
			if (!applied) {
				window.__liaResetScheduleRehydrate(hash, "nav-" + sourceText + "-mutation-" + String(delay) + "ms");
			}
			window.__liaResetReleaseRehydrateMask(maskToken, "nav-mutation-restore");
		}, delay);
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
			if (now - Number(state.lastMutationTs || 0) < 120) return;
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
	const txt = String(window.__liaResetReadNativeFeedbackText(quiz, "resolved") || "Aufgelöste Antwort").trim();
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

		const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
			const t = String(el.type || "").toLowerCase();
			return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
		});
		if (!controls.length) return;

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
		const controls = Array.from(quizRoot.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
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

	const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
		const t = String(el.type || "").toLowerCase();
		return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
	});
	if (!controls.length) return false;

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
			fb.textContent = resolvedText ? resolvedText : "Aufgelöste Antwort";
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
	window.__liaResetPrimeDragHomes(host);
	window.__liaResetDumpQuizState(host, phase + "-before");
	window.__liaResetTraceFields(host, phase + "-fields-before");
	window.__liaResetTraceQuizOutcomes(host, phase + "-quiz-before");

	let editableSeen = 0;
	let editableReset = 0;
	let editableSkipped = 0;
	let expandoCleared = 0;
	const appliedRows = [];
	const editableFields = window.__liaResetCollectEditableFields(host);

	editableFields.forEach(function (field) {
		const tag = String(field.tagName || "").toLowerCase();
		const type = String(field.type || "").toLowerCase();
		const isHidden = type === "hidden";
		const isControlInput = type === "button" || type === "submit" || type === "reset" || type === "image" || type === "file";
		const isReadonlyDisplay = field.hasAttribute("readonly") || field.getAttribute("aria-readonly") === "true";
		const isNonEditableRole = field.getAttribute("contenteditable") === "false";

		editableSeen += 1;

		if (isHidden || isControlInput || isReadonlyDisplay || isNonEditableRole) {
			editableSkipped += 1;
			return;
		}

		const beforeVal = window.__liaResetFieldValueForDebug(field);

		if (type === "checkbox" || type === "radio") {
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
		quizRoot.classList.remove("solved", "resolved");
		quizRoot.classList.add("open");
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
	const hiddenResetCount = 0;
	const dragResetCount = window.__liaResetRestoreDragHomes(host);

	window.__liaResetDebugWrite(
		phase + ": pass done; fieldsSeen=" + String(editableSeen) +
		"; fieldsReset=" + String(editableReset) +
		"; fieldsSkipped=" + String(editableSkipped) +
		"; quizRootsTouched=" + String(quizRootsTouched) +
		"; controlsUnlocked=" + String(controlsUnlocked) +
		"; expandoCleared=" + String(expandoCleared) +
		"; selectsReset=" + String(selectResetCount) +
		"; hiddenReset=" + String(hiddenResetCount) +
		"; draggablesReset=" + String(dragResetCount)
	);
	if (window.__liaResetTraceEnabled) {
		window.__liaResetDebugWrite(phase + ": field-reconstruct=" + JSON.stringify(appliedRows));
	}
	window.__liaResetDumpQuizState(host, phase + "-after");
	window.__liaResetTraceFields(host, phase + "-fields-after");
	window.__liaResetTraceQuizOutcomes(host, phase + "-quiz-after");
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
		const id = "rs_" + hashPart + "_" + String(idx + 1);
		el.setAttribute("data-resetall-id", id);
		if (!window.__liaResetInitialCommentsByQuizId[id]) {
			window.__liaResetInitialCommentsByQuizId[id] = window.__liaResetExtractQuizComments(el);
		}
		if (!bucket[id]) {
			bucket[id] = String(el.outerHTML || "");
		}
	});
	window.__liaResetPrimeDragHomes(host);
};

window.__liaResetTryImmediateRehydrate = function (hash, source) {
	const targetHash = String(hash || window.__liaGetResetHash() || "#1");
	if (!window.__liaResetDoneByHash[targetHash]) return false;
	const host = window.__liaGetResetHost(null);
	if (!host || !host.querySelectorAll) return false;
	window.__liaPrimeSlideResetCatalog(null);
	if (window.__liaResetApplySlideState(targetHash, host, "immediate-" + String(source || "nav"))) {
		window.__liaResetDebugWrite("immediate rehydrate applied; hash=" + targetHash + "; source=" + String(source || "nav"));
		window.__liaResetReleaseRehydrateMask(0, "immediate-success");
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

		let replacedCount = 0;
		try {
			window.__liaPrimeSlideResetCatalog(btn);
			window.__liaResetLearnExpectedFromSolved(host);
			// IMPORTANT: Do not replace quiz nodes by outerHTML.
			// Replacing nodes drops runtime event listeners for Pruefen/Aufloesen.
			window.__liaResetDebugWrite("snapshot replace skipped (listener-safe)");
		} catch (err) {
			console.warn("[resetall] snapshot restore failed", err);
			window.__liaResetDebugWrite("snapshot failed");
		}

		window.__liaResetPass(btn, "primary");
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
				btn.textContent = "Folie zurückgesetzt";
				window.setTimeout(function () { btn.textContent = "Folie zurücksetzen"; }, 700);
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
	let maskToken = 0;
	if (window.__liaResetDoneByHash[hashNow]) {
		maskToken = window.__liaResetApplyRehydrateMask("hashchange-main");
		setTimeout(function () { window.__liaResetReleaseRehydrateMask(maskToken, "hashchange-failsafe-180ms"); }, 180);
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
				}
			}
			const state = root && root.classList
				? "solved=" + String(root.classList.contains("solved") ? 1 : 0) + ";resolved=" + String(root.classList.contains("resolved") ? 1 : 0)
				: "solved=?;resolved=?";
			const feedback = root && root.querySelector ? root.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
			const feedbackText = feedback ? String((feedback.textContent || "").trim()).slice(0, 90) : "";
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

@resetall: <br><hr class="lia-resetall-sep"/><br><hr class="lia-resetall-sep"/><div style="text-align:center"><br><button class="lia-btn lia-btn--outline lia-resetall-btn" data-resetall-btn="1" type="button" onclick="window.__liaResetDebugWrite && window.__liaResetDebugWrite('inline click'); window.__liaResetCurrentSlideOnly && window.__liaResetCurrentSlideOnly(this); return false;">Folie zurücksetzen</button></div>


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


Wähle blau aus.
- [[X]] Blau
- [[ ]] Gelb
- [[ ]] Rot
- [[ ]] Grün


--- 

--- 



Wähle blau aus.
- [(X)] Blau
- [( )] Gelb
- [( )] Rot
- [( )] Grün


--- 

--- 

Wähle rot aus.
[[(rot)|blau|grün|gelb]]


--- 

--- 



Wähle gelb aus.
[->[rot|blau|grün|(gelb)]]



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


@resetall 





# Nutzung 3


Was ist $3+8$?

[[ 11 ]]




Was ist $3+8$?

<!-- data-solution-button="2" -->
[[ 11 ]]



Was ist $3+8$?

<!-- data-solution-timer="3s" data-solution-timer-start="oncheck" -->
[[ 11 ]]



--- 

--- 




@resetall 
