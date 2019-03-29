<template>
    <div class="row">
        <div class="col col-xs-auto">
            Cidade: 
        </div>
        <div class="col col-xs-auto">
            <dropdown
                :options="getDropdownValues"
                v-on:selected="validateSelection"
                :disabled="false"
                placeholder="Pesquise uam cidade aqui"                >
            </dropdown>
        </div>
    </div>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown';
import vue from 'vue';
import vuex from 'vuex';
import moduleConsts from "./modules/forecastModuleConsts.es6";


export default {
    components:{
       Dropdown 
    },
    data(){
        return {
            disabled: false
        }
    },
    methods:{
        validateSelection: function(id){
            console.info("selecionou "+id);
        },
    },
    computed: {
        ...vuex.mapGetters({
            cities: [moduleConsts.LOADED_CITIES_GETTER],
            getMock: [moduleConsts.GET_MOCK_GETTER]
        }),
       
        getDropdownValues: function(){
            let cits = this.cities;
            if(cits){
                return cits.map(data => ({ id: data.city.id, name: data.city.name }));
            }else{
                return [].push(getMock);
            }
        }
    }

};
</script>

<style>

</style>




