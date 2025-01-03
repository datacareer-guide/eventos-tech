<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl mb-4">{{ error.message }}</p>
      <button 
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="handleError">
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>
