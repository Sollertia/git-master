<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('admin.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ $t('admin.description') }}
        </p>
        <div class="bg-orange-50 rounded-lg p-8 max-w-2xl mx-auto border border-orange-200">
          <svg class="w-12 h-12 text-orange-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-700 mb-4">{{ $t('admin.placeholder') }}</p>
          <p class="text-sm text-gray-600">
            You can customize this section by continuing to prompt with admin features you'd like to add.
          </p>
        </div>

        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Admin Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Upload Tutorials</h3>
              <p class="text-gray-600 text-sm">Add and update lesson content</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Multi-language Content</h3>
              <p class="text-gray-600 text-sm">Manage Korean and English versions</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 17v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">User Analytics</h3>
              <p class="text-gray-600 text-sm">Track user progress and engagement</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Paywall Management</h3>
              <p class="text-gray-600 text-sm">Control premium content access</p>
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
