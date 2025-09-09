<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseFormField from '@/components/BaseFormField.vue';
import BasePopup from '@/components/BasePopup.vue';
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const data = {
  title: '보령 머드 축제',
  startDate: '2025-01-01',
  endDate: '2025-02-01',
  address: '보령시',
  participaint: 24,
  departDate: '2025-01-01',
  departTime: '11:00',
  returnTime: '20:00',
};

const route = useRoute();
const router = useRouter();

function goToBack() {
  router.back();
}

watchEffect(() => {
  route.fullPath;
});
</script>
<template>
  <div class="py-8">
    <BasePopup :showButton="false">
      <BaseFormField id="title" label="행사명">
        <span>{{ data.title }}</span>
      </BaseFormField>
      <BaseFormField id="date" label="행사일">
        <span>{{ data.startDate }} ~ {{ data.endDate }}</span>
      </BaseFormField>
      <BaseFormField id="address" label="도착지">
        <span>{{ data.address }}</span>
      </BaseFormField>
      <BaseFormField id="participaint" label="참여인원">
        <span>{{ data.participaint }} 명</span>
      </BaseFormField>
      <BaseFormField id="departDate" label="출발일">
        <span>{{ data.departDate }}</span>
      </BaseFormField>
      <BaseFormField id="departTime" label="출발 시간">
        <span>{{ data.departTime }}</span>
      </BaseFormField>
      <BaseFormField id="returnTime" label="귀가 시간">
        <span>{{ data.returnTime }}</span>
      </BaseFormField>
    </BasePopup>
    <div class="mt-6 flex justify-center gap-4">
      <BaseButton variant="secondary" @click="goToBack()">뒤로가기</BaseButton>
    </div>
  </div>
</template>
