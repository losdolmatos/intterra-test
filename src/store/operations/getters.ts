import { GetterTree } from 'vuex';
import { State, Operation } from './state';

export type Getters = {
  operations(state: State): Operation[];
};

export const getters: GetterTree<State, State> & Getters = {
  operations(state) {
    return state.operations;
  },
};
