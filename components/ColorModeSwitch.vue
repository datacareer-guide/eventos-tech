<template>
  <button
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    @click="toggleColorMode"
  >
    <SunIcon v-if="colorMode.value === 'dark'" class="w-5 h-5 text-gray-400" />
    <MoonIcon v-else class="w-5 h-5 text-gray-600" />
  </button>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
