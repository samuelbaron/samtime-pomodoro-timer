import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const state = () => ({
  logged: false,
  email: '',
});
export const getters = {

}
export const mutations = {
  login: (state) => {
    state.logged = true;
  },
  logout: (state) => {
    state.logged = false;
  },
  setUserEmail: (state, payload) => {
    state.email = payload;
  },
}
