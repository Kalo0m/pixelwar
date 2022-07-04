<script setup lang="ts">
  const { colors, setCurrentColor} = useColorPicker()
</script>


<template>
  <div grid justify-center gap-4 grid-flow-col>
    
    <div cursor-pointer rounded-md w-10 h-10 @click="setCurrentColor(color)" v-for="color in colors" :style="{'backgroundColor': color}" />
  </div>
</template>
