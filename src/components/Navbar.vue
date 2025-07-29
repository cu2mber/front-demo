<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 로그인 여부 예시. 실제  Vuex, Pinia, cookie 등으로 관리
const isLoggedIn = ref(false)

function goToLogin() {
  router.push('/login')
}

function goToSignup() {
  router.push('/signup')
}

function goToMyPage() {
  router.push('/mypage')
}

function logout() {
  // 인증 토큰 제거 등 처리 필요
  isLoggedIn.value = false
  router.push('/')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">오이소 </span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <template v-if="isLoggedIn">
        <div class="flex items-center space-x-4">
          <button
            @click="goToMyPage"
            class="px-4 py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            마이페이지
          </button>
          <div class="h-4 border-l border-gray-300 dark:border-gray-600"></div>
          <button
            @click="logout"
            class="px-4 py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            로그아웃
          </button>
        </div>
      </template>

      <template v-else>
        <div class="flex items-center space-x-4">
          <button
            @click="goToLogin"
            class="px-4 py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            로그인
          </button>
          <div class="h-4 border-l border-gray-300 dark:border-gray-600"></div>
          <button
            @click="goToSignup"
            class="px-4 py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
          >
            회원가입
          </button>
        </div>
      </template>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/notices" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">공지사항</a>
        </li>
        <li>
          <a href="/events" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">행사</a>
        </li>
        <li>
          <a href="/routes" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">노선확인</a>
        </li>
        <li>
          <a href="/recruits" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">모집</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
