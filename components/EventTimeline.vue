<template>
  <div class="relative py-8 top-8">
    <div class="absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
    <div class="relative space-y-8">
      <TimelineItem 
        v-if="event.c4p"
        :date="event.c4p.startDate"
        :end-date="event.c4p.endDate"
        title="Call for Papers"
        :active="isDateRangeActive(event.c4p.startDate, event.c4p.endDate)"
      >
        <template #description>
          <a :href="event.c4p.link" 
             class="text-primary-600 hover:text-primary-700 underline">
            Envie sua proposta →
          </a>
        </template>
      </TimelineItem>

      <TimelineItem 
        v-if="event.tickets"
        :date="event.tickets.startDate"
        :end-date="event.tickets.endDate"
        title="Ticket Sales"
        :active="isDateRangeActive(event.tickets.startDate, event.tickets.endDate)"
      >
        <template #description>
          <p class="mb-2">{{ formatPrice(event.tickets.price) }}</p>
          <a :href="event.tickets.link" 
             class="text-primary-600 hover:text-primary-700 underline">
            Ingressos →
          </a>
        </template>
      </TimelineItem>

      <TimelineItem 
        :date="event.startDate"
        :end-date="event.endDate"
        :title="event.name"
        :active="isDateRangeActive(event.startDate, event.endDate)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechEvent } from '~/types/event'

const props = defineProps<{
  event: TechEvent
}>()

const isDateRangeActive = (start: string, end: string) => {
  const now = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)
  return now >= startDate && now <= endDate
}

function formatPrice(price: number) {
  if (!price) return 'Free event'
  return `Price: ${price}`
}
</script>
