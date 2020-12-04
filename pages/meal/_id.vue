<template>
  <div>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        md="10"
        style="padding-top: 0 !important;"
      >
        <v-btn
          light
          icon
          @click="goBack"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="px-0 px-md-3"
          >
            <v-skeleton-loader
              type="image"
              :loading="loading"
            >
              <v-img
                :src="meal.strMealThumb"
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader
                    type="image"
                  />
                </template>
              </v-img>
            </v-skeleton-loader>
          </v-col>
          <v-col
            cols="12"
            md="6"
            style="padding-left: 0 !important; padding-right: 0 !important;"
          >
            <v-skeleton-loader
              type="article"
              :loading="loading"
            >
              <div class="px-4">
                <div class="text-md-h3 text-h4 mb-3 grey--text text--darken-4">
                  {{ meal.strMeal }}
                </div>
                <div class="grey--text text--darken-2 mb-10">
                  <div>
                    Category: {{ meal.strCategory }}
                  </div>
                  <div>
                    Cuisine: {{ meal.strArea }}
                  </div>
                  <div>
                    <a target="_blank" :href="meal.strSource">Source</a> | <a target="_blank" :href="meal.strYoutube">Watch</a>
                  </div>
                </div>
                <div
                  class="grey--text text--darken-4"
                >
                  <div
                    class="text-h6 mb-5"
                  >
                    Ingredients
                  </div>
                  <table>
                    <tr
                      v-for="n in 20"
                      :key="n"
                      :class="{ 'd-none':meal['strIngredient'+n] === '' || meal['strIngredient'+n] === null }"
                    >
                      <td>
                        &bullet; {{ meal['strMeasure'+n] }}
                      </td>
                      <td
                        class="pl-3"
                      >
                        &nbsp;{{ meal['strIngredient'+n] }}
                      </td>
                    </tr>
                  </table>
                </div>
                <div
                  class="grey--text text--darken-4"
                >
                  <blockquote
                    class="text-justify"
                    style="white-space:pre-line;"
                  >
                    <div
                      class="text-h6"
                    >
                      Instructions
                    </div>
                    {{ meal.strInstructions }}
                  </blockquote>
                </div>
              </div>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'CustomLayout',
  name: 'Id',
  data () {
    return {
      meal: {},
      meals: null,
      loading: true
    }
  },
  beforeMount () {
    if (this.$route.params.id) {
      this.fetchMeals()
    } else {
      this.$router.push('/categories')
    }
  },
  methods: {
    goBack () {
      window.history.back()
    },
    ...mapMutations({
      toggleMobileSearchBar: 'index.js/toggleMobileSearchBar'
    }),
    async fetchMeals () {
      this.meals = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.$route.params.id)).data.meals
      if (this.meals !== null) {
        this.meal = this.meals[0]
      } else {
        this.$router.push('/categories')
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .d-none {
    display: none;
  }
</style>
