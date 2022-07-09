<script setup lang="ts">
import { supabase } from '~/supabase'
const userStore = useUserStore()
userStore.user = supabase.auth.user()
supabase.auth.onAuthStateChange((_, session: any) => {
  userStore.user = session.user
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <!-- <Login /> -->
    <p mb-3>
      <a class="icon-btn" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Pixel war
      </a>
    </p>
    <router-link to="/battle" px-3 py-1 rounded-md bg-gray:10 duration-500 transition hover:text-emerald-500 text-emerald-600>
      Start battle
    </router-link>
  </div>
</template>
