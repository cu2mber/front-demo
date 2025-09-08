<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseFormField from '@/components/BaseFormField.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const data = {
  no: 1,
  name: '김해 시청',
};

const route = useRoute();
const router = useRouter();
const name = ref('');

function goToBack() {
  router.back();
}

const isEditMode = computed(() => !!route.params.id);

watch(
  () => route.fullPath,
  () => {
    if (isEditMode.value) {
      // API 호출 등으로 id별 데이터 불러와야 함
      name.value = data.name;
    } else {
      name.value = '';
    }
  },
  { immediate: true },
);

function submitForm() {
  if (isEditMode.value) {
    console.log('경유지 수정 - 제목:', name.value);
  } else {
    console.log('경유지 등록 - 제목:', name.value);
  }
}
</script>
<template>
  <div class="w-1/2">
    <BaseTitle :title="isEditMode ? '경유지 수정' : '경유지 등록'" />
    <BaseFormField id="name" label="경유지 추가" class="border-y-2">
      <BaseInput id="name" type="text" v-model="name" class="pt-3" />
    </BaseFormField>
    <div class="mt-6 flex justify-center gap-4">
      <BaseButton @click="submitForm" variant="blue">
        {{ isEditMode ? '수정' : '등록' }}
      </BaseButton>
      <BaseButton variant="secondary" @click="goToBack()">뒤로가기</BaseButton>
    </div>
  </div>
</template>
