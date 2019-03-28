<template>
    <div>
        <label> Nome: {{getName}}</label>
        <label> País: {{getCountry}}</label>
        <label> População: {{getPopulation}}</label>        
    </div>    
</template>

<script>
export default {
 name: "ListCityDetail",
 props:['city'],
 computed: {
     getName: function(){
         return this.city.city.name;
     },
     getCountry: function(){
         return this.city.city.country;
     },
     getPopulation: function(){
         return this.city.city.population
     }
 }
}
</script>

<style>

</style>
