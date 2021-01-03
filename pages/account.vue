<template>
  <div>
    <app-page-name path="Account"></app-page-name>
    <div class="d-flex justify-center">
      <v-btn
        @click="logout"
        style="position: absolute; bottom: 4%"
        rounded
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
