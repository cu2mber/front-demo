<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseTitle from '@/components/BaseTitle.vue';
import SearchBar from '@/components/SearchBar.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue';
import Pagination from '@/components/Pagination.vue';
import Swal from 'sweetalert2';

const router = useRouter();

const data = [
  {
    no: 1,
    title: '보령 머드축제',
    address: '보령시',
    departDate: '2025-01-01',
    participant: 24,
    createdAt: '2025-06-29',
  },
  {
    no: 2,
    title: '보령 머드축제',
    address: '보령시',
    departDate: '2025-01-02',
    participant: 25,
    createdAt: '2025-06-29',
  },
  {
    no: 3,
    title: '보령 머드축제',
    address: '보령시',
    departDate: '2025-01-03',
    participant: 28,
    createdAt: '2025-06-29',
  },
  {
    no: 4,
    title: '보령 머드축제',
    address: '보령시',
    departDate: '2025-01-05',
    participant: 20,
    createdAt: '2025-06-29',
  },
];

const mainTitle = data[0]?.title ?? '';
const subTitle = data[0]?.address ?? '';
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

function handleEditClick(item) {
  router.push(`/gov/recruits/${item.no}/edit`);
}

function handleDeleteClick(item) {
  Swal.fire({
    title: `${item.title}\n 삭제하시겠습니까?`,
    text: '삭제하면 다시 복구할 수 없습니다.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '네',
    cancelButtonText: '아니요',
    confirmButtonColor: '#009EE3',
    cancelButtonColor: '#C2C2C2',
  }).then(result => {
    if (result.isConfirmed) {
      // 삭제 동작 수행
      datas.value = datas.value.filter(i => i.no !== item.no);
      // 필요하면 페이지 재조정 로직 추가
    }
  });
}

function handleRowClick(no) {
  router.push({ path: `${router.currentRoute.value.path}/${no}` });
}

function handleDeleteAll() {
  Swal.fire({
    title: '전체 행사를 삭제하시겠습니까?',
    text: '삭제하면 다시 복구할 수 없습니다.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '네',
    cancelButtonText: '아니요',
    confirmButtonColor: '#009EE3',
    cancelButtonColor: '#C2C2C2',
  }).then(result => {
    if (result.isConfirmed) {
      datas.value = [];
      currentPage.value = 1; // 초기화
    }
  });
}
</script>
<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle :title="mainTitle" :sub-title="subTitle" />
    <SearchBar v-model="searchQuery" @search="onSearch" />
    <BaseTable
      :columns="[
        { key: 'no', label: '번호' },
        { key: 'departDate', label: '출발일' },
        { key: 'participant', label: '신청인원' },
      ]"
      :items="paginatedItems"
      :sort-key="sortKey"
      :sort-order="sortOrder"
      :show-edit="true"
      :show-delete="true"
      @sort-change="handleSortChange"
      @edit-click="handleEditClick"
      @delete-click="handleDeleteClick"
      @row-click="handleRowClick"
    >
      <template #header>
        <th class="px-4 py-2">비고</th>
      </template>
      <template #cell="{ item }">
        <td class="px-4 py-2">
          <BaseButton size="sm" variant="secondary" @click="handleRowClick(item.no)">
            자세히 보기
          </BaseButton>
        </td>
      </template>
    </BaseTable>
    <div class="mt-2 flex justify-end">
      <BaseButton variant="secondary" @click="handleDeleteAll">전체 삭제</BaseButton>
    </div>

    <Pagination
      class="mt-4 justify-center"
      :current-page="currentPage"
      :total-items="sortedItems.length"
      :per-page="perPage"
      @update:currentPage="currentPage = $event"
    />
  </div>
</template>
