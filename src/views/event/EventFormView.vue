<script setup>
import { ref, computed, watch } from 'vue';
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
  start: '2025-06-30',
  end: '2025-07-10',
  price: 30000,
  host: '김해',
  contact: '055-748-3827',
  content: '알아서 잘! 이용하면 됩니다 ㅎㅎ',
  createdAt: '2025-06-29',
};

const detail = ref(data);

const route = useRoute();
const router = useRouter();

function goToBack() {
  router.back();
}

const title = ref('');
const start = ref(null);
const end = ref(null);
const price = ref(null);
const isFree = ref(false);
const host = ref('');
const contact = ref('');
const content = ref('');

const isEditMode = computed(() => !!route.params.id);

watch(
  () => route.fullPath,
  () => {
    if (isEditMode.value) {
      // API 호출 등으로 id별 데이터 불러와야 함
      title.value = data.title;
      start.value = data.start;
      end.value = data.end;
      isFree.value = false;
      price.value = data.price;
      contact.value = data.contact;
      host.value = data.host;
      content.value = data.content;
    } else {
      title.value = '';
      isFree.value = false;
      price.value = '';
      start.value = '';
      end.value = '';
    }
  },
  { immediate: true },
);

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
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle :title="isEditMode ? '행사 수정' : '행사 등록'" />

    <BaseFormField id="title" label="행사이름" showBorder>
      <BaseInput
        id="title"
        type="text"
        v-model="title"
        placeholder="행사 이름을 입력하세요."
        ref="titleInputRef"
      />
    </BaseFormField>

    <BaseFormField id="date" label="주최기간" showBorder>
      <div class="flex w-3/5 items-center gap-2">
        <BaseInput id="start" type="date" v-model="start" class="flex-1" />
        <span class="text-gray-500">~</span>
        <BaseInput id="end" type="date" v-model="end" class="flex-1" />
      </div>
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
        v-model="host"
        placeholder="주최 혹은 주최기관을 입력하세요."
      />
    </BaseFormField>

    <BaseFormField id="contact" label="문의 연락처" showBorder>
      <BaseInput
        id="contact"
        type="text"
        v-model="contact"
        placeholder="문의 연락처를 입력하세요."
      />
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
