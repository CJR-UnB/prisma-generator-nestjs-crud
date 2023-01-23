import { DMMF } from "@prisma/generator-helper";
import Case from "case";

export function genModule(model: DMMF.Model) {
  const nameKebab = Case.kebab(model.name)
  const namePascal = Case.camel(model.name)
  
  return (
`import { Module } from '@nestjs/common';
import { ${namePascal}Service } from './${nameKebab}.service';
import { ${namePascal}Controller } from './${nameKebab}.controller';
import { PrismaModule } from '../prisma/prisma.module';

    @Module({
        imports: [PrismaModule],
        controllers: [Controller],
        providers: [${namePascal}Service]
    })
    export class ${namePascal}Module {}
    
`)
}
