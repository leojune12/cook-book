<template>
  <div class="text-center mb-10">
    <NuxtLink to="/categories">
      <v-btn
        class="mr-md-3 mb-3 mb-md-0 px-md-15 btn"
        dark
        x-large
        :block="!$vuetify.breakpoint.mdAndUp"
        width="320"
      >
        Browse By Category
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/cuisines">
      <v-btn
        class="px-md-15 btn"
        dark
        x-large
        :block="!$vuetify.breakpoint.mdAndUp"
        width="320"
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
  .btn {
    background-image: radial-gradient(circle, #009d6b, #1ba265, #2da65f, #3dab58, #4caf50);
  }
</style>
