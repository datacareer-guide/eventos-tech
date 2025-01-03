<template>
  <div class="flex flex-col min-h-[50vh]">
    <!-- Search and filters -->
    <div class="mb-8">
      <input v-model="search" 
             type="text" 
             placeholder="Search events..." 
             class="w-full p-2 border rounded">
      <div class="mt-4 flex gap-4">
        <select v-model="selectedCategory" class="p-2 border rounded">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <select v-model="sortBy" class="p-2 border rounded">
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </div>

    <!-- Events grid - with flex-grow to push pagination down -->
    <div class="flex-grow">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard v-for="event in paginatedEvents" 
                  :key="event.name" 
                  :event="event" />
      </div>
    </div>

    <!-- Pagination - with more top margin -->
    <div class="mt-16 py-8 flex justify-center gap-2">
      <button v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              :class="[
                'px-4 py-2 rounded',
                currentPage === page 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700'
              ]">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechEvent } from '~/types/event'

const props = defineProps<{
  events: TechEvent[]
}>()

const search = ref('')
const selectedCategory = ref('')
const sortBy = ref('date')
const currentPage = ref(1)
const itemsPerPage = 9

const categories = computed(() => {
  const cats = new Set<string>()
  props.events?.forEach(event => {
    if (event.category) {
      event.category.forEach(cat => cats.add(cat))
    }
  })
  return Array.from(cats).sort()
})

const filteredEvents = computed(() => {
  let filtered = [...props.events]
  
  if (search.value) {
    filtered = filtered.filter(event => 
      event.name.toLowerCase().includes(search.value.toLowerCase()) ||
      event.city.toLowerCase().includes(search.value.toLowerCase())
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(event => 
      event.category?.includes(selectedCategory.value)
    )
  }

  return filtered.sort((a, b) => {
    if (sortBy.value === 'date') {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    }
    return a.name.localeCompare(b.name)
  })
})

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredEvents.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => 
  Math.ceil(filteredEvents.value.length / itemsPerPage)
)
</script>
