<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('learn.title') }}
        </h1>
        <p class="text-lg text-gray-600">
          {{ $t('learn.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="lesson in lessons"
          :key="lesson.slug"
          :to="`/learn/${lesson.slug}`"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 group"
        >
          <div class="h-40 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded"></div>
              <div class="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded"></div>
            </div>
            <svg class="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.5A2 2 0 003.5 3.5v13a2 2 0 002 2h9a2 2 0 002-2V6.5l-6-5zM8 11a1 1 0 100 2h4a1 1 0 100-2H8z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {{ lesson.title }}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              {{ lesson.description }}
            </p>
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                {{ lesson.level }}
              </span>
              <span class="text-xs text-gray-500">{{ lesson.estMinutes }} min</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in lesson.tags.slice(0, 2)" :key="tag" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {{ tag }}
              </span>
              <span v-if="lesson.tags.length > 2" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                +{{ lesson.tags.length - 2 }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

useI18n()

const lessons = [
  {
    slug: 'git-basics',
    title: 'Git Basics',
    description: 'Learn fundamental Git concepts and commands',
    level: 'Beginner',
    estMinutes: 30,
    tags: ['init', 'add', 'commit', 'push', 'pull'],
  },
  {
    slug: 'github-workflows',
    title: 'GitHub Workflows',
    description: 'Master GitHub collaboration features',
    level: 'Intermediate',
    estMinutes: 45,
    tags: ['fork', 'PR', 'issues', 'actions'],
  },
  {
    slug: 'gitlab-workflows',
    title: 'GitLab Workflows',
    description: 'GitLab best practices and CI/CD',
    level: 'Intermediate',
    estMinutes: 45,
    tags: ['MR', 'CI/CD', 'runners'],
  },
  {
    slug: 'git-flow',
    title: 'Git Flow',
    description: 'Advanced branching strategy for teams',
    level: 'Advanced',
    estMinutes: 60,
    tags: ['feature', 'develop', 'release', 'hotfix'],
  },
  {
    slug: 'svn-basics',
    title: 'SVN Basics',
    description: 'Subversion fundamentals',
    level: 'Beginner',
    estMinutes: 40,
    tags: ['checkout', 'commit', 'update'],
  },
  {
    slug: 'cicd-integration',
    title: 'CI/CD Integration',
    description: 'Automate with GitHub Actions & GitLab CI',
    level: 'Advanced',
    estMinutes: 90,
    tags: ['GitHub Actions', 'GitLab CI', 'automation'],
  },
]
</script>
