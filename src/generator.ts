import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/internals'
import Case from 'case'
import { GENERATOR_NAME } from './constants'
import { genController } from './helpers/genController'
import { genDto } from './helpers/genDto'
import { genEntity } from './helpers/genEntity'
import { genModule } from './helpers/genModule'
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

      const tsModule = genModule(model)
      const moduleFileName = Case.kebab(model.name)+'.module.ts'
      await writeFile(writeDirLocation, moduleFileName, tsModule)

      const tsEntity = genEntity(model)
      const entityFileName = Case.kebab(model.name)+'.entity.ts'
      await writeFile(writeDirLocation+'/entities', entityFileName, tsEntity)

      const tsCreateDto = genDto(model, "Create")
      const createDtoFileName = 'create-'+Case.kebab(model.name)+'.dto.ts'
      await writeFile(writeDirLocation+'/dto', createDtoFileName, tsCreateDto)
      
      const tsUpdateDto = genDto(model, "Update")
      const updateDtoFileName = 'update-'+Case.kebab(model.name)+'.dto.ts'
      await writeFile(writeDirLocation+'/dto', updateDtoFileName, tsUpdateDto)
    })
  },
})
