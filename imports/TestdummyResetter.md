<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1





@onload
(function () {
	if (!document.getElementById("lia-reset-icon-css")) {
		const s = document.createElement("style");
		s.id = "lia-reset-icon-css";
		s.textContent = [
			".lia-quiz .lia-quiz__answers { position: relative; }",
			".lia-resetall-sep { border: 0 !important; border-top: 1px solid var(--lia-reset-accent, #0b5fff) !important; opacity: 0.55; }",
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

window.__liaResetDebugWrite = function (message) {
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
	return "";
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

window.__liaResetControlValue = function (el) {
	if (!el) return "";
	const t = String(el.type || "").toLowerCase();
	if (t === "checkbox" || t === "radio") return el.checked ? "1" : "0";
	if ("value" in el) return String(el.value || "").trim();
	return String(el.textContent || "").trim();
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

window.__liaResetResolveQuizRootFromButton = function (btn) {
	if (!btn || !(btn instanceof Element)) return null;
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

	const controls = Array.from(quiz.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).filter(function (el) {
		const t = String(el.type || "").toLowerCase();
		return t !== "hidden" && t !== "button" && t !== "submit" && t !== "reset" && t !== "image" && t !== "file";
	});
	if (!controls.length) return false;

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
			if ("value" in c) c.value = ex;
			else c.textContent = ex;
			try { c.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
			try { c.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
		});
		quiz.classList.remove("solved", "open", "resolved");
		quiz.classList.add("resolved");
		if (fb) {
			fb.classList.remove("text-success", "text-error");
			fb.classList.add("text-disabled");
			fb.textContent = resolvedText ? resolvedText : "";
		}
		window.__liaResetApplyQuizIconState(quiz, "resolve");
		window.__liaResetSetQuizLocked(quiz, true);
		window.__liaResetDebugWrite("fallback resolve applied; id=" + String(quiz.getAttribute("data-resetall-id") || ""));
		return true;
	}

	let ok = true;
	controls.forEach(function (c, i) {
		const ex = String(expected[i] || "").trim();
		if (!ex) return;
		const got = ("value" in c ? String(c.value || "") : String(c.textContent || "")).trim();
		if (got !== ex) ok = false;
	});

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

	const checkBtn = quiz.querySelector(".lia-quiz__check");
	if (checkBtn) {
		const m = String(checkBtn.textContent || "").match(/\s(\d+)\s*$/);
		const n = m ? Number(m[1]) + 1 : 1;
		const base = String(checkBtn.textContent || "").replace(/\s+\d+\s*$/, "").trim() || "Pruefen";
		checkBtn.textContent = base + " " + String(n);
	}

	window.__liaResetDebugWrite("fallback check applied; ok=" + String(ok ? 1 : 0) + "; id=" + String(quiz.getAttribute("data-resetall-id") || ""));
	return true;
};

window.__liaResetClearExpandoState = function (el) {
	if (!el || !(el instanceof Element)) return 0;
	let n = 0;
	Object.keys(el).forEach(function (k) {
		if (!k) return;
		if (!/^(?:__|_)?(?:lia|quiz)/i.test(k) && !/(?:solved|resolved|attempt|check|state)/i.test(k)) return;
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
	window.__liaResetDumpQuizState(host, phase + "-before");

	let editableSeen = 0;
	let editableReset = 0;
	let editableSkipped = 0;
	let expandoCleared = 0;

	Array.from(host.querySelectorAll("input, textarea, select, [contenteditable='true'], [role='textbox']")).forEach(function (field) {
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

		if (type === "checkbox" || type === "radio") {
			field.checked = !!field.defaultChecked;
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

		try { field.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
		try { field.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
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

	window.__liaResetDebugWrite(
		phase + ": pass done; fieldsSeen=" + String(editableSeen) +
		"; fieldsReset=" + String(editableReset) +
		"; fieldsSkipped=" + String(editableSkipped) +
		"; quizRootsTouched=" + String(quizRootsTouched) +
		"; controlsUnlocked=" + String(controlsUnlocked) +
		"; expandoCleared=" + String(expandoCleared)
	);
	window.__liaResetDumpQuizState(host, phase + "-after");
};

window.__liaGetResetHost = function (button) {
	const btn = button instanceof HTMLElement ? button : null;
	return (
		(btn && btn.closest(".lia-slide__content, .lia-content, main, article, section")) ||
		document.querySelector(".lia-slide.active .lia-slide__content") ||
		document.querySelector(".lia-slide.current .lia-slide__content") ||
		document.querySelector(".lia-slide[aria-hidden='false'] .lia-slide__content") ||
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

	window.__liaCollectResetTargets(host).forEach(function (el) {
		if (!el || !(el instanceof Element)) return;
		let id = el.getAttribute("data-resetall-id");
		if (!id) {
			window.__liaResetUidCounter += 1;
			id = "rs_" + String(window.__liaResetUidCounter);
			el.setAttribute("data-resetall-id", id);
		}
		if (!bucket[id]) {
			bucket[id] = String(el.outerHTML || "");
		}
	});
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
		window.setTimeout(function () { window.__liaResetPass(btn, "deferred-120ms"); }, 120);
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
window.addEventListener("hashchange", function () {
	window.__liaResetEpoch += 1;
	setTimeout(function () { window.__liaPrimeSlideResetCatalog(null); }, 80);
	setTimeout(function () {
		const hash = window.__liaGetResetHash() || "#1";
		if (!window.__liaResetDoneByHash[hash]) return;
		window.__liaResetDebugWrite("rehydrate reset on " + hash);
		window.__liaResetPass(null, "rehydrate-120ms");
	}, 120);
	setTimeout(function () {
		const hash = window.__liaGetResetHash() || "#1";
		if (!window.__liaResetDoneByHash[hash]) return;
		window.__liaResetPass(null, "rehydrate-360ms");
	}, 360);
	setTimeout(function () {
		const hash = window.__liaGetResetHash() || "#1";
		if (!window.__liaResetDoneByHash[hash]) return;
		window.__liaResetPass(null, "rehydrate-900ms");
	}, 900);
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
			}
			if (isResolveBtn && root) {
				const changed = window.__liaResetCaptureQuizSignature(root) !== preSig;
				const isResolved = !!(root.classList && root.classList.contains("resolved"));
				const feedback = root.querySelector ? root.querySelector(".lia-quiz__feedback, [class*='feedback']") : null;
				const hasFeedbackResolve = !!(feedback && feedback.classList && feedback.classList.contains("text-disabled"));
				if (changed && (isResolved || hasFeedbackResolve)) {
					window.__liaResetApplyQuizIconState(root, "resolve");
					window.__liaResetSetQuizLocked(root, true);
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
				const mode = target.classList && target.classList.contains("lia-quiz__resolve") ? "resolve" : "check";
				window.__liaResetFallbackSolve(target, mode);
				window.setTimeout(function () {
					window.__liaResetDumpQuizState(host, "probe-fallback-dump");
				}, 20);
			}
			if (preSig === afterSig) {
				window.__liaResetDebugWrite("no-op after reset detected (reload disabled by design)");
			}
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




Was ist $3+8$?

<!-- data-solution-button="5" -->
[[ 11 ]]



@resetall 




# Nutzung 3


Was ist $3+8$?


[[ 11 ]]



@reset


Was ist $3+8$?

[[ 11 ]]



# Nutzung 4


Was ist $3+8$?


[[ 11 ]]



@reset


Was ist $3+8$?

[[ 11 ]]


