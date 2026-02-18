<script setup lang="ts">
import type { SocialLink } from '@/@types';
import StatusIndicator from './ui/StatusIndicator.vue';

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/muassab',
    icon: 'lucide:github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexandre-muassab-46607b216/',
    icon: 'lucide:linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:alexandremuassab@gmail.com',
    icon: 'lucide:mail'
  }
]

const countCareerYears = () => {
  const startAt = new Date('2015-01-01');
  const today = new Date();

  const diffYears = Math.floor(today.getFullYear() - startAt.getFullYear());

  if (
    today.getMonth() < startAt.getMonth() ||
    (today.getMonth() === startAt.getMonth() && today.getDate() < startAt.getDate())
  ) {
    return diffYears - 1;
  }

  return diffYears;
}

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Avatar -->
      <div class="mb-8 animate-fade-in-up opacity-0" style="animation-delay: 100ms">
        <StatusIndicator :offset="[12, 22]">
          <img
            src="https://github.com/muassab.png"
            alt="Alexandre Tiriba"
            class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent object-cover"
          />
        </StatusIndicator>
      </div>

      <!-- Name -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0" style="animation-delay: 200ms">
        <span class="text-text-primary">Alexandre</span>
        <span class="text-accent"> Tiriba</span>
      </h1>

      <!-- Title -->
      <p class="text-xl md:text-2xl text-text-secondary mb-6 font-mono animate-fade-in-up opacity-0" style="animation-delay: 300ms">
        Desenvolvedor Full Stack Web
      </p>

      <!-- Location -->
      <p class="text-text-secondary mb-8 flex items-center justify-center gap-2 animate-fade-in-up opacity-0" style="animation-delay: 400ms">
        <span class="i-lucide:map-pin text-accent">
          
        </span>
        Salvador, Bahia - Brasil
      </p>

      <!-- Bio -->
      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style="animation-delay: 500ms">
        Apaixonado por programação, sempre voltado às tendências de tecnologias da web.
        <span class="text-accent font-semibold">+{{ countCareerYears() }} anos de experiência</span> modernizando e criando soluções digitais.
      </p>

      <!-- Social Links -->
      <div class="flex justify-center gap-4 mb-10 animate-fade-in-up opacity-0" style="animation-delay: 600ms">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 flex items-center justify-center rounded-lg border border-border bg-bg-card hover:border-accent hover:text-accent transition-all duration-300"
          :title="link.name"
        >
          <span :class="'i-' + link.icon" class="text-xl"></span>
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up opacity-0" style="animation-delay: 700ms">
        <button @click="scrollToContact" class="btn-solid text-lg">
          Entre em Contato
        </button>

        <a
          href="https://docs.google.com/document/d/18agvxTwLvp0AT2z2eaZ3mXKg8xOyBeUS/edit?usp=sharing&ouid=118260953596725361814&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg flex items-center justify-center gap-2 hover:text-white"
        >
          <span>Currículo</span>
          <span class="i-lucide:square-arrow-out-up-right"></span>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <span class="i-lucide:chevron-down text-2xl text-text-secondary"></span>
    </div>
  </section>
</template>
