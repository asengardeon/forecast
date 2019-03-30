
import consts from "./forecastModuleConsts.es6"
import * as CityService from "../services/city.service.js";

const state = {
  activeCity: undefined,
  cities: [],
  searchCities: []
}

const mutations = {
  [consts.SEARCH_CITY_MUTATION](state, mutationState) {
    state.activeCity = mutationState.city;
    if (!state.cities.find(city => city.id == mutationState.city.id)){
      state.cities.push( mutationState.city );
    }
  },
  [consts.INIT_LOAD_CITIES_MUTATION](state, mutationState){
    state.searchCities = mutationState.cities 
  }
}
const actions = {
  [consts.SEARCH_CITY_ACTION](store, {city, byId}) {
    let vals;
    if (byId){
      vals = CityService.findCitiesById(city.id);
    }else{
      vals = CityService.findCities(city.name);
    }
    vals.then(
      function result(response) {
        store.commit(consts.SEARCH_CITY_MUTATION, {city: response.data});
      }
    );
  },
  [consts.INIT_LOAD_CITIES_ACTION](store){
    let vals = CityService.loadRecordedCities();
    vals.then(
      function result(response){
        store.commit(consts.INIT_LOAD_CITIES_MUTATION, response.data)
      }
    )
  }
}
const getters = {
  [consts.ACTIVE_CITY_GETTER](state) {
    return  state.activeCity;
  },
  [consts.LOADED_CITIES_GETTER](state) {
    return  state.cities;
  },
  [consts.CITIES_TO_SEARCH_GETTER](state){
    return state.searchCities
  }  
}

export default {
  state,
  actions,
  mutations,
  getters
}
