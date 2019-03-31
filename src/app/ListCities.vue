<template>
  <div>
    <list-city-detail :city="seekedCity"></list-city-detail>
    <h2>Cidades cadastradas</h2>
    <b-table :data="cities" :columns="columns"></b-table>
  </div>
</template>

<script>
import * as CityService from "./services/city.service.js";
import ListCityDetail from "./ListCityDetail.vue";
import vuex, { mapActions } from "vuex";
import moduleConsts from "./modules/forecastModuleConsts.es6";
import store from "./store.es6";

export default {
  name: "ListCities",
  props: {
    seekedCity: {
      type: Object,
      required: false
    }
  },
  components: {
    ListCityDetail
  },
  computed: {
    ...vuex.mapState({
      activeCity: state => state.ForecastModule.activeCity
    }),
    ...vuex.mapGetters({
      _cities: [moduleConsts.CITIES_TO_SEARCH_GETTER]
    }),
    cities: function() {
      return this._cities;
    },
    columns: function() {
      return [
        {
          field: "id",
          label: "Identificador",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Cidade"
        }
      ];
    }
  },
  methods: {
    findCity: function() {
      this._findCity(this.activeCity);
    },
    ...vuex.mapActions({
      _findCity: [moduleConsts.SEARCH_CITY_ACTION]
    }),
    onChange: function() {
      // do nothing
    }
  }
};
</script>

<style>
</style>
