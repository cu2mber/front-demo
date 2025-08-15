<script setup>
const props = defineProps({
  modelValue: Boolean,
  label: String,
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

function toggle(e) {
  emit('update:modelValue', e.target.checked);
}
</script>

<template>
  <label class="mt-2 flex items-center space-x-1 sm:mt-0">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="toggle"
      :disabled="disabled"
      class="h-4 w-4"
    />
    <span>{{ label }}</span>
  </label>
</template>
