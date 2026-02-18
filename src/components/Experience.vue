<script setup lang="ts">
import SectionTitle from './ui/SectionTitle.vue'

interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: 'SESAB (FESF)',
    role: 'Desenvolvedor Full Stack PHP Junior',
    period: '2024 - Presente',
    description: 'Desenvolvimento de aplicações web escaláveis, integração com APIs de terceiros, otimização de performance e implementação de CI/CD.',
    technologies: ['Vue.js', 'Laravel', 'OracleDB', 'Docker'],
    current: true
  },
  {
    company: 'Flame.out',
    role: 'Desenvolvedor Backend Senior',
    period: '2022 - 2024',
    description: 'Desenvolvimento de APIs REST escaláveis de alta carga, integração complexa com múltiplos bancos de dados, implementação de pipelines CI/CD robustos e otimização de armazenamento abrupto de dados.',
    technologies: ['Node.js', 'Nest.js', 'Typescript', 'Docker', 'AWS', 'RedisDB', 'MongoDB', 'PostgreSQL', 'Prisma']
  },
  {
    company: 'BrodWar',
    role: 'Desenvolvedor Backend Pleno',
    period: '2022',
    description: 'Desenvolvimento de plugins de alto desempenho, arquitetando e otimizando sistemas para lidar com demandas intensivas de processamento.',
    technologies: ['Java', 'Spring Boot']
  },
  {
    company: 'Free Lancer',
    role: 'Desenvolvedor Backend Pleno',
    period: '2016 - 2021',
    description: 'Desenvolvimento de APIs REST, integração com bancos de dados e implementação de pipelines de CI/CD.',
    technologies: ['Node.js', 'JavaScript', 'Typescript', 'Docker', 'AWS']
  }
]
</script>

<template>
  <section id="experience" class="py-20 px-6 bg-primary">
    <div class="max-w-4xl mx-auto">
      <SectionTitle description="Minha trajetória profissional e contribuições ao longo dos anos.">
        Experiência <span class='text-accent'>Profissional</span>
      </SectionTitle>

      <div class="space-y-8">
        <div
          v-for="exp in experiences"
          :key="exp.company"
          class="card hover:border-accent transition-all duration-300"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-xl font-bold text-text-primary">{{ exp.role }}</h3>
                <span
                  v-if="exp.current"
                  class="px-2 py-1 text-xs font-bold bg-accent/20 text-accent rounded-full"
                >
                  Atual
                </span>
              </div>
              <p class="text-accent font-medium">{{ exp.company }}</p>
            </div>
            <span class="text-text-secondary font-mono text-sm whitespace-nowrap">{{ exp.period }}</span>
          </div>

          <p class="text-text-secondary mb-4">{{ exp.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="px-3 py-1 text-xs font-mono bg-secondary text-accent rounded-full border border-border"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
