<template>
     
</template>

<script>
export default {
 name: "ListCityDetail",
 props:{city:{
                type: String,
                required: false  
            }
 },
 computed: {
     getName: function(){
         return this.city ? this.city.name : "";
     },
     getId: function(){
         return this.city ? this.city.id : "";
     }
 }
}
</script>

<style>

</style>
