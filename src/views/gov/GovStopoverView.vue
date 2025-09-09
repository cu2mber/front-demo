<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseTitle from '@/components/BaseTitle.vue';
import SearchBar from '@/components/SearchBar.vue';
import BaseTable from '@/components/BaseTable.vue';
import Pagination from '@/components/Pagination.vue';
import Swal from 'sweetalert2';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const data = [
  {
    no: 1,
    name: '홈플러스',
  },
  {
    no: 2,
    name: '신세계백화점',
  },
  {
    no: 3,
    name: '김해 시청',
  },
];
const datas = ref(data);

function handleAddClick() {
  router.push('/gov/routes/create');
}

function handleEditClick(item) {
  router.push(`/gov/routes/${item.no}/edit`);
}

function handleDeleteClick(item) {
  Swal.fire({
    title: `${item.name}\n 삭제하시겠습니까?`,
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
  router.push(`/stopover/${no}`);
}
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle title="경유지 관리" />
    <div class="mb-2 flex justify-end space-x-2">
      <BaseButton variant="blue" @click="handleAddClick">경유지 추가</BaseButton>
      <BaseButton variant="blue">순서 변경</BaseButton>
    </div>
    <BaseTable
      :columns="[
        { key: 'no', label: '번호' },
        { key: 'name', label: '경유지' },
      ]"
      :items="datas"
      :show-edit="true"
      :show-delete="true"
      @edit-click="handleEditClick"
      @delete-click="handleDeleteClick"
      @row-click="handleRowClick"
    />
    <div class="mt-2 flex justify-end">
      <BaseButton variant="secondary">전체 삭제</BaseButton>
    </div>
  </div>
</template>
