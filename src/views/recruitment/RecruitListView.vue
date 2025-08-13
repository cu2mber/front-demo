<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseTable from '@/components/BaseTable.vue';
import BaseTitle from '@/components/BaseTitle.vue';

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

function handleRowClick(item) {
  router.push(`/recruits/${item.no}`);
}
</script>
<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle title="모집 게시판" />
    <BaseTable
      :columns="[
        { key: 'no', label: '번호' },
        { key: 'title', label: '제목' },
        { key: 'author', label: '작성자' },
        { key: 'createdAt', label: '작성일' },
      ]"
      :items="datas"
      searchKey="title"
      :perPage="5"
      @row-click="handleRowClick"
    />
  </div>
</template>
