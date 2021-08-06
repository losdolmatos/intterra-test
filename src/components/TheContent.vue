<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<style scoped>
.content {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
