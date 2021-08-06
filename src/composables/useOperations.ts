import { computed, onMounted, ComputedRef } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/operations/actions';
import { OperationItem } from '@/api/models';

type UseOperations = () => {
  loading: ComputedRef<boolean>,
  operations: ComputedRef<OperationItem[]>,
}

const useOperations: UseOperations = () => {
  const store = useStore();
  const loading = computed(() => store.state.loading);

  const operations = computed(() => (store.getters.operations.map(
    (o) => (new OperationItem(o))
  )));

  onMounted(() => store.dispatch(ActionTypes.GetOperations));
  return {
    loading,
    operations,
  };
};

export default useOperations;
