import axios from 'axios';

const APPI_KEY = 'eb8b1a9405e659b2ffc78f0a520b1a46';

const findCities = city => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APPI_KEY}&units=metric`,
    responseType: 'json'
  });
};

const findCitiesById = id => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${APPI_KEY}&units=metric`,
    responseType: 'json'
  });
};

const loadRecordedCities = () => {
  return axios({
    method: 'get',
    url: `http://localhost:5002/cities`,
    responseType: 'json'
  });
};

export {
  findCities,
  loadRecordedCities,
  findCitiesById
};

