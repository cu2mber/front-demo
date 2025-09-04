<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' }, // 'primary', 'secondary', etc
  size: { type: String, default: 'md' },
  disabled: Boolean,
  disabled: Boolean,
});

const emit = defineEmits(['click']);

const baseClasses = {
  primary: 'bg-mainNavy-800 hover:bg-mainNavy-900 text-white',
  blue: 'bg-secondBlue-500 hover:bg-secondBlue-700 text-white font-bold',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
};

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-6 py-3',
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
    class="rounded font-medium transition duration-200"
    :class="[
      baseClasses[variant],
      sizeClasses[size],
      disabled ? 'cursor-not-allowed opacity-50' : '',
    ]"
  >
    <slot></slot>
  </button>
</template>
