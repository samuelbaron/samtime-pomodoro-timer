<template>
  <v-row style="position: absolute; bottom: 4%; left: 7.5%; width: 90%" v-if="alert" transition="fade-transition">

    <v-alert
      width="100%"
      color="primary"
      text
      style="text-align: center"
    >
        <span>
          Welcome back
        </span>
    </v-alert>
  </v-row>
</template>

<script>

export default {
  data() {
    return {
      login: '',
      alert: true
    }
  },
  mounted() {
    // display alert for 6 seconds
    setTimeout(function () {
    }, 6000);
    this.alert = false
  }
}
</script>
