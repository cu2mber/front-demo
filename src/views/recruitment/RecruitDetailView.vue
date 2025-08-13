<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseDetail from '@/components/BaseDetail.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToList() {
  router.push('/recruits');
}

const data = {
  no: 1,
  title: '[김해시 모집] 보령 머드축제',
  author: '김해시청',
  content: '김해에서 출발해 보령 머드축제로 가는 인원 모집합니다!',
  createdAt: '2025-06-29',
};

const detail = reactive(data);
// route.params.id  사용하면 될듯
</script>

<template>
  <div class="mx-auto w-full max-w-4xl">
    <BaseTitle title="모집 게시판" />
    <BaseDetail
      :title="detail.title"
      :author="detail.author"
      :createdAt="detail.createdAt"
      :content="detail.content"
    >
    </BaseDetail>

    <div class="mt-6 flex justify-center gap-4">
      <BaseButton variant="blue" @click="goToList">신청하기</BaseButton>
      <BaseButton variant="secondary" @click="goToList">목록</BaseButton>
    </div>
  </div>
</template>
