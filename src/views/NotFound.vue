<template>
  <div class="min-h-screen bg-white flex items-center justify-center">
    <div class="text-center px-4">
      <div class="text-6xl font-bold text-gray-900 mb-4">404</div>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist. But don't worry, you can continue prompting to add more content to this platform!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </RouterLink>
        <RouterLink
          to="/learn"
          class="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Start Learning
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
