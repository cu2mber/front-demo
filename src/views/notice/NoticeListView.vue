<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseTable from '@/components/BaseTable.vue'
import BaseTitle from '@/components/BaseTitle.vue';

const router = useRouter();

function handleRowClick(no){
  router.push(`/notices/${no}`)
}

const data = [{
    no: 1,
    title: '오이소 이용방법',
    author: '관리자',
    createdAt: '2025-06-29'
  },
  {
    no: 2,
    title: '환불신청 방법',
    author: '관리자',
    createdAt: '2025-06-29'
  }
]
const datas = ref(data)
const searchQuery = ref('')

function handleSearch() {
  console.log('검색어:', searchQuery.value)
  // 🔍 실제 검색 요청 처리
}
</script>
<template>
    <div class="w-full max-w-4xl px-4 py-8">
      <BaseTitle title="공지사항" />
      <BaseTable
        :columns="[
          { key: 'no', label: '번호' },
          { key: 'title', label: '제목' },
          { key: 'author', label: '작성자' },
          { key: 'createdAt', label: '작성일' }
        ]"
        :items="datas"
        searchKey="title"
        :perPage="5"
        @row-click="handleRowClick"
      />
      </div>
</template>
