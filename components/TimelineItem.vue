<template>
  <div class="flex items-center gap-4 text-text-primary-light dark:text-text-primary-dark">
    <div class="w-1/2 text-right">
      <time class="text-sm text-gray-600">{{ formatDateRange(date, endDate) }}</time>
    </div>
    <div :class="[
      'w-4 h-4 rounded-full relative z-10',
      active ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
    ]"></div>
    <div class="w-1/2">
      <h3 class="font-medium">{{ title }}</h3>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {formatDateRange} from '~/utils/date'

defineProps<{
  date: string
  endDate: string
  title: string
  active: boolean
}>()

</script>
