import { RequestHandler } from 'express'
import { Example } from '@example-monorepo/core'

const example = () => {
  const instance = new Example()
  const handler: RequestHandler = (_req, _res, next) => {
    instance.message()
    next()
  }
  return handler
}

export default example

export { example }
