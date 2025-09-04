<script setup>
import BaseInput from './BaseInput.vue';
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(['update:modelValue', 'search']);

const localValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  val => {
    localValue.value = val;
  },
);

function onInput(event) {
  localValue.value = event.target.value;
  emit('update:modelValue', localValue.value);
}

function onClick() {
  emit('search');
}
</script>

<template>
  <div class="mx-auto mb-8 flex w-full max-w-2xl gap-2">
    <BaseInput v-model="localValue" type="text" placeholder="검색어를 입력하세요" class="flex-1" />
    <button
      type="button"
      class="h-10 rounded bg-mainNavy-800 px-5 text-white hover:bg-mainNavy-900"
      @click="onClick"
      aria-label="검색"
    >
      검색
    </button>
  </div>
</template>
