import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';
import { State, state } from './operations/state';
import { Mutations, mutations } from './operations/mutations';
import { Actions, actions } from './operations/actions';
import { Getters, getters } from './operations/getters';

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
});

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
};

export function useStore(): Store {
  return store as Store;
}
