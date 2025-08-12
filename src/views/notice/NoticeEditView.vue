<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseTitle from '@/components/BaseTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
import Editor from '@/components/Editor.vue'

const data = {
    no: 1,
    title: '오이소 이용방법',
    author: '관리자',
    content: '알아서 잘! 이용하면 됩니다 ㅎㅎ',
    createdAt: '2025-06-29'
}

const detail = ref(data)

const route = useRoute()
const router = useRouter()

function goToBack() {
  router.go(-1)
}

const title = ref('')
const pinTitle = ref(false)
const content = ref('')

const isEditMode = computed(() => !!route.params.id)

function submitForm() {
  if (isEditMode.value) {
    console.log('수정 - 제목:', title.value)
    console.log('수정 - 고정:', pinTitle.value)
    console.log('수정 - 본문:', content.value)
  } else {
    console.log('등록 - 제목:', title.value)
    console.log('등록 - 고정:', pinTitle.value)
    console.log('등록 - 본문:', content.value)
  }
}

onMounted(() => {
  if (isEditMode.value) {
    const id = route.query.id
    // 데이터 불러오는 로직 추가

    title.value = data.title
    pinTitle.value = true
    content.value = data.content
  }
})
</script>

<template>
  <div class="mx-auto space-y-6 px-4">
    <BaseTitle :title="isEditMode ? '공지사항 수정' : '공지사항 등록'" />

    <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b py-3">
      <label for="title" class="font-semibold mb-1 sm:mb-0 whitespace-nowrap">제목</label>
      <input
        id="title"
        v-model="title"
        type="text"
        placeholder="제목을 입력하세요"
        class="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label
        for="pinTitle"
        class="flex items-center space-x-1 cursor-pointer select-none mt-2 sm:mt-0 whitespace-nowrap"
      >
        <input
          id="pinTitle"
          type="checkbox"
          v-model="pinTitle"
          class="w-4 h-4"
        />
        <span>고정</span>
      </label>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-start sm:space-x-4 border-b pb-6">
      <label
        for="content"
        class="font-semibold mb-2 sm:mb-0 whitespace-nowrap"
      >
        본문
      </label>
      <Editor id="content" v-model="content" height="500px" class="flex-1" />
    </div>

    <div class="flex justify-center gap-4 mt-6">
        <BaseButton @click="submitForm" variant="blue">
          {{ isEditMode ? '수정' : '등록' }}
        </BaseButton>
      <BaseButton variant="secondary" @click="goToBack()">뒤로가기</BaseButton>
    </div>
  </div>
</template>
