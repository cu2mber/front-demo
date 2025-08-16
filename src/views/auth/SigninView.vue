<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';
import BasePopup from '@/components/BasePopup.vue';
import BaseFormField from '@/components/BaseFormField.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import SocialLoginButton from '@/components/SocialLoginButton.vue';

const email = ref('');
const password = ref('');
const autoSignin = ref(false);

const router = useRouter();

function goToFindId() {
  router.push('/findId');
}

function goToFindPassword() {
  router.push('/findPassword');
}

function goToSignup() {
  router.push('/signup');
}
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
        <BaseFormField>
          <div class="flex items-center justify-between">
            <BaseCheckbox v-model="autoSignin" label="자동 로그인" />
            <div class="flex items-center space-x-2 text-sm">
              <button
                @click="goToFindId"
                class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
              >
                아이디 찾기
              </button>
              <span class="text-gray-400">|</span>
              <button
                @click="goToFindPassword"
                class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
              >
                비밀번호 찾기
              </button>
            </div>
          </div>
        </BaseFormField>
      </form>
      <template #after-button>
        <div class="inline-flex items-center justify-between self-stretch">
          <div
            class="justify-start text-right font-['Inter'] text-sm font-normal leading-tight text-black"
          >
            아직 회원이 아니신가요?
          </div>
          <button
            @click="goToSignup"
            class="justify-end text-secondBlue-300 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            회원가입
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="flex-1 border-t border-scaleGray-300"></div>
          <span className="px-4 text-sm text-zinc-600 font-normal leading-tight"> 또는 </span>
          <div className="flex-1 border-t border-scaleGray-300"></div>
        </div>
        <SocialLoginButton />
      </template>
    </BasePopup>
  </div>
</template>
