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
          class="text-center"
        >
          <v-img
            class="mx-auto mb-3 mb-md-6"
            height="230"
            contain
            src="/images/ingredients.png"
            lazy-src="/images/ingredients.png"
          />
          <div
            class="text-md-h3 text-h4 font-weight-bold mb-6"
            style="color: #212121;"
          >
            Explore traditional and modern recipes
          </div>
          <div
            class="text-md-h5 text-h6"
            style="color: #424242;"
          >
            Discover more than 250 dishes from over 20 international cuisines
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
