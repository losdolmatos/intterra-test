import Operation from '@/api/models/Operation';

type State = {
  loading: boolean;
  operations: Operation[];
};

const state: State = {
  loading: false,
  operations: [],
};

export { state, Operation, State };
