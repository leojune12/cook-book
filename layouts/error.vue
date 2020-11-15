<template>
  <v-row>
    <v-col
      cols="12"
      md="8 offset-md-2"
    >
      <v-alert v-if="error.statusCode === 404" type="error"  text>
        {{ pageNotFound }}
      </v-alert>
      <h1 v-else class="green--text">
        {{ otherError }}
      </h1>
      <NuxtLink to="/" style="text-decoration: none">
        Home page
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'CustomLayout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
