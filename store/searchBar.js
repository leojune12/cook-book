export const state = () => ({
  mobileSearchBar: false,
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
  updateSearch (state, text) {
    state.search = text
  }
}
