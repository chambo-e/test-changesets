import config from 'conventional-changelog-conventionalcommits'
import { sync as parser } from 'conventional-commits-parser'

const preset = await config()
const commit = parser('chore(devDeps): toto', preset.parserOpts)
const result = preset.recommendedBumpOpts.whatBump([commit])
console.log(result)

// console.log(VERSIONS[result.level])
