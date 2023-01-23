import fs from 'fs'
import { logger } from '@prisma/internals'
import { formatFile } from './formatFile'

export const writeFile = async (dirLocation: string, fileName: string, content: any) => {
  if (!fs.existsSync(dirLocation))
    fs.mkdirSync(dirLocation);

  const formattedFile = await formatFile(content)

  fs.writeFile(dirLocation+'/'+fileName, formattedFile, {flag: 'wx'}, err => {
    if (err)
      logger.info(`${fileName} already exists`)
    else
      logger.info(`${fileName} created`)
  })
}
