<template>
  <!--<v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>-->
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      md="10"
    >
      <div
        class="text-center px-3 text-justify"
      >
        <v-img
          class="mx-auto mb-12 mt-8"
          width="400"
          src="/images/ingredients.png"
        />
        <div
          class="grey--text text--darken-4 text-md-h3 text-h4 font-weight-bold mb-12"
        >
          Discover classic and modern recipes
        </div>
        <div
          class="grey--text text--darken-2 text-md-h5 text-h6"
        >
          For breakfast, lunch and dinner. With over 20 international cuisines to choose from.
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'CustomLayout',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Logo,
    // eslint-disable-next-line vue/no-unused-components
    VuetifyLogo
  }
}
</script>

<style>
/*remove default scrollbar in vuetify*/
html { overflow-y: auto !important; }
button {
  outline: none !important;
}
.box {
  position: relative;
}
.box-text {
  background-color: white;
  opacity: 0.8;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  color: gray;
}
</style>
