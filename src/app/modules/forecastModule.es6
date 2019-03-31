import consts from "./forecastModuleConsts.es6"
import * as CityService from "../services/city.service.js";

const state = {
  activeCity: undefined,
  cityByLocation: undefined,
  cities: [],
  searchCities: []
}

const mutations = {
  [consts.SEARCH_CITY_MUTATION](state, mutationState) {
    state.activeCity = mutationState.city;
    if (!state.cities.find(city => city.id == mutationState.city.id)) {
      state.cities.push(mutationState.city);
    }
  },
  [consts.INIT_LOAD_CITIES_MUTATION](state, mutationState) {
    state.searchCities = mutationState.cities
  },
  [consts.CITY_BY_LOCATION_MUTATION](state, mutationState) {
    state.cityByLocation = mutationState.city
  }  
}
const actions = {
  [consts.SEARCH_CITY_ACTION](store, {
    city,
    byId
  }) {
    let vals;
    if (byId) {
      vals = CityService.findCitiesById(city.id);
    } else {
      vals = CityService.findCities(city.name);
    }
    vals.then(
      function result(response) {
        let city = response.data;
        store.commit(consts.SEARCH_CITY_MUTATION, {
          city
        });        
      }
    );
  },

  [consts.INIT_LOAD_CITIES_ACTION](store) {
    let vals = CityService.loadRecordedCities();
    vals.then(
      function result(response) {
        store.commit(consts.INIT_LOAD_CITIES_MUTATION, response.data)
      }
    )
  },
  [consts.INSERT_CITY_ACTION](store, city) {
    let vals = CityService.findCities(city);
    vals.then(
      function result(responseFind) {
        let cityFind = responseFind.data;
        CityService.insertCity(cityFind).then(responseInsert =>{
          if (responseInsert.data.id == cityFind.city.id){
            store.commit(consts.SEARCH_CITY_MUTATION, {
              cityFind
            });
          }
        });       
      }
    );    
  },
  [consts.CITY_BY_LOCATION_ACTION](store){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let vals = CityService.findCitiesByCoord(position.coords);
        vals.then(
          function result(responseFind) {
            let city = responseFind.data;
            store.commit(consts.CITY_BY_LOCATION_MUTATION, {
              city
            });
            if(!store.state.activeCity){
              store.commit(consts.SEARCH_CITY_MUTATION, {
                city
              });
            }
          })
      });
    }
  }
}

const getters = {
  [consts.ACTIVE_CITY_GETTER](state) {
    return state.activeCity;    
  },
  [consts.LOADED_CITIES_GETTER](state) {
    return state.cities;
  },
  [consts.CITIES_TO_SEARCH_GETTER](state) {
    return state.searchCities
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
