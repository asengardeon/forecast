<template>
  <div v-if="city">
    <div class="row">
      <div class="col">
        <h2>{{getName}}</h2>
        <div class="row">
          <img v-show="lastForecastImage" :src="lastForecastImage">
        </div>
      </div>
      <div class="col">
        <label class="row">Umidade: {{getUmidity}}</label>
        <label class="row">Pressão: {{getPressure}}</label>
      </div>
    </div>
    <div class="row">
      <label class="col col-xs-6">{{lastForecast.main.temp}} graus</label>
    </div>
    <div class="row">
      <div class="col col-lg-12">O clima hoje está: {{weatherDescription}}</div>
    </div>
  </div>
</template>

<script>
import vue from "vue";
import vuex, { mapState } from "vuex";
import moduleConsts from "./modules/forecastModuleConsts.es6";

export default {
  name: "CityForecast",
  computed: {
    ...vuex.mapState({
      cityByCoord: state => state.ForecastModule.cityByLocation
    }),
    ...vuex.mapGetters({
      activeCity: [moduleConsts.ACTIVE_CITY_GETTER]
    }),
    city: function() {
      this.initCityByCoord();
      if (this.activeCity) {
        return this.activeCity;
      } 
    },
    getName: function() {
       return this.activeCity.city.name;
    },
    getUmidity: function() {
      if (!this.lastForecast) {
        return "";
      }
      return this.lastForecast.main.humidity;
    },
    getPressure: function() {
      if (!this.lastForecast) {
        return "";
      }
      return this.lastForecast.main.pressure;
    },
    lastForecast: function() {
      let cit = this.city;
      if (!cit) {
        return;
      }
      let last = cit.list[cit.list.length - 1];
      return last;
    },
    lastForecastImage: function() {
      let img = this.lastForecast.weather[0].icon;
      return `http://openweathermap.org/img/w/${img}.png`;
    },
    weatherDescription: function() {
      return this.lastForecast.weather[0].description;
    }
  },
  methods: {
      ...vuex.mapActions({
          initCityByCoord: moduleConsts.CITY_BY_LOCATION_ACTION
      })
  }
};
</script>

<style>
</style>
