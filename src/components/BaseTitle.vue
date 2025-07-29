<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
    <div class="w-full max-w-4xl px-4 py-8">
      <h1 class="text-4xl font-semibold text-center text-mainNavy-900 mb-6">
        {{title}}
      </h1>
    </div>
</template>
