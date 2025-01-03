<template>
  <NuxtLayout>
  <div>
    <EventsGrid :events="events || []" />
  </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { data: events } = await useAsyncData('events', () => 
  queryContent('events')
    .where({ _dir: /^\d{4}$/ })
    .find()
)
</script>

<style scoped>
/* Add Tailwind CSS classes or custom styles */
</style>
