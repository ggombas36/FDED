import { useNuxtApp } from '#app'

export function useToast() {
  const { $toast } = useNuxtApp()

  return {
    success: (message) => $toast.success(message),
    error: (message) => $toast.error(message),
    info: (message) => $toast.info(message),
    warning: (message) => $toast.warning(message)
  }
}