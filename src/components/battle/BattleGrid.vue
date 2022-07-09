<script setup lang="ts">
const { size } = defineProps({
  size: Number,
})
const { squares, placeTile } = useGame('f838dadd-3068-4e37-b2c8-6632a258d4b5', size)
// const { user } = useUserStore()
</script>

<template>
  <div>
    <div class="grid grid-rows-10 justify-center">
      <div v-for="squareLine, indexX in squares" :key="indexX" class="grid grid-cols-10">
        <BattleSquare v-for="square, indexY in squareLine" :key="indexY" :square="square" @tileSelected="({ color }) => placeTile({ posX: indexX, posY: indexY, color })" />
      </div>
    </div>
  </div>
</template>
