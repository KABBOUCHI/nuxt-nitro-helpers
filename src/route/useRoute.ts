import Route from './Route'
import { Methods } from './types'

export function useRoute (methods: Methods = {}) {
  const route = new Route()

  for (const method in methods) {
    if (Object.prototype.hasOwnProperty.call(methods, method)) {
      const handler = methods[method]

      route[method](handler)
    }
  }

  return route.handle()
}
