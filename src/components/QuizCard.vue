<template>
  <div class="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ quiz.title }}</h3>
        <p class="text-gray-600">{{ quiz.description }}</p>
      </div>
      <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
        {{ quiz.questionCount }} {{ $t('test.question') }}
      </span>
    </div>
    
    <div class="mt-6 flex gap-3">
      <button class="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        {{ $t('common.try_now') }}
      </button>
      <button class="px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
        {{ $t('common.learn_more') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  quiz: {
    type: Object,
    required: true,
  },
})

useI18n()
</script>
