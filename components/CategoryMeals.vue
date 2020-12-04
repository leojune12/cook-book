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
        <span>{{ category }} Dishes</span>
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
          <v-card
            @click="fetchMealToShow(meal.idMeal)"
          >
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
                class="card-title"
              >
                {{ meal.strMeal }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CategoryMeals',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    category: String
  },
  async fetch () {
    this.meals = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.defaultCategory)).data.meals
  },
  data () {
    return {
      meals: [],
      defaultCategory: 'beef'
    }
  },
  watch: {
    category () {
      this.fetchMeals()
    }
  },
  methods: {
    ...mapMutations([
      'toggleMealDialog',
      'setMealToShow'
    ]),
    async fetchMeals () {
      this.meals = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.category)).data.meals
    },
    async fetchMealToShow (mealId) {
      this.toggleMealDialog()
      this.meal = (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId)).data.meals[0]
      this.openMealDialog()
    },
    openMealDialog () {
      this.setMealToShow(this.meal)
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .card-title {
    word-break: normal;
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%);
  }
</style>
