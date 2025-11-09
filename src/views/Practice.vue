<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('practice.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          {{ $t('practice.subtitle') }}
        </p>

        <div class="flex gap-4 mb-8">
          <button
            @click="filterType = 'all'"
            :class="[
              'px-6 py-2 rounded-lg font-semibold transition-colors',
              filterType === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ $t('common.free') }} + {{ $t('common.pro') }}
          </button>
          <button
            @click="filterType = 'free'"
            :class="[
              'px-6 py-2 rounded-lg font-semibold transition-colors',
              filterType === 'free'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ $t('practice.free') }}
          </button>
          <button
            @click="filterType = 'locked'"
            :class="[
              'px-6 py-2 rounded-lg font-semibold transition-colors',
              filterType === 'locked'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ $t('practice.locked') }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="scenario in filteredScenarios"
          :key="scenario.id"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-purple-300 group"
          :class="{ 'opacity-75': !scenario.free }"
        >
          <div class="h-40 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded"></div>
              <div class="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded"></div>
            </div>
            <svg class="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM2 15a4 4 0 008 0v2H2v-2z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                {{ scenario.title }}
              </h3>
              <span
                v-if="!scenario.free"
                class="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold ml-2 flex-shrink-0"
              >
                {{ $t('common.pro') }}
              </span>
            </div>
            <p class="text-gray-600 mb-4 text-sm">
              {{ scenario.description }}
            </p>
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                {{ scenario.difficulty }}
              </span>
            </div>
            <div class="mb-6">
              <p class="text-xs text-gray-600 font-semibold mb-2">{{ $t('practice.skillsCovered') }}:</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in scenario.skills.slice(0, 2)" :key="skill" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {{ skill }}
                </span>
                <span v-if="scenario.skills.length > 2" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  +{{ scenario.skills.length - 2 }}
                </span>
              </div>
            </div>
            <RouterLink
              :to="`/practice/${scenario.id}`"
              class="block text-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors group-hover:shadow-lg"
              :class="{ 'opacity-50 cursor-not-allowed': !scenario.free }"
            >
              {{ scenario.free ? $t('practice.tryNow') : $t('common.subscribe_to_unlock') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

useI18n()

const filterType = ref('all')

const scenarios = [
  {
    id: '1',
    title: 'Initialize a Repository',
    description: 'Learn how to create a new Git repository',
    difficulty: 'Beginner',
    free: true,
    skills: ['git init', 'git config'],
  },
  {
    id: '2',
    title: 'Commit Changes',
    description: 'Practice committing code to a repository',
    difficulty: 'Beginner',
    free: true,
    skills: ['git add', 'git commit', 'git status'],
  },
  {
    id: '3',
    title: 'Create a Pull Request',
    description: 'Learn the GitHub PR workflow',
    difficulty: 'Intermediate',
    free: false,
    skills: ['fork', 'branch', 'pull request'],
  },
  {
    id: '4',
    title: 'Resolve a Merge Conflict',
    description: 'Handle merge conflicts effectively',
    difficulty: 'Intermediate',
    free: false,
    skills: ['merge', 'conflict resolution', 'rebase'],
  },
  {
    id: '5',
    title: 'Rebase and Force Push',
    description: 'Advanced Git techniques',
    difficulty: 'Advanced',
    free: false,
    skills: ['rebase', 'force push', 'history rewriting'],
  },
  {
    id: '6',
    title: 'Squash Commits',
    description: 'Learn how to squash commits for cleaner history',
    difficulty: 'Intermediate',
    free: true,
    skills: ['git rebase', 'interactive rebase', 'squash'],
  },
]

const filteredScenarios = computed(() => {
  if (filterType.value === 'free') return scenarios.filter(s => s.free)
  if (filterType.value === 'locked') return scenarios.filter(s => !s.free)
  return scenarios
})
</script>
