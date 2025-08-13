<script setup>
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  type: { type: String, default: 'text' },
  caption: String,
  error: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  icon: String,
})

const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div
      class="flex w-full items-stretch rounded border"
      :class="error ? 'border-red-500' : 'border-gray-300'"
    >
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
              ? 'cursor-not-allowed bg-gray-100'
              : 'w-full bg-white px-3 py-3 text-sm focus:outline-none'
          "
        />
      </div>

      <div class="flex items-center px-2">
        <slot name="right"></slot>
      </div>
    </div>

    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    <p v-else-if="caption" class="mt-1 text-xs text-gray-500">{{ caption }}</p>
  </div>
</template>
