<template>
  <vue-simple-suggest
    ref="vueSimpleSuggest"
    v-model="search"
    display-attribute="strMeal"
    value-attribute="strMeal"
    :list="fetchMeals"
    :max-suggestions="5"
    :debounce="500"
    :class="{ 'display-block':!$vuetify.breakpoint.mdAndUp }"
    @select="closeMobileSearchBar"
  >
    <v-text-field
      v-if="$vuetify.breakpoint.mdAndUp"
      id="search-bar"
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      dense
      single-line
      outlined
      rounded
      :placeholder="searchPlaceholder"
      hide-details
      full-width
      class="search-bar"
      color="amber darken-3"
      @click:append="toggleMobileSearchBar"
    />
    <v-text-field
      v-else
      v-model="search"
      append-icon="mdi-close"
      prepend-inner-icon="mdi-magnify"
      dense
      single-line
      outlined
      rounded
      :placeholder="searchPlaceholder"
      hide-details
      full-width
      class="search-bar"
      color="amber darken-3"
      @click:append="toggleMobileSearchBar"
    />
    <div slot="suggestion-item" slot-scope="{ suggestion }">
      <v-list-item
        @click="fetchMealToShow(suggestion.idMeal)"
      >
        <v-list-item-avatar
          class="my-2"
        >
          <v-img :src="suggestion.strMealThumb">
            <template v-slot:placeholder>
              <v-skeleton-loader
                type="image"
              />
            </template>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content
          class="py-0"
        >
          <v-list-item-title v-text="suggestion.strMeal" />
          <v-list-item-subtitle>
            <span>{{ suggestion.strCategory }} &bullet; {{ suggestion.strArea }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </vue-simple-suggest>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS
import { mapMutations } from 'vuex'
export default {
  name: 'CustomVueSimpleSuggest',
  components: {
    VueSimpleSuggest
  },
  data () {
    return {
      searchPlaceholder: 'Search recipe by name',
      meal: {}
    }
  },
  computed: {
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('updateSearch', value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'toggleMobileSearchBar',
      'toggleMealDialog',
      'setMealToShow'
    ]),
    async fetchMeals () {
      return (await this.$axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.search)).data.meals
    },
    closeMobileSearchBar () {
      this.$refs.vueSimpleSuggest.hideList()
      if (this.$vuetify.breakpoint.mdAndUp) {
        document.getElementById('search-bar').blur()
      }
      setTimeout(this.toggleMobileSearchBar, 400)
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
/*remove default scrollbar in vuetify*/
html {
  overflow-y: auto !important;
}
button {
  outline: none !important;
}
a {
  text-decoration: none !important;
  color: gray !important;
}
li {
  list-style-type: none;
  color: gray;
}
.vue-simple-suggest >>> input {
    border: none !important;
}
.vue-simple-suggest >>> ul {
    background-color: #FEFEFE !important;
}
.vue-simple-suggest >>> .selected .v-list-item__title {
    color: white !important;
}
.vue-simple-suggest >>> .selected .v-list-item__subtitle {
    color: #F5F5F5 !important;
}
.vue-simple-suggest >>> .suggestions {
    /* It's improtant to have a cpecific pivot point for transition:*/
    opacity: 1;
}

.vue-simple-suggest >>> .vue-simple-suggest-enter-active.suggestions {
    /* Transition length here:*/
    transition: opacity .3s;
}

.vue-simple-suggest >>> .vue-simple-suggest-leave-active.suggestions {
    /* Transition length here:*/
    transition: opacity 500ms;
}

.vue-simple-suggest >>> .vue-simple-suggest-enter.suggestions {
    /* Transition rule for "disengaged" element:*/
    opacity: 0;
}

.vue-simple-suggest >>> .vue-simple-suggest-leave-to.suggestions {
    /* Transition rule for "disengaged" element:*/
    opacity: 0;
}
  .display-block {
    width: 100% !important;
  }
</style>
