<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RouterLink to="/practice" class="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ $t('common.previous') }}
      </RouterLink>

      <header class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ currentScenario?.title || 'Scenario' }}</h1>
        <p class="text-lg text-gray-600 mb-6">{{ currentScenario?.description }}</p>
        <div class="flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">{{ $t('practice.difficulty') }}:</span>
          <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">{{ currentScenario?.difficulty }}</span>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('practice.terminal') }}</h2>
            <TerminalSimulator />
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('practice.branches') }}</h2>
            <BranchGraph />
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg p-6 shadow-sm sticky top-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('practice.steps') }}</h2>
            <div class="space-y-4">
              <div 
                v-for="(step, index) in currentScenario?.steps || []"
                :key="index"
                @click="currentStepIndex = index"
                class="p-4 rounded-lg border-2 cursor-pointer transition-all"
                :class="currentStepIndex === index ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-gray-300'"
              >
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('practice.steps') }} {{ index + 1 }}</h3>
                <p class="text-sm text-gray-600">{{ step.prompt }}</p>
                <div class="mt-3 flex gap-2">
                  <button class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    {{ $t('practice.hint') }}
                  </button>
                  <button class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    {{ $t('practice.solution') }}
                  </button>
                </div>
              </div>
            </div>

            <button class="w-full mt-6 px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              {{ $t('practice.validate') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TerminalSimulator from '@/components/TerminalSimulator.vue'
import BranchGraph from '@/components/BranchGraph.vue'

const route = useRoute()
const { t } = useI18n()

const scenarios = [
  {
    id: '1',
    title: 'Initialize a Repository',
    description: 'Learn how to create a new Git repository',
    difficulty: 'Beginner',
    steps: [
      { prompt: 'Initialize a new Git repository', hint: 'Use git init command', solution: 'git init' },
      { prompt: 'Check the status', hint: 'Use git status', solution: 'git status' },
    ],
  },
]

const currentScenario = ref<any>(null)
const currentStepIndex = ref(0)

onMounted(() => {
  const id = route.params.id as string
  currentScenario.value = scenarios.find(s => s.id === id)
})
</script>
