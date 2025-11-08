<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 pb-28 sm:pt-32 sm:pb-40">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
      <div class="absolute inset-0 overflow-hidden -z-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Free Git Learning Platform
          </span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {{ $t('home.title') }}
        </h1>
        
        <p class="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ $t('home.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <RouterLink
            to="/learn"
            class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            {{ $t('home.cta') }}
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RouterLink>
          <RouterLink
            to="/practice"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            {{ $t('home.pricing.started') }}
          </RouterLink>
        </div>

        <div class="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <div class="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
              <p class="text-gray-400 font-mono text-sm">Interactive Terminal Simulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GitMaster?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to become a Git expert
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 01-1.447.894l-4-2a1 1 0 00-.894 0l-4 2A1 1 0 012 10V6a2 2 0 012-2h12a2 2 0 012 2v4a1 1 0 001 1H3a1 1 0 01-1-1V4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('home.features.interactive') }}</h3>
            <p class="text-gray-600">{{ $t('home.features.interactiveDesc') }}</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.5A2 2 0 003.5 3.5v13a2 2 0 002 2h9a2 2 0 002-2V6.5l-6-5zM10 7a1 1 0 110-2 1 1 0 010 2zm-2 6a1 1 0 112 0 1 1 0 01-2 0zm2-4a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('home.features.practice') }}</h3>
            <p class="text-gray-600">{{ $t('home.features.practiceDesc') }}</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('home.features.test') }}</h3>
            <p class="text-gray-600">{{ $t('home.features.testDesc') }}</p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 100 2 1 1 0 01-1 1H3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1h-1a1 1 0 100 2 2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 9a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('home.features.progress') }}</h3>
            <p class="text-gray-600">{{ $t('home.features.progressDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Sections Preview -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Ways to Learn
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Learn Card -->
          <RouterLink
            to="/learn"
            class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div class="h-40 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded"></div>
                <div class="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded"></div>
              </div>
              <svg class="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.5A2 2 0 003.5 3.5v13a2 2 0 002 2h9a2 2 0 002-2V6.5l-6-5zM8 11a1 1 0 100 2h4a1 1 0 100-2H8z"></path>
              </svg>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {{ $t('home.sections.learn.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.sections.learn.description') }}
              </p>
              <div class="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all gap-1">
                Start Learning
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </RouterLink>

          <!-- Practice Card -->
          <RouterLink
            to="/practice"
            class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
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
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {{ $t('home.sections.practice.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.sections.practice.description') }}
              </p>
              <div class="inline-flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all gap-1">
                Start Practicing
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </RouterLink>

          <!-- Test Card -->
          <RouterLink
            to="/test"
            class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div class="h-40 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded"></div>
                <div class="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded"></div>
              </div>
              <svg class="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 5.945a3.066 3.066 0 01-3.03 3.58 3.066 3.066 0 002.77 1.745 3.066 3.066 0 00.26-5.325zM9 12a3 3 0 11-6 0 3 3 0 016 0zm5 0a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {{ $t('home.sections.test.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.sections.test.description') }}
              </p>
              <div class="inline-flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all gap-1">
                Take a Quiz
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('home.pricing.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <!-- Basic Plan -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ $t('home.pricing.basic') }}
              </h3>
              <p class="text-gray-600 mb-6">{{ $t('home.pricing.basicDesc') }}</p>
              <div class="text-4xl font-bold text-gray-900 mb-6">
                {{ $t('home.pricing.free') }}
              </div>
              <button class="w-full py-3 px-6 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors mb-8">
                {{ $t('home.pricing.started') }}
              </button>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">{{ $t('home.pricing.basicFeature1') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">{{ $t('home.pricing.basicFeature2') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">{{ $t('home.pricing.basicFeature3') }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pro Plan -->
          <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl overflow-hidden shadow-lg relative">
            <div class="absolute top-4 right-4">
              <span class="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full">
                Popular
              </span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-2">
                {{ $t('home.pricing.pro') }}
              </h3>
              <p class="text-blue-100 mb-6">{{ $t('home.pricing.proDesc') }}</p>
              <div class="text-4xl font-bold text-white mb-2">$9.99</div>
              <p class="text-blue-100 mb-6">/month</p>
              <button class="w-full py-3 px-6 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors mb-8">
                {{ $t('home.pricing.upgrade') }}
              </button>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-white">{{ $t('home.pricing.proFeature1') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-white">{{ $t('home.pricing.proFeature2') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-white">{{ $t('home.pricing.proFeature3') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-white">{{ $t('home.pricing.proFeature4') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {{ $t('home.cta2') }}
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Join thousands of developers learning version control systems
        </p>
        <RouterLink
          to="/learn"
          class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          {{ $t('home.ctaButton') }}
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

useI18n()
</script>
