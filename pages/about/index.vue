<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center mb-3">
        <logo />
      </div>
      <div class="text-h5 grey--text text--darken-4 text-center">
        This recipe book app is created by <a href="https://github.com/leojune12?tab=repositories">Leo June</a> using <a href="https://nuxtjs.org/">Nuxt.js</a> which is a free and open source web application framework based on
        <a href="https://vuejs.org/">Vue.js</a>. The API consumed by this application is available at <a href="https://www.themealdb.com/">TheMealDB</a>.
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
