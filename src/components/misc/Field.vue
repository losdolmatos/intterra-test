<template>
  <div class="field">
    <slot></slot>
    <div class="field-text">{{ value.value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["value"],
})
</script>

<style scoped>
.field {
  display: flex;
  align-items: center;
}
</style>
