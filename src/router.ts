import { Router, type Express } from 'express'
import { getBook, getChapter, getVerse } from './services'

export default function router (app: Express): void {
  const router = Router()

  app.use('/api/v1/', router)

  router.get('/:book', (req, res) => {
    const book = req.params.book
    const data = getBook(book)
    res.status(200).json(data)
  })

  router.get('/:book/:chapter', (req, res) => {
    const book = req.params.book
    const chapter = parseInt(req.params.chapter)
    const data = getChapter(book, chapter)
    res.status(200).json(data)
  })

  router.get('/:book/:chapter/:verse', (req, res) => {
    const book = req.params.book
    const chapter = parseInt(req.params.chapter)
    const verse = parseInt(req.params.verse)
    const data = getVerse(book, chapter, verse)
    res.status(200).json(data)
  })
}
