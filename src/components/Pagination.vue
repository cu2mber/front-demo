<script setup>
import { ref, computed } from 'vue';

const currentPage = ref(1);
const totalPages = 10; // 수정해야 함

function goToPage(page) {
  // 페이지 범위 내로 제한
  if (page < 1) currentPage.value = 1;
  else if (page > totalPages) currentPage.value = totalPages;
  else currentPage.value = page;
}

function decreasePageBy10() {
  goToPage(currentPage.value - 10);
}

function increasePageBy10() {
  goToPage(currentPage.value + 10);
}

const pageList = computed(() => {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
});
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
      :disabled="currentPage <= 10"
      @click="decreasePageBy10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      </svg>
    </button>

    <button
      v-for="page in pageList"
      :key="page"
      class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
      :class="
        page === currentPage ? 'bg-mainNavy-900 text-white' : 'text-gray-600 hover:bg-gray-100'
      "
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
      :disabled="currentPage + 10 > totalPages"
      @click="increasePageBy10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>
</template>
