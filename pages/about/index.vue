<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center mb-3">
        <logo />
      </div>
      <div class="text-h5 grey--text text--darken-4 text-center">
        This <a href="https://github.com/leojune12/cook-book">recipe book</a> app is created using <a href="https://nuxtjs.org/">Nuxt.js</a> which is a free and open source web application framework based on
        <a href="https://vuejs.org/">Vue.js</a>, and <a href="https://vuetifyjs.com/en/">Vuetify</a> for UI library. This application consumes API from <a href="https://www.themealdb.com/">TheMealDB</a>.
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  layout: 'CustomLayout',
  components: {
    Logo
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #41b883 !important;
  }
</style>
