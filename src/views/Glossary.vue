<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('glossary.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ $t('glossary.subtitle') }}
        </p>

        <div class="relative max-w-xl mx-auto">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('glossary.search')"
            class="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
          <svg class="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div class="space-y-6">
        <div
          v-if="filteredTerms.length > 0"
          v-for="term in filteredTerms"
          :key="term.id"
          class="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-600"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ term.title }}</h2>
          <p class="text-gray-700 text-lg leading-relaxed">{{ term.description }}</p>
          <div v-if="term.relatedTerms" class="mt-4">
            <p class="text-sm font-semibold text-gray-600 mb-2">{{ $t('glossary.relatedTerms') }}:</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="related in term.relatedTerms" :key="related" class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                {{ related }}
              </span>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12">
          <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-600 text-lg">{{ $t('glossary.noResults') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const searchQuery = ref('')

const terms = [
  {
    id: '1',
    title: 'Repository',
    description: 'A storage location for project files and version history. Can be local or remote.',
    relatedTerms: ['Clone', 'Remote', 'Commit'],
  },
  {
    id: '2',
    title: 'Commit',
    description: 'A snapshot of changes made to files in a repository. Each commit has a unique ID and message.',
    relatedTerms: ['Push', 'Pull', 'Branch'],
  },
  {
    id: '3',
    title: 'Branch',
    description: 'A parallel line of development in a repository. Allows working on features independently.',
    relatedTerms: ['Merge', 'Checkout', 'Rebase'],
  },
  {
    id: '4',
    title: 'Merge',
    description: 'Combining changes from different branches into a single branch.',
    relatedTerms: ['Branch', 'Conflict', 'Rebase'],
  },
  {
    id: '5',
    title: 'Pull Request',
    description: 'A request to merge changes from one branch to another. Used for code review on GitHub.',
    relatedTerms: ['Merge', 'Fork', 'Review'],
  },
]

const filteredTerms = computed(() => {
  if (!searchQuery.value) return terms
  return terms.filter(term =>
    term.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    term.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
