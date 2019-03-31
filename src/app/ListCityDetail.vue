<template>
    <div>
        <div class=row>
            <div class="col-xs-4">
                <label> Identificador: </label>
            </div>
            <div class="col-xs-4">
                <label> Nome: </label>
            </div>
            <div class="col-xs-4">
                <div> Excluir</div>
            </div>        
        </div>
    </div>    
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
