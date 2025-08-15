<script setup>
const props = defineProps({
  id: String,
  label: String,
  required: Boolean,
  error: String,
  caption: String,
  showBorder: Boolean,
  labelWidth: { type: String, default: '120px' },
});
</script>

<template>
  <div
    class="flex flex-col pb-3 sm:flex-row sm:items-center sm:space-x-4"
    :class="showBorder ? 'border-b' : ''"
  >
    <label
      v-if="label"
      :for="id"
      class="whitespace-nowrap font-semibold sm:mb-0"
      :style="{ width: labelWidth }"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="min-w-0 flex-1">
      <slot></slot>

      <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
      <p v-else-if="caption" class="mt-1 text-xs text-gray-500">{{ caption }}</p>
    </div>

    <slot name="after"></slot>
  </div>
</template>
