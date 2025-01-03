<template>
  <NuxtLayout>
  <div>
    <h1 class="text-3xl font-bold mb-8">Events in {{ year }}</h1>
    <EventsGrid :events="yearEvents || []" />
  </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const year = route.params.year

const { data: yearEvents } = await useAsyncData(`events-${year}`, () => 
  queryContent('events', year)
    .find()
)
</script>
