export const state = () => ({
  navigationLinks: [
    {
      to: '/',
      name: 'Home'
    },
    {
      to: '/categories',
      name: 'Categories'
    },
    {
      to: '/cuisines',
      name: 'Cuisines'
    },
    {
      to: '/about',
      name: 'About'
    }
  ],
  mobileSearchBar: false,
  drawer: false,
  search: '',
  mealDialog: false,
  mealToShow: {}
})

export const mutations = {
  toggleMobileSearchBar (state) {
    state.mobileSearchBar = !state.mobileSearchBar
    state.search = ''
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  updateSearch (state, text) {
    state.search = text
  },
  toggleMealDialog (state) {
    state.mealDialog = !state.mealDialog
  },
  resetMealToShow (state) {
    state.mealToShow = {}
  },
  setMealToShow (state, meal) {
    state.mealToShow = meal
  }
}
