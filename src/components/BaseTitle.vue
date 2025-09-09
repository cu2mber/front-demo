<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <h1 class="mb-6 text-center text-4xl font-semibold text-mainNavy-900">
      {{ title }}
    </h1>
    <h2 v-if="subTitle" class="text-center text-lg font-medium text-gray-500">
      {{ subTitle }}
    </h2>
  </div>
</template>
