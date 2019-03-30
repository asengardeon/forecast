<template>
  <div v-if="activeCity">
    <h2>Próximas 5 medições</h2>
    <div class="row">
      <div class="col col-xs-12" v-for="fore in forecasts">
        Dia: {{fore.day}}
        Temperatura: {{fore.temp}} graus
      </div>
    </div>
  </div>
</template>

<script>
import vue from 'vue';
import vuex from 'vuex';
import moduleConsts from "./modules/forecastModuleConsts.es6";

export default {
    computed: {
      ...vuex.mapGetters({
            activeCity: [moduleConsts.ACTIVE_CITY_GETTER]       
        }),
        city: function(){
          return this.activeCity;
        },
        forecasts: function(){
            let cit = this.city;
            let nexts = this.city;
            let result = [];
            for (let index = 0; index < 5; index++) {
              result.push(nexts.list[index]);              
            }
            return result.map(data => {
              let date = new Date(data.dt *1000);
              let dt = date.toGMTString();
              return {day: dt, temp: data.main.temp}
            });            
        },
    }
};
</script>

<style>
</style>
