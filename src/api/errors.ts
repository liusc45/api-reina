import type { ErrorRequestHandler } from 'express'

export const errorLogger: ErrorRequestHandler = (error, req, res, next): void => {
  console.error(error)
  next(error)
}

export const boomErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error.isBoom === true) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  } else {
    next(error)
  }
}

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  res.status(500).json({ message: error.message, stack: error.stack })
}
