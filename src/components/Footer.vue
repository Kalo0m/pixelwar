<script setup lang="ts">
</script>

<template>
  <nav text-xl mt-6>
    <button class="icon-btn mx-2 !outline-none" title="Toggle dark mode" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Kalo0m/pixelwar" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
