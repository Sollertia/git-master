<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('admin.title') }}
        </h1>
        <p class="text-lg text-gray-600">
          {{ $t('admin.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        <button
          @click="activeTab = 'lessons'"
          :class="[
            'p-6 rounded-lg text-left font-semibold transition-all',
            activeTab === 'lessons'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-900 border border-gray-200 hover:border-blue-300'
          ]"
        >
          <div class="text-2xl mb-2">📚</div>
          {{ $t('admin.createLesson') }}
        </button>
        <button
          @click="activeTab = 'scenarios'"
          :class="[
            'p-6 rounded-lg text-left font-semibold transition-all',
            activeTab === 'scenarios'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-900 border border-gray-200 hover:border-purple-300'
          ]"
        >
          <div class="text-2xl mb-2">⚙️</div>
          {{ $t('admin.createScenario') }}
        </button>
        <button
          @click="activeTab = 'quizzes'"
          :class="[
            'p-6 rounded-lg text-left font-semibold transition-all',
            activeTab === 'quizzes'
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-white text-gray-900 border border-gray-200 hover:border-green-300'
          ]"
        >
          <div class="text-2xl mb-2">❓</div>
          {{ $t('admin.createQuiz') }}
        </button>
        <button
          @click="activeTab = 'glossary'"
          :class="[
            'p-6 rounded-lg text-left font-semibold transition-all',
            activeTab === 'glossary'
              ? 'bg-orange-600 text-white shadow-lg'
              : 'bg-white text-gray-900 border border-gray-200 hover:border-orange-300'
          ]"
        >
          <div class="text-2xl mb-2">📖</div>
          {{ $t('admin.createTerm') }}
        </button>
      </div>

      <!-- Lessons Tab -->
      <div v-if="activeTab === 'lessons'" class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('admin.createLesson') }}</h2>
        <form @submit.prevent class="space-y-6 max-w-2xl">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.lessonForm.title') }}</label>
            <input type="text" placeholder="e.g., Git Basics" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.lessonForm.slug') }}</label>
            <input type="text" placeholder="e.g., git-basics" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.lessonForm.level') }}</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
              <option>{{ $t('common.beginner') }}</option>
              <option>{{ $t('common.intermediate') }}</option>
              <option>{{ $t('common.advanced') }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.lessonForm.estMinutes') }}</label>
            <input type="number" placeholder="30" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.multilingualContent') }}</label>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.englishVersion') }}</p>
                <textarea rows="4" placeholder="English content..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.koreanVersion') }}</p>
                <textarea rows="4" placeholder="Korean content..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
              </div>
            </div>
          </div>
          <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            {{ $t('admin.saveChanges') }}
          </button>
        </form>
      </div>

      <!-- Scenarios Tab -->
      <div v-if="activeTab === 'scenarios'" class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('admin.createScenario') }}</h2>
        <form @submit.prevent class="space-y-6 max-w-2xl">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.scenarioForm.title') }}</label>
            <input type="text" placeholder="e.g., Initialize a Repository" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.scenarioForm.difficulty') }}</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600">
              <option>{{ $t('common.beginner') }}</option>
              <option>{{ $t('common.intermediate') }}</option>
              <option>{{ $t('common.advanced') }}</option>
            </select>
          </div>
          <div>
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" class="w-5 h-5 rounded border-gray-300" />
              <span class="text-sm font-semibold text-gray-700">{{ $t('admin.scenarioForm.free') }}</span>
            </label>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.multilingualContent') }}</label>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.englishVersion') }}</p>
                <textarea rows="4" placeholder="English prompt..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"></textarea>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.koreanVersion') }}</p>
                <textarea rows="4" placeholder="Korean prompt..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"></textarea>
              </div>
            </div>
          </div>
          <button class="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            {{ $t('admin.saveChanges') }}
          </button>
        </form>
      </div>

      <!-- Quizzes Tab -->
      <div v-if="activeTab === 'quizzes'" class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('admin.createQuiz') }}</h2>
        <form @submit.prevent class="space-y-6 max-w-2xl">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.quizForm.title') }}</label>
            <input type="text" placeholder="e.g., Git Basics Quiz" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.quizForm.topic') }}</label>
            <input type="text" placeholder="e.g., Git Basics" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.quizForm.questionType') }}</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600">
              <option>Multiple Choice</option>
              <option>True/False</option>
              <option>Fill in the Blank</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.multilingualContent') }}</label>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.englishVersion') }}</p>
                <textarea rows="4" placeholder="English questions..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"></textarea>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.koreanVersion') }}</p>
                <textarea rows="4" placeholder="Korean questions..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"></textarea>
              </div>
            </div>
          </div>
          <button class="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            {{ $t('admin.saveChanges') }}
          </button>
        </form>
      </div>

      <!-- Glossary Tab -->
      <div v-if="activeTab === 'glossary'" class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('admin.createTerm') }}</h2>
        <form @submit.prevent class="space-y-6 max-w-2xl">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('glossary.title') }}</label>
            <input type="text" placeholder="e.g., Repository" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('admin.multilingualContent') }}</label>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.englishVersion') }}</p>
                <textarea rows="4" placeholder="English definition..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"></textarea>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">{{ $t('admin.koreanVersion') }}</p>
                <textarea rows="4" placeholder="Korean definition..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"></textarea>
              </div>
            </div>
          </div>
          <button class="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
            {{ $t('admin.saveChanges') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

useI18n()

const activeTab = ref('lessons')
</script>
