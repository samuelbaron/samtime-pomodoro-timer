<template>
    <v-app-bar app color="indigo darken-4" bottom dense>
      <v-row justify="space-around">
        <v-btn color="indigo darken-4" elevation="0" v-for="button in buttons" :key="button.text" :to="button.route" nuxt>
            <v-icon size="md" color="blue lighten-3"> {{ button.icon }} </v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          icon: 'mdi-home',
          route: '/'
        },
        {
          icon: 'mdi-alarm',
          route: '/stopwatch'
        },
        {
          icon: 'mdi-history',
          route: '/history'
        },
        {
          icon: 'mdi-account-circle',
          route: '/account'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
