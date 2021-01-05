<template :path="path">
  <v-app-bar app flat color="#0d0f1f" top dense class="button" style="position: relative">
    <v-row justify="center">
      <span style="color: #90CAF9;" class="mt-1">{{path}}</span>
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
