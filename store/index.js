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
  search: ''
})

export const mutations = {
  // add (state, text) {
  //   state.list.push({
  //     text,
  //     done: false,
  //     id: Date.now()
  //   })
  // },
  // remove (state, todo) {
  //   state.list = state.list.filter(item => item.id !== todo.id)
  // },
  toggleMobileSearchBar (state) {
    state.mobileSearchBar = !state.mobileSearchBar
    state.search = ''
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  updateSearch (state, text) {
    state.search = text
  }
}
