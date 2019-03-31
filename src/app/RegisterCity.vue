<template>
  <div>
    <section>
      <p class="content">
        <b>Selecionada:</b>
        {{ selected }}
      </p>
      <b-field label="Encontre uma cidade">
        <b-autocomplete
          v-model="name"
          ref="autocomplete"
          :data="filteredDataArray"
          placeholder="ex: Londres"
          @select="option => selected = option"
        >
          <template slot="header">
            <a @click="showAddFruit">
              <span>Nova cidade...</span>
            </a>
          </template>
          <template slot="empty">Nenhum resultado para : {{name}}</template>
        </b-autocomplete>
      </b-field>
    </section>
    <list-cities></list-cities>
  </div>
</template>

<script>
import ListCities from "./ListCities.vue";
import moduleConsts from "./modules/forecastModuleConsts.es6";
import vue from "vue";
import vuex from "vuex";
import store from './store.es6'


export default {
  components: { ListCities },
  data() {
    return {
      name: "",
      selected: null
    };
  },
  computed: {
    ...vuex.mapState({
      _activeCity: state => state.ForecastModule.activeCity
    }),
    ...vuex.mapGetters({
      _cities: moduleConsts.CITIES_TO_SEARCH_GETTER
    }),
    cities: function() {
      return _cities;
    },
    filteredDataArray() {
      return this._cities.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    ...vuex.mapActions({
      _searchCity: moduleConsts.SEARCH_CITY_ACTION,
      _insertCity: moduleConsts.INSERT_CITY_ACTION
    }),
    searchCity: function(cityName) {
      let city = { name: cityName };
      return this._searchCity({ city });
    },
    showAddFruit() {
      this.$dialog.prompt({
        message: `Cidade`,
        inputAttrs: {
          placeholder: "ex: Londres",
          maxlength: 60,
          value: this.name
        },
        confirmText: "Adicionar",
        onConfirm: value => {
          this._insertCity(value);
          this.$refs.autocomplete.setSelected(value);
        }
      });
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      store.dispatch(moduleConsts.INIT_LOAD_CITIES_ACTION);     
    })
  }
};
</script>

<style>
.search-box {
  margin: 50px;
}
</style>
