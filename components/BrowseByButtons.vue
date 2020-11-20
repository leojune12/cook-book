<template>
  <div class="text-center mb-10">
    <NuxtLink to="/categories">
      <v-btn
        class="mr-md-3 mb-3 mb-md-0 px-md-15"
        outlined
        color="green darken-3"
        rounded
        large
        :block="!$vuetify.breakpoint.mdAndUp"
      >
        Browse By Category
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/cuisines">
      <v-btn
        class="px-md-15"
        outlined
        color="green darken-3"
        rounded
        large
        :block="!$vuetify.breakpoint.mdAndUp"
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
