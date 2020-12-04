<template>
  <div class="text-center mb-10">
    <NuxtLink to="/categories">
      <v-btn
        class="mr-md-3 mb-3 mb-md-0 px-md-15"
        color="#F7761D"
        dark
        x-large
        :block="!$vuetify.breakpoint.mdAndUp"
        width="320"
        outlined
      >
        Browse By Category
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/cuisines">
      <v-btn
        class="px-md-15"
        dark
        color="#F7761D"
        x-large
        :block="!$vuetify.breakpoint.mdAndUp"
        width="320"
        outlined
      >
        Browse By Cuisine
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BrowseByButtons'
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
