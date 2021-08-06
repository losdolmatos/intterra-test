<template>
  <field :value="value" :icon-class="iconClass">
    <div v-if="iconClass" class="field-icon" :class="iconClass"></div>
  </field>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Field from '@/components/misc/Field.vue';
import { Assessment } from '@/api/models';

export default defineComponent({
  props: {
    value: {
      type: Object as () => { value: string; id: Assessment },
      required: true,
    },
  },
  components: {
    Field,
  },
  setup(props) {
    const iconClasses = {
      [Assessment.NONE]: 'no-color',
      [Assessment.BADLY]: 'color-bad',
      [Assessment.SATISFACTORILY]: 'color-moderate',
      [Assessment.EXCELLENT]: 'color-good',
    };
    const iconClass = computed(() => iconClasses[props.value.id]);
    return { iconClass };
  },
});
</script>

<style scoped>
.field-icon {
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background: #edeeee;
  margin: 0 10px 0 0;
}
.field-icon.color-good {
  background: #66cc66;
}
.field-icon.color-moderate {
  background: #ffe06d;
}
.field-icon.color-bad {
  background: #ff7360;
}
</style>
