<script setup lang="ts">
import type { Skill } from '@/@types'
import SectionTitle from './ui/SectionTitle.vue'
import SkillBar from './ui/SkillBar.vue'

const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js', icon: 'lucide:component', level: 99, category: 'frontend' },
  { name: 'TypeScript', icon: 'lucide:file-code', level: 98, category: 'frontend' },
  { name: 'JavaScript', icon: 'lucide:braces', level: 99, category: 'frontend' },
  { name: 'HTML5', icon: 'lucide:code', level: 95, category: 'frontend' },
  { name: 'CSS3', icon: 'lucide:palette', level: 87, category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'lucide:server', level: 97, category: 'backend' },
  { name: 'Bun.js', icon: 'lucide:zap', level: 95, category: 'backend' },
  { name: 'Elysia.js', icon: 'lucide:feather', level: 98, category: 'backend' },
  { name: 'Laravel', icon: 'lucide:candy', level: 87, category: 'backend' },
  { name: 'Golang', icon: 'lucide:code', level: 87, category: 'backend' },

  // Database
  { name: 'MariaDB', icon: 'lucide:database', level: 88, category: 'database' },
  { name: 'MySQL', icon: 'lucide:database', level: 90, category: 'database' },
  { name: 'MongoDB', icon: 'lucide:database', level: 85, category: 'database' },
  { name: 'PostgreSQL', icon: 'lucide:database', level: 85, category: 'database' },

  // Tools
  { name: 'Git', icon: 'lucide:git-branch', level: 95, category: 'tools' },
  { name: 'Docker', icon: 'lucide:container', level: 98, category: 'tools' },
  { name: 'Linux', icon: 'lucide:terminal', level: 90, category: 'tools' },
  { name: 'CI/CD', icon: 'lucide:workflow', level: 90, category: 'tools' }
]

const categories = [
  { key: 'frontend', label: 'Frontend', icon: 'lucide:monitor' },
  { key: 'backend', label: 'Backend', icon: 'lucide:server' },
  { key: 'database', label: 'Bancos de Dados', icon: 'lucide:database' },
  { key: 'tools', label: 'Ferramentas', icon: 'lucide:wrench' }
]

const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category)
}
</script>

<template>
  <section id="skills" class="py-20 px-6 bg-primary">
    <div class="max-w-6xl mx-auto">
      <SectionTitle description="Tecnologias que domino e utilizo diariamente para criar soluções web robustas e escaláveis.">
        Stack <span class='text-accent'>Técnica</span>
      </SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="category in categories"
          :key="category.key"
          class="card hover:border-accent transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <span :class="'i-' + category.icon" class="text-2xl text-accent"></span>
            <h3 class="text-xl font-bold text-text-primary">{{ category.label }}</h3>
          </div>

          <div class="space-y-4">
            <SkillBar
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
              :level="skill.level"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
