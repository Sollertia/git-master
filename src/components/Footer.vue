<template>
  <footer class="bg-gray-900 text-gray-300 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">G</span>
            </div>
            <span class="font-bold text-white">GitMaster</span>
          </div>
          <p class="text-sm">Master version control systems with interactive tutorials and hands-on practice.</p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Platform</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/learn" class="hover:text-blue-400 transition-colors">{{ $t('nav.learn') }}</RouterLink></li>
            <li><RouterLink to="/practice" class="hover:text-blue-400 transition-colors">{{ $t('nav.practice') }}</RouterLink></li>
            <li><RouterLink to="/test" class="hover:text-blue-400 transition-colors">{{ $t('nav.test') }}</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Topics</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Git Basics</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">GitHub Workflows</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Git Flow</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">SVN</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-400">© 2024 GitMaster. All rights reserved.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
          <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps<{}>()

useI18n()
</script>
