<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('pricing.title') }}
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
        <!-- Free Plan -->
        <div class="bg-white rounded-xl overflow-hidden shadow-md border-2 border-gray-200">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              {{ $t('pricing.plans.free.name') }}
            </h3>
            <p class="text-gray-600 mb-6">{{ $t('pricing.plans.free.description') }}</p>
            <div class="text-5xl font-bold text-gray-900 mb-2">
              ${{ $t('pricing.plans.free.price') }}
            </div>
            <p class="text-gray-600 mb-6">{{ $t('pricing.plans.free.priceDesc') }}</p>
            <button class="w-full py-3 px-6 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors mb-8">
              {{ $t('pricing.plans.free.cta') }}
            </button>
            <ul class="space-y-4">
              <li v-for="(feature, index) in $t('pricing.plans.free.features')" :key="index" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pro Plan -->
        <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl overflow-hidden shadow-lg relative">
          <div class="absolute top-4 right-4">
            <span class="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full">
              {{ $t('pricing.plans.pro.recommended') }}
            </span>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ $t('pricing.plans.pro.name') }}
            </h3>
            <p class="text-blue-100 mb-6">{{ $t('pricing.plans.pro.description') }}</p>
            <div class="text-5xl font-bold text-white mb-2">
              ${{ $t('pricing.plans.pro.price') }}
            </div>
            <p class="text-blue-100 mb-6">{{ $t('pricing.plans.pro.priceDesc') }}</p>
            <button class="w-full py-3 px-6 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors mb-8">
              {{ $t('pricing.plans.pro.cta') }}
            </button>
            <ul class="space-y-4">
              <li v-for="(feature, index) in $t('pricing.plans.pro.features')" :key="index" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Comparison Table -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">
          {{ $t('pricing.comparison.title') }}
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-gray-300">
                <th class="text-left py-4 px-6 font-semibold text-gray-900">{{ $t('pricing.comparison.features.lessons') }}</th>
                <th class="text-center py-4 px-6 font-semibold text-gray-900">Free</th>
                <th class="text-center py-4 px-6 font-semibold text-blue-600">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 text-gray-700">{{ $t('pricing.comparison.features.lessons') }}</td>
                <td class="text-center py-4 px-6">
                  <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-6">
                  <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 text-gray-700">{{ $t('pricing.comparison.features.practiceScenarios') }}</td>
                <td class="text-center py-4 px-6 text-gray-400">—</td>
                <td class="text-center py-4 px-6">
                  <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 text-gray-700">{{ $t('pricing.comparison.features.terminalSimulator') }}</td>
                <td class="text-center py-4 px-6 text-gray-400">—</td>
                <td class="text-center py-4 px-6">
                  <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 text-gray-700">{{ $t('pricing.comparison.features.progressTracking') }}</td>
                <td class="text-center py-4 px-6 text-gray-400">—</td>
                <td class="text-center py-4 px-6">
                  <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">
          {{ $t('pricing.faq.title') }}
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">{{ $t('pricing.faq.q1') }}</h3>
            <p class="text-gray-600">{{ $t('pricing.faq.a1') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">{{ $t('pricing.faq.q2') }}</h3>
            <p class="text-gray-600">{{ $t('pricing.faq.a2') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">{{ $t('pricing.faq.q3') }}</h3>
            <p class="text-gray-600">{{ $t('pricing.faq.a3') }}</p>
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
