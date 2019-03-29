
import consts from "./forecastModuleConsts.es6"
import * as CityService from "../services/city.service.js";
import mock from "./mockItem.es6"

const state = {
  activeCity: undefined,
  cities: []
}

const mutations = {
  [consts.SEARCH_CITY_MUTATION](state, mutationState) {
    state.activeCity = mutationState.city;
    if (!state.cities.find(city => city.id == mutationState.city.id)){
      state.cities.push( mutationState.city );
    }
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
  [consts.ACTIVE_CITY_GETTER](state) {
    return  state.activeCity;
  },
  [consts.LOADED_CITIES_GETTER](state) {
    return  state.cities;
  },
  [consts.GET_MOCK_GETTER](state) {
    return mock
  }  
}

export default {
  state,
  actions,
  mutations,
  getters
}
