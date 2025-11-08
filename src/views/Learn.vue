<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('learn.title') }}
        </h1>
        <p class="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ $t('learn.description') }}
        </p>
        <div class="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto border border-blue-200">
          <svg class="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-700 mb-4">{{ $t('learn.placeholder') }}</p>
          <p class="text-sm text-gray-600">
            You can customize this section by continuing to prompt with specific lesson content you'd like to add.
          </p>
        </div>
        
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Planned Lessons</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">Git Basics</h3>
              <p class="text-gray-600 text-sm">init, add, commit, push, pull</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">GitHub Workflows</h3>
              <p class="text-gray-600 text-sm">Fork, PR, MR, issue tracking</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">Git Flow</h3>
              <p class="text-gray-600 text-sm">Feature, develop, release, hotfix</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">GitLab Workflows</h3>
              <p class="text-gray-600 text-sm">Similar to GitHub with CI/CD</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">SVN Basics</h3>
              <p class="text-gray-600 text-sm">Subversion fundamentals</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-2">CI/CD Integration</h3>
              <p class="text-gray-600 text-sm">GitHub Actions, GitLab CI</p>
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
