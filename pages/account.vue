<template>
  <div>
    <app-page-name path="Account"></app-page-name>
    <div class="d-flex justify-center" style=" position: absolute; top: 20%; flex-direction: column; width: 70%; margin-left: 15%">
      <span class="blue--text">Login:</span>
      <span>samuelbaron</span>
      <br>
      <span class="blue--text">Email:</span>
      <span>samuel.baron.pl@gmail.com</span>
    </div>
    <div class="d-flex justify-center">
      <v-btn
        style="position: absolute; bottom: 31%"
        color="primary"
        dark
        width="80%"
      >
        Change Login
      </v-btn>
      <v-btn
        style="position: absolute; bottom: 22%"
        color="primary"
        dark
        width="80%"
      >
        Change Email
      </v-btn>
      <v-btn
        style="position: absolute; bottom: 13%"
        color="primary"
        dark
        width="80%"
      >
        Change Password
      </v-btn>
      <v-btn
        @click="logout"
        style="position: absolute; bottom: 4%"
        color="red"
        dark
        width="80%"
      >
        Sign Out
      </v-btn>
    </div>
  </div>
</template>

<script>
import AppPageName from '~/components/AppPageName.vue';
import firebase from "@/firebase";
export default {
  components: {
    AppPageName,
  },
  methods: {
    logout() {
      firebase.auth().signOut().then( () => {
        this.$router.push({ path: '/' });
        this.$store.commit('logout');
      })
    }
  },
}
</script>

<style scoped>

</style>
