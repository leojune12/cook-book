<template>
  <div>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <div
          v-if="cuisines.length"
          class="grey--text text--darken-4"
        >
          Select Cuisine
        </div>
        <v-slide-group
          v-model="slideGroup"
          class="py-4"
          mandatory
          center-active
          :show-arrows="$vuetify.breakpoint.mdAndUp"
          light
          prev-icon="mdi-chevron-left-circle-outline"
          next-icon="mdi-chevron-right-circle-outline"
          @change="selectCuisine(slideGroup)"
        >
          <v-slide-item
            v-for="cuisine in cuisines"
            :key="cuisine.strArea"
            v-slot="{ active, toggle }"
            v-ripple
          >
            <span
              :class="active ? 'active-chip' : undefined"
              class="chip"
              @click="toggle"
            >
              <v-avatar
                left
                color="grey lighten-3"
              >
                <v-img
                  :src="'/images/flags/' + cuisine.strArea + '.png'"
                  :alt="cuisine.strArea"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader
                      type="image"
                    />
                  </template>
                </v-img>
              </v-avatar>
              <span
                class="pl-1 pr-3"
              >
                {{ cuisine.strArea }}
              </span>
            </span>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <CuisineMeals :cuisine="selectedCuisine.strArea" />
  </div>
</template>

<script>
import CuisineMeals from '../../components/CuisineMeals'
export default {
  layout: 'CustomLayout',
  name: 'Index',
  components: {
    CuisineMeals
  },
  async fetch () {
    this.cuisines = (await this.$axios.$get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')).meals
  },
  data () {
    return {
      slideGroup: 0,
      cuisines: [],
      selectedCuisine: {
        strArea: 'American'
      },
      activeCuisine: null
    }
  },
  methods: {
    // callback function
    filterCuisine (cuisine) {
      return cuisine.strArea.toString() === this.activeCuisine.strArea.toString()
    },
    selectCuisine (id) {
      this.activeCuisine = this.cuisines[id]
      this.selectedCuisine = this.cuisines.find(this.filterCuisine)
    }
  }
}
</script>

<style scoped>
  .chip {
    margin-right: 8px;
    margin-top: 1px;
    border: lightgray 1px solid;
    border-radius: 27px;
    cursor: pointer;
    padding: 2px;
  }
  .active-chip {
    margin-top: 0;
    color: #E65100;
    border: #FF6F00 2px solid;
  }
</style>
