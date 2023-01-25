import fs from 'fs-extra'
import { logger } from '@prisma/internals'
import { formatFile } from './formatFile'

export const writeFile = async (dirLocation: string, fileName: string, content: any) => {
  
  try {
    await fs.ensureDir(dirLocation)

    const formattedFile = await formatFile(content)
    fs.writeFile(dirLocation+'/'+fileName, formattedFile, {flag: 'wx'}, err => {
      if (err)
        logger.info(`${fileName} already exists`)
      else
        logger.info(`${fileName} created`)
    })
  }
  catch (err) {
    logger.info(err)
  }
}
