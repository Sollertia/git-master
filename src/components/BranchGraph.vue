<template>
  <div class="w-full">
    <svg width="100%" height="300" viewBox="0 0 500 300" class="border border-gray-200 rounded-lg bg-gray-50">
      <!-- Main branch (master/main) -->
      <line x1="50" y1="150" x2="450" y2="150" stroke="#3b82f6" stroke-width="3" />
      
      <!-- Feature branch -->
      <line x1="150" y1="150" x2="150" y2="100" stroke="#10b981" stroke-width="2" />
      <line x1="150" y1="100" x2="300" y2="100" stroke="#10b981" stroke-width="2" />
      <line x1="300" y1="100" x2="300" y2="150" stroke="#10b981" stroke-width="2" />
      
      <!-- Commits on main -->
      <circle cx="50" cy="150" r="6" fill="#3b82f6" />
      <circle cx="150" cy="150" r="6" fill="#3b82f6" />
      <circle cx="300" cy="150" r="6" fill="#3b82f6" />
      <circle cx="450" cy="150" r="6" fill="#3b82f6" />
      
      <!-- Commits on feature -->
      <circle cx="150" cy="100" r="5" fill="#10b981" />
      <circle cx="225" cy="100" r="5" fill="#10b981" />
      <circle cx="300" cy="100" r="5" fill="#10b981" />
      
      <!-- Labels -->
      <text x="50" y="175" font-size="12" fill="#6b7280" text-anchor="middle">main</text>
      <text x="150" y="70" font-size="12" fill="#059669" text-anchor="middle">feature</text>
      <text x="450" y="175" font-size="12" fill="#6b7280" text-anchor="middle">merged</text>
    </svg>
    
    <div class="mt-6 grid grid-cols-2 gap-4">
      <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 class="font-semibold text-blue-900 mb-2">main</h4>
        <p class="text-sm text-blue-700">Primary development branch</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 class="font-semibold text-green-900 mb-2">feature</h4>
        <p class="text-sm text-green-700">Feature branch for new work</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>()
</script>
