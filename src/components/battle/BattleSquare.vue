<template>
  <div cursor-pointer @click="() => color = currentColor" :style="{'backgroundColor': color}" transition w-10 h-10 border border-gray-600></div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
const { currentColor } = storeToRefs(useColorPicker())
const color = ref('#AAAAAA20')

</script>
