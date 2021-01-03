<template :path="path">
  <v-app-bar app flat color="#0d0f1f" top dense class="button" style="position: relative">
    <v-row justify="center">
      <span style="color: #90CAF9;" class="mt-1">{{path}}</span>
<!--      <v-icon md style="position: absolute; right: 5%; color: #90CAF9" @click="logout">-->
<!--        mdi-login-->
<!--      </v-icon>-->
    </v-row>
  </v-app-bar>
</template>
<script>
// import {mapState} from "vuex";
import firebase from 'firebase';
export default {
  props: ['path'],
  methods: {
    logout() {
      firebase.auth().signOut().then( () => {
        this.$store.commit('logout');
      })
    }
  },
}

</script>

<style scoped>

</style>
