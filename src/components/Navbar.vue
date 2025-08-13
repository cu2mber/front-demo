<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 로그인 여부 예시. 실제  Vuex, Pinia, cookie 등으로 관리
const isLoggedIn = ref(false);

function goToLogin() {
  router.push('/login');
}

function goToSignup() {
  router.push('/signup');
}

function goToMyPage() {
  router.push('/mypage');
}

function logout() {
  // 인증 토큰 제거 등 처리 필요
  isLoggedIn.value = false;
  router.push('/');
}
</script>

<template>
  <nav
    class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900"
  >
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >오이소
        </span>
      </a>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
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
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-5 w-5"
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
      <div
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
        >
          <li>
            <a
              href="/notices"
              class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              aria-current="page"
              >공지사항</a
            >
          </li>
          <li>
            <a
              href="/events"
              class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >행사</a
            >
          </li>
          <li>
            <a
              href="/routes"
              class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >노선확인</a
            >
          </li>
          <li>
            <a
              href="/recruits"
              class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >모집</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
