import { DMMF } from '@prisma/generator-helper'
import { changeFirstLetter } from '../utils/changeFirstLetter'

export function genService(model: DMMF.Model): string {
  const nameUppercase  = changeFirstLetter("uppercase", model.name) 
  const nameLowercase = changeFirstLetter("lowercase", model.name)

  return `import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type ${nameUppercase}Model = Prisma.${nameUppercase}Delegate<RejectOptions>;
const {defaultOptions, getCrud} = new CrudOptions<${nameUppercase}Model>().setOptions({});

@Injectable()
export class ${nameUppercase}Service extends getCrud<
  Prisma.${nameUppercase}GetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.${nameLowercase}, defaultOptions);
  }
}    
`
}
