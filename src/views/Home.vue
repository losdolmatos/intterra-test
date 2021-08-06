<template>
  <div class="container">
    <operations-view
      :operations="operations"
      :keys="keys"
      :sortKey="sortKey"
      :sortAsc="sortAsc"
      @sort="sort"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import OperationsView from '@/components/operations/OperationsView.vue';
import useOperations from '@/composables/useOperations';
import { OperationProps } from '@/api/models';

export default defineComponent({
  components: {
    OperationsView,
  },
  setup() {
    const { operations } = useOperations();
    const keys = [
      OperationProps.DATE,
      OperationProps.OPERATION,
      OperationProps.CULTURE,
      OperationProps.QUALITY,
    ];
    const sortKey = ref(OperationProps.DATE);
    const sortAsc = ref(true);

    const sort = (key: OperationProps) => {
      if (key === sortKey.value) {
        sortAsc.value = !sortAsc.value;
      } else {
        sortKey.value = key;
        sortAsc.value = true;
      }
    };

    return { operations, keys, sortKey, sortAsc, sort };
  },
});
</script>

<style scoped>
.container {
  min-height: 100%;
  height: auto;
  position: absolute;
  left: 80px;
  right: 70px;
  box-shadow: 5px 1px 10px rgb(0 0 0 / 10%);
  background: #fff;
  padding: 0 30px;
}
</style>
