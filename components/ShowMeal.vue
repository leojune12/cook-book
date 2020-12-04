<template>
  <v-card
    tile
  >
    <v-container
      fluid
      class="pa-0"
    >
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          md="8"
        >
          <div
            :style="{ backgroundImage:`url(${bgImage})` }"
            :class="{ 'bg-image':$vuetify.breakpoint.mdAndUp }"
          >
            <div
              :class="[ $vuetify.breakpoint.mdAndUp ? 'bg-blur-full-height' : 'bg-blur' ]"
            >
              <v-btn
                icon
                large
                class="close-btn"
                @click="toggleMealDialog"
              >
                <v-icon
                  color="grey darken-4"
                >
                  mdi-close
                </v-icon>
              </v-btn>
              <v-progress-circular
                v-if="loading"
                indeterminate
                class="progress-circular"
              />
              <v-img
                v-else
                :src="meal.strMealThumb"
                contain
                :class="{ 'meal-image':$vuetify.breakpoint.mdAndUp }"
              />
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <div
            :class="{ 'meal-description':$vuetify.breakpoint.mdAndUp }"
          >
            <v-skeleton-loader
              type="article"
              :loading="loading"
            >
              <div class="pa-4">
                <div class="text-md-h4 text-h4 grey--text text--darken-4">
                  {{ meal.strMeal }}
                </div>
                <div class="grey--text text--darken-2 mb-5 text-body-2">
                  <div>
                    <span>Category: {{ meal.strCategory }}</span> &bullet; <span>Cuisine: {{ meal.strArea }}</span>
                  </div>
                </div>
                <v-divider />
                <v-row no-gutters>
                  <v-col class="py-1">
                    <v-btn
                      :href="meal.strYoutube"
                      target="_blank"
                      text
                      color="grey darken-2"
                      block
                    >
                      <v-icon
                        class="mr-1"
                      >
                        mdi-youtube
                      </v-icon>
                      Watch
                    </v-btn>
                  </v-col>
                  <v-col class="py-1">
                    <v-btn
                      :href="meal.strSource"
                      target="_blank"
                      text
                      color="grey darken-2"
                      block
                    >
                      <v-icon
                        class="mr-1"
                      >
                        mdi-open-in-new
                      </v-icon>
                      Source
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider class="mb-3" />
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
                        <v-menu
                          offset-x
                          open-on-hover
                          max-width="150"
                          max-height="150"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="green darken-2"
                              v-bind="attrs"
                              text
                              v-on="on"
                            >
                              {{ meal['strIngredient'+n] }}
                            </v-btn>
                          </template>
                          <v-card
                            height="150"
                            width="150"
                          >
                            <v-img
                              :src="'https://www.themealdb.com/images/ingredients/' + meal['strIngredient'+n] + '.png'"
                              height="150"
                              width="150"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-2"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-card>
                        </v-menu>
                      </td>
                      <td
                        class="pl-3"
                      >
                        {{ meal['strMeasure'+n] }}
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
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ShowMeal',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    meal: Object
  },
  data () {
    return {
      loading: true,
      ingredientPopover: false
    }
  },
  computed: {
    bgImage () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return this.meal.strMealThumb
      } else {
        return ''
      }
    }
  },
  watch: {
    meal () {
      this.loading = Object.keys(this.meal).length === 0
    }
  },
  methods: {
    ...mapMutations([
      'toggleMealDialog'
    ])
  }
}
</script>

<style scoped>
  .bg-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .bg-blur-full-height {
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.8); /* Black w/opacity/see-through */
    position: relative;
    height: 100vh;
  }
  .bg-blur {
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.8); /* Black w/opacity/see-through */
    position: relative;
    height: 100vw;
  }
  .close-btn {
    position: absolute;
    top: 16px;
    left: 16px;
    cursor: pointer;
    z-index: 999;
    background-color: #E4E6EB;
  }
  .progress-circular {
    color: #E4E6EB;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -12px;
  }
  .meal-image {
    height: 100vh;
  }
  .meal-description {
    height: 100vh;
    overflow-y: auto;
  }
</style>
