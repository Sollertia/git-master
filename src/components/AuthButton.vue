<template>
  <div class="relative">
    <button
      @click="showDropdown = !showDropdown"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
      :class="isLoggedIn ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-blue-600 text-white hover:bg-blue-700'"
    >
      <svg v-if="!isLoggedIn" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m15-4V7a3 3 0 00-3-3H6a3 3 0 00-3 3v4m15-4h-3.5a2.5 2.5 0 00-2.5 2.5v3.5" />
      </svg>
      <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
      <span class="font-semibold">{{ isLoggedIn ? $t('auth.myProfile') : $t('auth.signIn') }}</span>
    </button>

    <div
      v-if="showDropdown && isLoggedIn"
      @click="showDropdown = false"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <div class="px-4 py-3 border-b border-gray-200">
        <p class="text-sm text-gray-600">{{ $t('auth.loggedInAs') }}</p>
        <p class="font-semibold text-gray-900">John Doe</p>
      </div>
      <RouterLink
        to="/profile"
        class="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
      >
        {{ $t('auth.myProfile') }}
      </RouterLink>
      <RouterLink
        to="/progress"
        class="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
      >
        {{ $t('auth.myProgress') }}
      </RouterLink>
      <button
        @click="logout"
        class="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-semibold border-t border-gray-200"
      >
        {{ $t('auth.signOut') }}
      </button>
    </div>

    <div
      v-if="showDropdown && !isLoggedIn"
      @click="showDropdown = false"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <button
        @click="signInWithGoogle"
        class="w-full px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-semibold flex items-center gap-2"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        {{ $t('auth.signInWithGoogle') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const isLoggedIn = ref(false)
const showDropdown = ref(false)

const { t } = useI18n()

const signInWithGoogle = () => {
  console.log('Sign in with Google')
  isLoggedIn.value = true
  showDropdown.value = false
}

const logout = () => {
  isLoggedIn.value = false
  showDropdown.value = false
}
</script>
