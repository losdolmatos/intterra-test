import fieldService from '@/api';
import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from './state';

export enum ActionTypes {
  GetOperations = 'GET_OPERATIONS',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
};

export type Actions = {
  [ActionTypes.GetOperations](context: ActionAugments): void
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetOperations]({ commit }) {
    commit(MutationType.SetLoading, true);
    const operations = await fieldService.getOperations();
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetOperations, operations);
  },
};
