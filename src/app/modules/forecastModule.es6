
import consts from "./forecastModuleConsts.es6"
import * as CityService from "../services/city.service.js";

const state = {
  activeCity: "Blumenau",
  cities: []
}

const mutations = {
  [consts.SEARCH_CITY_MUTATION](state, mutationState) {
    state.activeCity = mutationState.city;
    state.cities.push( mutationState.city);
  }
}
const actions = {
  [consts.SEARCH_CITY_ACTION](store, city) {
    let vals = CityService.findCities(city);
    vals.then(
      function result(response) {
        store.commit(consts.SEARCH_CITY_MUTATION, {city: response.data});
      }
    );
  }
}
const getters = {
  [consts.ACTIVE_CITY](state) {
    return  state.cities;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
