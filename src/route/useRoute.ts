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

export function useGetRoute (get: Handle, fallback: Handle = null) {
  return useRoute({
    get,
    fallback
  })
}

export function usePostRoute (post: Handle, fallback: Handle = null) {
  return useRoute({
    post,
    fallback
  })
}

export function usePatchRoute (patch: Handle, fallback: Handle = null) {
  return useRoute({
    patch,
    fallback
  })
}

export function useDeleteRoute (del: Handle, fallback: Handle = null) {
  return useRoute({
    delete: del,
    fallback
  })
}
