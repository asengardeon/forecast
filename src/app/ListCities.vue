<template>
  <ul>
    <li v-for="city in cities" :key="city.id">
      <list-city-detail :city="city"></list-city-detail>>
    </li>
  </ul>
</template>

<script>
import * as CityService from "./services/city.service.js";
import ListCityDetail from "./ListCityDetail.vue";
import vuex,{ mapActions } from "vuex";
import moduleConsts from "./modules/forecastModuleConsts.es6";
import store from './store.es6'

export default {
  name: "ListCities",
  components: {
    ListCityDetail
  },
  computed: {
    ...vuex.mapState({
      activeCity: state => state.ForecastModule.activeCity
    }),
    ...vuex.mapGetters({
      cities: [moduleConsts.LOADED_CITIES_GETTER]
    })
  },
  methods: {
    findCity: function(){
      this._findCity(this.activeCity);
    },
    ...vuex.mapActions({
      _findCity: [moduleConsts.SEARCH_CITY_ACTION]
    })
  }
};
</script>

<style>
</style>
