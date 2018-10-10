import Vue from 'vue'
import Vuex from 'vuex'
import predictiondetail from './PredictionDetail'
import inplay from './InPlay'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    predictiondetail,
    inplay,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
