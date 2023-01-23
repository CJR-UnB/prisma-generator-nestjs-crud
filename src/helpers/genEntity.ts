import { DMMF } from '@prisma/generator-helper'
import Case from 'case'
import { changeFirstLetter } from 'src/utils/changeFirstLetter'
import { prismaTypesToTs } from 'src/utils/prismaTypesToTs'

export function genEntity(model: DMMF.Model) {
  const nameUppercase = changeFirstLetter('uppercase', model.name)
  const namePascal = Case.pascal(model.name)

  return (
    `import { ${nameUppercase} } from "@prisma/client"

export class ${namePascal}Entity implements ${nameUppercase} {
` +
    model.fields
      .filter((fild) => fild.kind == 'scalar')
      .map((field) => `${field.name}: ${prismaTypesToTs(field)}\n`) +
    `}`
  )
}
