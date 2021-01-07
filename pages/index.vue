<template>
  <section>

<!--    <div v-if="logged === false">-->
      <app-login-register></app-login-register>
<!--    </div>-->

<!--    <div v-else>-->
<!--      <app-page-name path="Home"></app-page-name>-->
<!--      <app-alert></app-alert>-->
<!--    </div>-->

  </section>
</template>

<script>
// import AppPageName from '~/components/AppPageName.vue';
// import AppAlert from '~/components/AppAlert.vue';
import AppLoginRegister from '~/components/AppLoginRegister.vue';

import {mapState} from "vuex";

export default {
  components: {
    // AppPageName,
    // AppAlert,
    AppLoginRegister
  },
  // created() {
  //   let iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
  //   console.log(iOSDevice)
  // },
  // computed: {
  //   ...mapState({
  //     logged: state => state.logged
  //   })
  // },
}
</script>
