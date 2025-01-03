<template>
  <NuxtLayout>
    <div v-if="page">
      <div class="py-8 bg-background-light dark:bg-background-dark">
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <ContentRenderer :value="page" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

const { data: page } = await useAsyncData('page', () => 
  queryContent('sobre').findOne()
)

// Add error handling
if (!page.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found'
  })
}
</script>

<style>
.prose {
  @apply text-text-primary-light dark:text-text-primary-dark;
}

.prose a:not(.inline-flex) {
  @apply text-primary-600 hover:text-primary-700 transition-colors duration-200 font-semibold no-underline;
}

.prose h2 {
  @apply text-text-primary-light dark:text-text-primary-dark;
}

.prose p {
  @apply text-text-secondary-light dark:text-text-secondary-dark;
}

.prose img {
  @apply rounded-lg shadow-lg;
}
</style>
