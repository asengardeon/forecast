<template>
  <div>
    <div class="container">
      <div class="row title-row">
        <div class="col col-sm"></div>
        <div class="col col-sm">
          <h1 class="title">{{ Title }}</h1>
        </div>
        <div class="col col-sm">
          <label class="col col-xs input-cidade"> <router-link :to="{ path: 'register' }">Cadastrar Cidade</router-link> </label>
        </div>
      </div>
      <div class="row search-bar-row">
        <search-bar></search-bar>
      </div>
      <div class="row city-forecast-row">
        <city-forecast></city-forecast>
      </div>
      <div class="row week-city-forecast-row">
        <week-city-forecast></week-city-forecast>        
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import CityForecast from "./CityForecast.vue";
import WeekCityForecast from "./WeekCityForecast.vue";
import moduleConsts from "./modules/forecastModuleConsts.es6";
import store from './store.es6'
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)


export default {
  name: "App",
  components: {
    SearchBar,
    CityForecast,
    WeekCityForecast
  },
  data() {
    return {
      Title: "Clima"
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      store.dispatch(moduleConsts.INIT_LOAD_CITIES_ACTION);     
    })
  }
};
</script>

<style>
.title-row {
  margin: 50px;
}

.search-bar-row {
  margin: 25px;
}

.city-forecast-row {
  margin: 25px;
}

.week-city-forecast-row {
  margin: 25px;
}
</style>

