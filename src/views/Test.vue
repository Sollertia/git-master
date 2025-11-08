<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('test.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ $t('test.description') }}
        </p>
        <div class="bg-green-50 rounded-lg p-8 max-w-2xl mx-auto border border-green-200">
          <svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-700 mb-4">{{ $t('test.placeholder') }}</p>
          <p class="text-sm text-gray-600">
            You can customize this section by continuing to prompt with specific quizzes you'd like to add.
          </p>
        </div>

        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Assessment Types</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10 2a1 1 0 11-2 0 1 1 0 012 0zm-4 2a1 1 0 11-2 0 1 1 0 012 0zm4 2a1 1 0 11-2 0 1 1 0 012 0zm2-4a1 1 0 11-2 0 1 1 0 012 0zm-4 2a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Multiple Choice</h3>
              <p class="text-gray-600 text-sm">Test your understanding with MCQs</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.5A2 2 0 003.5 3.5v13a2 2 0 002 2h9a2 2 0 002-2V6.5l-6-5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Scenario-based</h3>
              <p class="text-gray-600 text-sm">Real-world Git scenarios</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 01-1.447.894l-4-2a1 1 0 00-.894 0l-4 2A1 1 0 012 10V6a2 2 0 012-2h12a2 2 0 012 2v4a1 1 0 001 1H3a1 1 0 01-1-1V4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Code Analysis</h3>
              <p class="text-gray-600 text-sm">Analyze and debug Git issues</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Certification Tests</h3>
              <p class="text-gray-600 text-sm">Earn certifications on completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

useI18n()
</script>
