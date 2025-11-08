<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('practice.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ $t('practice.description') }}
        </p>
        <div class="bg-purple-50 rounded-lg p-8 max-w-2xl mx-auto border border-purple-200">
          <svg class="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-700 mb-4">{{ $t('practice.placeholder') }}</p>
          <p class="text-sm text-gray-600">
            You can customize this section by continuing to prompt with specific exercises you'd like to add.
          </p>
        </div>

        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Practice Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.5A2 2 0 003.5 3.5v13a2 2 0 002 2h9a2 2 0 002-2V6.5l-6-5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Interactive Terminal</h3>
              <p class="text-gray-600 text-sm">Simulate Git commands in browser</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a1 1 0 001 1h12a1 1 0 001-1V5a2 2 0 00-2-2H5zm0 2h10v7H5V5z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Visual Feedback</h3>
              <p class="text-gray-600 text-sm">See branches and merges visually</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 5.945a3.066 3.066 0 01-3.03 3.58 3.066 3.066 0 002.77 1.745 3.066 3.066 0 00.26-5.325zM9 12a3 3 0 11-6 0 3 3 0 016 0zm5 0a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Contextual Hints</h3>
              <p class="text-gray-600 text-sm">Get helpful hints on incorrect commands</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 100 2 1 1 0 01-1 1H3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1h-1a1 1 0 100 2 2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 9a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p class="text-gray-600 text-sm">Track your practice progress</p>
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
