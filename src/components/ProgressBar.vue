<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm font-semibold text-gray-700">{{ label }}</span>
      <span class="text-sm font-semibold text-gray-700">{{ current }}/{{ total }}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        :style="{ width: `${(current / total) * 100}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})

const { t } = useI18n()
const label = t('learn.stepByStep')
</script>
