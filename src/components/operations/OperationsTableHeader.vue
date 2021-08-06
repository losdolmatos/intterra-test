<template>
  <div class="table-header">
    <div
      class="table-header-item"
      v-for="header in headings"
      :key="header.id"
      @click="$emit('select', header.id)"
    >
      {{ header.value }}
      <span :class="{ active: header.active, desc: !header.asc }">
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0L5 5L0 0H10Z" fill="#3399FF" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['headings'],
  emits: ['select'],
});
</script>

<style scoped>
.table-header {
  display: table-row;
  height: 40px;
  background: #edeeee;
}
.table-header-item {
  display: table-cell;
  vertical-align: middle;
  padding: 0 0 3px 9px;
  font-size: 11px;
  letter-spacing: -0.52px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.table-header-item:hover {
  background: #cbcfcf;
}
.table-header-item span {
  padding: 0 0 0 4px;
  display: inline-block;
  transition: all 0.23s ease-in;
}
.table-header-item span path {
  fill: #a7a9ac;
}
.table-header-item span.active path {
  fill: #3399ff;
}
.table-header-item span.desc {
  transform: scaleY(-1);
}
</style>
