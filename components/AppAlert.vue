<template>
  <v-row style="position: absolute; bottom: 4%; left: 7.5%; width: 90%" v-if="alert" transition="fade-transition">

    <v-alert
      width="100%"
      color="primary"
      text
      style="text-align: center"
    >
        <span>
        Welcome back, Samuel
        </span>
    </v-alert>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    }
  },
  mounted() {
    setTimeout(function () {
    }, 8000);
    this.alert = false
  }
}
</script>

<style scoped>

</style>
