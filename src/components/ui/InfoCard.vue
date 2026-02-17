<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  value: string
  href?: string
  external?: boolean
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
  >
    <span :class="'i-' + icon" class="text-2xl text-accent"></span>
    <div>
      <p class="text-text-secondary text-sm">{{ label }}</p>
      <p class="text-text-primary group-hover:text-accent transition-colors">{{ value }}</p>
    </div>
  </component>
</template>
