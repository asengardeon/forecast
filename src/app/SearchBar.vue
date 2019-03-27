<template>
    <dropdown
        :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
        v-on:selected="validateSelection"
        :disabled="false"
        placeholder="Please select an option"
        class="col-sm-8">
    </dropdown>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown';

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
        validateSelection: () =>{

        },

    },
    computed: {
        getDropdownValues: () =>{

        }
    }

};
</script>

<style>

</style>




