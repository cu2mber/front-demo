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

const detail = ref(data);

const route = useRoute();
const router = useRouter();

function goToBack() {
  router.go(-1);
}

const title = ref('');
const isFree = ref(false);
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
    <BaseTitle :title="isEditMode ? '행사 수정' : '행사 등록'" />

    <BaseFormField id="name" label="행사이름" showBorder>
      <BaseInput id="name" type="text" v-model="name" placeholder="행사 이름을 입력하세요." />
    </BaseFormField>

    <BaseFormField id="price" label="요금" showBorder>
      <BaseInput
        id="price"
        type="number"
        v-model.number="price"
        placeholder="요금을 입력하세요."
        :disabled="isFree"
      />
      <template #after>
        <BaseCheckbox v-model="isFree" label="무료" />
      </template>
    </BaseFormField>

    <BaseFormField id="host" label="주최/주최기관" showBorder>
      <BaseInput
        id="host"
        type="text"
        v-model="name"
        placeholder="주최 혹은 주최기관을 입력하세요."
      />
    </BaseFormField>

    <BaseFormField id="contact" label="문의 연락처" showBorder>
      <BaseInput id="contact" type="text" v-model="name" placeholder="문의 연락처를 입력하세요." />
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
