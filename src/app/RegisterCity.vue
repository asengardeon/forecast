<template>
 <div>
    <form>
        <div class="form-row search-box">
            <div class="col">
                <input
                type="text"
                class="form-control"
                id="txtSearchCity"
                aria-describedby="serachCity"
                placeholder="Digite o nome de uma cidade para procurar"
                >
            </div>
            <div class="col">
                <div class="btn btn-primary">Pesquisar</div>
            </div>
        </div>
    </form>
    <list-cities></list-cities>
 </div>
</template>

<script>
import ListCities from "./ListCities.vue";

export default {
components:{ListCities}

};
</script>

<style>
.search-box{
    margin: 50px;
}
</style>
