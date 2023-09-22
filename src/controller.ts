import boom from '@hapi/boom'
import type { IBook } from './types'
const books = ['1corintios', '1cronicas', '1juan', '1pedro', '1reyes', '1samuel', '1tesalonicenses', '1timoteo', '2corintios', '2cronicas', '2juan', '2pedro', '2reyes', '2samuel', '2tesalonicenses', '2timoteo', '3juan', 'abdias', 'amos', 'apocalipsis', 'cantares', 'colosenses', 'daniel', 'deuteronomio', 'eclesiastes', 'efesios', 'esdras', 'ester', 'exodo', 'ezequiel', 'filemon', 'filipenses', 'galatas', 'genesis', 'habacuc', 'hageo', 'hebreos', 'hechos', 'isaias', 'jeremias', 'job', 'joel', 'jonas', 'josue', 'juan', 'judas', 'jueces', 'lamentaciones', 'levitico', 'lucas', 'malaquias', 'marcos', 'mateo', 'miqueas', 'nahum', 'nehemias', 'numeros', 'oseas', 'proverbios', 'romanos', 'rut', 'salmos', 'santiago', 'sofonias', 'tito', 'zacarias']

export default (book: string): IBook => {
  if (!books.includes(book)) {
    throw boom.notFound(`Book '${book}' not found`)
  }
  return require(`./db/${book}`)
}
