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
        <div class="grey--text text--darken-4 ml-md-16 ml-4">
          Select Category
        </div>
        <v-slide-group
          v-model="slideGroup"
          class="pa-4"
          mandatory
          center-active
          :show-arrows="$vuetify.breakpoint.mdAndUp"
          light
          @change="activateCategory(slideGroup+1)"
        >
          <v-slide-item
            v-for="category in categories"
            :key="category.idCategory"
            v-slot="{ toggle }"
            v-ripple
          >
            <div
              class="mx-3"
              style="height: 100.5px; width: 100px; cursor: pointer"
              @click="toggle"
            >
              <v-img
                height="62.5"
                contain
                :src="category.strCategoryThumb"
                class="rounded"
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader
                    type="image"
                  />
                </template>
              </v-img>
              <div
                class="grey--text text--darken-4 text-center py-1"
              >
                {{ category.strCategory }}
              </div>
              <hr
                :id="'hr-' + category.idCategory"
                :class="{ 'hr-selected' : category.idCategory === '1' }"
              >
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'CustomLayout',
  async fetch () {
    this.categories = (await this.$axios.$get('https://www.themealdb.com/api/json/v1/1/categories.php')).categories
    // eslint-disable-next-line no-console
    console.log(this.categories)
  },
  data () {
    return {
      slideGroup: 0,
      categories: [],
      lastActiveCategoryId: 1
    }
  },
  methods: {
    activateCategory (id) {
      document.getElementById('hr-' + id).classList.add('hr-selected')
      if (this.lastActiveCategoryId !== null) {
        document.getElementById('hr-' + this.lastActiveCategoryId).classList.remove('hr-selected')
      }
      this.lastActiveCategoryId = id
    }
  }
}
</script>

<style scoped>
  hr {
    border: 3px solid #FF8F00;
    transform-origin: center;
    transform: scaleX(0);
  }
  .hr-selected {
    transform: scaleX(1);
    transition: transform 0.5s;
  }
</style>
