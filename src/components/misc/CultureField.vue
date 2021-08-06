<template>
  <field :value="value" :icon-class="iconClass">
    <div v-if="iconClass" class="field-icon" :class="iconClass"></div>
  </field>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { CultureType } from '@/api/models';
import Field from '@/components/misc/Field.vue';

export default defineComponent({
  components: {
    Field,
  },
  props: {
    value: {
      type: Object as () => { value: string; id: CultureType },
      required: true,
    },
  },
  setup(props) {
    const iconClasses = {
      [CultureType.WINTER_WHEAT]: 'winter-wheat',
    };
    const iconClass = computed(() => iconClasses[props.value.id]);
    return { iconClass };
  },
});
</script>

<style scoped>
.field-icon {
  width: 30px;
  height: 30px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 10px 0 0;
}
.field-icon.winter-wheat {
  background-image: url(../../assets/icons/winter-wheat.svg);
}
</style>
