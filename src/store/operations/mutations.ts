import { MutationTree } from 'vuex';
import { State, Operation } from './state';

export enum MutationType {
  SetOperations = 'SET_OPERATIONS',
  SetLoading = 'SET_LOADING',
}

export type Mutations = {
  [MutationType.SetOperations](state: State, operations: Operation[]): void;
  [MutationType.SetLoading](state: State, value: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetOperations](state, operations) {
    state.operations = operations;
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value;
  },
};
