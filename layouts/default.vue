<template>
  <div class="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
    <AppHeader />
    <main class="container mx-auto px-4 flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>
