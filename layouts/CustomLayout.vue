<template>
  <v-app>
    <v-app-bar
      app
      light
      color="white"
      elevation="0"
      style="border-bottom: lightgray 1px solid !important;"
    >
      <v-btn
        v-if="!$vuetify.breakpoint.mdAndUp && !mobileSearchBar"
        icon
        @click="drawer = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp || !mobileSearchBar"
        class="font-weight-bold text-h5 pl-0"
      >
        <NuxtLink to="/">
          <span class="d-flex">
            <v-img
              src="/images/grinder.png"
              width="32"
              height="32"
              class="mr-1"
            />
            <span class="green-text">Salt</span><span class="amber-text">&</span><span class="green-text">Pepper</span>
          </span>
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer
        v-if="$vuetify.breakpoint.mdAndUp || !mobileSearchBar"
      />
      <CustomVueSimpleSuggest
        v-if="$vuetify.breakpoint.mdAndUp || mobileSearchBar"
        class="mr-md-3 mr-0"
      />
      <NavigationLinks />
      <v-btn
        v-if="!$vuetify.breakpoint.mdAndUp && !mobileSearchBar"
        icon
        @click="toggleMobileSearchBar"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <NavigationLinksDialog />
    </v-app-bar>
    <v-main
      style="background-color: #ffffff"
    >
      <v-container>
        <nuxt keep-alive />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import CustomVueSimpleSuggest from '../components/CustomVueSimpleSuggest'
import NavigationLinks from '../components/NavigationLinks'
import NavigationLinksDialog from '../components/NavigationLinksDialog'
export default {
  name: 'CustomLayout',
  components: {
    CustomVueSimpleSuggest,
    NavigationLinks,
    NavigationLinksDialog
  },
  computed: {
    mobileSearchBar () {
      return this.$store.state.mobileSearchBar
    },
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set () {
        this.$store.commit('toggleDrawer')
      }
    },
    ...mapState([
      'headerLinks'
    ])
  },
  methods: {
    ...mapMutations({
      toggleMobileSearchBar: 'toggleMobileSearchBar',
      toggleDrawer: 'toggleDrawer'
    })
  }
}
</script>

<style scoped>
/*remove default scrollbar in vuetify*/
html { overflow-y: auto !important; }
button {
  outline: none !important;
}
a {
  text-decoration: none !important;
  color: gray !important;
}
li {
  list-style-type: none;
  color: gray;
}
.nuxt-link-exact-active {
  color: #FF8F00 !important;
}
.hat-logo {
  transform: rotateY(180deg);
  animation: turn 1s ease-out forwards 0.5s;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
.green-text {
  color: #009135;
}
.amber-text {
  color: #FF8F00;
}
</style>
