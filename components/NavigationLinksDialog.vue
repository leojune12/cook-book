<template>
  <v-dialog
    v-model="isDrawerOpen"
    light
    fullscreen
    hide-overlay
    transition="scale-transition"
    origin="top left"
  >
    <v-card
      tile
    >
      <transition name="scroll-y-transition">
        <ul
          v-show="isLinksVisible"
          class="pa-0 display-block"
        >
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            tag="li"
            class="py-3 text-center text-h5"
          >
            <span
              class="d-block"
              @click="closeDrawerFromLink"
            >{{ link.name }}</span>
          </NuxtLink>
        </ul>
      </transition>
      <div class="d-flex">
        <v-fab-transition>
          <v-btn
            v-show="isLinksVisible"
            color="amber darken-4 close-btn"
            fab
            dark
            absolute
            @click="closeDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-fab-transition>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'NavigationLinksDialog',
  data () {
    return {
      closeBtn: true,
      isDrawerOpen: false,
      isLinksVisible: false
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set () {
        this.$store.commit('toggleDrawer')
      }
    },
    ...mapState([
      'navigationLinks'
    ])
  },
  watch: {
    drawer () {
      this.openDrawer()
    }
  },
  methods: {
    ...mapMutations([
      'toggleDrawer'
    ]),
    closeNavigationDialog () {
      // setTimeout(this.toggleDrawer, 300)
      this.toggleDrawer()
    },
    openDrawer () {
      this.isDrawerOpen = true
      setTimeout(this.showLinks, 350)
    },
    closeDrawerFromLink () {
      setTimeout(this.closeDrawer, 300)
    },
    closeDrawer () {
      this.hideLinks()
      setTimeout(this.close, 300)
    },
    close () {
      this.isDrawerOpen = false
    },
    showLinks () {
      this.isLinksVisible = true
    },
    hideLinks () {
      this.isLinksVisible = false
    }
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
  li {
    list-style-type: none;
    color: gray;
  }
  .nuxt-link-exact-active {
    color: #FF8F00 !important;
  }
  ul {
    position: absolute;
    /*left: 50%;*/
    /*margin-left: -57.71px;*/
    top: 50%;
    margin-top: -142px;
  }
  .display-block {
    width: 100%;
  }
  .close-btn {
    position: absolute;
    bottom: 32px;
    left: 50%;
    margin-left: -28px;
  }
</style>
