import { DMMF } from '@prisma/generator-helper'
import { prismaTypesToTs } from '../utils/prismaTypesToTs'
import Case from 'case'
import { changeFirstLetter } from '../utils/changeFirstLetter'

export function genEntity(model: DMMF.Model) {
  const nameUppercase = changeFirstLetter('uppercase', model.name)
  const namePascal = Case.pascal(model.name)

  return (
`import { ${nameUppercase} } from "@prisma/client"

export class ${namePascal}Entity implements ${nameUppercase} {
  ${model.fields
    .filter(field => field.kind == 'scalar')
    .map(field => `${field.name}: ${prismaTypesToTs(field)}`).join('\n')}
`
+
`}`
)
}