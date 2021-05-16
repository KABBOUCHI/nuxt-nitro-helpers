import Route from './Route'
import { Methods, Handle } from './types'

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

export function useGetRoute (get: Handle) {
  return useRoute({
    get
  })
}

export function usePostRoute (post: Handle) {
  return useRoute({
    post
  })
}

export function usePatchRoute (patch: Handle) {
  return useRoute({
    patch
  })
}

export function useDeleteRoute (del: Handle) {
  return useRoute({
    delete: del
  })
}
