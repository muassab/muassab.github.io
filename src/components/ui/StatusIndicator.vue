<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ offset?: [bottom: number, right: number] }>()

const offset = computed(() => {
  const [bottom, right] = props.offset ?? []

  return {
    bottom: `${bottom}px`,
    right: `${right}px`
  }
});
</script>

<template>
  <div class="relative inline-block">
    <slot />

    <div 
      class="absolute"
      :style="offset"
    >
      <div class="status-green-500" />
      <div class="status-green-500 p-1.5 border-none absolute top-0 animate-ping" />
    </div>
  </div>
</template>
