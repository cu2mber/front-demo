<script setup>
import { ref, onMounted } from 'vue'

const slides = [
  '/images/carousel/carousel-1.png',
  '/images/carousel/carousel-2.png',
  '/images/carousel/carousel-3.png'
]

const currentIndex = ref(0)
const total = slides.length

function next() {
  currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

function goTo(index) {
  currentIndex.value = index
}

onMounted(() => {
  setInterval(() => {
    next()
  }, 5000)
})
</script>

<template>
  <div class="relative w-full max-w-6xl mx-auto h-[400px] overflow-hidden rounded-xl">
    <!-- 이미지 -->
    <img
      v-for="(slide, index) in slides"
      :key="index"
      :src="slide"
      alt="carousel"
      class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    />

    <!-- 인디케이터 -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goTo(index)"
        class="w-3 h-3 rounded-full"
        :class="index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'"
      ></button>
    </div>

    <!-- 이전 버튼 -->
    <button
      @click="prev"
      class="absolute top-0 left-0 h-full px-4 flex items-center justify-center text-white z-20"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- 다음 버튼 -->
    <button
      @click="next"
      class="absolute top-0 right-0 h-full px-4 flex items-center justify-center text-white z-20"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
