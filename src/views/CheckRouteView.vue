<script setup>
import { ref } from 'vue'
import BaseTable from '@/components/BaseTable.vue'
import BaseTitle from '@/components/BaseTitle.vue'

const data = [{
    no: 1,
    local: '김해시',
    author: '김해시청',
    createdAt: '2025-06-29'
  },
  {
    no: 2,
    local: '부산광역시',
    author: '부산시청',
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
      <BaseTitle title="노선 확인" />

      <BaseTable
        :columns="[
          { key: 'no', label: '번호' },
          { key: 'local', label: '지역' },
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
