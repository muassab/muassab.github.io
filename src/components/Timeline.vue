<script setup lang="ts">
import type { TimelineItem } from "@/@types";
import SectionTitle from "./ui/SectionTitle.vue";
import TimelineItemComponent from "./ui/TimelineItem.vue";

const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Adoção de tecnologias modernas",
    description: "Adoção de tecnologias modernas para maior performance e agilidade.",
    technologies: ["Nuxt.js", "Bun.js", "Elysia.js", "Drizzle-ORM", "Docker"],
  },
  {
    year: "2024",
    title: "Full Stack PHP",
    description:
      "Desenvolvimento de aplicação web completas com Laravel e Vue.js. Foco em agilidade e entrega de valor.",
    technologies: ["Laravel", "Vue.js", "Docker", "OracleDB"],
  },
  {
    year: "2023",
    title: "Inovação e Bun.js",
    description:
      "Exploração de novas tecnologias como Bun.js para maior performance. Implementação de soluções serverless e edge computing.",
    technologies: ["Bun.js", "TypeScript"],
  },
  {
    year: "2022",
    title: "Arquitetura e Performance",
    description:
      "Foco em arquitetura de software, microserviços e otimização de performance. Adoção de RedisDB e Docker em projeto críticos.",
    technologies: ["Node.js", "Nest.JS", "PostgreSQL", "Docker", "RedisDB"],
  },
  {
    year: "2019",
    title: "Desenvolvimento Full Stack",
    description:
      "Expansão para o backend com Node.js. Desenvolvendo APIs RESTful escaláveis e robustas.",
    technologies: ["Node.js", "Express", "RedisDB", "PostgresSQL"],
  },
  {
    year: "2016",
    title: "Especialização em backend",
    description:
      "Aprofundamento em frameworks modernos. Desenvolvimento de APIs RESTful e integração com banco de dado.",
    technologies: ["Node.js", "Express", "MariaDB"],
  },
  {
    year: "2015",
    title: "Início da Jornada",
    description: "Primeiros passos no desenvolvimento, explorando linguagens e teconologias.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
];
</script>

<template>
  <section id="timeline" class="py-20 px-6 bg-secondary">
    <div class="max-w-4xl mx-auto">
      <SectionTitle
        description="Mais de uma década de aprendizado contínuo, desafios superados e evolução constante na arte de criar para a web."
      >
        Timeline <span class="text-accent">de Experiência</span>
      </SectionTitle>

      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"
        ></div>

        <!-- Timeline items -->
        <TimelineItemComponent
          v-for="(item, index) in timelineItems"
          :key="item.year"
          :year="item.year"
          :title="item.title"
          :description="item.description"
          :technologies="item.technologies"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
