<script setup lang="ts">
import Hero from './components/Hero.vue'
import Timeline from './components/Timeline.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-primary">
    <Hero />
    <main>
      <Timeline />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
