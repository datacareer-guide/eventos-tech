<template>
  <header class="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Eventos Tech
        </NuxtLink>
        <button @click="toggleMenu" class="md:hidden text-text-primary-light dark:text-text-primary-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div class="hidden md:flex md:items-center gap-6">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.to" 
            :to="item.to"
            class="text-xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"
          >
            {{ item.text }}
          </NuxtLink>
          <ColorModeSwitch />
        </div>
      </div>
      <div v-if="isMenuOpen" class="flex flex-col md:hidden mt-4 gap-4">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.to" 
          :to="item.to"
          class="text-xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"
        >
          {{ item.text }}
        </NuxtLink>
        <ColorModeSwitch />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuItems = [
  { text: 'Eventos', to: '/' },
  { text: 'Submeter evento', to: 'https://github.com/datacareer-guide/eventos-tech/issues/new' },
  { text: 'Sobre', to: '/sobre' }
]

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
