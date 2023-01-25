export function prismaTypesToTs(field: {name:string, type: string; isList: boolean }) {
  let convertedType
  if (field.type == 'String') convertedType = 'string'
  else if (field.type == 'Int') convertedType = 'number'
  else if (field.type == 'Boolean') convertedType = 'boolean'
  else if (field.type == 'DateTime') convertedType = 'Date'

  return convertedType as string + (field.isList?'[]':'');
}
