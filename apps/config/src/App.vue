<script setup lang="ts">
import { ref } from 'vue'
const str = ref<string>('Rsbuild with Vue')

const pluginId = kintone.$PLUGIN_ID

</script>

<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Plugin id: {{ pluginId }}</p>
  </div>
</template>

<style scoped>

</style>
