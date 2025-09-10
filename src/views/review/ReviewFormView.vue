<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseTitle from '@/components/BaseTitle.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseFormField from '@/components/BaseFormField.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import BaseInput from '@/components/BaseInput.vue';
import Editor from '@/components/Editor.vue';

const data = {
  no: 1,
  title: '축제이름',
  author: '관리자',
  isPrivate: false,
  content: '알아서 잘! 이용하면 됩니다 ㅎㅎ',
  createdAt: '2025-06-29',
};

const route = useRoute();
const router = useRouter();

function goToBack() {
  router.back();
}

const title = ref('');
const isPrivate = ref(false);
const content = ref('');

const isEditMode = computed(() => !!route.params.id);

function submitForm() {
  if (isEditMode.value) {
    console.log('수정 - 제목:', title.value);
    console.log('수정 - 비공개:', isPrivate.value);
    console.log('수정 - 본문:', content.value);
  } else {
    console.log('등록 - 제목:', title.value);
    console.log('등록 - 비공개:', isPrivate.value);
    console.log('등록 - 본문:', content.value);
  }
}

watch(
  () => route.fullPath,
  () => {
    if (isEditMode.value) {
      // 실제 API 호출 등으로 데이터를 가져와야 함
      title.value = data.title;
      isPrivate.value = data.isPrivate;
      content.value = data.content;
    } else {
      title.value = '';
      isPrivate.value = false;
      content.value = '';
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle :title="isEditMode ? '후기 수정' : '후기 등록'" />

    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <BaseFormField id="title" label="축제이름" showBorder>
        <BaseInput v-model="title" disabled />
        <template #after>
          <BaseCheckbox v-model="isPrivate" label="비공개" />
        </template>
      </BaseFormField>

      <BaseFormField id="content" label="본문" showBorder>
        <Editor v-model="content" />
      </BaseFormField>

      <div class="mt-6 flex justify-center gap-4">
        <BaseButton @click="submitForm" variant="blue">
          {{ isEditMode ? '수정' : '등록' }}
        </BaseButton>
        <BaseButton type="button" variant="secondary" @click="goToBack"> 뒤로가기 </BaseButton>
      </div>
    </form>
  </div>
</template>
