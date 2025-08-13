<script setup>
import { ref, onMounted } from 'vue';

const slides = [
  '/images/carousel/carousel-1.png',
  '/images/carousel/carousel-2.png',
  '/images/carousel/carousel-3.png',
];

const currentIndex = ref(0);
const total = slides.length;

function next() {
  currentIndex.value = (currentIndex.value + 1) % total;
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + total) % total;
}

function goTo(index) {
  currentIndex.value = index;
}

onMounted(() => {
  setInterval(() => {
    next();
  }, 5000);
});
</script>

<template>
  <div class="relative mx-auto h-[400px] w-full max-w-6xl overflow-hidden rounded-xl">
    <!-- 이미지 -->
    <img
      v-for="(slide, index) in slides"
      :key="index"
      :src="slide"
      alt="carousel"
      class="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
      :class="index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'"
    />

    <!-- 인디케이터 -->
    <div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goTo(index)"
        class="h-3 w-3 rounded-full"
        :class="index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'"
      ></button>
    </div>

    <!-- 이전 버튼 -->
    <button
      @click="prev"
      class="absolute left-0 top-0 z-20 flex h-full items-center justify-center px-4 text-white"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- 다음 버튼 -->
    <button
      @click="next"
      class="absolute right-0 top-0 z-20 flex h-full items-center justify-center px-4 text-white"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
