<script setup>
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { ref, computed, onUnmounted } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import BaseInput from '@/components/BaseInput.vue'
import BasePopup from '@/components/BasePopup.vue'

const router = useRouter()

// 유효성 검사
const schema = z
  .object({
    email: z.string().email('이메일 형식이 아닙니다.'),
    verificationCode: z.string().min(6, '인증번호를 입력해주세요'),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
        '영문자 + 숫자/특수문자 조합 필요'
      ),
    passwordConfirm: z.string(),
    phone: z.string().regex(/^010-\d{4}-\d{4}$/, '전화번호 형식이 아닙니다'),
    birth: z.string().regex(/^\d{8}$/, '생년월일 형식이 아닙니다'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다',
  })

const { handleSubmit } = useForm({ validationSchema: toTypedSchema(schema) })

const { value: email, errorMessage: emailError } = useField('email')
const { value: verificationCode, errorMessage: verificationCodeError } = useField('verificationCode')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: passwordConfirm, errorMessage: passwordConfirmError } = useField('passwordConfirm')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: birth, errorMessage: birthError } = useField('birth')

// 타이머
const timeLeft = ref(0)
let timer = null

const formattedTime = computed(() => {
  const min = String(Math.floor(timeLeft.value / 60)).padStart(2, '0')
  const sec = String(timeLeft.value % 60).padStart(2, '0')
  return `${min}:${sec}`
})

function sendVerificationCode() {
  if (timeLeft.value > 0) return
  // 인증 요청 API

  console.log('인증 이메일 전송됨:', email.value)

  timeLeft.value = 180
  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      clearInterval(timer)
      timer = null
    }
  }, 1000)
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const onSubmit = handleSubmit((values) => {
  console.log('회원가입 데이터:', values)

  Swal.fire({
    title: "가입이 완료되었습니다.",
    html: "회원가입이 완료되었습니다. </br> 로그인 후 이용해 주세요!",
    icon: "success",
    confirmButtonColor: '#18254C',
    confirmButtonText: "로그인 하기",
  }).then((result) => {
    if (result.isConfirmed) {
      router.push('/login')
    }
  });

})
</script>

<template>
  <div class="max-w-4xl mx-auto my-10">
    <BasePopup title="회원가입" :showButton="true" buttonText="가입하기" @click="onSubmit">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
        <BaseInput
          v-model="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          :error="emailError"
          required
        >
          <template #right>
             <button
                class="w-24 text-sm text-white px-3 py-2 rounded text-center transition-colors"
                @click.prevent="sendVerificationCode"
                :disabled="!!emailError || timeLeft > 0"
                :class="[
                  emailError
                    ? 'bg-red-500 hover:bg-red-600 cursor-not-allowed'
                    : 'bg-mainNavy-900 hover:bg-mainNavy-800'
                ]"
              >
                {{ timeLeft > 0 ? '재전송' : '본인인증' }}
            </button>
          </template>
        </BaseInput>

        <BaseInput
          v-model="verificationCode"
          type="text"
          label="인증번호"
          placeholder="인증번호를 입력해주세요"
          :error="verificationCodeError"
          required
        >
          <template #right>
            <span class="text-sm text-gray-500 font-mono w-16 pr-2 text-right">
              {{ formattedTime }}
            </span>
             <button
              class="w-24 text-sm bg-mainNavy-900 text-white px-3 py-2 rounded hover:bg-mainNavy-800 text-center"
              @click.prevent="check"
            >
             확인
            </button>
          </template>
        </BaseInput>

        <BaseInput
          v-model="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          caption="8~20자 이내 숫자, 특수문자, 영문자 중 2가지 이상을 조합"
          icon="lock-closed"
          :error="passwordError"
          required
        />
        <BaseInput
          v-model="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          caption="동일한 비밀번호를 입력해주세요"
          icon="lock-closed"
          :error="passwordConfirmError"
          required
        />
        <BaseInput
          v-model="phone"
          type="text"
          label="휴대폰번호"
          placeholder="010-0000-0000"
          :error="phoneError"
          required
        />
        <BaseInput
          v-model="birth"
          type="text"
          label="생년월일"
          placeholder="YYYYMMDD"
          :error="birthError"
          required
        />
      </form>
    </BasePopup>
  </div>
</template>
