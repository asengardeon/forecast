<template>
  <div class="row">
    <div class="col col-xs-auto">Cidade:</div>
    <div class="col col-xs-auto">
      <dropdown
        :options="getDropdownValues"
        v-on:selected="validateSelection"
        :disabled="false"
        placeholder="Pesquise uam cidade aqui"
      ></dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import vue from "vue";
import vuex from "vuex";
import moduleConsts from "./modules/forecastModuleConsts.es6";

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      disabled: false
    };
  },
  methods: {
    validateSelection: function(city) {
        if(city.id){
           this._findCity({city: city, byId: true});
        }
    },
    ...vuex.mapActions({
      _findCity: moduleConsts.SEARCH_CITY_ACTION
    })
  },
  computed: {
    ...vuex.mapGetters({
      cities: moduleConsts.CITIES_TO_SEARCH_GETTER
    }),

    getDropdownValues: function() {
      return this.cities;
    }
  }
};
</script>

<style>
</style>




