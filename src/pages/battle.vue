<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { currentColor } = storeToRefs(useColorPicker())
</script>

<template>
  <BattleGrid :size="10" />
  <ColorPicker mt-5 />
</template>
