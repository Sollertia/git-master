<template>
  <div class="bg-gray-900 rounded-lg overflow-hidden font-mono">
    <div class="bg-gray-800 px-4 py-3 flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <span class="text-gray-400 text-sm ml-4">Terminal Simulator</span>
    </div>
    <div class="p-6 min-h-64 text-gray-100">
      <div class="space-y-3">
        <div class="text-green-400">$ git init</div>
        <div class="text-gray-300 text-sm">Initialized empty Git repository in /path/to/repo/.git/</div>
        
        <div class="mt-4 text-green-400">$ git add .</div>
        
        <div class="mt-4 text-green-400">$ git commit -m "Initial commit"</div>
        <div class="text-gray-300 text-sm">[main (root-commit) a1b2c3d] Initial commit</div>
        <div class="text-gray-300 text-sm">5 files changed, 100 insertions(+)</div>
        
        <div class="mt-6 text-green-400">$ _</div>
      </div>
    </div>
    <div class="bg-gray-800 px-4 py-3 border-t border-gray-700">
      <div class="flex gap-2">
        <input
          v-model="commandInput"
          @keyup.enter="executeCommand"
          type="text"
          placeholder="Enter git command..."
          class="flex-1 bg-gray-900 text-gray-100 placeholder-gray-600 focus:outline-none text-sm"
        />
        <button
          @click="executeCommand"
          class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          {{ $t('common.submit') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const commandInput = ref('')
const { t } = useI18n()

const executeCommand = () => {
  if (commandInput.value.trim()) {
    commandInput.value = ''
  }
}
</script>
