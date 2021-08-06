<template>
  <div class="operations-view">
    <operations-header>Операции на поле 112</operations-header>
    <operations-menu @switch-tab="switchTab" :switcher="switcher" />
    <operations-table class="operations-container">
      <operations-table-header :headings="headings" @select="onSelect" />
      <operations-table-content :table="table" />
    </operations-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRef } from 'vue';
import OperationsHeader from '@/components/operations/OperationsHeader.vue';
import OperationsMenu from '@/components/operations/OperationsMenu.vue';
import OperationsTable from '@/components/operations/OperationsTable.vue';
import OperationsTableHeader from '@/components/operations/OperationsTableHeader.vue';
import OperationsTableContent from '@/components/operations/OperationsTableContent.vue';
import { OperationItem, dateToNumber, OperationProps } from '@/api/models';
import useDateFilter from '@/composables/useDateFilter';
import useSwitcher from '@/composables/useSwitcher';
import locale from '@/locales/intterra-ru-RU.json';

export default defineComponent({
  components: {
    OperationsHeader,
    OperationsMenu,
    OperationsTable,
    OperationsTableHeader,
    OperationsTableContent,
  },
  props: {
    operations: {
      type: Object as () => Array<OperationItem>,
      required: true,
    },
    keys: {
      type: Object as () => Array<OperationProps>,
      required: true,
    },
    sortKey: {
      type: String as () => OperationProps,
      required: true,
    },
    sortAsc: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { switcher, switchTab } = useSwitcher();

    const operations = toRef(props, 'operations');

    const { filtered } = useDateFilter<OperationItem>(
      operations,
      dateToNumber,
      switcher
    );

    const sorted = computed(() => {
      return filtered.value.slice().sort((a, b) => {
        let value = 0;
        switch (props.sortKey) {
          case OperationProps.DATE:
            value = b[props.sortKey].timestamp - a[props.sortKey].timestamp;
            break;
          case OperationProps.QUALITY:
            value = a[props.sortKey].id - b[props.sortKey].id;
            break;
          case OperationProps.CULTURE:
          case OperationProps.OPERATION:
            value = a[props.sortKey].value < b[props.sortKey].value ? 1 : -1;
            break;
        }
        return (props.sortAsc ? 1 : -1) * value;
      });
    });

    const headings = computed(() => {
      return props.keys.map((id) => ({
        id,
        active: props.sortKey == id,
        asc: props.sortKey == id ? props.sortAsc : true,
        value: locale[id],
      }));
    });

    const table = computed(() => {
      return sorted.value.map((o) => {
        return props.keys.map((d) => {
          return { id: d, value: o[d] };
        });
      });
    });

    const onSelect = (key: OperationProps) => {
      emit('sort', key);
    };

    return {
      headings,
      table,
      switcher,
      switchTab,
      onSelect,
    };
  },
});
</script>

<style scoped>
.operations-view {
  display: block;
}
.operations-container {
  padding: 8px 0 0 0;
}
</style>
