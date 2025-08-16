<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const editorRef = ref(null);
let editor = null;

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '500px',
  },
  initialEditType: {
    type: String,
    default: 'wysiwyg', // 또는 'markdown'
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
  editor = new Editor({
    el: editorRef.value,
    height: props.height,
    initialEditType: props.initialEditType,
    initialValue: props.modelValue || '',
    previewStyle: 'vertical',
    autofocus: props.autofocus,
    // placeholder: '내용을 입력해 주세요.',
    events: {
      change: () => {
        emit('update:modelValue', editor.getMarkdown());
      },
    },
  });
});

watch(
  () => props.modelValue,
  newValue => {
    if (editor && newValue !== editor.getMarkdown()) {
      editor.setMarkdown(newValue || '');
    }
  },
);

onBeforeUnmount(() => {
  editor?.destroy();
  editor = null;
});
</script>

<template>
  <div ref="editorRef"></div>
</template>
