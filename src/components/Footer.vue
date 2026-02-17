<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-6 bg-primary border-t border-border">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="text-accent font-bold font-mono">AT</span>
          <span class="text-text-secondary">|</span>
          <span class="text-text-secondary text-sm">Alexandre Tiriba</span>
        </div>

        <p class="text-text-secondary text-sm text-center">
          © {{ currentYear }} Todos os direitos reservados.
        </p>

        <div class="flex items-center gap-4">
          <a
            href="https://github.com/ElBigodon"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary hover:text-accent transition-colors"
            title="GitHub"
          >
            <span class="i-lucide:github text-xl"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-muassab-46607b216/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <span class="i-lucide:linkedin text-xl"></span>
          </a>
          <a
            href="mailto:alexandremuassab@gmail.com"
            class="text-text-secondary hover:text-accent transition-colors"
            title="Email"
          >
            <span class="i-lucide:mail text-xl"></span>
          </a>
        </div>
      </div>

      <p class="text-center text-text-secondary text-xs mt-6">
        Feito com <span class="text-accent">♥</span> usando Vue.js + TypeScript + UnoCSS
      </p>
    </div>
  </footer>
</template>
