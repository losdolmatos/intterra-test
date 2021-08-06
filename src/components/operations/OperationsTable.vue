<template>
  <div class="operations-table-wrap">
    <div class="operations-table">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.operations-table-wrap {
  width: 100%;
  height: auto;
  overflow-x: auto;
  overflow-y: hidden;
}
.operations-table {
  width: 100%;
  display: table;
  min-width: 320px;
}
</style>
