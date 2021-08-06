import { computed, Ref, ComputedRef } from 'vue';

interface DateTimestamp {
  date: { timestamp: number },
}

type UseDateFilter = <T extends DateTimestamp>(
  array: Ref<Array<T>>,
  fn: () => number,
  less: Ref<boolean>,
) => {
  filtered: ComputedRef<T[]>,
}

const useDateFilter: UseDateFilter = (array, fn, less) => {
  const filtered = computed(() => {
    const value = fn();
    return array.value.filter((o) => {
      if (less.value) {
        return o.date.timestamp > value;
      } else {
        return o.date.timestamp <= value;
      }
    });
  });

  return { filtered };
};

export default useDateFilter;
