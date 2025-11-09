<template>
  <div class="bg-white rounded-lg border-2 p-8 transition-all" :class="isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-4">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
          :class="isCompleted ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-600'"
        >
          {{ stepNumber }}
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ step.heading }}</h3>
      </div>
      <button
        v-if="!isCompleted"
        @click="() => $emit('complete')"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
      >
        {{ $t('common.submit') }}
      </button>
      <div v-else class="flex items-center gap-2 text-green-600 font-semibold">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        {{ $t('learn.completed') }}
      </div>
    </div>
    <p class="text-gray-700 leading-relaxed">{{ step.body }}</p>
    <div v-if="step.codeBlock" class="mt-6 bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto font-mono text-sm">
      <pre>{{ step.codeBlock }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  step: {
    type: Object,
    required: true,
  },
  stepNumber: {
    type: Number,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['complete'])

useI18n()
</script>
