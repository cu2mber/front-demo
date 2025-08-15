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
});

const emit = defineEmits(['click']);
</script>

<template>
  <div class="min-w-[500px] max-w-full rounded-3xl border bg-white px-10 pb-10 pt-12">
    <div class="flex w-full justify-center pb-8">
      <h2 class="text-center text-3xl font-bold leading-tight tracking-tight text-mainNavy-900">
        {{ title }}
      </h2>
    </div>

    <div class="flex w-full flex-col items-center justify-center gap-8">
      <slot></slot>

      <button
        v-if="showButton"
        class="w-full rounded-xl bg-mainNavy-900 py-4 text-lg font-semibold text-white transition hover:bg-mainNavy-800"
        @click="$emit('click')"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
