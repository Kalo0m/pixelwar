<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { PropType } from 'vue'
import type { Square } from '~/types'
const { square } = defineProps({
  square: {
    type: Object as PropType<Square | null>,
  },
})
const { currentColor } = storeToRefs(useColorPicker())
</script>

<template>
  <div cursor-pointer :style="{ backgroundColor: square?.color || '#aaaaaa20' }" transition w-8 h-8 md:w-10 md:h-10 border border-gray-600 @click="() => $emit('tileSelected', { color: currentColor })" />
</template>
