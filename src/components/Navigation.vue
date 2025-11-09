<template>
  <nav class="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center gap-8">
          <RouterLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="font-bold text-xl text-gray-900 hidden sm:inline">GitMaster</span>
          </RouterLink>
          
          <div class="hidden md:flex gap-6">
            <RouterLink
              to="/learn"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': isActive('/learn') }"
            >
              {{ $t('nav.learn') }}
            </RouterLink>
            <RouterLink
              to="/practice"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': isActive('/practice') }"
            >
              {{ $t('nav.practice') }}
            </RouterLink>
            <RouterLink
              to="/test"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': isActive('/test') }"
            >
              {{ $t('nav.test') }}
            </RouterLink>
            <RouterLink
              to="/glossary"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': isActive('/glossary') }"
            >
              {{ $t('nav.glossary') }}
            </RouterLink>
            <RouterLink
              to="/pricing"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': isActive('/pricing') }"
            >
              {{ $t('nav.pricing') }}
            </RouterLink>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <AuthButton />

          <div class="flex bg-gray-100 rounded-lg p-1">
            <button
              @click="setLanguage('en')"
              :class="[
                'px-3 py-1 rounded transition-all font-medium text-sm',
                locale === 'en'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              English
            </button>
            <button
              @click="setLanguage('ko')"
              :class="[
                'px-3 py-1 rounded transition-all font-medium text-sm',
                locale === 'ko'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              한국어
            </button>
          </div>

          <button
            @click="toggleMobileMenu"
            class="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200 bg-gray-50">
        <RouterLink
          to="/learn"
          class="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
        >
          {{ $t('nav.learn') }}
        </RouterLink>
        <RouterLink
          to="/practice"
          class="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
        >
          {{ $t('nav.practice') }}
        </RouterLink>
        <RouterLink
          to="/test"
          class="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
        >
          {{ $t('nav.test') }}
        </RouterLink>
        <RouterLink
          to="/glossary"
          class="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
        >
          {{ $t('nav.glossary') }}
        </RouterLink>
        <RouterLink
          to="/pricing"
          class="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
        >
          {{ $t('nav.pricing') }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AuthButton from '@/components/AuthButton.vue'

const router = useRouter()
const { locale } = useI18n()
const showMobileMenu = ref(false)

const isActive = (path: string) => {
  return router.currentRoute.value.path === path
}

const setLanguage = (lang: string) => {
  locale.value = lang as any
  localStorage.setItem('language', lang)
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>
