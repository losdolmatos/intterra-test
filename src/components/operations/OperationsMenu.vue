<template>
  <div class="operations-menu">
    <div class="operations-tabs">
      <operations-tab :active="switcher" @click="$emit('switch-tab', !switcher)"
        >Запланированные операции</operations-tab
      >
      <operations-tab
        :active="!switcher"
        @click="$emit('switch-tab', !switcher)"
        >Выполненные операции</operations-tab
      >
    </div>
    <div class="operations-controls">
      <operations-button>Добавить операцию</operations-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OperationsButton from './OperationsButton.vue';
import OperationsTab from './OperationsTab.vue';

export default defineComponent({
  components: {
    OperationsButton,
    OperationsTab,
  },
  props: ['switcher'],
  emits: ['switch-tab'],
});
</script>

<style scoped>
.operations-menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 0 8px;
}
.operations-tabs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.operations-controls {
  margin-right: 2px;
}
</style>
