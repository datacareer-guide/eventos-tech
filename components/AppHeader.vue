<template>
  <header class="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Eventos Tech
        </NuxtLink>
        <div class="flex items-center gap-6">
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
    </nav>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  { text: 'Eventos', to: '/' },
  { text: 'Submeter evento', to: 'https://github.com/datacareer-guide/eventos-tech/issues/new' },
  { text: 'Sobre', to: '/sobre' }
]
</script>
