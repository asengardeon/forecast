<template>
    <div>
        <label> Nome: {{city.name}}</label>
        <label> País: {{city.country}}</label>
        <label> População: {{city.population}}</label>        
    </div>    
</template>

<script>
export default {
 name: "ListCityDetail",
 props:{
     city: {
         type: Object
     }
 }
}
</script>

<style>

</style>
