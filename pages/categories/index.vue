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
          v-if="categories.length"
          class="grey--text text--darken-4"
        >
          Select Category
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
          @change="selectCategory(slideGroup+1)"
        >
          <v-slide-item
            v-for="category in categories"
            :key="category.idCategory"
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
                  :src="category.strCategoryThumb"
                  :alt="category.strCategory"
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
                {{ category.strCategory }}
              </span>
            </span>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <CategoryMeals :category="selectedCategory.strCategory" />
  </div>
</template>

<script>
import CategoryMeals from '@/components/CategoryMeals'
export default {
  layout: 'CustomLayout',
  components: {
    CategoryMeals
  },
  async fetch () {
    this.categories = (await this.$axios.$get('https://www.themealdb.com/api/json/v1/1/categories.php')).categories
  },
  data () {
    return {
      slideGroup: 0,
      categories: [],
      selectedCategory: {
        strCategory: 'Beef'
      },
      idSelected: null
    }
  },
  methods: {
    // callback function
    filterCategories (category) {
      return category.idCategory.toString() === this.idSelected.toString()
    },
    selectCategory (id) {
      this.idSelected = id
      this.selectedCategory = this.categories.find(this.filterCategories)
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
