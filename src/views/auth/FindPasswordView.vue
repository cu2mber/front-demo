<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BasePopup from '@/components/BasePopup.vue';
</script>

<template>
  <div class="mx-auto my-auto max-w-4xl">
    <BasePopup
      title="비밀번호 찾기"
      :showButton="true"
      buttonText="임시 비밀번호 발급"
      @click="onSubmit"
    >
      <form @submit.prevent="onSubmit" class="flex w-full flex-col gap-4">
        <BaseFormField id="name" label="이름">
          <BaseInput v-model="name" type="text" placeholder="이름을 입력해주세요" />
        </BaseFormField>
        <BaseFormField id="email" label="이메일">
          <BaseInput v-model="email" type="email" placeholder="이메일을 입력해주세요" />
        </BaseFormField>
      </form>
    </BasePopup>
  </div>
</template>
