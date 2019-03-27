<template>
  <div>  
    <h1 class="col-xs-9">{{ Title }}</h1>
    <label class="col-xs-3">Cadastrar Cidade</label>
    <search-bar></search-bar>
    <city-forecast></city-forecast>
    <week-city-forecast></week-city-forecast>
    <list-cities></list-cities>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import CityForecast from './CityForecast.vue'
import WeekCityForecast from './WeekCityForecast.vue'
import ListCities from './ListCities.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    CityForecast,
    WeekCityForecast,
    ListCities
  },
  data() {
    return {
      Title: 'Clima'
    };
  }
};
</script>
