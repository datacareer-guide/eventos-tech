<template>
  <NuxtLayout>

    <div v-if="page">
      <!-- Hero Image Section - Full width -->
      <div class="relative h-96 -mx-4 sm:-mx-8 lg:-mx-16">
        <img :src="page.image" :alt="page.name" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div class="py-8 bg-background-light dark:bg-background-dark">
        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Main Content - Left Column -->
          <div class="lg:col-span-3 prose prose-lg dark:prose-invert max-w-none">
            <!-- Event Header -->
            <div class="mb-8 not-prose">
              <h1 class="text-4xl font-bold mb-4">{{ page.name }}</h1>
              
              <div class="flex flex-wrap gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <CalendarIcon class="w-5 h-5"/>
                  <span>{{ formatDateRange(page.startDate, page.endDate) }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <MapPinIcon class="w-5 h-5"/>
                  <span>{{ page.city }} - {{ page.location }}</span>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-8">
                <span v-if="isFreeEvent" 
                      class="px-3 py-1 bg-status-success-bg-light dark:bg-status-success-bg-dark text-status-success-text rounded-full">
                  Evento Gratuito
                </span>
                <span v-if="hasActiveC4P" 
                      class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full ">
                  CFP Aberto
                </span>
                <span v-if="hasTickets" class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                  Ingressos {{ ticketStatus }}
                </span>
              </div>
            </div>
            
            <!-- Event Details -->
            <div class="space-y-8">

              <!-- Event Description -->
              <div>
                <h2 class="text-2xl font-bold mb-4">Sobre o evento</h2>
                <ContentRenderer :value="page" />
              </div>
              <!-- Event Links -->
              <div class="border border-border-light dark:border-border-dark rounded-lg p-6 bg-surface-light dark:bg-surface-dark">
                <h2 class="text-2xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">Links</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <template v-if="page.links">
                    <a v-for="link in page.links"
                       :key="link.url"
                       :href="link.url"
                       target="_blank"
                       rel="noopener"
                       class="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                      <component :is="icons[link.icon as keyof typeof icons]" class="w-5 h-5" />
                      <span>{{ link.title }}</span>
                    </a>
                  </template>
                </div>
              </div>

              <!-- Tickets Section -->
              <div v-if="page.tickets" class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h2 class="text-2xl font-bold mb-4">Ingressos</h2>
                <dl class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Preço</dt>
                    <dd class="font-medium">{{ page.tickets.price === 0 ? 'Grátis' : page.tickets.price }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Status</dt>
                    <dd class="font-medium">{{ ticketStatus }}</dd>
                  </div>
                  <div v-if="page.tickets"> 
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Período de vendas</dt>
                    <dd class="font-medium">{{ formatDateRange(page.tickets.startDate, page.tickets.endDate) }}</dd>
                  </div>
                  <div v-if="page.tickets.couponCodes?.length">
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Cupons</dt>
                    <dd class="font-medium">{{ page.tickets.couponCodes.join(', ') }}</dd>
                  </div>
                </dl>
                <div class="flex justify-end">
                  <a v-if="hasTickets" 
                     :href="page.tickets.link" 
                     class="inline-flex items-center px-6 py-3 text-lg bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl">
                    Conseguir Ingresso
                    <ArrowRightIcon class="w-5 h-5 ml-2" />
                  </a>
                  <a v-else-if="page.tickets?.link"
                     :href="page.tickets.link"
                     class="inline-flex items-center px-6 py-3 text-lg border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold">
                    Saiba mais
                    <ArrowRightIcon class="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>

              <!-- CFP Section -->
              <div v-if="page.c4p" class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h2 class="text-2xl font-bold mb-4">Call for Papers</h2>
                <p class="mb-4">{{ page.c4p.description }}</p>
                
                <div v-if="page.c4p.requirements?.length" class="mb-4">
                  <h3 class="text-lg font-semibold mb-2">Requisitos</h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li v-for="req in page.c4p.requirements" :key="req">{{ req }}</li>
                  </ul>
                </div>

                <div v-if="page.c4p.suggestions?.length" class="mb-4">
                  <h3 class="text-lg font-semibold mb-2">Tópicos sugeridos</h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li v-for="sug in page.c4p.suggestions" :key="sug">{{ sug }}</li>
                  </ul>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                  <p class="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                    Período de submissao: {{ formatDateRange(page.c4p.startDate, page.c4p.endDate) }}
                  </p>
                  <div class="flex gap-4 whitespace-nowrap">
                    <a v-if="hasActiveC4P" 
                       :href="page.c4p.link" 
                       class="inline-flex items-center px-6 py-3 text-lg bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl">
                      Envie sua proposta
                      <ArrowRightIcon class="w-5 h-5 ml-2" />
                    </a>
                    <a v-else-if="page.c4p?.link"
                       :href="page.c4p.link"
                       class="inline-flex items-center px-6 py-3 text-lg border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold">
                      Saiba mais
                      <ArrowRightIcon class="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>


              <!-- Additional Info -->
              <div class="not-prose">
                <h2 class="text-2xl font-bold mb-4">Informações adicionais</h2>
                <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Categorias</dt>
                    <dd class="font-medium">{{ page.category?.join(', ') }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm text-gray-600 dark:text-gray-400">Submitted by</dt>
                    <dd class="font-medium">{{ page.submitter }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <!-- Timeline - Right Column -->
          <div class="lg:col-span-1">
            <div class="sticky top-4">
              <h2 class="text-xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">Event Timeline</h2>
              <EventTimeline :event="page" />
              <div class="mt-16">
                <h2 class="text-2xl font-bold mb-4">Compartilhe nas redes sociais</h2>
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { 
  CalendarIcon, MapPinIcon, ArrowRightIcon, TicketIcon, 
  DocumentTextIcon, GlobeAltIcon, ChatBubbleLeftIcon, 
  CodeBracketIcon 
} from '@heroicons/vue/24/outline'
import type { TechEvent } from '~/types/event'

import {formatDateRange} from '~/utils/date'

// Icon mapping for dynamic icon usage
const icons = {
  GlobeAltIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon
}

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { data: page } = await useAsyncData('page', () => 
  queryContent<TechEvent>(route.path)
    .findOne()
)

// Add error handling
if (!page.value) {
  throw createError({
    statusCode: 404,
    message: 'Event not found'
  })
}

const year = computed(() => {
  return route.params.slug[0]
})


const navigationItems = computed(() => [
  { text: 'Home', link: '/' },
  { text: year.value, link: `/events/${year.value}` },
  { text: page.value?.name }
])

const isFreeEvent = computed(() => {
  return page.value?.isFree === true || page.value?.tickets?.price === 0
})

const hasActiveC4P = computed(() => {
  const c4p = page.value?.c4p
  if (!c4p?.endDate || !c4p?.startDate) return false
  
  const now = new Date()
  const startDate = new Date(c4p.startDate)
  const endDate = new Date(c4p.endDate)
  
  return startDate <= now && now <= endDate
})

const hasTickets = computed(() => {
  const tickets = page.value?.tickets
  if (!tickets?.endDate || !tickets?.startDate || !tickets?.available) return false
  
  const now = new Date()
  const startDate = new Date(tickets.startDate)
  const endDate = new Date(tickets.endDate)
  
  return startDate <= now && now <= endDate && tickets.available
})

const ticketStatus = computed(() => {
  if (!page.value?.tickets) return ''
  const now = new Date()
  const startDate = new Date(page.value.tickets.startDate)
  const endDate = new Date(page.value.tickets.endDate)
  
  if (now < startDate) return 'Coming Soon'
  if (now > endDate) return 'Closed'
  if (!page.value.tickets.available) return 'Sold Out'
  return 'Available'
})

const ticketDetails = computed(() => {
  const tickets = page.value?.tickets
  if (!tickets) return ''
  
  if (tickets.price === 0 || page.value?.isFree) return 'This is a free event. '
  
  let details = `Ingressos estão disponíveis por ${tickets.price}. `
  if (tickets.couponCodes?.length) {
    details += 'Use um dos cupons para desconto!'
  }
  return details
})
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
