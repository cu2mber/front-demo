<script setup>
import BaseButton from './BaseButton.vue';

const props = defineProps({
  columns: Array,
  items: Array,
  sortKey: String,
  sortOrder: Number,
  showEdit: { type: Boolean, default: false },
  showDelete: { type: Boolean, default: false },
});
const emit = defineEmits(['sort-change', 'edit-click', 'delete-click', 'row-click']);

function changeSort(key) {
  if (props.sortKey === key) {
    emit('sort-change', { key, order: -props.sortOrder });
  } else {
    emit('sort-change', { key, order: 1 });
  }
}

function onEdit(item) {
  emit('edit-click', item);
}

function onDelete(item) {
  emit('delete-click', item);
}
</script>

<template>
  <table class="w-full table-auto border-b border-t border-gray-200 text-center">
    <thead>
      <tr class="bg-gray-100">
        <th
          v-for="col in columns"
          :key="col.key"
          @click="changeSort(col.key)"
          class="cursor-pointer select-none px-4 py-2"
        >
          {{ col.label }}
          <span v-if="sortKey === col.key">
            {{ sortOrder === 1 ? '▲' : '▼' }}
          </span>
        </th>
        <slot name="header"></slot>
        <th v-if="showEdit || showDelete" class="px-4 py-2">작업</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id || item.no"
        @click="$emit('row-click', item.no)"
        class="cursor-pointer hover:bg-gray-50"
      >
        <td v-for="col in columns" :key="col.key" class="px-4 py-2">
          <slot :name="`cell-${col.key}`" :item="item">
            {{ item[col.key] }}
          </slot>
        </td>
        <slot name="cell" :item="item"></slot>
        <td v-if="showEdit || showDelete" class="space-x-2 px-4 py-2">
          <BaseButton v-if="showEdit" variant="blue" size="sm" @click.stop.prevent="onEdit(item)">
            수정
          </BaseButton>
          <BaseButton
            v-if="showDelete"
            variant="warning"
            size="sm"
            @click.stop.prevent="onDelete(item)"
          >
            삭제
          </BaseButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>
