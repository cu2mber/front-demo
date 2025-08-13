<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BasePopup from '@/components/BasePopup.vue';
</script>

<template>
  <div class="mx-auto my-auto max-w-4xl">
    <BasePopup title="로그인" :showButton="true" buttonText="로그인" @click="onSubmit">
      <form @submit.prevent="onSubmit" class="flex w-full flex-col gap-4">
        <BaseInput v-model="email" type="email" label="이메일" placeholder="이메일을 입력해주세요">
        </BaseInput>
        <BaseInput
          v-model="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
      </form>
    </BasePopup>
  </div>
</template>
