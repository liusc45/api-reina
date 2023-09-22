export interface IBook {
  default: string[]
}

export interface IBookResponse {
  book: string
  chapters: number
  text: string
}

export interface IChapterResponse {
  book: string
  chapter: number
  verses: number
  text: string
}

export interface IVerseResponse {
  book: string
  chapter: number
  verse: number
  text: string
}
