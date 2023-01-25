import { DMMF } from '@prisma/generator-helper'
import Case from 'case'
import { changeFirstLetter } from '../utils/changeFirstLetter'

export function genService(model: DMMF.Model): string {
  const nameUppercase  = changeFirstLetter("uppercase", model.name) 
  const nameLowercase = changeFirstLetter("lowercase", model.name)
  const namePascal = Case.pascal(model.name)

  return (
`import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type ${nameUppercase}Model = Prisma.${nameUppercase}Delegate<RejectOptions>;
const {defaultOptions, getCrud} = new CrudOptions<${nameUppercase}Model>().setOptions({});

@Injectable()
export class ${namePascal}Service extends getCrud<
  Prisma.${nameUppercase}GetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.${nameLowercase}, defaultOptions);
  }
}    
`)
}
