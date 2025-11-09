<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('test.title') }}
        </h1>
        <p class="text-lg text-gray-600">
          {{ $t('test.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <QuizCard
          v-for="quiz in quizzes"
          :key="quiz.id"
          :quiz="quiz"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import QuizCard from '@/components/QuizCard.vue'

useI18n()

const quizzes = [
  {
    id: '1',
    title: 'Git Basics Quiz',
    description: 'Test your knowledge of Git fundamentals',
    questionCount: 10,
    difficulty: 'Beginner',
  },
  {
    id: '2',
    title: 'GitHub Workflows Quiz',
    description: 'Learn GitHub-specific features and workflows',
    questionCount: 15,
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    title: 'Git Flow Quiz',
    description: 'Advanced branching strategy assessment',
    questionCount: 12,
    difficulty: 'Advanced',
  },
  {
    id: '4',
    title: 'Merge Conflicts Quiz',
    description: 'Master conflict resolution techniques',
    questionCount: 8,
    difficulty: 'Intermediate',
  },
  {
    id: '5',
    title: 'SVN vs Git Quiz',
    description: 'Compare version control systems',
    questionCount: 10,
    difficulty: 'Beginner',
  },
  {
    id: '6',
    title: 'CI/CD Integration Quiz',
    description: 'Automated workflows with Git',
    questionCount: 14,
    difficulty: 'Advanced',
  },
]
</script>
