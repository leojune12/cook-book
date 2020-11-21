<template>
  <div>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        md="10"
      >
        <div
          class="text-center px-3"
        >
          <v-img
            class="mx-auto mb-6"
            width="400"
            src="/images/ingredients.png"
          />
          <div
            class="grey--text text--darken-4 text-md-h3 text-h4 font-weight-bold mb-6"
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
    <v-row>
      <v-col>
        <BrowseByButtons />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BrowseByButtons from '@/components/BrowseByButtons'

export default {
  layout: 'CustomLayout',

  components: {
    BrowseByButtons
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
