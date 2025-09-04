<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseTable from '@/components/BaseTable.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import SearchBar from '@/components/SearchBar.vue';
import Pagination from '@/components/Pagination.vue'; // 페이징 컴포넌트 추가

const router = useRouter();

const data = [
  {
    no: 1,
    title: '[김해시 모집] 보령 머드축제',
    author: '김해시청',
    createdAt: '2025-06-29',
  },
  {
    no: 2,
    title: '[부산시 남구 모집] 보령 머드축제',
    author: '부산시 남구청',
    createdAt: '2025-06-29',
  },
];
const datas = ref(data);

const searchQuery = ref('');
const currentPage = ref(1);
const perPage = 5;
const sortKey = ref('');
const sortOrder = ref(1);

const filteredItems = computed(() => {
  if (!searchQuery.value) return datas.value;
  return datas.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

const sortedItems = computed(() => {
  if (!sortKey.value) return filteredItems.value;
  return [...filteredItems.value].sort((a, b) => {
    const aVal = a[sortKey.value];
    const bVal = b[sortKey.value];
    return aVal > bVal ? sortOrder.value : aVal < bVal ? -sortOrder.value : 0;
  });
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return sortedItems.value.slice(start, start + perPage);
});

function onSearch() {
  currentPage.value = 1;
}

function handleSortChange({ key, order }) {
  sortKey.value = key;
  sortOrder.value = order;
}

function handleRowClick(no) {
  router.push(`/recruit/${no}`);
}
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle title="모집 게시판" />
    <SearchBar v-model="searchQuery" @search="onSearch" />
    <BaseTable
      :columns="[
        { key: 'no', label: '번호' },
        { key: 'title', label: '제목' },
        { key: 'author', label: '작성자' },
        { key: 'createdAt', label: '작성일' },
      ]"
      :items="paginatedItems"
      :sort-key="sortKey"
      :sort-order="sortOrder"
      @row-click="handleRowClick"
      @sort-change="handleSortChange"
    />
    <!-- <Pagination
      :current-page="currentPage"
      :total-items="sortedItems.length"
      :per-page="perPage"
      @update:currentPage="currentPage = $event"
    /> -->
  </div>
</template>
