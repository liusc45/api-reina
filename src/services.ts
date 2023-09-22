import boom from '@hapi/boom'
import type { IBookResponse, IChapterResponse, IVerseResponse } from './types'
import getDb from './controller'
import { capitalizeFirst } from './utils'

const getBook = (book: string): IBookResponse => {
  const db = getDb(book)

  return {
    book: capitalizeFirst(book),
    chapters: db.default.length - 1,
    text: db.default[0][0]
  }
}

const getChapter = (book: string, chapter: number): IChapterResponse => {
  const db = getDb(book)
  if (chapter < 1 || chapter > db.default.length - 1) {
    throw boom.notFound(`Chapter '${chapter}' out of range`)
  }

  return {
    book: capitalizeFirst(book),
    chapter,
    verses: db.default[chapter].length,
    text: db.default[chapter]
  }
}

const getVerse = (book: string, chapter: number, verse: number): IVerseResponse => {
  const db = getDb(book)
  if (chapter < 1 || chapter > db.default.length - 1) {
    throw boom.notFound(`Chapter '${chapter}' out of range`)
  } else if (verse < 1 || verse > db.default[chapter].length) {
    throw boom.notFound(`Verse '${verse}' out of range`)
  }

  return {
    book: capitalizeFirst(book),
    chapter,
    verse,
    text: db.default[chapter][verse - 1]
  }
}

export {
  getBook,
  getChapter,
  getVerse
}
