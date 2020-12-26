import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  completedSessions: []
});
export const getters = {
  pastSessions: state => {
    if (!state.completedSessions.length) return [];
    return state.completedSessions
  }
}
export const mutations = {
  addSession: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  },
}
