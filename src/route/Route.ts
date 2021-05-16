import { IncomingMessage, ServerResponse } from 'http'
import { Handle } from './types'

class Route {
  methodHandlers = new Map<string, Handle>();
  _fallback: Handle = null;

  get (handler: Handle) {
    this.methodHandlers.set('GET', handler)
  }

  post (handler: Handle) {
    this.methodHandlers.set('POST', handler)
  }

  patch (handler: Handle) {
    this.methodHandlers.set('PATCH', handler)
  }

  put (handler: Handle) {
    this.methodHandlers.set('PUT', handler)
  }

  delete (handler: Handle) {
    this.methodHandlers.set('DELETE', handler)
  }

  fallback (handler: Handle) {
    this._fallback = handler
  }

  handle () {
    return async (req: IncomingMessage, res: ServerResponse) => {
      const method = (req.method || 'GET').toUpperCase()
      const handler = this.methodHandlers.get(method)

      if (handler) {
        return await handler(req, res)
      }

      if (this._fallback) {
        return await this._fallback(req, res)
      }

      res.statusCode = 404
      res.end()
    }
  }
}

export default Route
