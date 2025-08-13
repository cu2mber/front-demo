<script setup>
import { ref, computed, watch } from 'vue';
import BaseInput from './BaseInput.vue';

const props = defineProps({
  columns: Array, // [{ key: 'title', label: '제목' }, ...]
  items: Array, // 전체 데이터
  searchKey: String, // 검색 기준 필드 (예: 'title')
  perPage: { type: Number, default: 10 },
});

const emit = defineEmits(['row-click']);

const currentPage = ref(1);
const sortKey = ref('');
const sortOrder = ref(1); // 1: 오름차순, -1: 내림차순
const searchQuery = ref('');

// 필터링된 리스트
const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  return props.items.filter(item =>
    item[props.searchKey]?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

// 정렬된 리스트
const sortedItems = computed(() => {
  if (!sortKey.value) return filteredItems.value;
  return [...filteredItems.value].sort((a, b) => {
    const aVal = a[sortKey.value];
    const bVal = b[sortKey.value];
    return aVal > bVal ? sortOrder.value : aVal < bVal ? -sortOrder.value : 0;
  });
});

// 현재 페이지의 데이터
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.perPage;
  return sortedItems.value.slice(start, start + props.perPage);
});

function sortBy(key) {
  if (sortKey.value === key) {
    sortOrder.value *= -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
}
</script>

<template>
  <div>
    <!-- 검색 -->
    <div class="mx-auto mb-8 flex w-full max-w-2xl items-center justify-center gap-2">
      <BaseInput
        v-model="searchQuery"
        type="text"
        placeholder="검색어를 입력하세요"
        class="flex-1"
      />
      <button
        type="button"
        class="h-[48px] rounded-xl bg-mainNavy-800 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-mainNavy-900 focus:outline-none focus:ring-4 focus:ring-mainNavy-300"
      >
        검색
      </button>
    </div>

    <!-- 테이블 -->
    <table class="w-full table-auto border-b border-t border-gray-200 text-center">
      <thead>
        <tr class="bg-gray-100">
          <th
            v-for="col in columns"
            :key="col.key"
            @click="sortBy(col.key)"
            class="cursor-pointer select-none px-4 py-2"
          >
            {{ col.label }}
            <span v-if="sortKey === col.key">
              {{ sortOrder === 1 ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in paginatedItems"
          :key="item.id || item.no"
          @click="$emit('row-click', item.no)"
          class="cursor-pointer hover:bg-gray-50"
        >
          <td v-for="col in columns" :key="col.key" class="px-4 py-2">
            {{ item[col.key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 페이지네이션 -->
    <div class="mt-4 flex justify-center space-x-2">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="rounded border px-3 py-1 disabled:opacity-50"
      >
        이전
      </button>
      <span class="px-3 py-1">{{ currentPage }}</span>
      <button
        @click="currentPage++"
        :disabled="currentPage * perPage >= sortedItems.length"
        class="rounded border px-3 py-1 disabled:opacity-50"
      >
        다음
      </button>
    </div>
  </div>
</template>
