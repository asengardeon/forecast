import Vuex from 'vuex'
import Vue from 'vue'
import ForecastModule from "./modules/forecastModule.es6"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ForecastModule
  }
})

export default store;
