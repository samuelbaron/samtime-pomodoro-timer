<template>
  <div>
    <app-page-name path="History"></app-page-name>
    <div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppPageName from '~/components/AppPageName.vue';
export default {
  components: {
    AppPageName
  },
  computed: {
    ...mapGetters(["pastSessions"])
  },
}
</script>

<style scoped>

</style>
