import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/internals'
import Case from 'case'
import { GENERATOR_NAME } from './constants'
import { genService } from './helpers/genService'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    options.dmmf.datamodel.models.forEach(async model => {
      const tsService = genService(model)

      const writeDirLocation =  options.generator.output?.value!+'/'+Case.kebab(model.name)
      const fileName = Case.kebab(model.name)+'.service.ts'

      await writeFileSafely(writeDirLocation, fileName, tsService)
    })
  },
})
