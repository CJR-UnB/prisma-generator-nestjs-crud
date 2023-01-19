import { DMMF } from '@prisma/generator-helper'
import Case from 'case'

export function genService(model: DMMF.Model): string {
  const namePascalCase = Case.pascal(model.name)
  const nameCamelCase = Case.camel(model.name)

  return `import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type ${namePascalCase}Model = Prisma.${namePascalCase}Delegate<RejectOptions>;
const {defaultOptions, getCrud} = new CrudOptions<${namePascalCase}Model>().setOptions({});

@Injectable()
export class ${namePascalCase}Service extends getCrud<
  Prisma.${namePascalCase}GetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.${nameCamelCase}, defaultOptions);
  }
}    
`
}
