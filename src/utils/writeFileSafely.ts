import fs from 'fs'
import path from 'path'
import { formatFile } from './formatFile'

export const writeFileSafely = async (dirLocation: string, fileName: string, content: any) => {
  const formattedFile = await formatFile(content)
  /*
    Se tem pasta:
      Se não tem arquivo:
        escreve
    Se não tem pasta:
      cria pasta e escreve
  */
}
