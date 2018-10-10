const state = {
  matchInplay: [],
  matchPreagme: [],
}
const getters = {
  getMatchInPlay: state => {
    return state.matchInplay
  },
  geMatchPreagme: state => {
    return state.matchPreagme
  },
}
const mutations = {
  mtMatchInPlay(state, payload) {
    state.matchInplay = payload
  },
  mtMatchPreagme(state, payload) {
    state.matchPreagme = payload
  },
}
const actions = {
  setMatchInPlay({commit}, value) {
    commit('mtMatchInPlay', value)
  },
  setMatchPreagme({commit}, value) {
    commit('mtMatchPreagme', value)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
