<template>
  <section>
    <app-page-name path="Home" v-if="logged"></app-page-name>
    <div v-if="!logged" style="display: flex; height: 100vh; justify-content: center; flex-direction: column;">
      <v-form v-model="signInValid" lazy-validation v-if="signInDisplay">
        <v-container>
          <v-row dense justify="center">
            <v-col
              cols="10"
            >
              <v-text-field
                v-model="signInEmail"
                :rules="signInEmailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="10"
            >
              <v-text-field
                v-model="signInPassword"
                :rules="signInPasswordRules"
                label="Password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-btn
                width="100%"
                depressed
                color="primary"
                @click="signIn"
              >
                Sign In
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-form v-model="signUpValid" style="margin-top: 15%" lazy-validation v-if="signUpDisplay">
        <v-container>
          <v-row dense justify="center">

            <v-col
              cols="10"
            >
              <v-text-field
                v-model="signUpLogin"
                :rules="signUpLoginRules"
                label="Login"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="10"
            >
              <v-text-field
                v-model="signUpEmail"
                :rules="signUpEmailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="10"
            >
              <v-text-field
                v-model="signUpPassword"
                :rules="signUpPasswordRules"
                label="Password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-btn
                depressed
                width="100%"
                color="primary"
                @click="signUp"
              >
                Sign Up
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </section>
</template>

<script>
import AppPageName from '~/components/AppPageName.vue';
import firebase from '@/firebase.js';
import {mapState} from "vuex";
export default {
  components: {
    AppPageName
  },
  computed: {
    ...mapState({
      logged: state => state.logged
    })
  },
  data() {
    return {

      signInDisplay: true,
      signUpDisplay: true,
      signInValid: false,
      signUpValid: false,

      // SIGN IN
      signInEmail: '',
      signInEmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      signInPassword: '',
      signInPasswordRules: [
        v => v.length >= 6 || 'Password must be longer than 6 characters',
      ],

      // SIGN UP
      signUpLogin: '',
      signUpLoginRules: [
        v => !!v || 'Login is required',
      ],
      signUpPassword: '',
      signUpPasswordRules: [
        v => v.length >= 6 || 'Password must be longer than 6 characters',
      ],
      signUpEmail: '',
      signUpEmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword).then(() => {
      this.$store.commit('login');
      this.signUpLogin = ''
      this.signUpEmail = ''
      this.signUpPassword = ''
      })
    },
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.signInEmail, this.signInPassword).then(() => {
      this.$store.commit('login')
      this.signInEmail = ''
      this.signInPassword = ''
      })
    }
  },
}
</script>
