<template>
  <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-bold hover:text-primary-600">Tech Events</NuxtLink>
        <div class="flex gap-6">
          <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
          <NuxtLink to="/archive" class="hover:text-primary-600">Past Events</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary-600">About</NuxtLink>
          <ColorMode />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>
