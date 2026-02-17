<script setup lang="ts">
defineProps<{
  name: string
  icon: string
  level: number
}>()
</script>

<template>
  <div class="group">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span :class="'i-' + icon" class="text-text-secondary group-hover:text-accent transition-colors"></span>
        <span class="text-text-primary font-medium">{{ name }}</span>
      </div>
      <span class="text-text-secondary text-sm font-mono">{{ level }}%</span>
    </div>
    <div class="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        class="h-full bg-accent rounded-full transition-all duration-500"
        :style="{ width: `${level}%` }"
      ></div>
    </div>
  </div>
</template>
