<template>
  <div class="tab-button" :class="{ active }"><slot></slot></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['active'],
});
</script>

<style scoped>
.tab-button {
  text-transform: uppercase;
  padding: 12px 20px 0 0;
  cursor: pointer;
  letter-spacing: -0.6px;
  font-size: 11px;
  font-weight: 500;
  color: #333333;
  transition: all 0.2s ease-out;
}
.tab-button.active {
  pointer-events: none;
  color: #3399ff;
}
.tab-button:hover {
  opacity: 0.8;
}
</style>
