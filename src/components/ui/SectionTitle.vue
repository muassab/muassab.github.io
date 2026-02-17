<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="text-center mb-16">
    <h2 class="section-title">
      <slot> {{ title || 'Título' }} </slot>
    </h2>
    <p v-if="description" class="text-text-secondary max-w-2xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>
