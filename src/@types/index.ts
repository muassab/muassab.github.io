export interface TimelineItem {
  year: string
  title: string
  description: string
  technologies?: string[]
}

export interface Skill {
  name: string
  icon: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
