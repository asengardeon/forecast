<template>
  <div>
    <div class="container">
      <div class="row title-row">
        <div class="col col-sm"></div>
        <div class="col col-sm">
          <h1 class="title">{{ Title }}</h1>
        </div>
        <div class="col col-sm">
          <label class="col col-xs input-cidade">Cadastrar Cidade</label>
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
        <list-cities></list-cities>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import CityForecast from "./CityForecast.vue";
import WeekCityForecast from "./WeekCityForecast.vue";
import ListCities from "./ListCities.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    CityForecast,
    WeekCityForecast,
    ListCities
  },
  data() {
    return {
      Title: "Clima"
    };
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

