<template>
  <div class="content-row" v-for="(row, rowIndex) in table" :key="rowIndex">
    <div
      class="content-cell"
      v-for="(cell, cellIndex) in row"
      :key="cellIndex"
      :class="cell.id"
    >
      <component :is="getFieldComponent(cell.id)" :value="cell.value" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OperationProps } from '@/api/models';
import Field from '@/components/misc/Field.vue';
import QualityField from '@/components/misc/QualityField.vue';
import CultureField from '@/components/misc/CultureField.vue';

export default defineComponent({
  components: {
    QualityField,
    CultureField,
    Field,
  },
  props: ['table'],
  setup() {
    const getFieldComponent = (id: OperationProps) => {
      switch (id) {
        case OperationProps.CULTURE:
          return CultureField;
        case OperationProps.QUALITY:
          return QualityField;
        default:
          return Field;
      }
    };
    return { getFieldComponent };
  },
});
</script>

<style scoped>
.content-row {
  display: table-row;
  height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.content-row:hover {
  transform: translate3d(0px, -1px, 0px);
  background-color: #edeeee7e;
}
.content-cell {
  display: table-cell;
  vertical-align: middle;
  padding: 0 0 0 9px;
  border-bottom: 1px solid #edeeee;
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
}
.content-cell.date {
  letter-spacing: -0.4px;
  opacity: 0.8;
  width: 10%;
  min-width: 50px;
}
.content-cell.operation {
  font-size: 13px;
  letter-spacing: -0.47px;
  padding-bottom: 5px;
  width: 46.8%;
}
.content-cell.culture {
  letter-spacing: -0.5px;
  width: 24.5%;
}
.content-cell.quality {
  line-height: 19px;
  letter-spacing: -0.45px;
  padding: 0 0 2px 10px;
  min-width: 100px;
}
</style>
