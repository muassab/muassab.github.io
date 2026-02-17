<script setup lang="ts">
import TechTag from './TechTag.vue'

defineProps<{
  year: string
  title: string
  description: string
  technologies?: string[]
  index: number
}>()
</script>

<template>
  <div class="relative mb-12 last:mb-0">
    <!-- Year badge -->
    <div
      class="absolute left-4 md:left-1/2 w-16 h-8 bg-accent text-white text-sm font-bold flex items-center justify-center rounded-full md:-translate-x-1/2 z-10"
    >
      {{ year }}
    </div>

    <!-- Content card -->
    <div
      :class="[
        'ml-24 md:ml-0 md:w-5/12 p-6 bg-bg-card border border-border rounded-xl hover:border-accent transition-all duration-300',
        index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
      ]"
    >
      <h3 class="text-xl font-bold text-text-primary mb-2">{{ title }}</h3>
      <p class="text-text-secondary mb-4">{{ description }}</p>
      <div v-if="technologies?.length" class="flex flex-wrap gap-2">
        <TechTag v-for="tech in technologies" :key="tech" :name="tech" />
      </div>
    </div>
  </div>
</template>
