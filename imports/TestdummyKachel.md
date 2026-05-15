<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Resetter v0.0.1




@onload
(function () {
	if (window.__liaTileCrossByTextPatched) return;
	window.__liaTileCrossByTextPatched = 1;
	window.__liaTileCrossDebug = window.__liaTileCrossDebug || [];
	window.__liaTileCrossDebugEnabled = true;
	window.__liaTileCrossLogScope = window.__liaTileCrossLogScope || "kf";

	function dlog(msg) {
		const raw = String(msg || "");
		if (window.__liaTileCrossLogScope === "kf" && !/^kf:/i.test(raw)) return;
		const line = (window.__liaTileCrossLogScope === "kf" ? "[kachelfolge] " : "[tile-cross] ") + raw;
		try {
			window.__liaTileCrossDebug.push(new Date().toISOString() + " " + line);
			if (window.__liaTileCrossDebug.length > 400) window.__liaTileCrossDebug.shift();
		} catch (e) {}
		if (window.__liaTileCrossDebugEnabled) {
			try { console.log(line); } catch (e) {}
			try {
				if (typeof window.__liaResetDebugWrite === "function") {
					window.__liaResetDebugWrite(line);
				}
			} catch (e) {}
		}
	}

	window.__liaKachelfolgeLog = function (msg) {
		dlog("kf: " + String(msg || ""));
	};

	function ensureRoundedTileStyles() {
		if (window.__liaTileCrossRoundedStylesApplied) return;
		window.__liaTileCrossRoundedStylesApplied = 1;

		const style = document.createElement("style");
		style.setAttribute("data-lia-tile-rounded", "1");
		style.textContent = [
			":root { --lia-tile-radius: 12px; --lia-target-width-scale: 0.65; --lia-target-min-width: calc(clamp(9rem, 22vw, 14rem) * var(--lia-target-width-scale)); --lia-tile-bg: rgba(0, 0, 0, 0.15); }",
			".kachelfolge-wrap > span[data-kf-uid] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; background-color: var(--lia-tile-bg) !important; }",
			".kachelfolge-wrap > span[data-kf-uid].lia-target-placeholder { background-color: transparent !important; }",
			".kachelfolge-wrap > div > span[role='button'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; background-color: var(--lia-tile-bg) !important; }",
			".lia-paragraph:has(> .kachelfolge-wrap) + div > span[role='button'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; background-color: var(--lia-tile-bg) !important; }",
			"[id^='kachelfolge-wrap-'] ~ div > span[role='button'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; background-color: var(--lia-tile-bg) !important; }",
			".kachelfolge-wrap > span[data-kf-uid] > *, .kachelfolge-wrap > div > span[role='button'] > * { display: inline-flex !important; align-items: center; justify-content: center; width: 100%; text-align: center; margin-inline: auto; }",
			".lia-paragraph:has(> .kachelfolge-wrap) + div > span[role='button'] > * { display: inline-flex !important; align-items: center; justify-content: center; width: 100%; text-align: center; margin-inline: auto; }",
			"[id^='kachelfolge-wrap-'] ~ div > span[role='button'] > * { display: inline-flex !important; align-items: center; justify-content: center; width: 100%; text-align: center; margin-inline: auto; }",
			".lia-quiz.solved [data-reset-tile-role='target'], .lia-quiz.resolved [data-reset-tile-role='target'], .solved [data-reset-tile-role='target'], .resolved [data-reset-tile-role='target'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; min-width: var(--lia-target-min-width); max-width: 100%; display: inline-flex !important; align-items: center; justify-content: center; padding-inline: calc(0.8rem * var(--lia-target-width-scale)); text-align: center; background-color: var(--lia-tile-bg) !important; }",
			".lia-quiz.solved [data-reset-tile-role='source'], .lia-quiz.resolved [data-reset-tile-role='source'], .lia-quiz.solved [draggable='true'], .lia-quiz.resolved [draggable='true'], .solved [data-reset-tile-role='source'], .resolved [data-reset-tile-role='source'], .solved [draggable='true'], .resolved [draggable='true'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden !important; background-color: var(--lia-tile-bg) !important; }",
			"[onclick*='dragtarget'], [onkeydown*='dragtarget'], [ondragover*='dragtarget'], [ondragleave*='dragtarget'],",
			"[onclick*='dragenter'], [onkeydown*='dragenter'], [ondragover*='dragenter'], [ondragleave*='dragenter'],",
			"[data-reset-tile-role='target'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden; min-width: var(--lia-target-min-width); max-width: 100%; display: inline-flex; align-items: center; justify-content: center; padding-inline: calc(0.8rem * var(--lia-target-width-scale)); text-align: center; background-color: var(--lia-tile-bg) !important; }",
			"[onclick*='dragtarget'], [onkeydown*='dragtarget'], [ondragover*='dragtarget'], [ondragleave*='dragtarget'], [onclick*='dragenter'], [onkeydown*='dragenter'], [ondragover*='dragenter'], [ondragleave*='dragenter'] { background-color: var(--lia-tile-bg) !important; }",
			"[onclick*='dragsource'], [onkeydown*='dragsource'], [ondragstart*='dragsource'], [ondragend*='dragsource'],",
			"[data-reset-tile-role='source'], [draggable='true'] { border-radius: var(--lia-tile-radius) !important; overflow: hidden; background-color: var(--lia-tile-bg) !important; }",
			"[onclick*='dragsource'], [onkeydown*='dragsource'], [ondragstart*='dragsource'], [ondragend*='dragsource'] { background-color: var(--lia-tile-bg) !important; }",
			"[data-reset-tile-role='target'] [data-reset-tile-role='source'], [data-reset-tile-role='target'] [draggable='true'] { background-color: transparent !important; color: inherit !important; }",
			"[data-reset-tile-role='target'] [data-reset-tile-role='source'] *, [data-reset-tile-role='target'] [draggable='true'] * { background-color: transparent !important; color: inherit !important; }",
			"[onclick*='dragtarget'] > *, [onkeydown*='dragtarget'] > *, [ondragover*='dragtarget'] > *,",
			"[onclick*='dragenter'] > *, [onkeydown*='dragenter'] > *, [ondragover*='dragenter'] > * { border-radius: var(--lia-tile-radius) !important; display: inline-flex; align-items: center; justify-content: center; width: 100%; text-align: center; margin-inline: auto; }",
			"[data-reset-tile-role='target'] [onclick*='dragsource'], [data-reset-tile-role='target'] [onkeydown*='dragsource'], [data-reset-tile-role='target'] [draggable='true'] { display: inline-flex; align-items: center; justify-content: center; width: 100%; text-align: center; margin-inline: auto; }",
			".lia-target-placeholder { color: var(--lia-theme-color, var(--lia-primary, var(--md-primary-fg-color, var(--color-primary, currentColor)))) !important; }",
			".lia-target-placeholder *, .lia-target-placeholder [data-reset-tile-role='source'], .lia-target-placeholder [draggable='true'] { color: inherit !important; background-color: transparent !important; }",
			"[onclick*='dragsource'] > *, [onkeydown*='dragsource'] > *, [ondragstart*='dragsource'] > * { border-radius: var(--lia-tile-radius) !important; }"
		].join("\n");

		(document.head || document.documentElement).appendChild(style);
	}

	ensureRoundedTileStyles();

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

	function getThemePlusColor() {
		return pickAccentFrom(document) || "var(--lia-accent, var(--lia-primary, var(--lia-color-primary, var(--primary, var(--color-primary, var(--accent-color, currentColor))))))";
	}

	function applyThemeColorToTargetPlaceholders(root) {
		const scope = root && root.querySelectorAll ? root : document;
		const nodes = scope.querySelectorAll ? scope.querySelectorAll("[onclick*='dragtarget'], [onkeydown*='dragtarget'], [ondragover*='dragtarget'], [ondragleave*='dragtarget'], [onclick*='dragenter'], [onkeydown*='dragenter'], [ondragover*='dragenter'], [ondragleave*='dragenter'], [data-reset-tile-role='target']") : [];
		const accent = pickAccentFrom(document) || "";
		Array.from(nodes || []).forEach(function (target) {
			if (!target) return;
			const box = target.firstElementChild || target;
			const txt = norm(box && box.textContent || "");
			if (txt === "✛" || txt === "+" || txt === "") {
				try { target.classList.add("lia-target-placeholder"); } catch (e) {}
				try { box.classList.add("lia-target-placeholder"); } catch (e) {}
				if (accent) {
					try { target.style.setProperty("color", accent, "important"); } catch (e) {}
					try { box.style.setProperty("color", accent, "important"); } catch (e) {}
				}
			} else {
				try { target.classList.remove("lia-target-placeholder"); } catch (e) {}
				try { box.classList.remove("lia-target-placeholder"); } catch (e) {}
				target.style.color = "";
				box.style.color = "";
				Array.from(target.querySelectorAll ? target.querySelectorAll("[data-reset-tile-role='source'], [draggable='true']") : []).forEach(function (el) {
					if (!el) return;
					try { el.style.color = ""; } catch (e) {}
					try { el.style.backgroundColor = "transparent"; } catch (e) {}
				});
			}
		});
	}

	window.setTimeout(function () { applyThemeColorToTargetPlaceholders(document); }, 60);
	window.setTimeout(function () { applyThemeColorToTargetPlaceholders(document); }, 500);

	function norm(s) {
		return String(s || "").replace(/\s+/g, " ").trim().toLowerCase();
	}

	function targetDisplayText(node) {
		if (!node) return "";
		const box = node.firstElementChild || node;
		const txt = norm(box && box.textContent || "");
		if (txt === "✛" || txt === "+") return "";
		return txt;
	}

	function sameMultiset(a, b) {
		const aa = (Array.isArray(a) ? a : []).map(norm).filter(Boolean).sort();
		const bb = (Array.isArray(b) ? b : []).map(norm).filter(Boolean).sort();
		if (aa.length !== bb.length) return false;
		for (let i = 0; i < aa.length; i++) {
			if (aa[i] !== bb[i]) return false;
		}
		return true;
	}

	function freezeSolvedTileQuiz(tileRoot, quizNode) {
		if (!tileRoot) return;

		targetNodes(tileRoot).forEach(function (target) {
			if (!target) return;
			try { target.setAttribute("tabindex", "-1"); } catch (e) {}
			try { target.setAttribute("aria-disabled", "true"); } catch (e) {}
			target.style.pointerEvents = "none";
		});

		sourceCandidates(tileRoot).forEach(function (source) {
			if (!source) return;
			try { source.setAttribute("tabindex", "-1"); } catch (e) {}
			try { source.setAttribute("draggable", "false"); } catch (e) {}
			try { source.setAttribute("aria-grabbed", "false"); } catch (e) {}
			try { source.setAttribute("aria-disabled", "true"); } catch (e) {}
			source.style.pointerEvents = "none";
		});

		const root = quizNode || quizNodeFrom(tileRoot) || tileRoot;
		if (!root || !root.querySelectorAll) return;

		Array.from(root.querySelectorAll(".lia-quiz__check, .lia-quiz__resolve, button, [role='button']")).forEach(function (btn) {
			if (!btn) return;
			try { btn.disabled = true; } catch (e) {}
			try { btn.setAttribute("tabindex", "-1"); } catch (e) {}
			try { btn.setAttribute("aria-disabled", "true"); } catch (e) {}
			btn.style.pointerEvents = "none";
		});
	}

	function hasTileHandler(el, names, pattern) {
		if (!el || !(el instanceof Element)) return false;
		const attrs = Array.isArray(names) ? names : [names];
		for (let i = 0; i < attrs.length; i++) {
			const raw = String(el.getAttribute(attrs[i]) || "");
			if (pattern.test(raw)) return true;
		}
		return false;
	}

	function isTileTarget(el) {
		if (!el || !(el instanceof Element)) return false;
		return hasTileHandler(
			el,
			["onclick", "onkeydown", "ondragover", "ondragleave"],
			/cmd\s*:\s*['\"](dragtarget|dragenter)['\"]/i
		);
	}

	function targetNodes(root) {
		if (!root || !root.querySelectorAll) return [];
		if (typeof window.__liaResetGetTileQuizTargetsFromRoot === "function") {
			try {
				const t = window.__liaResetGetTileQuizTargetsFromRoot(root) || [];
				if (t.length > 0) return Array.from(t);
			} catch (e) {}
		}
		const raw = Array.from(root.querySelectorAll("[onclick],[onkeydown],[ondragover],[ondragleave]"));
		return raw.filter(function (el) {
			return isTileTarget(el);
		});
	}

	function findTargetFromNode(node) {
		if (!node || !(node instanceof Element)) return null;
		if (typeof window.__liaResetCollectTileQuizRoots === "function" && typeof window.__liaResetGetTileQuizTargetsFromRoot === "function") {
			try {
				const roots = window.__liaResetCollectTileQuizRoots(document.body || document.documentElement) || [];
				for (let i = 0; i < roots.length; i++) {
					const ts = window.__liaResetGetTileQuizTargetsFromRoot(roots[i]) || [];
					for (let j = 0; j < ts.length; j++) {
						const t = ts[j];
						if (t && (t === node || (t.contains && t.contains(node)))) return t;
					}
				}
			} catch (e) {}
		}
		let cur = node;
		while (cur && cur !== document.body) {
			if (isTileTarget(cur)) return cur;
			cur = cur.parentElement;
		}
		return null;
	}

	function findTargetFromPoint(x, y) {
		if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
		try {
			if (typeof document.elementsFromPoint === "function") {
				const stack = document.elementsFromPoint(x, y) || [];
				for (let i = 0; i < stack.length; i++) {
					const n = stack[i];
					const t = findTargetFromNode(n);
					if (t) return t;
				}
			}
		} catch (e) {}
		try {
			if (typeof document.elementFromPoint === "function") {
				const n = document.elementFromPoint(x, y);
				const t = findTargetFromNode(n);
				if (t) return t;
			}
		} catch (e) {}
		return null;
	}

	function quizNodeFrom(node) {
		if (!node || !(node instanceof Element)) return null;
		if (node.closest) {
			const q = node.closest(".lia-quiz, lia-quiz");
			if (q) return q;
		}
		let cur = node;
		while (cur && cur !== document.body) {
			if (cur.matches && cur.matches(".lia-quiz, lia-quiz")) return cur;
			cur = cur.parentElement;
		}
		return null;
	}

	function quizKeyFrom(node) {
		const q = quizNodeFrom(node);
		const r = tileRootFrom(node);
		const n = q || r || null;
		if (!n || !(n instanceof Element)) return "";
		const uid = String(n.getAttribute && n.getAttribute("data-resetall-id") || "").trim();
		if (uid) return "id:" + uid;
		const owner = String(n.getAttribute && n.getAttribute("data-reset-tile-owner") || "").trim();
		if (owner) return "owner:" + owner;
		return "node:" + String(n.tagName || "") + "|" + String(n.className || "") + "|" + String((n.textContent || "").trim().slice(0, 24));
	}

	function rectCenter(node) {
		if (!node || typeof node.getBoundingClientRect !== "function") return null;
		try {
			const r = node.getBoundingClientRect();
			if (!r || !isFinite(r.left) || !isFinite(r.top)) return null;
			return { x: r.left + (r.width || 0) / 2, y: r.top + (r.height || 0) / 2 };
		} catch (e) {
			return null;
		}
	}

	function dist2(a, b) {
		if (!a || !b) return Number.POSITIVE_INFINITY;
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return (dx * dx) + (dy * dy);
	}

	function tileRootFrom(node) {
		if (!node || !(node instanceof Element)) return null;
		if (typeof window.__liaResetGetTileQuizRootFromNode === "function") {
			try {
				const r = window.__liaResetGetTileQuizRootFromNode(node, document.body || document.documentElement);
				if (r) return r;
			} catch (e) {}
		}
		let cur = node;
		while (cur && cur !== document.body) {
			const q = cur.querySelectorAll ? cur.querySelectorAll(".lia-quiz, lia-quiz") : [];
			if (q.length === 1 && targetNodes(cur).length > 0) return cur;
			cur = cur.parentElement;
		}
		return null;
	}

	function isInsideAnyTarget(node, targets) {
		for (let i = 0; i < targets.length; i++) {
			const t = targets[i];
			if (!t) continue;
			if (t === node || (t.contains && t.contains(node))) return true;
		}
		return false;
	}

	function sourceCandidates(root) {
		if (!root || !root.querySelectorAll) return [];
		const raw = Array.from(root.querySelectorAll("[onclick],[onkeydown],[ondragstart],[draggable],[data-reset-tile-role='source']"));
		const out = [];
		const seen = new Set();
		raw.forEach(function (n) {
			if (!n || !(n instanceof Element)) return;
			if (seen.has(n)) return;
			seen.add(n);
			out.push(n);
		});
		return out;
	}

	function extractParamIdFromAttr(node, attrName, wantedCmd) {
		if (!node || !(node instanceof Element)) return null;
		const raw = String(node.getAttribute && node.getAttribute(attrName) || "");
		if (!raw) return null;
		const cmd = wantedCmd ? String(wantedCmd) : "";
		if (cmd) {
			const hasCmd = new RegExp("cmd\\s*:\\s*['\\\"]" + cmd + "['\\\"]", "i").test(raw);
			if (!hasCmd) return null;
		}
		const m = raw.match(/param\s*:\s*\{[^}]*id\s*:\s*(\d+)/i);
		if (!m) return null;
		const id = Number(m[1]);
		return Number.isFinite(id) ? id : null;
	}

	function extractTargetId(node) {
		if (!node || !(node instanceof Element)) return null;
		const tries = [
			["onclick", "dragtarget"],
			["onclick", "dragenter"],
			["onkeydown", "dragtarget"],
			["onkeydown", "dragenter"],
			["ondragover", "dragtarget"],
			["ondragover", "dragenter"],
			["ondrop", "dragtarget"],
			["ondrop", "dragenter"],
			["onclick", ""],
			["onkeydown", ""],
			["ondragover", ""],
			["ondrop", ""],
		];
		for (let i = 0; i < tries.length; i++) {
			const t = tries[i];
			const id = extractParamIdFromAttr(node, t[0], t[1]);
			if (id !== null) return id;
		}
		return null;
	}

	function extractSourceId(node) {
		if (!node || !(node instanceof Element)) return null;
		const tries = [
			["onclick", "dragsource"],
			["onkeydown", "dragsource"],
			["ondragstart", "dragsource"],
			["ondragend", "dragsource"],
			["onclick", "dragstart"],
			["onkeydown", "dragstart"],
			["ondragstart", "dragstart"],
			["onclick", "dragend"],
			["ondragend", "dragend"],
			["onclick", ""],
			["onkeydown", ""],
			["ondragstart", ""],
			["ondragend", ""],
		];
		for (let i = 0; i < tries.length; i++) {
			const t = tries[i];
			const id = extractParamIdFromAttr(node, t[0], t[1]);
			if (id !== null) return id;
		}
		return null;
	}

	function resolveLocalSourceForTarget(target, activeText, fallbackSource, preferredSourceId) {
		const root = tileRootFrom(target);
		if (!root) return fallbackSource || null;

		const targets = targetNodes(root);
		const wanted = norm(activeText || "");
		const targetCenter = rectCenter(target);

		if (fallbackSource && (fallbackSource instanceof Element)) {
			const fallbackText = norm(fallbackSource.textContent);
			const fallbackInsideTarget = isInsideAnyTarget(fallbackSource, targets);
			const fallbackId = extractSourceId(fallbackSource);
			const fallbackIdMatches = preferredSourceId === null || fallbackId === null || fallbackId === preferredSourceId;
			const fallbackSameRoot = root.contains(fallbackSource) || tileRootFrom(fallbackSource) === root;
			if (fallbackSameRoot && !fallbackInsideTarget && (!wanted || fallbackText === wanted) && fallbackIdMatches) {
				return fallbackSource;
			}
		}

		let best = null;
		let bestDist = Number.POSITIVE_INFINITY;
		let bestIdMatch = false;

		sourceCandidates(root).forEach(function (candidate) {
			if (!candidate || !(candidate instanceof Element)) return;
			if (isInsideAnyTarget(candidate, targets)) return;
			if (wanted && norm(candidate.textContent) !== wanted) return;
			if (candidate.style && candidate.style.display === "none") return;
			const candId = extractSourceId(candidate);
			const idMatch = preferredSourceId !== null && candId !== null && candId === preferredSourceId;

			const d = dist2(rectCenter(candidate), targetCenter);
			if (idMatch && !bestIdMatch) {
				best = candidate;
				bestDist = d;
				bestIdMatch = true;
				return;
			}
			if (idMatch === bestIdMatch && d < bestDist) {
				best = candidate;
				bestDist = d;
			}
		});

		return best || fallbackSource || null;
	}

	function triggerClick(el) {
		if (!el) return;
		try {
			el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
			el.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }));
			el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
			return;
		} catch (e) {}
		try { if (typeof el.click === "function") el.click(); } catch (e2) {}
	}

	function logCheckProbe(btn, phase) {
		if (!btn) return;
		const p = String(phase || "state");
		const tileRoot = tileRootFrom(btn);
		const quizNode = quizNodeFrom(btn) || tileRoot || btn;
		const targets = tileRoot ? targetNodes(tileRoot) : [];
		const actual = targets.map(function (t) { return targetDisplayText(t); });
		const qClass = String(quizNode && quizNode.className || "").replace(/\s+/g, " ").trim();
		const feedback = quizNode && quizNode.querySelector ? quizNode.querySelector(".lia-quiz__feedback") : null;
		const fbText = norm(feedback && feedback.textContent || "");
		const fbClass = String(feedback && feedback.className || "").replace(/\s+/g, " ").trim();
		dlog("kf: probe " + p + " actual='" + actual.join("|") + "' qClass='" + qClass + "' fbClass='" + fbClass + "' fb='" + fbText + "'");
	}

	function expectedTextsByTargetIds(tileRoot) {
		const out = { expected: [], complete: false, knownTargets: 0, totalTargets: 0 };
		if (!tileRoot) return out;
		const targets = targetNodes(tileRoot);
		out.totalTargets = targets.length;
		if (!targets.length) return out;

		const allSources = sourceCandidates(tileRoot);
		const outsideSources = allSources.filter(function (node) {
			if (!node || !(node instanceof Element)) return false;
			return !isInsideAnyTarget(node, targets);
		});
		const insideSources = allSources.filter(function (node) {
			if (!node || !(node instanceof Element)) return false;
			return isInsideAnyTarget(node, targets);
		});

		for (let i = 0; i < targets.length; i++) {
			const t = targets[i];
			const tid = extractTargetId(t);
			if (tid === null) {
				out.expected.push("");
				continue;
			}
			out.knownTargets += 1;

			let found = null;
			const pools = [outsideSources, insideSources, allSources];
			for (let p = 0; p < pools.length && !found; p++) {
				const pool = pools[p];
				for (let j = 0; j < pool.length; j++) {
					const s = pool[j];
					const sid = extractSourceId(s);
					if (sid !== null && sid === tid) {
						found = s;
						break;
					}
				}
			}
			out.expected.push(found ? targetDisplayText(found) : "");
		}

		out.complete =
			out.totalTargets > 0 &&
			out.knownTargets === out.totalTargets &&
			out.expected.every(function (v) { return !!norm(v); });
		return out;
	}

	function setupStandaloneKachelAreas(root) {
		const scope = root && root.querySelectorAll ? root : document;
		const blocks = scope.querySelectorAll ? Array.prototype.slice.call(scope.querySelectorAll("div.Kachel")) : [];
		if (!blocks.length) return;

		window.__liaKachelfolgeExpected = window.__liaKachelfolgeExpected || {};

		function inferExpectedFromInstruction(block, targetCount) {
			if (!block || !targetCount) return null;
			const txt = String(block.textContent || "").replace(/\s+/g, " ").trim();
			if (!txt) return null;

			const m = txt.match(/w\S*hle\s+([^\s.,;:!?]+)/i);
			if (!m || !m[1]) return null;

			const token = String(m[1] || "").toLowerCase().trim();
			if (!token || token === "aus") return null;

			const out = [];
			for (let i = 0; i < targetCount; i++) out.push(token);
			return out;
		}

		blocks.forEach(function (block, idx) {
			if (!block || !(block instanceof Element)) return;
			if (String(block.getAttribute("data-kf-inline-ready") || "") === "1") return;

			const targets = targetNodes(block);
			if (!targets.length) return;

			const existingUid = String(block.getAttribute("data-kf-uid") || "").trim();
			const uid = existingUid || ("inline-" + String(idx + 1));

			if (!block.id) {
				try { block.id = "kachelfolge-wrap-" + uid; } catch (e) {}
			}
			try { block.setAttribute("data-kf-uid", uid); } catch (e) {}
			try { block.setAttribute("data-kf-inline-ready", "1"); } catch (e) {}

			const candidates = block.querySelectorAll ? Array.prototype.slice.call(block.querySelectorAll("[onclick],[ondragover],[ondragstart],[class*='lia-quiz']")) : [];
			candidates.forEach(function (el) {
				try { el.setAttribute("data-kf-uid", uid); } catch (e) {}
			});

			const inferred = inferExpectedFromInstruction(block, targets.length);
			if (inferred && inferred.length) {
				window.__liaKachelfolgeExpected[uid] = inferred;
				dlog("kf: inline area setup uid='" + uid + "' expected='" + inferred.join("|") + "' from=instruction");
			} else {
				const expectedInfo = expectedTextsByTargetIds(block);
				if (expectedInfo.complete && expectedInfo.expected.length) {
					window.__liaKachelfolgeExpected[uid] = expectedInfo.expected.map(function (v) {
						return String(v || "").toLowerCase().trim();
					});
					dlog("kf: inline area setup uid='" + uid + "' expected='" + window.__liaKachelfolgeExpected[uid].join("|") + "' from=ids");
				}
			}

			try { applyThemeColorToTargetPlaceholders(block); } catch (e) {}
		});
	}

	let draggedText = "";
	let draggedRoot = null;

	function invokeInlineHandler(node, attrName, activeText, origin) {
		if (!node || !(node instanceof Element)) return false;
		const code = String(node.getAttribute && node.getAttribute(attrName) || "").trim();
		if (!code) return false;
		try {
			const fakeDT = {
				getData: function () { return String(activeText || ""); },
				setData: function () {},
				clearData: function () {},
				effectAllowed: "copyMove",
				dropEffect: "move",
				types: ["text/plain", "text"]
			};
			const fakeEvent = {
				type: attrName,
				target: node,
				currentTarget: node,
				dataTransfer: fakeDT,
				preventDefault: function () {},
				stopPropagation: function () {},
				stopImmediatePropagation: function () {}
			};
			const fn = new Function("event", code);
			fn.call(node, fakeEvent);
			dlog((origin || "handler") + ": inline " + attrName + " invoked");
			return true;
		} catch (e) {
			dlog((origin || "handler") + ": inline " + attrName + " failed: " + String(e).slice(0, 120));
			return false;
		}
	}

	function debugHandlerSnippet(node, attrName, origin) {
		if (!node || !(node instanceof Element)) return;
		const code = String(node.getAttribute && node.getAttribute(attrName) || "").replace(/\s+/g, " ").trim();
		if (!code) return;
		dlog((origin || "handler") + ": " + attrName + " snippet='" + code.slice(0, 180) + "'");
	}

	function sendLiaPayloadFromAttr(node, attrName, origin) {
		if (!node || !(node instanceof Element) || !window.LIA || typeof window.LIA.send !== "function") return false;
		const code = String(node.getAttribute && node.getAttribute(attrName) || "").trim();
		if (!code) return false;
		try {
			const start = code.indexOf("{");
			const end = code.lastIndexOf("}");
			if (start < 0 || end <= start) return false;
			const objSrc = code.slice(start, end + 1);
			const payload = new Function("return (" + objSrc + ");")();
			window.LIA.send(payload);
			const cmd = String(payload && payload.message && payload.message.cmd || "");
			const id = String(payload && payload.message && payload.message.param && typeof payload.message.param.id !== "undefined" ? payload.message.param.id : "");
			dlog((origin || "lia") + ": sent " + attrName + " cmd='" + cmd + "' id='" + id + "'");
			return true;
		} catch (e) {
			dlog((origin || "lia") + ": send payload from " + attrName + " failed: " + String(e).slice(0, 120));
			return false;
		}
	}

	function applyTileStateDirectly(target, activeText, origin) {
		const root = tileRootFrom(target);
		if (!root) return false;

		const targets = targetNodes(root);
		if (!targets.length) return false;

		let targetIndex = -1;
		for (let i = 0; i < targets.length; i++) {
			const candidate = targets[i];
			if (!candidate) continue;
			if (candidate === target || (candidate.contains && candidate.contains(target)) || (target.contains && target.contains(candidate))) {
				targetIndex = i;
				break;
			}
		}

		if (targetIndex < 0) return false;

 		function getTargetText(node) {
			if (!node) return "";
			const box = node.firstElementChild || node;
			return String(box && box.textContent || "").replace(/\s+/g, " ").trim();
		}

		function setTileTargetDisplay(node, value) {
			if (!node) return;
			const box = node.firstElementChild || node;
			try { node.style.setProperty("border-radius", "var(--lia-tile-radius)", "important"); } catch (e) {}
			try { node.style.setProperty("overflow", "hidden", "important"); } catch (e) {}
			try { node.style.setProperty("background-color", "var(--lia-tile-bg)", "important"); } catch (e) {}
			try { node.style.setProperty("display", "inline-flex", "important"); } catch (e) {}
			try { node.style.setProperty("align-items", "center", "important"); } catch (e) {}
			try { node.style.setProperty("justify-content", "center", "important"); } catch (e) {}
			try { node.style.setProperty("text-align", "center", "important"); } catch (e) {}
			try { box.style.setProperty("display", "inline-flex", "important"); } catch (e) {}
			try { box.style.setProperty("align-items", "center", "important"); } catch (e) {}
			try { box.style.setProperty("justify-content", "center", "important"); } catch (e) {}
			try { box.style.setProperty("background-color", "transparent", "important"); } catch (e) {}
			if (value) {
				box.textContent = String(value);
				try { node.classList.remove("lia-target-placeholder"); } catch (e) {}
				try { box.classList.remove("lia-target-placeholder"); } catch (e) {}
				node.style.color = "";
				box.style.color = "";
			} else {
				box.textContent = "✛";
				try { node.classList.add("lia-target-placeholder"); } catch (e) {}
				try { box.classList.add("lia-target-placeholder"); } catch (e) {}
				const accent = pickAccentFrom(document) || "";
				if (accent) {
					try { node.style.setProperty("color", accent, "important"); } catch (e) {}
					try { box.style.setProperty("color", accent, "important"); } catch (e) {}
				}
			}
			Array.from(node.querySelectorAll ? node.querySelectorAll("[data-reset-tile-role='source'], [draggable='true']") : []).forEach(function (el) {
				if (!el) return;
				if (value) {
					try { el.style.color = ""; } catch (e) {}
					try { el.style.backgroundColor = "transparent"; } catch (e) {}
				} else {
					const accent = pickAccentFrom(document) || "";
					if (accent) {
						try { el.style.color = accent; } catch (e) {}
					}
				}
			});
		}

		function getSourceLabel(node) {
			if (!node) return "";
			return String(node.textContent || "").replace(/\s+/g, " ").trim();
		}

		function applyQuizRootStateClasses(rootNode, stateCode) {
			if (!rootNode) return;
			rootNode.classList.remove("solved", "resolved");
			if (stateCode === "s") {
				rootNode.classList.add("solved");
			} else if (stateCode === "r") {
				rootNode.classList.add("resolved");
			}
		}

		const values = targets.map(getTargetText);

		values[targetIndex] = String(activeText || "").replace(/\s+/g, " ").trim();

		try {
			for (let i = 0; i < targets.length; i++) {
				setTileTargetDisplay(targets[i], values[i] || "");
			}

			dlog((origin || "tile") + ": applied tile state directly index=" + targetIndex + " values='" + values.join("|") + "'");
			return true;
		} catch (e) {
			dlog((origin || "tile") + ": apply tile state failed: " + String(e).slice(0, 120));
			return false;
		}
	}
	let draggedEl = null;
	let draggedQuizKey = "";
	let pointerText = "";
	let pointerRoot = null;
	let pointerEl = null;
	let pointerQuizKey = "";
	let clearStateTimer = 0;
	let lastEmuTs = 0;
	let lastDragOverTarget = null;
	let lastDragOverTs = 0;
	let lastHandledDropTs = 0;
	let touchDragActive = false;
	let touchDragMoved = false;
	let touchStartX = 0;
	let touchStartY = 0;
	let touchSourceEl = null;
	let touchSourceTarget = null;
	let touchHoverTarget = null;
	let touchGhostEl = null;
	dlog("patch active");

	window.setTimeout(function () { setupStandaloneKachelAreas(document); }, 120);
	window.setTimeout(function () { setupStandaloneKachelAreas(document); }, 520);
	window.setTimeout(function () { setupStandaloneKachelAreas(document); }, 1100);

	function clearState(reason) {
		dlog("clear state; reason=" + String(reason || "unknown"));
		draggedText = "";
		draggedRoot = null;
		draggedEl = null;
		draggedQuizKey = "";
		pointerText = "";
		pointerRoot = null;
		pointerEl = null;
		pointerQuizKey = "";
	}

	function scheduleClearState(reason, delay) {
		if (clearStateTimer) {
			try { window.clearTimeout(clearStateTimer); } catch (e) {}
		}
		clearStateTimer = window.setTimeout(function () {
			clearState(reason);
			clearStateTimer = 0;
		}, Number(delay || 0));
	}

	function resetTouchDragState() {
		touchDragActive = false;
		touchDragMoved = false;
		touchStartX = 0;
		touchStartY = 0;
		touchSourceEl = null;
		touchSourceTarget = null;
		touchHoverTarget = null;
		if (touchGhostEl && touchGhostEl.parentNode) {
			try { touchGhostEl.parentNode.removeChild(touchGhostEl); } catch (e) {}
		}
		touchGhostEl = null;
	}

	function ensureTouchGhost(text) {
		if (touchGhostEl && touchGhostEl.parentNode) return touchGhostEl;
		const ghost = document.createElement("div");
		ghost.className = "lia-touch-ghost";
		ghost.textContent = String(text || "");
		ghost.style.position = "fixed";
		ghost.style.left = "0";
		ghost.style.top = "0";
		ghost.style.transform = "translate(-50%, -50%)";
		ghost.style.pointerEvents = "none";
		ghost.style.zIndex = "2147483647";
		ghost.style.opacity = "0.3";
		ghost.style.padding = "0.35rem 0.6rem";
		ghost.style.borderRadius = "var(--lia-tile-radius, 12px)";
		ghost.style.background = "var(--lia-tile-bg, rgba(0, 0, 0, 0.15))";
		ghost.style.color = "currentColor";
		ghost.style.fontWeight = "600";
		ghost.style.backdropFilter = "blur(1px)";
		(document.body || document.documentElement).appendChild(ghost);
		touchGhostEl = ghost;
		return ghost;
	}

	function moveTouchGhost(x, y) {
		if (!touchGhostEl) return;
		if (!Number.isFinite(x) || !Number.isFinite(y)) return;
		try {
			touchGhostEl.style.left = String(x) + "px";
			touchGhostEl.style.top = String(y) + "px";
		} catch (e) {}
	}

	function markSourceAsUsedAfterTouchDrop(sourceEl, target) {
		if (!sourceEl || !(sourceEl instanceof Element)) return;
		const sourceNode = sourceFromNode(sourceEl) || sourceEl;
		const sourceWasInTarget = !!findTargetFromNode(sourceNode);
		if (sourceWasInTarget) return;
		if (target && (target === sourceNode || (target.contains && target.contains(sourceNode)))) return;
		try { sourceNode.setAttribute("aria-hidden", "true"); } catch (e) {}
		try { sourceNode.setAttribute("draggable", "false"); } catch (e) {}
		sourceNode.style.pointerEvents = "none";
		sourceNode.style.display = "none";
	}

	function primaryTouch(ev) {
		if (!ev) return null;
		if (ev.changedTouches && ev.changedTouches.length) return ev.changedTouches[0];
		if (ev.touches && ev.touches.length) return ev.touches[0];
		return null;
	}

	function sourceFromNode(node) {
		if (!node || !(node instanceof Element) || !node.closest) return null;
		return node.closest("[onclick],[onkeydown],[ondragstart],[draggable],[data-reset-tile-role='source']");
	}

	function clearTargetBySource(sourceEl, origin) {
		if (!sourceEl) return false;
		const target = findTargetFromNode(sourceEl);
		if (!target) return false;
		const ok = applyTileStateDirectly(target, "", origin || "touch-clear");
		if (ok) {
			try { applyThemeColorToTargetPlaceholders(document); } catch (e) {}
			try { if (typeof window.__liaResetRefreshTileTargetStyles === "function") window.__liaResetRefreshTileTargetStyles(document); } catch (e) {}
		}
		return ok;
	}

	function emulateLocalDrop(target, activeText, activeRoot, origin) {
		const root = tileRootFrom(target);
		const targetQuizKey = quizKeyFrom(target);
		const sourceQuizKey = draggedQuizKey || pointerQuizKey || (activeRoot ? quizKeyFrom(activeRoot) : "");
		if (!root && !targetQuizKey) {
			dlog(origin + ": abort (target root null)");
			return;
		}
		if (Date.now() - lastEmuTs < 80) {
			dlog(origin + ": skip duplicate emulate window");
			return;
		}

		dlog(origin + ": sourceQuizKey='" + String(sourceQuizKey || "") + "' targetQuizKey='" + String(targetQuizKey || "") + "' root=" + String(root ? "ok" : "null"));

		const sourceEl = draggedEl || pointerEl || null;
		if (!sourceEl) {
			dlog(origin + ": no source element stored for text='" + activeText + "'");
			return;
		}
		const preferredSourceId = extractTargetId(target);
		const useSourceEl = resolveLocalSourceForTarget(target, activeText, sourceEl, preferredSourceId);
		if (!useSourceEl) {
			dlog(origin + ": no usable source element resolved");
			return;
		}
		const usedSourceId = extractSourceId(useSourceEl);
		dlog("kf: drop-map origin='" + origin + "' srcId='" + String(usedSourceId === null ? "none" : usedSourceId) + "' tgtId='" + String(preferredSourceId === null ? "none" : preferredSourceId) + "' text='" + norm(activeText) + "'");
		dlog(origin + ": using sourceEl text='" + norm(useSourceEl.textContent) + "' fromTargetRoot=1 preferredId=" + String(preferredSourceId === null ? "none" : preferredSourceId));
		debugHandlerSnippet(target, "ondrop", origin);
		debugHandlerSnippet(target, "onclick", origin);
		debugHandlerSnippet(useSourceEl, "onclick", origin);

		function _fireSyntheticDrop(node) {
			try {
				const dt = typeof DataTransfer === "function" ? new DataTransfer() : null;
				if (dt) {
					try { dt.setData("text/plain", String(activeText || "")); } catch (e) {}
					try { dt.setData("text", String(activeText || "")); } catch (e) {}
					try { dt.effectAllowed = "copyMove"; } catch (e) {}
				}
				window.__liaTileCrossInternalDispatch = 1;
				const evInit = { bubbles: true, cancelable: true };
				let evDrop = null;
				try { evDrop = new DragEvent("drop", Object.assign({}, evInit, dt ? { dataTransfer: dt } : {})); } catch (e) {}
				if (!evDrop) {
					evDrop = new Event("drop", evInit);
					if (dt) {
						try { Object.defineProperty(evDrop, "dataTransfer", { value: dt }); } catch (e) {}
					}
				}
				try { node.dispatchEvent(new DragEvent("dragenter", Object.assign({}, evInit, dt ? { dataTransfer: dt } : {}))); } catch (e) {}
				try { node.dispatchEvent(new DragEvent("dragover", Object.assign({}, evInit, dt ? { dataTransfer: dt } : {}))); } catch (e) {}
				try { node.dispatchEvent(evDrop); } catch (e) {}
				return true;
			} catch (e) {
				dlog(origin + ": synthetic drop error: " + String(e).slice(0, 120));
				return false;
			} finally {
				window.__liaTileCrossInternalDispatch = 0;
			}
		}

		lastEmuTs = Date.now();
		window.setTimeout(function () {
			try {
				const targetText = norm(target.textContent);
				const expectedText = norm(activeText || "");
				function targetFilledNow() {
					return norm(target.textContent) === expectedText;
				}
				dlog(origin + ": before emulate targetText='" + targetText + "' expected='" + activeText + "'");
				const pairSourceOk = sendLiaPayloadFromAttr(useSourceEl, "onclick", origin);
				const pairTargetOk = sendLiaPayloadFromAttr(target, "onclick", origin) || sendLiaPayloadFromAttr(target, "ondrop", origin) || sendLiaPayloadFromAttr(target, "ondragover", origin);
				dlog(origin + ": lia pair sourcePick=" + (pairSourceOk ? 1 : 0) + "; targetDrop=" + (pairTargetOk ? 1 : 0));

				window.setTimeout(function () {
					if (pairSourceOk && pairTargetOk && targetFilledNow()) {
						const quizNodePair = quizNodeFrom(target) || tileRootFrom(target) || target;
						dlog(origin + ": lia pair applied; targetText='" + norm(target.textContent) + "' sourceText='" + norm(useSourceEl.textContent) + "' quizClass='" + String(quizNodePair && quizNodePair.className || "") + "' quizSolved=" + ((quizNodePair && quizNodePair.classList && (quizNodePair.classList.contains("solved") || quizNodePair.classList.contains("resolved"))) ? 1 : 0));
						return;
					}

					const lifecycleStartOk = sendLiaPayloadFromAttr(useSourceEl, "ondragstart", origin) || sendLiaPayloadFromAttr(useSourceEl, "onclick", origin);
					const lifecycleTargetOk = sendLiaPayloadFromAttr(target, "onclick", origin) || sendLiaPayloadFromAttr(target, "ondrop", origin) || sendLiaPayloadFromAttr(target, "ondragover", origin);
					const lifecycleEndOk = sendLiaPayloadFromAttr(useSourceEl, "ondragend", origin) || sendLiaPayloadFromAttr(useSourceEl, "onclick", origin);
					dlog(origin + ": lia lifecycle start=" + (lifecycleStartOk ? 1 : 0) + "; target=" + (lifecycleTargetOk ? 1 : 0) + "; end=" + (lifecycleEndOk ? 1 : 0));

					window.setTimeout(function () {
						if (lifecycleStartOk && lifecycleTargetOk && lifecycleEndOk && targetFilledNow()) {
							const quizNodeLifecycle = quizNodeFrom(target) || tileRootFrom(target) || target;
							dlog(origin + ": lia lifecycle applied; targetText='" + norm(target.textContent) + "' sourceText='" + norm(useSourceEl.textContent) + "' quizClass='" + String(quizNodeLifecycle && quizNodeLifecycle.className || "") + "' quizSolved=" + ((quizNodeLifecycle && quizNodeLifecycle.classList && (quizNodeLifecycle.classList.contains("solved") || quizNodeLifecycle.classList.contains("resolved"))) ? 1 : 0));
							return;
						}

						const dropOk = _fireSyntheticDrop(target);
						dlog(origin + ": synthetic drop fired=" + (dropOk ? 1 : 0));
						const inlineDropOk = invokeInlineHandler(target, "ondrop", activeText, origin) || invokeInlineHandler(target, "onclick", activeText, origin);
						dlog(origin + ": inline target handler invoked=" + (inlineDropOk ? 1 : 0));
						const srcOk = invokeInlineHandler(useSourceEl, "onclick", activeText, origin);
						const tgtOk = invokeInlineHandler(target, "onclick", activeText, origin) || invokeInlineHandler(target, "ondrop", activeText, origin);
						dlog(origin + ": source handler invoked=" + (srcOk ? 1 : 0) + "; target handler invoked=" + (tgtOk ? 1 : 0));
						if (!srcOk || !tgtOk) {
							triggerClick(useSourceEl);
							triggerClick(target);
							dlog(origin + ": click fallback fired");
						}

						if (!targetFilledNow()) {
							const directStateOk = applyTileStateDirectly(target, activeText, origin);
							dlog(origin + ": direct tile state fallback=" + (directStateOk ? 1 : 0));
							if (directStateOk && targetFilledNow()) {
								const quizNodeOk = quizNodeFrom(target) || tileRootFrom(target) || target;
								dlog(origin + ": local fallback applied; targetText='" + norm(target.textContent) + "' sourceText='" + norm(useSourceEl.textContent) + "' quizClass='" + String(quizNodeOk && quizNodeOk.className || "") + "' quizSolved=" + ((quizNodeOk && quizNodeOk.classList && (quizNodeOk.classList.contains("solved") || quizNodeOk.classList.contains("resolved"))) ? 1 : 0));
							}
						}

						window.setTimeout(function () {
							const quizNode = quizNodeFrom(target) || tileRootFrom(target) || target;
							dlog(origin + ": after sequence targetText='" + norm(target.textContent) + "' sourceText='" + norm(useSourceEl.textContent) + "' quizClass='" + String(quizNode && quizNode.className || "") + "' quizSolved=" + ((quizNode && quizNode.classList && (quizNode.classList.contains("solved") || quizNode.classList.contains("resolved"))) ? 1 : 0));
						}, 24);
					}, 24);
				}, 24);
			} catch (e) {
				dlog(origin + ": emulate error: " + String(e).slice(0, 120));
			}
		}, 0);
	}

	document.addEventListener("pointerdown", function (ev) {
		const el = sourceFromNode(ev && ev.target ? ev.target : null);
		if (!el) return;
		pointerText = norm(el.textContent);
		pointerRoot = tileRootFrom(el);
		pointerEl = el;
		pointerQuizKey = quizKeyFrom(el);
		dlog("pointerdown source text='" + pointerText + "' quizKey='" + String(pointerQuizKey || "") + "' root=" + (pointerRoot ? "ok" : "null"));
	}, true);

	document.addEventListener("touchstart", function (ev) {
		if (window.__liaTileCrossInternalDispatch) return;
		if (!ev || (ev.touches && ev.touches.length > 1)) return;
		const t = primaryTouch(ev);
		if (!t) return;
		const hit = (typeof document.elementFromPoint === "function") ? document.elementFromPoint(t.clientX, t.clientY) : null;
		const sourceEl = sourceFromNode(hit || (ev.target || null));
		if (!sourceEl) return;

		touchDragActive = true;
		touchDragMoved = false;
		touchStartX = Number(t.clientX) || 0;
		touchStartY = Number(t.clientY) || 0;
		touchSourceEl = sourceEl;
		touchSourceTarget = findTargetFromNode(sourceEl);
		touchHoverTarget = null;

		pointerText = norm(sourceEl.textContent);
		pointerRoot = quizNodeFrom(sourceEl) || tileRootFrom(sourceEl);
		pointerEl = sourceEl;
		pointerQuizKey = quizKeyFrom(sourceEl);
		lastDragOverTarget = null;
		lastDragOverTs = 0;

		ensureTouchGhost(sourceEl.textContent || pointerText || "");
		moveTouchGhost(Number(t.clientX) || 0, Number(t.clientY) || 0);

		dlog("touchstart source text='" + pointerText + "' inTarget=" + (touchSourceTarget ? 1 : 0));
		try { ev.preventDefault(); } catch (e) {}
	}, { capture: true, passive: false });

	document.addEventListener("touchmove", function (ev) {
		if (!touchDragActive) return;
		const t = primaryTouch(ev);
		if (!t) return;
		const dx = Math.abs((Number(t.clientX) || 0) - touchStartX);
		const dy = Math.abs((Number(t.clientY) || 0) - touchStartY);
		if (!touchDragMoved && (dx > 6 || dy > 6)) touchDragMoved = true;
		moveTouchGhost(Number(t.clientX) || 0, Number(t.clientY) || 0);

		const hover = findTargetFromPoint(Number(t.clientX), Number(t.clientY));
		if (hover) {
			lastDragOverTarget = hover;
			lastDragOverTs = Date.now();
		}
		if (hover !== touchHoverTarget) {
			touchHoverTarget = hover;
			dlog("touchmove hover target=" + (hover ? 1 : 0));
		}
		try { ev.preventDefault(); } catch (e) {}
	}, { capture: true, passive: false });

	document.addEventListener("touchend", function (ev) {
		if (!touchDragActive) return;
		if (window.__liaTileCrossInternalDispatch) {
			resetTouchDragState();
			return;
		}

		const t = primaryTouch(ev);
		const pointTarget = t ? findTargetFromPoint(Number(t.clientX), Number(t.clientY)) : null;
		const recentDragOverTarget = lastDragOverTarget && (Date.now() - lastDragOverTs) < 1400 ? lastDragOverTarget : null;
		const target = pointTarget || recentDragOverTarget || null;
		const activeText = draggedText || pointerText;
		const activeRoot = draggedRoot || pointerRoot;

		if (target && activeText) {
			const sourceTarget = touchSourceTarget || null;
			if (sourceTarget && sourceTarget !== target && touchSourceEl) {
				clearTargetBySource(touchSourceEl, "touchend-move-clear");
			}
			const dropped = applyTileStateDirectly(target, activeText, "touchend-drop");
			if (dropped && touchSourceEl) {
				markSourceAsUsedAfterTouchDrop(touchSourceEl, target);
			}
			try { applyThemeColorToTargetPlaceholders(document); } catch (e) {}
			try { if (typeof window.__liaResetRefreshTileTargetStyles === "function") window.__liaResetRefreshTileTargetStyles(document); } catch (e) {}
			dlog("touchend drop target=1 direct=" + (dropped ? 1 : 0) + " text='" + activeText + "'");
			lastHandledDropTs = Date.now();
			scheduleClearState("touchend-drop", 120);
		} else if (touchSourceTarget && touchSourceEl) {
			const cleared = clearTargetBySource(touchSourceEl, "touchend-clear");
			dlog("touchend clear-by-drag=" + (cleared ? 1 : 0));
			if (cleared) {
				lastHandledDropTs = Date.now();
				scheduleClearState("touchend-clear", 120);
			} else {
				scheduleClearState("touchend-no-clear", 260);
			}
		} else {
			scheduleClearState("touchend", 260);
		}

		lastDragOverTarget = null;
		lastDragOverTs = 0;
		resetTouchDragState();
		try { ev.preventDefault(); } catch (e) {}
	}, { capture: true, passive: false });

	document.addEventListener("touchcancel", function () {
		if (!touchDragActive) return;
		dlog("touchcancel; clear state");
		scheduleClearState("touchcancel", 120);
		lastDragOverTarget = null;
		lastDragOverTs = 0;
		resetTouchDragState();
	}, { capture: true, passive: false });

	document.addEventListener("dragstart", function (ev) {
		const el = ev && ev.target && ev.target.closest ? ev.target.closest("[onclick],[onkeydown],[ondragstart],[draggable],[data-reset-tile-role='source']") : null;
		if (!el) {
			return;
		}
		draggedText = norm(el.textContent);
		draggedRoot = quizNodeFrom(el) || tileRootFrom(el);
		draggedEl = el;
		draggedQuizKey = quizKeyFrom(el);
		lastDragOverTarget = null;
		lastDragOverTs = 0;
		dlog("dragstart text='" + draggedText + "' quizKey='" + String(draggedQuizKey || "") + "' root=" + (draggedRoot ? "ok" : "null"));
	}, true);

	document.addEventListener("dragover", function (ev) {
		const activeText = draggedText || pointerText;
		if (!activeText) return;
		const t = ev && ev.target ? findTargetFromNode(ev.target) : null;
		if (!t) return;
		lastDragOverTarget = t;
		lastDragOverTs = Date.now();
		dlog("dragover target tracked; text='" + activeText + "'");
	}, true);

	document.addEventListener("dragleave", function (ev) {
		if (!lastDragOverTarget) return;
		const t = ev && ev.target ? findTargetFromNode(ev.target) : null;
		if (!t || t !== lastDragOverTarget) return;
		// Only clear if the pointer actually left the target (not just moving between child elements)
		const related = ev.relatedTarget;
		if (related && lastDragOverTarget.contains && lastDragOverTarget.contains(related)) return;
		dlog("dragleave target; clearing lastDragOverTarget");
		lastDragOverTarget = null;
		lastDragOverTs = 0;
	}, true);

	document.addEventListener("dragend", function () {
		const activeText = draggedText || pointerText;
		const activeRoot = draggedRoot || pointerRoot;
		dlog("dragend; activeText='" + String(activeText || "") + "' hasTrackedTarget=" + (lastDragOverTarget ? 1 : 0));
		if ((Date.now() - lastHandledDropTs) < 260) {
			dlog("dragend after handled drop; skip fallback emulate");
			scheduleClearState("dragend-after-drop", 140);
			lastDragOverTarget = null;
			lastDragOverTs = 0;
			return;
		}
		if (activeText && lastDragOverTarget && (Date.now() - lastDragOverTs) < 1400) {
			const targetRoot = tileRootFrom(lastDragOverTarget);
			const sourceNode = draggedEl || pointerEl || null;
			const sourceRoot =
				(sourceNode ? tileRootFrom(sourceNode) : null) ||
				(draggedRoot ? tileRootFrom(draggedRoot) : null) ||
				(pointerRoot ? tileRootFrom(pointerRoot) : null) ||
				(activeRoot ? tileRootFrom(activeRoot) : null) ||
				null;
			const crossRoot = !!sourceRoot && !!targetRoot && sourceRoot !== targetRoot;
			dlog("kf: dragend-route crossRoot=" + (crossRoot ? 1 : 0) + " srcRoot=" + (sourceRoot ? 1 : 0) + " tgtRoot=" + (targetRoot ? 1 : 0));
			if (!crossRoot) {
				dlog("dragend fallback skipped; prefer native or no-op");
				scheduleClearState("dragend-no-cross", 160);
				lastDragOverTarget = null;
				lastDragOverTs = 0;
				return;
			}
			dlog("dragend fallback emulate via last dragover target");
			emulateLocalDrop(lastDragOverTarget, activeText, activeRoot, "dragend");
			scheduleClearState("dragend-fallback", 180);
		} else {
			dlog("dragend schedule clear state");
			scheduleClearState("dragend", 700);
		}
		lastDragOverTarget = null;
		lastDragOverTs = 0;
	}, true);

	document.addEventListener("drop", function (ev) {
		if (window.__liaTileCrossInternalDispatch) return;
		const pointTarget = ev ? findTargetFromPoint(Number(ev.clientX), Number(ev.clientY)) : null;
		const nodeTarget = ev && ev.target ? findTargetFromNode(ev.target) : null;
		const recentDragOverTarget = lastDragOverTarget && (Date.now() - lastDragOverTs) < 1400 ? lastDragOverTarget : null;
		const target = pointTarget || nodeTarget || recentDragOverTarget || null;
		if (!target) return;
		const activeText = draggedText || pointerText;
		const activeRoot = draggedRoot || pointerRoot;
		if (!activeText) return;
		const targetRoot = tileRootFrom(target);
		const sourceNode = draggedEl || pointerEl || null;
		const sourceRoot =
			(sourceNode ? tileRootFrom(sourceNode) : null) ||
			(draggedRoot ? tileRootFrom(draggedRoot) : null) ||
			(pointerRoot ? tileRootFrom(pointerRoot) : null) ||
			(activeRoot ? tileRootFrom(activeRoot) : null) ||
			null;
		const sourceQuizKey = draggedQuizKey || pointerQuizKey || (sourceRoot ? quizKeyFrom(sourceRoot) : "") || (activeRoot ? quizKeyFrom(activeRoot) : "");
		const targetQuizKey = quizKeyFrom(targetRoot || target);
		const isCrossRoot = !!sourceRoot && !!targetRoot && sourceRoot !== targetRoot;

		dlog("drop event target detected; via='" + (pointTarget ? "point" : (nodeTarget ? "node" : "dragover")) + "' text='" + activeText + "'; targetQuiz=" + String((quizNodeFrom(target) && (quizNodeFrom(target).getAttribute && quizNodeFrom(target).getAttribute("data-resetall-id") || quizNodeFrom(target).className || quizNodeFrom(target).tagName)) || "null"));
		dlog("kf: drop-route crossRoot=" + (isCrossRoot ? 1 : 0) + " srcRoot=" + (sourceRoot ? 1 : 0) + " tgtRoot=" + (targetRoot ? 1 : 0) + " sourceQuizKey='" + String(sourceQuizKey || "") + "' targetQuizKey='" + String(targetQuizKey || "") + "'");

		// Conservative routing: only emulate when cross-root is confirmed.
		// If root detection is uncertain, prefer native LiaScript handling.
		if (!isCrossRoot) {
			dlog("kf: drop native pass-through");
			lastHandledDropTs = Date.now();
			lastDragOverTarget = null;
			lastDragOverTs = 0;
			scheduleClearState("drop-native", 220);
			return;
		}

		// Fremden Drop blockieren und lokal korrekt nachstellen (Text-basiert).
		try { ev.preventDefault(); } catch (e) {}
		try { ev.stopPropagation(); } catch (e) {}
		try { if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation(); } catch (e) {}
		dlog("drop blocked; emulate local");
		emulateLocalDrop(target, activeText, activeRoot, "drop");
		lastHandledDropTs = Date.now();
		lastDragOverTarget = null;
		lastDragOverTs = 0;
		scheduleClearState("drop-handled", 80);
	}, true);

	document.addEventListener("pointerup", function (ev) {
		if (window.__liaTileCrossInternalDispatch) return;
		if ((Date.now() - lastHandledDropTs) < 260) {
			dlog("pointerup after handled drop; skip emulate");
			return;
		}
		if (draggedText) {
			dlog("pointerup during drag lifecycle; skip emulate");
			return;
		}
		const activeText = draggedText || pointerText;
		const activeRoot = draggedRoot || pointerRoot;
		if (!activeText) return;
		const node = ev && ev.target ? ev.target : null;
		const target = findTargetFromNode(node);
		if (!target) return;
		dlog("pointerup target detected; text='" + activeText + "'; targetQuiz=" + String((quizNodeFrom(target) && (quizNodeFrom(target).getAttribute && quizNodeFrom(target).getAttribute("data-resetall-id") || quizNodeFrom(target).className || quizNodeFrom(target).tagName)) || "null"));
		emulateLocalDrop(target, activeText, activeRoot, "pointerup");
		scheduleClearState("pointerup-handled", 120);
	}, true);

	// Content-based check for @Kachelfolge macro: order of targets is ignored.
	// Quiz is tagged at setup time with data-kf-uid, so we don't depend on DOM wrapper position.
	document.addEventListener("click", function (ev) {
		const btn = ev && ev.target && ev.target.closest ? ev.target.closest(".lia-quiz__check") : null;
		if (!btn) return;
		logCheckProbe(btn, "check-click-sync");
		window.setTimeout(function () { logCheckProbe(btn, "check-after-40ms"); }, 40);
		window.setTimeout(function () { logCheckProbe(btn, "check-after-180ms"); }, 180);

		const tileRootSync = tileRootFrom(btn);
		const targetsSync = tileRootSync ? targetNodes(tileRootSync) : [];
		const actualSync = targetsSync.map(function (t) { return targetDisplayText(t); });
		const nativeExpectedInfo = expectedTextsByTargetIds(tileRootSync);
		const nativeExpected = nativeExpectedInfo.expected;
		const isNativeIdTextCorrect =
			nativeExpectedInfo.complete &&
			actualSync.length === nativeExpected.length &&
			actualSync.every(function (val, idx) { return norm(val) === norm(nativeExpected[idx]); });
		dlog("kf: native-check complete=" + (nativeExpectedInfo.complete ? 1 : 0) + " known=" + nativeExpectedInfo.knownTargets + "/" + nativeExpectedInfo.totalTargets + " actual='" + actualSync.join("|") + "' expected='" + nativeExpected.join("|") + "' ok=" + (isNativeIdTextCorrect ? 1 : 0));

		// Resolve uid synchronously so we can block LiaScript's "wrong" flash if needed.
		// Collect ALL matching uids — multiple @Kachelfolge blocks may share one quiz container.
		const expectedMap = window.__liaKachelfolgeExpected || {};
		const uids = Object.keys(expectedMap);
		const matchingUids = [];

		// First try: btn is directly inside a wrap
		for (let i = 0; i < uids.length; i++) {
			const wrap = document.getElementById("kachelfolge-wrap-" + uids[i]);
			if (wrap && wrap.contains(btn)) matchingUids.push(uids[i]);
		}
		// Second try: walk up to find a common ancestor containing one or more wraps
		if (!matchingUids.length) {
			let cur = btn.parentElement;
			for (let depth = 0; cur && cur !== document.body && depth < 12; depth++) {
				const tag = (cur.tagName || "").toUpperCase();
				if (/^(MAIN|ARTICLE|BODY|HTML)$/.test(tag)) break;
				for (let i = 0; i < uids.length; i++) {
					const wrap = document.getElementById("kachelfolge-wrap-" + uids[i]);
					if (wrap && cur.contains(wrap)) matchingUids.push(uids[i]);
				}
				if (matchingUids.length) break;
				cur = cur.parentElement;
			}
		}
		if (!matchingUids.length) return;

		// Combine expected values from all matching uids (group quiz support)
		const combinedExpected = [];
		matchingUids.forEach(function (u) {
			const e = expectedMap[u];
			if (Array.isArray(e)) Array.prototype.push.apply(combinedExpected, e);
		});
		const groupUid = matchingUids.join("+");

		// Two correctness modes:
		// 1) @Kachelfolge: order-insensitive multiset
		// 2) Plain tile quiz fallback: target-id based expected text
		const isKfCorrect = combinedExpected.length > 0 && sameMultiset(actualSync, combinedExpected);
		const isCorrect = isKfCorrect || (!matchingUids.length && isNativeIdTextCorrect);

		if (!isCorrect) return; // Let LiaScript show its own "wrong" feedback.

		// It's a kachelfolge quiz with correct answer — block LiaScript's check to prevent "wrong" flash.
		try { ev.stopImmediatePropagation(); } catch (e) {}

		window.setTimeout(function () {
			const tileRoot = tileRootSync;
			if (!tileRoot) return;

			const mode = isKfCorrect ? "kachelfolge" : "native-id";
			const effectiveUid = isKfCorrect ? groupUid : ("native:" + String(quizKeyFrom(tileRoot) || "tile"));
			dlog("kf: check-lookup uid='" + effectiveUid + "' mode='" + mode + "'");

			const expected = isKfCorrect ? combinedExpected : nativeExpected;
			const actual = actualSync;
			dlog("kf: check uid='" + effectiveUid + "' actual='" + actual.join("|") + "' expected='" + expected.join("|") + "' ok=1");

			const quizNode = quizNodeFrom(btn) || tileRoot;
			if (quizNode && quizNode.classList) {
				quizNode.classList.remove("resolved");
				quizNode.classList.add("solved");
			}

			let feedback = quizNode && quizNode.querySelector ? quizNode.querySelector(".lia-quiz__feedback") : null;
			if (!feedback && quizNode && quizNode.appendChild) {
				feedback = document.createElement("div");
				feedback.className = "lia-quiz__feedback";
				quizNode.appendChild(feedback);
			}
			if (feedback) {
				feedback.classList.remove("text-error", "text-disabled");
				feedback.classList.add("text-success");
				feedback.textContent = "Herzlichen Glückwunsch, das war die richtige Antwort";
				feedback.hidden = false;
			}

			// Freeze tiles within tileRoot only; disable only this quiz's check button.
			// Do NOT pass quizNode as root — it may be a large container shared with other quizzes.
			freezeSolvedTileQuiz(tileRoot, tileRoot);
			try { btn.disabled = true; btn.style.pointerEvents = "none"; } catch (e) {}

			dlog("kf: freeze uid='" + effectiveUid + "' targets='" + actual.join("|") + "'");
		}, 30);
	}, true);

	window.__liaTileCrossDumpDebug = function () {
		try { return (window.__liaTileCrossDebug || []).join("\n"); } catch (e) { return ""; }
	};
})();

@end


@Kachelfolge: @KachelfolgeBase_(@uid,classic,`@0`)
@KachelfolgeN: @KachelfolgeBase_(@uid,seq,`@0`)

@KachelfolgeBase_
<div id="kachelfolge-wrap-@0" class="kachelfolge-wrap" data-kf-uid="@0" data-kf-mode="@1">
	@2
</div>
<script modify="false">
(function () {
	const uid = "@0";
	const mode = "@1";
	const raw = String.raw`@2`;
	const expected = [];

	raw.replace(/\[->\[([^\]]*)\]\]/g, function (_, inner) {
		const m = inner.match(/\(([^)]*)\)/);
		if (m) expected.push(String(m[1] || "").toLowerCase().trim());
		return _;
	});

	window.__liaKachelfolgeExpected = window.__liaKachelfolgeExpected || {};
	window.__liaKachelfolgeExpected[uid] = expected;

	function norm(s) {
		return String(s || "").replace(/\s+/g, " ").trim();
	}

	function setupSequentialTargets(wrap, expectedCount, log) {
		if (!wrap || expectedCount <= 0) return;

		function collectRealTargets() {
			return Array.prototype.slice.call(wrap.children || []).filter(function (el) {
				if (!el || !(el instanceof Element)) return false;
				if (String(el.getAttribute("data-kf-seq-dummy") || "") === "1") return false;
				if (String(el.getAttribute("data-kf-uid") || "") !== uid) return false;
				return true;
			});
		}

		function ensureDummy(realTargets) {
			if (!realTargets.length) return null;
			const existing = wrap.querySelector("[data-kf-seq-dummy='1']");
			if (existing) return existing;

			const src = realTargets[realTargets.length - 1] || realTargets[0];
			const dummy = document.createElement(src && src.tagName ? src.tagName : "span");
			try { dummy.setAttribute("data-kf-seq-dummy", "1"); } catch (e) {}
			try { dummy.setAttribute("data-kf-uid", uid); } catch (e) {}
			dummy.className = "lia-target-placeholder kf-seq-dummy";
			try { dummy.style.cssText = String(src.getAttribute("style") || src.style.cssText || ""); } catch (e) {}
			dummy.textContent = "✛";
			dummy.style.pointerEvents = "none";
			wrap.appendChild(dummy);
			return dummy;
		}

		function isFilled(el) {
			const t = norm(el && el.textContent || "");
			return !!t && t !== "✛" && t !== "+";
		}

		function setVisible(el, on) {
			if (!el) return;
			if (typeof el.dataset.kfSeqOrigDisplay === "undefined") {
				el.dataset.kfSeqOrigDisplay = el.style.display || "";
			}
			if (on) {
				el.style.display = el.dataset.kfSeqOrigDisplay || "inline-block";
				el.style.visibility = "";
			} else {
				el.style.display = "none";
			}
		}

		function updateSequentialVisibility() {
			const realTargets = collectRealTargets();
			if (!realTargets.length) return;
			const dummy = ensureDummy(realTargets);

			let filled = 0;
			for (let i = 0; i < realTargets.length; i++) {
				if (isFilled(realTargets[i])) filled += 1;
			}

			const visibleReal = Math.min(filled + 1, realTargets.length);
			realTargets.forEach(function (el, idx) {
				setVisible(el, idx < visibleReal);
			});

			if (dummy) {
				setVisible(dummy, filled >= Math.min(expectedCount, realTargets.length));
			}
		}

		const obs = new MutationObserver(function () {
			updateSequentialVisibility();
		});
		obs.observe(wrap, { subtree: true, childList: true, characterData: true, attributes: true });

		updateSequentialVisibility();
		window.setTimeout(updateSequentialVisibility, 60);
		window.setTimeout(updateSequentialVisibility, 260);
		window.setTimeout(updateSequentialVisibility, 700);

		log("setup uid='" + uid + "' seq=1 expectedCount='" + expectedCount + "'");
	}

	// Tag the quiz DOM nodes with our uid after render so the check handler can find them.
	window.setTimeout(function () {
		const wrap = document.getElementById("kachelfolge-wrap-" + uid);
		const log = typeof window.__liaKachelfolgeLog === "function" ? window.__liaKachelfolgeLog : function(){};
		if (!wrap) {
			log("setup uid='" + uid + "' wrap=NOT_FOUND expected='" + expected.join("|") + "'");
			return;
		}
		// Tag wrap itself and all children that look like quiz containers.
		wrap.setAttribute("data-kf-uid", uid);
		const candidates = wrap.querySelectorAll ? Array.prototype.slice.call(wrap.querySelectorAll("[onclick],[ondragover],[ondragstart],[class*='lia-quiz']")) : [];
		candidates.forEach(function(el) {
			try { el.setAttribute("data-kf-uid", uid); } catch(e) {}
		});
		if (mode === "seq") {
			setupSequentialTargets(wrap, expected.length, log);
		}
		// Do NOT tag ancestors — they are shared with other quizzes on the page.
		log("setup uid='" + uid + "' mode='" + mode + "' tagged expected='" + expected.join("|") + "'");
	}, 500);
})();
</script>
@end


-->



# Neue Kachelquizarten





<div class="Kachel">

Wähle gelb aus. (Welches Gelb in welcher Kachel ist, ist egal, und das ist eine neue Funktion.)\


<!-- data-solution-button="5" 
data-randomize="true" -->
In diese Lücke muss [->[(gelb)]] rein. \
In diese muss auch [->[(gelb)]] rein und in diese [->[(gelb)]] auch. \
Das Adjektiv [->[(gelb)]] ist [->[pink|rot|blau|grün|(gelb)]].

</div>


# Neue Kachelquizarten 2



<!-- data-randomize="true" -->
Wähle Farben oben aus und unten Zahlen. (Reihenfolge egal.)
@Kachelfolge(`[->[(gelb)]][->[(rot)]][->[(grün)|Haus]]`)


<!-- data-solution-button="2" -->
@Kachelfolge(`[->[(1)]][->[(2)|Katze]][->[(3)]]`)





<!-- data-show-partial-solution="true" -->
Wähle Farben oben aus und unten Zahlen.  (Reihenfolge egal.)
@Kachelfolge(`[->[(gelb)]][->[(rot)]][->[(grün)|Haus]]`)
@Kachelfolge(`[->[(1)]][->[(2)|Katze]][->[(3)]]`)




<!-- data-show-partial-solution="true" -->
Wähle Farben aus. (Reihenfolge egal und unbekannte Anzahl.)
@KachelfolgeN(`[->[(gelb)]][->[(rot)]][->[(grün)|Haus]]`)

