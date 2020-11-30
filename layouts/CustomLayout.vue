<template>
  <v-app>
    <!--<v-app-bar
      v-if="!$vuetify.breakpoint.mdAndUp"
      app
      light
      color="white"
      elevation="0"
      style="border-bottom: lightgray 1px solid !important;"
    >
      <CustomVueSimpleSuggest />
    </v-app-bar>-->
    <v-app-bar
      app
      light
      color="white"
      elevation="0"
      style="border-bottom: lightgray 1px solid !important;"
    >
      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp || !mobileSearchBar"
        class="font-weight-bold display-1 pl-0"
      >
        <NuxtLink to="/">
          <span
            style="color: #009135"
          >
            <v-icon
              color="amber darken-3"
              large
              class="mt-n1 hat-logo"
            >
              mdi-chef-hat
            </v-icon>Cookbook
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
      <div
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <NuxtLink
          v-for="link in headerLinks"
          :key="link.to"
          :to="link.to"
          class="py-3 mx-3 text-button d-inline"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <v-btn
        v-if="!$vuetify.breakpoint.mdAndUp && !mobileSearchBar"
        icon
        @click="toggleMobileSearchBar"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-dialog
        v-model="linksDialog"
        light
        fullscreen
        hide-overlay
        transition="slide-x-reverse-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            v-if="!$vuetify.breakpoint.mdAndUp && !mobileSearchBar"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-card
          tile
        >
          <v-toolbar
            elevation="0"
          >
            <v-spacer />
            <v-btn
              icon
              @click="linksDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <ul
            class="pa-0"
          >
            <router-link
              v-for="link in headerLinks"
              :key="link.to"
              v-ripple="{ class: 'warning--text' }"
              :to="link.to"
              tag="li"
              class="py-3 text-center text-h5"
            >
              <span
                class="d-block"
                @click="closeLinksDialog"
              >{{ link.name }}</span>
            </router-link>
          </ul>
        </v-card>
      </v-dialog>
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
import { mapMutations } from 'vuex'
import CustomVueSimpleSuggest from '../components/CustomVueSimpleSuggest'
export default {
  name: 'CustomLayout',
  components: {
    CustomVueSimpleSuggest
  },
  data () {
    return {
      headerLinks: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/categories',
          name: 'Categories'
        },
        {
          to: '/cuisines',
          name: 'Cuisines'
        },
        {
          to: '/about',
          name: 'About'
        }
      ],
      linksDialog: false
    }
  },
  computed: {
    mobileSearchBar () {
      return this.$store.state.searchBar.mobileSearchBar
    }
  },
  methods: {
    closeLinksDialog () {
      setTimeout(this.linksDialog = false, 300)
    },
    ...mapMutations({
      toggleMobileSearchBar: 'searchBar/toggleMobileSearchBar'
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
</style>
