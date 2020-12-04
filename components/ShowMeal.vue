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
                <v-divider class="mb-5" />
                <div
                  class="grey--text text--darken-4 mb-5"
                >
                  <div
                    class="text-h6 mb-3"
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
                              color="amber darken-4"
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
                  <!--<blockquote
                    class="text-justify"
                    style="white-space:pre-line;"
                  >
                    <div
                      class="text-h6"
                    >
                      Instructions
                    </div>
                    {{ meal.strInstructions }}
                  </blockquote>-->
                  <!--<v-list
                    v-model="list"
                  >
                    <v-list-item-group
                      multiple
                    >
                      <template v-for="(instruction, i) in instructions">
                        <v-divider
                          v-if="!instruction"
                          :key="`divider-${i}`"
                        ></v-divider>

                        <v-list-item
                          v-else
                          :key="`item-${i}`"
                          :value="instruction"
                          active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"
                        >
                          <template v-slot:default="{ active }">
                            <v-list-item-content>
                              <v-list-item-title v-text="instruction"></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                              <v-checkbox
                                :input-value="active"
                                color="deep-purple accent-4"
                              ></v-checkbox>
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list>-->
                  <div
                    class="text-h6 mb-3"
                  >
                    Instructions
                  </div>
                  <v-item-group multiple>
                    <v-container
                      fluid
                      class="pa-0"
                    >
                      <v-row
                        no-gutters
                        justify="center"
                        align="center"
                      >
                        <v-col
                          v-for="(n, index) in instructions"
                          :key="index"
                          cols="12"
                          :class="{ 'display-none':n.length === 0 || n === ' ' }"
                        >
                          <v-item v-slot="{ active, toggle }">
                            <div
                              class="d-flex"
                            >
                              <v-checkbox
                                :input-value="active"
                                color="green darken-2"
                                hide-details
                                class="mt-0"
                                @click="toggle"
                              ></v-checkbox>
                              <span
                                class="mb-3 mt-1"
                                :class="{ 'green--text text--darken-2' : active }"
                              >{{ n }}</span>
                            </div>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
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
      ingredientPopover: false,
      instructions: [],
      list: true
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
      if (Object.keys(this.meal).length !== 0) {
        this.loading = false
        this.instructions = this.meal.strInstructions.split('\r\n')
      } else {
        this.loading = true
      }
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
  .display-none {
    display: none;
  }
</style>
