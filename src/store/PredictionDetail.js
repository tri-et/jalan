const state = {
  predictionType: 'inplay',
  dataPrediction: {},
}
const getters = {
  getPredictionType: state => {
    return state.predictionType
  },
  getDataPrediction: state => {
    return state.dataPrediction
  },
}
const mutations = {
  mtPredictionType(state, payload) {
    state.predictionType = payload
  },
  mtDataPrediction(state, payload) {
    state.dataPrediction = payload
  },
}
const actions = {
  setPredictionType({commit}, value) {
    commit('mtPredictionType', value)
  },
  setDataPrediction({commit}, value) {
    commit('mtDataPrediction', value)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
