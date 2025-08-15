<script setup>
const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  icon: String,
});

const emit = defineEmits(['update:modelValue']);

function onInput(event) {
  emit('update:modelValue', event.target.value);
}
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
      :class="
        disabled
          ? 'cursor-not-allowed rounded border bg-gray-100'
          : 'w-full rounded border bg-white px-3 py-3 text-sm focus:outline-none'
      "
    />
  </div>
</template>
