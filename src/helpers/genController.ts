import { DMMF } from '@prisma/generator-helper'
import Case from 'case'

export function genController(model: DMMF.Model) {
  const nameKebab = Case.kebab(model.name)
  const namePascal = Case.camel(model.name)
  const nameCamel = Case.camel(model.name)
  const serviceFileName = nameKebab
  const createDtoFileName = 'create-' + nameKebab + '.dto.ts'
  const updateDtoFileName = 'update-' + nameKebab + '.dto.ts'

  return
`import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${namePascal}Service } from './${serviceFileName}';
import { Create${namePascal}Dto } from './dto/${createDtoFileName}';
import { Update${namePascal}Dto } from './dto/${updateDtoFileName}';

@Controller('${nameKebab}')
export class ${namePascal}Controller {
  constructor(private readonly ${nameCamel}Service: ${namePascal}Service) {}

  @Post()
  create(@Body() create${namePascal}Dto: Create${namePascal}Dto) {
    return this.${nameCamel}Service.create(create${namePascal}Dto);
  }

  @Get()
  findAll() {
    return this.${nameCamel}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${nameCamel}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${namePascal}Dto: Update${namePascal}Dto) {
    return this.${nameCamel}Service.update(+id, update${namePascal}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${nameCamel}Service.remove(+id);
  }
}

`
}
