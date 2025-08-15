<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BasePopup from '@/components/BasePopup.vue';
import BaseFormField from '@/components/BaseFormField.vue';
</script>

<template>
  <div class="mx-auto my-auto max-w-4xl">
    <BasePopup title="로그인" :showButton="true" buttonText="로그인" @click="onSubmit">
      <form @submit.prevent="onSubmit" class="flex w-full flex-col gap-4">
        <BaseFormField id="email" label="이메일">
          <BaseInput v-model="email" type="email" placeholder="이메일을 입력해주세요" />
        </BaseFormField>
        <BaseFormField id="password" label="비밀번호">
          <BaseInput
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            icon="lock-closed"
          />
        </BaseFormField>
      </form>
    </BasePopup>
  </div>
</template>
