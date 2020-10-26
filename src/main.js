import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // arquivo criado acima
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})



new Vue({
  el: '#app',
  vuetify,
  store,
  render: h => h(App)
})

