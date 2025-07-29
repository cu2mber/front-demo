<script setup>
defineProps({
  title: String,
  showButton: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    default: '확인',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <div class="rounded-3xl border pt-12 pb-10 px-10 bg-white w-[500px] max-w-full">

    <div class="w-full pb-8 flex justify-center">
      <h2 class="text-center text-mainNavy-900 text-3xl font-bold leading-tight tracking-tight">
        {{ title }}
      </h2>
    </div>

    <div class="w-full flex flex-col justify-center items-center gap-8">
      <slot></slot>

      <button
        v-if="showButton"
        class="w-full py-4 text-lg font-semibold bg-mainNavy-900 text-white rounded-xl hover:bg-mainNavy-800 transition"
        @click="$emit('click')"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
