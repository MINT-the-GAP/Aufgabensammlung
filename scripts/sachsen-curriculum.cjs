const fs = require('node:fs')

const CURRICULUM_SCHEMA = 'schullia-sachsen-curriculum'
const CURRICULUM_VERSION = 1

function resolveClassKey(value) {
  const cell = String(value || '').trim()
  let match = cell.match(/(\d+)\s*HS/i)
  if (match) return match[1] + 'HS'
  match = cell.match(/(\d+)\s*RS/i)
  if (match) return match[1] + 'RS'
  const grade = cell.match(/(\d+)/)
  if (!grade) return null
  if (/GK/i.test(cell)) return grade[1] + 'GK'
  if (/LK/i.test(cell)) return grade[1] + 'LK'
  return grade[1]
}

function resolveClassRange(value) {
  const grades = Array.from(String(value || '').matchAll(/\d+/g), function (match) {
    return Number(match[0])
  })
  if (!grades.length) return null
  return {
    startGrade: grades[0],
    endGrade: grades.length > 1 ? grades[1] : grades[0],
  }
}

function unique(values) {
  const seen = new Set()
  return values.filter(function (value) {
    const key = String(value || '').trim()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function buildSachsenCurriculum(file) {
  if (!fs.existsSync(file)) throw new Error('Lehrplanquelle fehlt: ' + file)
  const markdown = fs.readFileSync(file, 'utf8')
  const themes = {}
  const lbCount = {}
  const lbTitles = {}
  const classRanges = {}
  let currentSchool = null

  markdown.split(/\r?\n/).forEach(function (rawLine) {
    const trimmed = rawLine.trim()
    const header = trimmed.match(/^#{1,6}\s+(.*)$/)
    if (header) {
      const title = header[1].toLowerCase()
      if (title.includes('berufliches gymnasium')) currentSchool = 'bgy'
      else if (title.includes('oberschule')) currentSchool = 'oberschule'
      else if (title.includes('gymnasium')) currentSchool = 'gymnasium'
      return
    }
    if (!currentSchool || !trimmed.startsWith('|')) return
    const cells = trimmed.split('|').slice(1, -1).map(function (cell) { return cell.trim() })
    if (cells.length < 3) return
    const classCell = cells[0]
    if (/Klasse\s*\/\s*Jahrgang|Klassenstufe/i.test(classCell) ||
        /^-+$/.test(classCell.replace(/[\s|]/g, ''))) return
    const classKey = resolveClassKey(classCell)
    const classRange = resolveClassRange(classCell)
    if (!classKey || !classRange) return
    const learningArea = cells[1]
    const themeList = unique(cells[2].split(',').map(function (theme) {
      return theme.trim().toLowerCase()
    }))

    if (!themes[currentSchool]) themes[currentSchool] = {}
    if (!lbCount[currentSchool]) lbCount[currentSchool] = {}
    if (!lbTitles[currentSchool]) lbTitles[currentSchool] = {}
    if (!classRanges[currentSchool]) classRanges[currentSchool] = {}
    if (!themes[currentSchool][classKey]) themes[currentSchool][classKey] = {}
    if (!lbTitles[currentSchool][classKey]) lbTitles[currentSchool][classKey] = {}
    const knownRange = classRanges[currentSchool][classKey]
    classRanges[currentSchool][classKey] = {
      startGrade: knownRange
        ? Math.min(knownRange.startGrade, classRange.startGrade)
        : classRange.startGrade,
      endGrade: knownRange
        ? Math.max(knownRange.endGrade, classRange.endGrade)
        : classRange.endGrade,
    }

    const lb = learningArea.match(/LB\s*(\d+)/i)
    if (lb) {
      const number = Number(lb[1])
      const key = String(number)
      lbCount[currentSchool][classKey] = Math.max(lbCount[currentSchool][classKey] || 0, number)
      const title = learningArea.match(/LB\s*\d+\s*:\s*(.+)$/i)
      if (title) lbTitles[currentSchool][classKey][key] = title[1].trim()
      if (themeList.length) {
        themes[currentSchool][classKey][key] = unique(
          (themes[currentSchool][classKey][key] || []).concat(themeList)
        )
      }
    } else if (themeList.length) {
      themes[currentSchool][classKey].extra = unique(
        (themes[currentSchool][classKey].extra || []).concat(themeList)
      )
    }
  })

  if (!Object.keys(themes).length) throw new Error('Lehrplanquelle enthaelt keine lesbaren Themen.')
  return {
    schema: CURRICULUM_SCHEMA,
    version: CURRICULUM_VERSION,
    jurisdiction: 'DE-SN',
    source: 'Lehrplan.md',
    themes,
    classRanges,
    lbCount,
    lbTitles,
  }
}

module.exports = {
  schema: CURRICULUM_SCHEMA,
  version: CURRICULUM_VERSION,
  resolveClassKey,
  resolveClassRange,
  buildSachsenCurriculum,
}
