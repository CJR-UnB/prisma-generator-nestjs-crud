import { DMMF } from '@prisma/generator-helper'
import Case from 'case'

export function genDto(model: DMMF.Model, type: "Create"|"Update") {
  const nameKebab = Case.kebab(model.name)
  const namePascal = Case.pascal(model.name)

  return (
`import { PickType } from "@nestjs/mapped-types";
import { ${namePascal}Entity } from "../entities/${nameKebab}.entity";

export class ${type}${namePascal}Dto extends PickType(${namePascal}Entity, [${
  model.fields
  .filter(field => field.kind == "scalar")
  .map(
    (field) => `'${field.name}'`,
  )}]) {}        
`)
}