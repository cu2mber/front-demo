<script setup>
const socialList = [
  {
    src: '/icons/google.svg',
    alt: 'Google',
    text: 'Google로 로그인',
    class: 'bg-white text-gray-900 hover:bg-gray-100 border-gray-300',
  },
  {
    src: '/icons/naver.svg',
    alt: 'Naver',
    text: 'Naver로 로그인',
    class: 'bg-[#03C75A] text-white hover:bg-[#019E45] border-[#03C75A]',
  },
  {
    src: '/icons/kakao.svg',
    alt: 'Kakao',
    text: 'Kakao로 로그인',
    class: 'bg-[#FEE500] text-black hover:bg-yellow-300 border-yellow-300',
  },
];
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <button
      v-for="social in socialList"
      :key="social.alt"
      type="button"
      :class="`flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium transition ${social.class}`"
    >
      <img :src="social.src" :alt="social.alt" class="h-6 w-6" />
      {{ social.text }}
    </button>
  </div>
</template>
