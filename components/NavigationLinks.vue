<template>
  <div
    v-if="$vuetify.breakpoint.mdAndUp"
  >
    <NuxtLink
      v-for="link in navigationLinks"
      :key="link.to"
      :to="link.to"
      class="py-3 mx-3 text-button d-inline"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavigationLinks',
  computed: {
    ...mapState([
      'navigationLinks'
    ])
  }
}
</script>

<style scoped>
button {
  outline: none !important;
}
a {
  text-decoration: none !important;
  color: gray !important;
}
.nuxt-link-exact-active {
  color: #FF8F00 !important;
}
</style>
