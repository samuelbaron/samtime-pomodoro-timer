<template>
  <v-row style="position: absolute; bottom: 4%; left: 7.5%; width: 90%" v-if="alert" transition="fade-transition">

    <v-alert
      width="100%"
      color="primary"
      text
      style="text-align: center"
    >
        <span>
        Welcome back, {{ email }}
        </span>
    </v-alert>
  </v-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      login: '',
      alert: true
    }
  },
  computed: {
    ...mapState({
      email: state => state.email
    })
  },
  mounted() {
    setTimeout(function () {
    }, 8000);
    this.alert = false
  }
}
</script>
