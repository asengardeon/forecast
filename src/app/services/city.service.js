import axios from 'axios';

const findCities = city => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eb8b1a9405e659b2ffc78f0a520b1a46&units=metric`,
    responseType: 'json'
  });
};

export {
  findCities
};

