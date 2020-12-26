<template>
  <v-app style="background-color: #0d0f1f">

    <!--menu for large screens-->
    <app-navigation-medium class="hidden-sm-and-down"/>

    <!--menu for small screens-->
    <app-navigation-small class="hidden-md-and-up"/>

      <v-main style="padding-top: 0">
        <nuxt/>
      </v-main>

  </v-app>
</template>

<script>
import AppNavigationSmall from '~/components/AppNavigationSmall.vue';
import AppNavigationMedium from "~/components/AppNavigationMedium";

export default {
  components: {
    AppNavigationMedium,
    AppNavigationSmall
  }
}
</script>
