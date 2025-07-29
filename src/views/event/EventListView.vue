<script setup>
import BaseTitle from '@/components/BaseTitle.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const selectedCategory = ref('전체')
const router = useRouter()

function goToList(no){
  router.push(`/events/${no}`)
}

const categories = ['전체', '문학', '체육', '교육', '경영혁신', '컴퓨터', '도서', '예술', '건강']

const events = ref([
  {
    no: 1,
    category: '경제경영',
    title: '소상공인엑스포 IN 예산',
    description:
      '충청남도 예산군 예산시장 장터 앞 주차장에서 2025년 6월 28일부터 29일까지 열리는 소상공인 축제입니다.',
    period: '2025.06.28 ~ 2025.06.29',
    location: '충청남도 예산군',
    contact: '',
    image: '/images/expo.jpg',
  },
  {
    no: 2,
    category: '경제경영',
    title: '공주 유구 색동수국정원 꽃 축제',
    description:
      '공주 유구 색동수국정원에서 열리는 수국축제로, 다양한 포토존 및 공연, 가족 프로그램이 진행됩니다.',
    period: '2025.06.27 ~ 2025.06.29',
    location: '충청남도 공주시',
    contact: '041-840-8900',
    image: '/images/hydrangea.jpg',
  },


])
const filteredEvents = computed(() => {
  if (selectedCategory.value === '전체') return events.value
  return events.value.filter((e) => e.category === selectedCategory.value)
})

</script>


<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <BaseTitle title="행사"/>
    <div class="flex flex-wrap gap-3 mb-8 border-b pb-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'text-sm px-4 py-2 transition',
          selectedCategory === category
            ? 'border-b border-blue-400'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-b'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- 행사 리스트 -->
    <div class="space-y-10">
      <div
        v-for="event in filteredEvents"
        :key="event.no"
        class="flex flex-col sm:flex-row gap-6 border-b pb-6 cursor-pointer"
        @click="goToList(event.no)"
      >
        <img
          :src="event.image"
          alt="event"
          class="w-full sm:w-48 h-36 object-cover rounded-md border"
        />
        <div class="flex-1">
          <h2 class="text-lg font-semibold text-gray-900 mb-1">{{ event.title }}</h2>
          <p class="text-sm text-gray-700 mb-2 line-clamp-2">{{ event.description }}</p>
          <div class="text-sm text-gray-600 space-y-1">
            <p><span class="font-medium">📅 기간:</span> {{ event.period }}</p>
            <p><span class="font-medium">📍 장소:</span> {{ event.location }}</p>
            <p v-if="event.contact"><span class="font-medium">📞 문의:</span> {{ event.contact }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
