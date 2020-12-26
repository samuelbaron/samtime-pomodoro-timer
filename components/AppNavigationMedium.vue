<template>
<!--  <div>-->
<!--    <v-app-bar app top flat color="blue" dense>-->
<!--      <v-toolbar-title class="font-weight-bold text-uppercase">-->
<!--        <v-icon color="white" left @click="drawer = true">mdi-menu</v-icon>-->
<!--        <span>Przepisy</span>-->
<!--      </v-toolbar-title>-->
<!--    </v-app-bar>-->

<!--    <v-navigation-drawer v-model="drawer" app class="blue darker-3" width="35%">-->
<!--      <v-list justify="center">-->
<!--        <v-list-item>-->
<!--          <span class="subtitle-h3 font-weight-bold">Przepisy</span>-->
<!--        </v-list-item>-->

<!--        <v-list-item v-for="item in drawerMenuItems" :key="item.text" :to="item.route" nuxt>-->
<!--            <v-list-item-title class="white&#45;&#45;text">{{ item.text }}</v-list-item-title>-->
<!--        </v-list-item>-->

<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

<!--  </div>-->
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawerMenuItems: [
        {
          text: 'Home',
          route: '/'
        },
        {
          text: 'Dania Słone',
          route: '/salty-dishes'
        },
        {
          text: 'Dania Słodkie',
          route: '/sweet-dishes'
        },
        {
          text: 'O Aplikacji',
          route: '/about-app'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
