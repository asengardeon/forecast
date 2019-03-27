<template>
    <ul>
        <li v-for="city in cities" :key="city.id">
            <list-city-detail :city="city"></list-city-detail>
            >        
        </li>
    </ul>
</template>

<script>

import CityService from "./services/city.service.js" 
import ListCityDetail from "./ListCityDetail.vue"

export default {
    name: "ListCities",
    components:{
        ListCityDetail
    },
    data(){
        return {
            cities:[]
        }
    },
    computed: {
        
    },
    mounted(){
       let promise = CityService.getCities("Blumenau");
       promise.done(function (response) {
        console.log(response);
         this.cities.push(response.city);
      }) 
    }
}

</script>

<style>

</style>
