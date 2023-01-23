export function prismaTypesToTs(field: {name:string, type: string; isList: boolean }) {
  let convertedType
  if (field.type == 'String') convertedType = 'string'
  else if (field.type == 'Int') convertedType = 'number'
  else if (field.type == 'Boolean') convertedType = 'boolean'
  else throw Error(`${field.name} is not scalar`)

  return convertedType+field.isList?'[]':''
}
