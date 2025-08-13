<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BasePopup from '@/components/BasePopup.vue';
</script>

<template>
  <div class="mx-auto my-auto max-w-4xl">
    <BasePopup title="아이디 찾기" :showButton="true" buttonText="아이디 찾기" @click="onSubmit">
      <form @submit.prevent="onSubmit" class="flex w-full flex-col gap-4">
        <BaseInput v-model="name" type="text" label="이름" placeholder="이름을 입력해주세요">
        </BaseInput>
        <BaseInput v-model="phone" type="text" label="휴대폰번호" placeholder="010-0000-0000" />
      </form>
    </BasePopup>
  </div>
</template>
