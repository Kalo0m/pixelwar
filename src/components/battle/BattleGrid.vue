<script setup lang="ts">
const { size } = defineProps({
  size: Number,
})
// const { user } = useUserStore()
</script>

<template>
  <div>
    <div class="grid grid-rows-10 justify-center">
      <div v-for="(index) in size" :key="index" class="grid grid-cols-10">
        <BattleSquare v-for="(i) in size" :key="i" />
      </div>
    </div>
  </div>
</template>
