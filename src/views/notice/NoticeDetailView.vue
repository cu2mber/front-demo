<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseDetail from '@/components/BaseDetail.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToList() {
  router.push('/notices');
}

const data = {
  no: 1,
  title: '오이소 이용방법',
  author: '관리자',
  content: '알아서 잘! 이용하면 됩니다 ㅎㅎ',
  createdAt: '2025-06-29',
};

const detail = reactive(data);
// route.params.id  사용하면 될듯
</script>

<template>
  <div class="mx-auto w-full max-w-4xl">
    <BaseTitle title="공지사항" />
    <BaseDetail
      :title="detail.title"
      :author="detail.author"
      :createdAt="detail.createdAt"
      :content="detail.content"
    >
    </BaseDetail>
    <div class="mt-6 flex justify-center">
      <BaseButton variant="blue" @click="goToList">목록</BaseButton>
    </div>
  </div>
</template>
