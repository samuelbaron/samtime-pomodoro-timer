<template :path="path">
  <v-app-bar app flat color="#0d0f1f" top dense class="button">
    <v-row justify="center">
      <span style="color: #90CAF9">{{path}}</span>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  props: ['path'],
}

</script>

<style scoped>

</style>
