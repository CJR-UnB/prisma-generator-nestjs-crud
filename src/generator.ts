import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import Case from 'case'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { genEnum } from './helpers/genEnum'
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

      const writeDirLocation = path.join(
        options.generator.output?.value!
      )
      const fileName = Case.kebab(model.name)+'.service.ts'

      await writeFileSafely(writeDirLocation, fileName, tsService)
    })
  },
})
