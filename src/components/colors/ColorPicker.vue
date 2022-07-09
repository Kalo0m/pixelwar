<script setup lang="ts">
const { colors, setCurrentColor } = useColorPicker()
</script>

<template>
  <div grid justify-center gap-2 md:gap-4 grid-flow-col>
    <div v-for="(color, i) in colors" :key="i" cursor-pointer rounded-md w-9 h-9 md:w-10 md:h-10 :style="{ backgroundColor: color }" @click="setCurrentColor(color)" />
  </div>
</template>
