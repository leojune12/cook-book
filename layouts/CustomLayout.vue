<template>
  <v-app>
    <v-app-bar
      app
      light
      color="white"
      elevation="0"
    >
      <v-dialog
        v-model="linksDialog"
        light
        fullscreen
        hide-overlay
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            v-if="!$vuetify.breakpoint.mdAndUp"
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
      <v-spacer
        v-if="!$vuetify.breakpoint.mdAndUp"
      />
      <v-toolbar-title
        class="font-weight-bold display-1 pl-0"
      >
        <NuxtLink to="/">
          <span
            class="green--text"
          >
            <v-icon
              color="amber darken-3"
              large
              class="mt-n1 hat-logo"
            >
              mdi-chef-hat
            </v-icon>
            Cookbook
          </span>
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-if="$vuetify.breakpoint.mdAndUp"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Recipe"
        single-line
        hide-details
        color="amber darken-3"
        style="max-width: 250px;"
        outlined
        dense
        class="mr-3"
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
      <v-dialog
        v-model="searchDialog"
        light
        fullscreen
        hide-overlay
        transition="slide-x-reverse-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="!$vuetify.breakpoint.mdAndUp"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-card
          tile
        >
          <v-toolbar
            elevation="0"
            class="py-2"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search Recipe"
              single-line
              hide-details
              outlined
              dense
              autofocus
              color="amber darken-3"
            />
            <v-btn
              icon
              @click="searchDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-main
      style="background-color: #ffffff"
    >
      <v-container
        fluid
        class="mx-0 pa-0"
      >
        <nuxt keep-alive />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'CustomLayout',
  data: () => ({
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
    search: '',
    searchDialog: false,
    linksDialog: false
  }),
  methods: {
    closeLinksDialog () {
      setTimeout(this.close, 300)
    },
    close () {
      this.linksDialog = false
    }
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
