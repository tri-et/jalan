import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import './components/_globals'
import GetData from './modules/GetData'

let getdata = new GetData()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      GetData: getdata,
    }
  },
  mounted() {
    // get width of browser at first load
    window.addEventListener('load', () => {
      this.browserWidth = window.innerWidth
      this.$root.$emit('browserResize', window.innerWidth)
    })

    //get width of browser during resizing
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.browserWidth = window.innerWidth
        this.$root.$emit('browserResize', window.innerWidth)
      })
    })
  },
}).$mount('#app')
