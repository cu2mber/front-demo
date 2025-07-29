<script setup>

  const props = defineProps({
    title: String,
    author: String,
    createdAt: String,
    content: String
  })
</script>

<template>
    <div class="flex items-center border-b border-t-2 border-t-black px-4 py-2">
      <span class="font-bold text-lg">{{ title }}</span>
    </div>

    <div class="border-b px-4 py-3 text-sm text-gray-700">
      <div class="flex flex-col md:flex-row md:justify-between">
        <div class="flex mb-1 md:mb-0">
          <span class="w-20 font-medium shrink-0">작성자</span>
          <span>{{ author }}</span>
        </div>
        <div class="flex justify-start md:justify-end">
          <span class="w-20 font-medium shrink-0">작성일</span>
          <span>{{ createdAt }}</span>
        </div>
      </div>
    </div>

    <div class="px-4 py-6 text-gray-800 text-sm whitespace-pre-line min-h-64 border-b">
      {{ content }}
    </div>
</template>
