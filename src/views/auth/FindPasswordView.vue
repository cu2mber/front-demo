<script setup>
import BaseInput from '@/components/BaseInput.vue'
import BasePopup from '@/components/BasePopup.vue'

</script>

<template>
  <div class="max-w-4xl mx-auto my-auto">
    <BasePopup title="비밀번호 찾기" :showButton="true" buttonText="임시 비밀번호 발급" @click="onSubmit">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4 w-full">
        <BaseInput
          v-model="name"
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요"
        >
        </BaseInput>
        <BaseInput
          v-model="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
        />
      </form>
    </BasePopup>
  </div>
</template>
