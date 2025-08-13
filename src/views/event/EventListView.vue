<script setup>
import BaseTitle from '@/components/BaseTitle.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const selectedCategory = ref('전체');
const router = useRouter();

function goToList(no) {
  router.push(`/events/${no}`);
}

const categories = [
  '전체',
  '문화예술',
  '전통역사',
  '주민화합',
  '자연생태',
  '지역특산물',
  '컴퓨터',
  '체육',
  '건강',
];

const events = ref([
  {
    no: 1,
    category: '문화예술',
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
    category: '자연생태',
    title: '공주 유구 색동수국정원 꽃 축제',
    description:
      '공주 유구 색동수국정원에서 열리는 수국축제로, 다양한 포토존 및 공연, 가족 프로그램이 진행됩니다.',
    period: '2025.06.27 ~ 2025.06.29',
    location: '충청남도 공주시',
    contact: '041-840-8900',
    image: '/images/hydrangea.jpg',
  },
]);
const filteredEvents = computed(() => {
  if (selectedCategory.value === '전체') return events.value;
  return events.value.filter(e => e.category === selectedCategory.value);
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-8">
    <BaseTitle title="행사" />
    <div class="mb-8 flex flex-wrap gap-3 border-b pb-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 text-sm transition',
          selectedCategory === category
            ? 'border-b border-blue-400'
            : 'border-gray-300 bg-white text-gray-700 hover:border-b hover:bg-gray-100',
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
        class="flex cursor-pointer flex-col gap-6 border-b pb-6 sm:flex-row"
        @click="goToList(event.no)"
      >
        <img
          :src="event.image"
          alt="event"
          class="h-36 w-full rounded-md border object-cover sm:w-48"
        />
        <div class="flex-1">
          <h2 class="mb-1 text-lg font-semibold text-gray-900">{{ event.title }}</h2>
          <p class="mb-2 line-clamp-2 text-sm text-gray-700">{{ event.description }}</p>
          <div class="space-y-1 text-sm text-gray-600">
            <p><span class="font-medium">📅 기간:</span> {{ event.period }}</p>
            <p><span class="font-medium">📍 장소:</span> {{ event.location }}</p>
            <p v-if="event.contact">
              <span class="font-medium">📞 문의:</span> {{ event.contact }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
