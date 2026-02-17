<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="px-3 py-1 text-xs font-mono bg-secondary text-accent rounded-full border border-border">
    {{ name }}
  </span>
</template>
