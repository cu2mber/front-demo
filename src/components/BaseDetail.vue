<script setup>
const props = defineProps({
  title: String,
  author: String,
  createdAt: String,
  content: String,
});
</script>

<template>
  <div class="flex items-center border-b border-t-2 border-t-black px-4 py-2">
    <span class="text-lg font-bold">{{ title }}</span>
  </div>

  <div class="border-b px-4 py-3 text-sm text-gray-700">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div class="mb-1 flex md:mb-0">
        <span class="w-20 shrink-0 font-medium">작성자</span>
        <span>{{ author }}</span>
      </div>
      <div class="flex justify-start md:justify-end">
        <span class="w-20 shrink-0 font-medium">작성일</span>
        <span>{{ createdAt }}</span>
      </div>
    </div>
  </div>

  <div class="min-h-64 whitespace-pre-line border-b px-4 py-6 text-sm text-gray-800">
    {{ content }}
  </div>
</template>
