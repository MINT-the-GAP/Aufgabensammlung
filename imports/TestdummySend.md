<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: Minimale LiaScript-Abgabelink-Demo

@style
.lia-submit-box{
  margin-top: 1.25rem;
  padding: 1rem;
  border: 1px solid rgba(127,127,127,.35);
  border-radius: 12px;
}

.lia-submit-box label{
  display: block;
  font-weight: 700;
  margin: .7rem 0 .25rem 0;
}

.lia-submit-box input[type="text"],
.lia-submit-box input[type="password"],
.lia-submit-box textarea{
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  padding: .65rem .8rem;
  border: 1px solid rgba(127,127,127,.35);
  border-radius: 10px;
  font-size: 1rem;
}

.lia-submit-box textarea{
  min-height: 110px;
  resize: vertical;
}

.lia-submit-box button{
  margin-top: 1rem;
  padding: .7rem 1rem;
  border: 1px solid rgba(127,127,127,.35);
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
}

#lia-status{
  margin-top: .8rem;
  font-weight: 700;
}

#lia-result{
  margin-top: .8rem;
  white-space: pre-wrap;
}

.lia-frozen-note{
  margin-top: 1rem;
  padding: .8rem 1rem;
  border-radius: 10px;
  background: rgba(127,127,127,.08);
  border: 1px solid rgba(127,127,127,.25);
}
@end

@onload
window.__liaSubmissionDemo = (function () {
  const PASSWORD_CODES = [76, 105, 97, 84, 101, 115, 116, 50, 54];
  const SOLUTIONS = ["7123", "6123", "5123", "4123"];
  const HASH_PREFIX = "submission=";

  function fromCodes(arr) {
    return (arr || []).map(function (n) {
      return String.fromCharCode(n);
    }).join("");
  }

  function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  function base64ToUtf8(str) {
    return decodeURIComponent(escape(atob(str)));
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, function (ch) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[ch];
    });
  }

  function getTaskInputs() {
    return Array.from(document.querySelectorAll('input[type="text"]')).filter(function (el) {
      return el.id !== "lia-name";
    }).slice(0, 4);
  }

  function getNameInput() {
    return document.getElementById("lia-name");
  }

  function getPasswordInput() {
    return document.getElementById("lia-password");
  }

  function getLinkBox() {
    return document.getElementById("lia-link");
  }

  function getStatusBox() {
    return document.getElementById("lia-status");
  }

  function getResultBox() {
    return document.getElementById("lia-result");
  }

  function getButton() {
    return document.getElementById("lia-create-link");
  }

  function setStatus(msg) {
    const el = getStatusBox();
    if (el) el.textContent = msg || "";
  }

  function readState() {
    const inputs = getTaskInputs();
    const answers = inputs.map(function (el) {
      return String(el.value || "");
    });

    return {
      name: String((getNameInput() && getNameInput().value) || ""),
      answers: answers,
      correct: answers.map(function (v, i) {
        return String(v).trim() === SOLUTIONS[i];
      }),
      createdAt: new Date().toISOString()
    };
  }

  function buildLink(state) {
    const base = window.location.href.split("#")[0];
    const token = utf8ToBase64(JSON.stringify(state));
    return base + "#" + HASH_PREFIX + encodeURIComponent(token);
  }

  function renderResult(state) {
    const el = getResultBox();
    if (!el) return;

    const lines = [
      "Name: " + (state.name || "-"),
      "",
      "a) " + (state.answers[0] || "") + "   " + (state.correct[0] ? "✓" : "✗"),
      "b) " + (state.answers[1] || "") + "   " + (state.correct[1] ? "✓" : "✗"),
      "c) " + (state.answers[2] || "") + "   " + (state.correct[2] ? "✓" : "✗"),
      "d) " + (state.answers[3] || "") + "   " + (state.correct[3] ? "✓" : "✗"),
      "",
      "Erstellt: " + (state.createdAt || "-")
    ];

    el.textContent = lines.join("\n");
  }

  function freezeWithState(state) {
    const nameEl = getNameInput();
    const pwEl = getPasswordInput();
    const linkEl = getLinkBox();
    const btnEl = getButton();
    const inputs = getTaskInputs();

    if (nameEl) {
      nameEl.value = state.name || "";
      nameEl.disabled = true;
    }

    inputs.forEach(function (el, i) {
      el.value = state.answers[i] || "";
      el.disabled = true;
    });

    if (pwEl) {
      pwEl.value = "";
      pwEl.disabled = true;
      pwEl.placeholder = "Im Abgabemodus gesperrt";
    }

    if (btnEl) {
      btnEl.disabled = true;
      btnEl.textContent = "Abgabe eingefroren";
    }

    if (linkEl) {
      linkEl.value = window.location.href;
      linkEl.readOnly = true;
    }

    renderResult(state);

    const note = document.getElementById("lia-frozen-note");
    if (note) {
      note.innerHTML = "Dies ist ein <strong>eingefrorener Abgabestand</strong>.";
    }

    setStatus("Abgabelink erkannt und Zustand eingefroren.");
  }

  function tryLoadSnapshot() {
    const hash = String(window.location.hash || "");
    if (!hash.startsWith("#" + HASH_PREFIX)) return null;

    try {
      const token = decodeURIComponent(hash.slice(("#" + HASH_PREFIX).length));
      const obj = JSON.parse(base64ToUtf8(token));

      if (!obj || !Array.isArray(obj.answers) || obj.answers.length < 4) {
        return null;
      }

      return obj;
    } catch (e) {
      return null;
    }
  }

  function createLink() {
    const pwEl = getPasswordInput();
    const linkEl = getLinkBox();

    const pw = String((pwEl && pwEl.value) || "");
    const expected = fromCodes(PASSWORD_CODES);

    if (pw !== expected) {
      setStatus("Passwort falsch.");
      return;
    }

    const state = readState();
    const link = buildLink(state);

    if (linkEl) {
      linkEl.value = link;
    }

    renderResult(state);
    setStatus("Abgabelink erstellt.");
  }

  function init() {
    const snapshot = tryLoadSnapshot();
    if (!snapshot) return;

    let tries = 0;
    const timer = setInterval(function () {
      tries += 1;
      const inputs = getTaskInputs();

      if (inputs.length >= 4) {
        clearInterval(timer);
        freezeWithState(snapshot);
      }

      if (tries > 30) {
        clearInterval(timer);
      }
    }, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    setTimeout(init, 0);
  }

  return {
    createLink: createLink
  };
})();
@end
-->

# Reine LiaScript-Abgabelink-Demo

$a)\;\;$ $7000+123=$ [[  7123  ]]

$b)\;\;$ $6000+123=$ [[  6123  ]]

$c)\;\;$ $5000+123=$ [[  5123  ]]

$d)\;\;$ $4000+123=$ [[  4123  ]]

<div class="lia-submit-box">
  <label for="lia-name">Name</label>
  <input id="lia-name" type="text" placeholder="Name eingeben">

  <label for="lia-password">Passwort</label>
  <input id="lia-password" type="password" placeholder="Passwort eingeben">

  <button id="lia-create-link" onclick="window.__liaSubmissionDemo.createLink()">Abgabelink erstellen</button>

  <label for="lia-link">Abgabelink</label>
  <textarea id="lia-link" readonly placeholder="Hier erscheint der erzeugte Link"></textarea>

  <div id="lia-status"></div>
  <pre id="lia-result"></pre>
  <div id="lia-frozen-note" class="lia-frozen-note"></div>
</div>