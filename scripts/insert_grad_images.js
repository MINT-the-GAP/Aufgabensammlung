const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.join(__dirname, '..')

const SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  'imports',
  'pics',
  'scripts',
  'Repetitorium',
])

const RAW_BASE =
  'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics'

const DIFFICULTY_MAP = new Map([
  ['sehr leicht', 1],
  ['leicht', 2],
  ['mittel', 3],
  ['schwer', 4],
  ['sehr schwer', 5],
])

const NETWORK_MAP = new Map([
  ['sehr niedrig', 1],
  ['niedrig', 2],
  ['normal', 3],
  ['hoch', 4],
  ['sehr hoch', 5],
])

function normalize(value) {
  return String(value == null ? '' : value)
    .toLowerCase()
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseTags(text) {
  const headerMatch = text.match(/^\s*<!--([\s\S]*?)-->/)
  if (!headerMatch) return []

  const lines = headerMatch[1].split(/\r?\n/)
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim()
    const match = line.match(/^tags\s*:\s*(.*)$/i)
    if (match) {
      return match[1]
        .split(/\s*,\s*/)
        .map(function (entry) {
          return entry.trim()
        })
        .filter(Boolean)
    }
  }

  return []
}

function resolveLevels(tags) {
  let difficulty = null
  let network = null

  tags.forEach(function (tag) {
    const key = normalize(tag)
    if (difficulty == null && DIFFICULTY_MAP.has(key)) {
      difficulty = DIFFICULTY_MAP.get(key)
    }
    if (network == null && NETWORK_MAP.has(key)) {
      network = NETWORK_MAP.get(key)
    }
  })

  return { difficulty: difficulty, network: network }
}

function buildBadgeLine(network, difficulty) {
  const gradUrl = RAW_BASE + '/grad/' + network + '.png'
  const sgradUrl = RAW_BASE + '/sgrad/' + difficulty + '.png'

  return (
    '<img src="' + gradUrl + '" width="30" height="30"> ' +
    '<img src="' + sgradUrl + '" width="120" height="30">  \\'
  )
}

function isBadgeLine(line) {
  if (!line) return false
  return /<img[^>]+\/pics\/(grad|sgrad)\//.test(line)
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  const tags = parseTags(original)

  if (!tags.length) {
    return { skipped: true, reason: 'no tags' }
  }

  const levels = resolveLevels(tags)
  if (!levels.difficulty || !levels.network) {
    return {
      skipped: true,
      reason:
        'missing levels (difficulty=' +
        levels.difficulty +
        ', network=' +
        levels.network +
        ')',
    }
  }

  const badge = buildBadgeLine(levels.network, levels.difficulty)
  const newline = original.includes('\r\n') ? '\r\n' : '\n'
  const lines = original.split(/\r?\n/)

  let headingIndex = -1
  for (let i = 0; i < lines.length; i += 1) {
    if (/^#{1,6}\s+\S/.test(lines[i])) {
      headingIndex = i
      break
    }
  }

  if (headingIndex === -1) {
    return { skipped: true, reason: 'no heading found' }
  }

  let insertIndex = headingIndex + 1
  while (insertIndex < lines.length && lines[insertIndex].trim() === '') {
    insertIndex += 1
  }

  if (insertIndex < lines.length && isBadgeLine(lines[insertIndex])) {
    if (lines[insertIndex] === badge) {
      return { changed: false }
    }
    lines.splice(insertIndex, 1, badge)
  } else {
    lines.splice(insertIndex, 0, badge)
  }

  const updated = lines.join(newline)

  if (updated === original) {
    return { changed: false }
  }

  fs.writeFileSync(filePath, updated, 'utf8')
  return {
    changed: true,
    network: levels.network,
    difficulty: levels.difficulty,
  }
}

function collectFiles(dir, results) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  entries.forEach(function (entry) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) return
      collectFiles(path.join(dir, entry.name), results)
    } else if (entry.isFile() && /^Aufgabe_\d+\.md$/.test(entry.name)) {
      results.push(path.join(dir, entry.name))
    }
  })
}

function main() {
  const files = []
  collectFiles(ROOT_DIR, files)
  files.sort()

  let changed = 0
  let unchanged = 0
  const skipped = []

  files.forEach(function (fullPath) {
    const rel = path.relative(ROOT_DIR, fullPath)
    const result = processFile(fullPath)

    if (result.skipped) {
      skipped.push(rel + ' :: ' + result.reason)
      return
    }

    if (result.changed) {
      changed += 1
      console.log(
        'updated  ' +
          rel +
          '  grad=' +
          result.network +
          ' sgrad=' +
          result.difficulty
      )
    } else {
      unchanged += 1
    }
  })

  console.log('---')
  console.log('total:     ' + files.length)
  console.log('changed:   ' + changed)
  console.log('unchanged: ' + unchanged)
  console.log('skipped:   ' + skipped.length)
  skipped.forEach(function (entry) {
    console.log('  - ' + entry)
  })
}

main()
