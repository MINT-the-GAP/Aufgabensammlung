const fs = require('fs')
const path = require('path')

const STYLE_START = '<!-- SCHULLIA_THEME_START -->'
const STYLE_END = '<!-- SCHULLIA_THEME_END -->'

function replaceOnce(html, regex, replacer) {
  return regex.test(html) ? html.replace(regex, replacer) : html
}

function buildThemeStyle() {
  return `${STYLE_START}
<style>
  :root {
    --schullia-bg-1: #f7f9ef;
    --schullia-bg-2: #d8efe2;
    --schullia-bg-3: #d7ebf8;
    --schullia-ink: #132321;
    --schullia-muted: #4a6360;
    --schullia-accent: #0f8f83;
    --schullia-accent-dark: #0a695f;
    --schullia-card: rgba(255, 255, 255, 0.88);
    --schullia-border: rgba(15, 143, 131, 0.2);
  }

  body {
    min-height: 100vh;
    color: var(--schullia-ink);
    background:
      radial-gradient(1100px 520px at 10% -20%, rgba(15, 143, 131, 0.22), transparent 60%),
      radial-gradient(900px 460px at 100% 0%, rgba(50, 120, 188, 0.2), transparent 55%),
      linear-gradient(160deg, var(--schullia-bg-1) 0%, var(--schullia-bg-2) 45%, var(--schullia-bg-3) 100%);
    background-attachment: fixed;
  }

  .container-fluid > section.py-5.text-center.container {
    margin-top: 1.2rem;
    border: 1px solid var(--schullia-border);
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.7));
    backdrop-filter: blur(4px);
    box-shadow: 0 24px 42px rgba(14, 38, 45, 0.12);
  }

  .container-fluid .row.py-lg-5 {
    padding-top: 2.4rem !important;
    padding-bottom: 2rem !important;
  }

  h1.fw-light,
  h1.project-title {
    margin-bottom: 0.6rem;
    font-size: clamp(2.1rem, 5vw, 3.3rem);
    font-weight: 800 !important;
    letter-spacing: 0.02em;
    color: #0d3f3a;
  }

  .schullia-logo {
    width: clamp(38px, 6vw, 56px);
    height: clamp(38px, 6vw, 56px);
    margin-right: 0.5rem;
    vertical-align: -0.25em;
    filter: drop-shadow(0 6px 12px rgba(8, 66, 60, 0.25));
  }

  p.lead.text-muted {
    margin-bottom: 1rem;
    color: var(--schullia-muted) !important;
    font-weight: 600;
  }

  select.form-select {
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid rgba(15, 143, 131, 0.35);
    border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.94);
    color: #11443f;
    font-weight: 700;
    box-shadow: 0 10px 22px rgba(14, 57, 63, 0.12);
  }

  select.form-select:focus {
    border-color: var(--schullia-accent);
    box-shadow: 0 0 0 0.22rem rgba(15, 143, 131, 0.2);
  }

  .album.py-5.bg-light {
    background: transparent !important;
    padding-top: 2.3rem !important;
  }

  .album .card {
    border: 1px solid var(--schullia-border);
    border-radius: 18px;
    overflow: hidden;
    background: var(--schullia-card);
    box-shadow: 0 14px 28px rgba(8, 35, 40, 0.08);
  }

  .album .card-header {
    border-bottom: 1px solid rgba(15, 143, 131, 0.16);
    background: linear-gradient(120deg, rgba(15, 143, 131, 0.1), rgba(50, 120, 188, 0.08));
  }

  .album .card-header h4 {
    margin: 0;
    color: #0f5149;
    font-weight: 800;
  }

  .card.shadow-sm.m-1 {
    border-radius: 14px;
    border: 1px solid rgba(15, 143, 131, 0.12);
    background: rgba(255, 255, 255, 0.93);
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .card.shadow-sm.m-1:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 24px rgba(11, 54, 60, 0.14);
  }

  .badge.rounded-pill.bg-light.text-dark {
    border: 1px solid rgba(15, 143, 131, 0.22);
    background: rgba(227, 249, 246, 0.82) !important;
    color: #0f4f48 !important;
    font-weight: 600;
  }

  .stretched-link .card-title,
  .card-title {
    color: #0e544d;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    .container-fluid > section.py-5.text-center.container {
      border-radius: 18px;
    }

    .container-fluid .row.py-lg-5 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.3rem !important;
    }
  }
</style>
${STYLE_END}`
}

function patchIndexHtml(html) {
  html = html.replace(
    /<option value="" selected>All categories<\/option>/i,
    '<option value="" selected>Alle Kategorien</option>'
  )

  html = replaceOnce(
    html,
    /<h1 class="fw-light">[\s\S]*?<\/h1>/i,
    '<h1 class="fw-light"><img class="schullia-logo" src="./pics/grad/SchulLia.png" alt="SchulLia Logo">SchulLia</h1>'
  )

  html = replaceOnce(
    html,
    /<h1 class="project-title">[\s\S]*?<\/h1>/i,
    '<h1 class="project-title"><img class="schullia-logo" src="./pics/grad/SchulLia.png" alt="SchulLia Logo">SchulLia</h1>'
  )

  // Remove previous injected theme block to keep patch idempotent.
  html = html.replace(
    new RegExp(`${STYLE_START}[\\s\\S]*?${STYLE_END}`, 'g'),
    ''
  )

  const themeStyle = buildThemeStyle()
  if (html.includes('</head>')) {
    html = html.replace('</head>', `\n${themeStyle}\n</head>`)
  }

  return html
}

const indexPath = path.join(__dirname, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')
const patchedHtml = patchIndexHtml(html)
fs.writeFileSync(indexPath, patchedHtml, 'utf8')
console.log('index.html wurde gepatcht (SchulLia Theme).')
