<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseFormField from '@/components/BaseFormField.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import BaseButton from '@/components/BaseButton.vue';
import Editor from '@/components/Editor.vue';

const data = {
  no: 1,
  title: '오이소 이용방법',
  author: '관리자',
  content: '알아서 잘! 이용하면 됩니다 ㅎㅎ',
  createdAt: '2025-06-29',
};

const route = useRoute();
const router = useRouter();

function goToBack() {
  router.go(-1);
}

const title = ref('');
const pinTitle = ref(false);
const content = ref('');

const isEditMode = computed(() => !!route.params.id);

function submitForm() {
  if (isEditMode.value) {
    console.log('수정 - 제목:', title.value);
    console.log('수정 - 고정:', pinTitle.value);
    console.log('수정 - 본문:', content.value);
  } else {
    console.log('등록 - 제목:', title.value);
    console.log('등록 - 고정:', pinTitle.value);
    console.log('등록 - 본문:', content.value);
  }
}

onMounted(() => {
  if (isEditMode.value) {
    const id = route.query.id;
    // 데이터 불러오는 로직 추가

    title.value = data.title;
    pinTitle.value = true;
    content.value = data.content;
  }
});
</script>

<template>
  <div class="mx-auto space-y-6 px-4">
    <BaseTitle :title="isEditMode ? '공지사항 수정' : '공지사항 등록'" />

    <BaseFormField id="title" label="제목" showBorder>
      <BaseInput id="title" type="text" v-model="title" placeholder="제목을 입력하세요." />
      <template #after>
        <BaseCheckbox v-model="pinTitle" label="고정" />
      </template>
    </BaseFormField>

    <BaseFormField id="content" label="본문" showBorder>
      <Editor v-model="content" />
    </BaseFormField>

    <div class="mt-6 flex justify-center gap-4">
      <BaseButton @click="submitForm" variant="blue">
        {{ isEditMode ? '수정' : '등록' }}
      </BaseButton>
      <BaseButton variant="secondary" @click="goToBack()">뒤로가기</BaseButton>
    </div>
  </div>
</template>
