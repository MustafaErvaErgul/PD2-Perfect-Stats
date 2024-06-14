const fs = require("fs");

const uniqueItemsFilePath = './data/global/excel/UniqueItems.txt'
const setItemsFilePath = './data/global/excel/SetItems.txt'
const runewordsFilePath = './data/global/excel/Runes.txt'
const prefixesFilePath = './data/global/excel/MagicPrefix.txt'
const suffixesFilePath = './data/global/excel/MagicSuffix.txt'
const cubeMainFilePath = './data/global/excel/CubeMain.txt'

function makeUniqueAndSetItemsRollMaxValue(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const lines = fileData.split('\n')
  const headers = lines[0].trim().split('\t')

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t')

    values.forEach((value, index) => {
      if (headers[index].startsWith("min") && headers[index + 1] && headers[index + 1].startsWith("max")) {
        values[index] = values[index + 1]
      }
    });

    lines[i] = values.join('\t')
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log(`Changes saved successfully for ${filePath}`)
}

function makeRunewordsRollMaxValue(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const lines = fileData.split('\n')
  const headers = lines[0].trim().split('\t')

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t')

    values.forEach((value, index) => {
      if (headers[index].startsWith("T1Min") && headers[index + 1] && headers[index + 1].startsWith("T1Max")) {
        values[index] = values[index + 1]
      }
    });

    lines[i] = values.join('\t')
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log(`Changes saved successfully for ${filePath}`)
}

function makeAffixesRollMaxValue(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const lines = fileData.split('\n')
  const headers = lines[0].trim().split('\t')

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t')

    values.forEach((value, index) => {
      if (headers[index].startsWith("mod1min")
        || headers[index].startsWith("mod2min")
        || headers[index].startsWith("mod3min")) {
        values[index] = values[index + 1]
      }
    });

    lines[i] = values.join('\t')
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log(`Changes saved successfully for ${filePath}`)
}

function makeCraftedItemsRollMaxValue(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const lines = fileData.split('\n')
  const headers = lines[0].trim().split('\t')

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t')

    if (values[0].includes("blood")
      || values[0].includes("caster")
      || values[0].includes("hitpower")
      || values[0].includes("safety")
      || values[0].includes("vampiric")
      || values[0].includes("bountiful")
      || values[0].includes("brilliant")
    ) {
      values.forEach((value, index) => {
        if (headers[index] === "mod 1 min"
          || headers[index] === "mod 2 min"
          || headers[index] === "mod 3 min"
          || headers[index] === "mod 4 min"
          || headers[index] === "mod 5 min") {
          values[index] = values[index + 1]
        }
      });

    }

    lines[i] = values.join('\t')
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log(`Changes saved successfully for ${filePath}`)
}


makeUniqueAndSetItemsRollMaxValue(uniqueItemsFilePath)
makeUniqueAndSetItemsRollMaxValue(setItemsFilePath)
makeRunewordsRollMaxValue(runewordsFilePath)
makeAffixesRollMaxValue(prefixesFilePath)
makeAffixesRollMaxValue(suffixesFilePath)
makeCraftedItemsRollMaxValue(cubeMainFilePath)
