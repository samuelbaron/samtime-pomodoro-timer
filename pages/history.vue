<template>
  <div>
    <app-page-name path="History"></app-page-name>
    <v-col class="mt-4">
      <v-card outlined v-for="session in pastSessions" :key="session.time" color="blue darken-4" class="pa-1 ma-10">
        <!--      <v-card-title> {{ session.time }} </v-card-title>-->
        <v-card-title>{{ session.day }} session</v-card-title>
        <v-card-text >
          <span>duration: {{ session.duration }} minutes</span>
          <br>
          <span>finished: {{ session.time }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppPageName from '~/components/AppPageName.vue';
export default {
  components: {
    AppPageName
  },
  computed: {
    ...mapGetters(["pastSessions"])
  },
}
</script>

<style scoped>

</style>
