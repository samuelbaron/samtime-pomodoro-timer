import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const state = () => ({
  logged: false,
  login: '',
  email: '',
  password: ''
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
  userEmail: (state, payload) => {
    state.email = payload;
  },
  userPassword: (state, payload) => {
    state.password = payload;
  },
}
