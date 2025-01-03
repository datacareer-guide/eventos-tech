<template>
  <div :class="[
    'rounded-lg shadow-lg overflow-hidden transition-all duration-200 relative hover:ring-2 hover:ring-primary-500',
    isPastEvent ? 'opacity-60 bg-gray-100 dark:bg-gray-900' : 'bg-white dark:bg-gray-800 hover:shadow-xl'
  ]">
    <NuxtLink :to="`${event._path}`" class="block h-full">
      <img :src="imageUrl" :alt="event.name" class="w-full h-48 object-cover">
      <div class="p-4 pb-16">
        <h3 class="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">{{ event.name }}</h3>
         <div class="flex items-center gap-2 ">
                  <CalendarIcon class="w-5 h-5"/>
                  <span>{{ formatDateRange(event.startDate, event.endDate) }}</span>
                </div>
        
                <div class="flex items-center gap-2">
                  <MapPinIcon class="w-5 h-5"/>
                  <span>{{ event.city }} - {{ event.location }}</span>
                </div>
        <div class="mt-2 flex gap-2">
          <span v-if="isPastEvent" 
                class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-s">
            Evento passado
          </span>
          <span v-if="event.isFree" 
                class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-s">
            Gratuito
          </span>
          <span v-if="hasActiveC4P" 
                class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-s">
            CFP Aberto
          </span>
          <span v-if="hasAvailableTickets" 
                class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-s">
            Ingressos disponíveis
          </span>
        </div>
        <div class="absolute bottom-4 right-4 text-primary-600 dark:text-primary-400 hover:underline text-lg">
          Ver detalhes →
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { TechEvent } from '~/types/event'
import {formatDateRange} from '~/utils/date'
import { 
  CalendarIcon, MapPinIcon, ArrowRightIcon, TicketIcon, 
  DocumentTextIcon, GlobeAltIcon, ChatBubbleLeftIcon, 
  CodeBracketIcon 
} from '@heroicons/vue/24/outline'
const props = defineProps<{
  event: TechEvent
}>()

const imageUrl = computed(() => {
  const imagePath = props.event.image
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  return imagePath.startsWith('/') ? imagePath : `/images/${imagePath}`
})

const hasActiveC4P = computed(() => {
  if (!props.event.c4p) return false
  const now = new Date()
  const endDate = new Date(props.event.c4p.endDate)
  return now <= endDate
})

const hasAvailableTickets = computed(() => {
  return props.event.tickets?.available ?? false
})

const isPastEvent = computed(() => {
  const now = new Date()
  const endDate = new Date(props.event.endDate)
  return endDate < now
})

</script>

<style scoped>
.card {
  transition: background-color 0.3s, color 0.3s;
}
.chip {
  display: inline-block;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}
</style>
