<template>
  <section>
    <app-page-name path="History"></app-page-name>

    <v-col v-if="sessions" style="margin-top: -7%">
      <v-card outlined v-for="session in sessions" :key="session.time" color="blue darken-4" class="pa-1 ma-10">
        <v-card-title>{{ session.day }} session</v-card-title>
        <v-card-text >
          <span>duration: {{ session.duration }} minutes</span>
        </v-card-text>
      </v-card>
    </v-col>

      <v-alert
        dense
        v-else
        color="blue darken-4"
        style="position: absolute; color: white; bottom: 1%; width: 80%; margin-left: 10%;"
      >
        You don't completed any sessions yet
      </v-alert>

  </section>
</template>

<script>
import AppPageName from '~/components/AppPageName.vue';
import firebase from '@/firebase.js';
export default {
  components: {
    AppPageName
  },
  data() {
    return {
      sessions: []
    }
  },
  created() {
    // get all sessions
    firebase.firestore().collection("sessions").onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added') {
          this.sessions.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
}
</script>
