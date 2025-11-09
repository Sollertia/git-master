<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RouterLink to="/learn" class="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ $t('common.previous') }}
      </RouterLink>

      <header class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ currentLesson?.title || 'Lesson' }}</h1>
        <p class="text-lg text-gray-600 mb-6">{{ currentLesson?.description }}</p>
        
        <div class="flex flex-wrap gap-6 mb-8">
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-gray-700">{{ $t('learn.difficulty') }}:</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{{ currentLesson?.level || 'Beginner' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-gray-700">{{ $t('learn.estTime') }}:</span>
            <span class="text-sm text-gray-600">{{ currentLesson?.estMinutes || 30 }} {{ $t('common.minutes') }}</span>
          </div>
        </div>

        <ProgressBar :current="completedSteps" :total="totalSteps" />
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-3">
          <div class="space-y-12">
            <StepCard 
              v-for="(step, index) in currentLesson?.steps || []"
              :key="index"
              :step="step"
              :stepNumber="index + 1"
              :isCompleted="completedSteps > index"
              @complete="completeStep(index)"
            />
          </div>

          <div class="mt-12 flex gap-4">
            <button 
              @click="markAllComplete"
              class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ $t('learn.markComplete') }}
            </button>
            <RouterLink
              :to="`/practice`"
              class="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-center"
            >
              {{ $t('learn.tryInPractice') }}
            </RouterLink>
          </div>
        </div>

        <aside class="lg:col-span-1">
          <div class="sticky top-20 bg-gray-50 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 mb-4">{{ $t('learn.tags') }}</h3>
            <div class="space-y-2">
              <div v-for="tag in currentLesson?.tags" :key="tag" class="inline-block">
                <span class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full mr-2 mb-2">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProgressBar from '@/components/ProgressBar.vue'
import StepCard from '@/components/StepCard.vue'

const route = useRoute()
const { t } = useI18n()

const lessons = [
  {
    slug: 'git-basics',
    title: 'Git Basics',
    description: 'Learn fundamental Git concepts',
    level: 'Beginner',
    estMinutes: 30,
    tags: ['init', 'add', 'commit', 'push', 'pull'],
    steps: [
      {
        heading: 'What is Git?',
        body: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
      },
      {
        heading: 'Initialize a Repository',
        body: 'Learn how to create a new Git repository using `git init` command.',
      },
      {
        heading: 'Staging Changes',
        body: 'Understand the staging area and how to use `git add` to prepare changes for commit.',
      },
    ],
  },
]

const currentLesson = ref<any>(null)
const completedSteps = ref(0)

const totalSteps = computed(() => currentLesson.value?.steps?.length || 0)

onMounted(() => {
  const slug = route.params.slug as string
  currentLesson.value = lessons.find(l => l.slug === slug)
})

const completeStep = (index: number) => {
  if (completedSteps.value === index) {
    completedSteps.value++
  }
}

const markAllComplete = () => {
  completedSteps.value = totalSteps.value
}
</script>
