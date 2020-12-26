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
  addSession: (state, session) => {

    state.completedSessions.unshift(session)
  },
}
