import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/internals'
import Case from 'case'
import { GENERATOR_NAME } from './constants'
import { genController } from './helpers/genController'
import { genService } from './helpers/genService'
import { writeFile } from './utils/writeFile'

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
      const writeDirLocation =  options.generator.output?.value!+'/'+Case.kebab(model.name)

      const tsService = genService(model)
      const serviceFileName = Case.kebab(model.name)+'.service.ts'
      await writeFile(writeDirLocation, serviceFileName, tsService)

      const tsController = genController(model)
      const controllerFileName = Case.kebab(model.name)+'.controller.ts'
      await writeFile(writeDirLocation, controllerFileName, tsController)
    })
  },
})
