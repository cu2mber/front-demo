<script setup>
const props = defineProps({
  currentPage: Number,
  totalItems: Number,
  perPage: Number,
});
const emit = defineEmits(['update:currentPage']);

const totalPage = computed(() => Math.ceil(props.totalItems / props.perPage));

function prev() {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
}
function next() {
  if (props.currentPage < totalPage.value) {
    emit('update:currentPage', props.currentPage + 1);
  }
}
</script>

<template>
  <div class="mt-4 flex justify-center space-x-2">
    <button
      type="button"
      class="rounded border px-3 py-1 disabled:opacity-50"
      :disabled="currentPage <= 1"
      @click="prev"
    >
      이전
    </button>
    <span class="px-3 py-1">{{ currentPage }} / {{ totalPage }}</span>
    <button
      type="button"
      class="rounded border px-3 py-1 disabled:opacity-50"
      :disabled="currentPage >= totalPage"
      @click="next"
    >
      다음
    </button>
  </div>
</template>
