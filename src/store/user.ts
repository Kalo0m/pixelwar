import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  return { user }
})
