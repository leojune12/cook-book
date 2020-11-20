<template>
  <div>
    <div class="text-h6 text--darken-3 grey--text ml-md-13">
      Select by category
    </div>
    <v-slide-group
      v-model="model"
      active-class="success"
      :show-arrows="$vuetify.breakpoint.mdAndUp"
      light
    >
      <v-slide-item
        v-for="category in categories"
        :key="category.idCategory"
      >
        <!--<v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>-->
        <v-card
          class="my-4 mx-2"
          height="200"
          width="170"
          href="/"
          outlined
        >
          <v-img
            :src="category.strCategoryThumb"
            height="100px"
          />

          <v-card-title>
            {{ category.strCategory }}
          </v-card-title>

          <v-card-subtitle>
            11 items
          </v-card-subtitle>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: 'CategorySlider',
  data () {
    return {
      model: null,
      categories: [
        {
          strCategory: '...'
        },
        {
          strCategory: '...'
        },
        {
          strCategory: '...'
        },
        {
          strCategory: '...'
        },
        {
          strCategory: '...'
        },
        {
          strCategory: '...'
        }
      ]
    }
  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      this.categories = (await this.$axios.$get('https://www.themealdb.com/api/json/v1/1/categories.php')).categories
      // eslint-disable-next-line no-console
      console.log(this.categories)
    }
  }
}
</script>

<style scoped>

</style>
