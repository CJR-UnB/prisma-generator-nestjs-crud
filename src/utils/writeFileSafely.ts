import fs from 'fs'
import { logger } from '@prisma/internals'
import { formatFile } from './formatFile'

export const writeFileSafely = async (dirLocation: string, fileName: string, content: any) => {
  fs.access(dirLocation, async err => {
    if (err)
      return logger.info(`Directory not found:\n${dirLocation}`)

    const formattedFile = await formatFile(content)

      fs.writeFile(dirLocation+'/'+fileName, formattedFile, {flag: 'wx'}, err => {
        if (err)
          logger.info(`${fileName} already exists`)
        else
          logger.info(`${fileName} created`)
      })
  })
}
