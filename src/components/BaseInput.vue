<script setup>
import { ref, defineExpose } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  icon: String,
});

const inputRef = ref(null);
const emit = defineEmits(['update:modelValue']);

function onInput(event) {
  emit('update:modelValue', event.target.value);
}

defineExpose({
  focus: () => inputRef.value?.focus(),
});
</script>

<template>
  <div class="relative flex flex-1 items-center">
    <span v-if="icon" class="pointer-events-none absolute left-3 text-gray-400">
      <i :class="`i-heroicons-${icon}`"></i>
    </span>
    <input
      :value="modelValue"
      @input="onInput"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="[
        'w-full rounded border px-3 py-3 text-sm focus:outline-none',
        disabled
          ? 'cursor-not-allowed border-gray-300 bg-gray-100'
          : 'border-gray-300 bg-white focus:ring-2 focus:ring-blue-400',
      ]"
      ref="inputRef"
    />
  </div>
</template>
