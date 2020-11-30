<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      md="8"
    >
      <div
        v-if="meals.length"
        class="grey--text text--darken-4"
      >
        <span>{{ cuisine }} Dishes</span>
        <span>
          ({{ meals.length }} item<span v-if="meals.length > 1">s</span>)
        </span>
      </div>
      <v-row>
        <v-col
          v-for="meal in meals"
          :key="meal.idMeal"
          cols="12"
          md="4"
        >
          <NuxtLink
            :to="'/meal/' + meal.idMeal"
          >
            <v-card>
              <v-img
                class="align-end rounded"
                :src="meal.strMealThumb"
                height="200px"
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader
                    type="image"
                  />
                </template>
                <v-card-title
                  style="word-break: normal; color: white; background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%);"
                >
                  {{ meal.strMeal }}
                </v-card-title>
              </v-img>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'CuisineMeals',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cuisine: String
  },
  async fetch () {
    this.meals = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.defaultCuisine)).data.meals
  },
  data () {
    return {
      meals: [],
      defaultCuisine: 'American'
    }
  },
  watch: {
    cuisine () {
      this.fetchMeals()
    }
  },
  methods: {
    async fetchMeals () {
      this.meals = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.cuisine)).data.meals
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
