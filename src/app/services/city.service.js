import jQuery from 'jquery';
const CityService = () => {
  this.findCities = city => {
    const settings = {
      async: true,
      crossDomain: true,
      url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eb8b1a9405e659b2ffc78f0a520b1a46&units=metric%20`,
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'Postman-Token': '0c9a41ed-ed0a-48a5-9095-d89eee104b71'
      }
    };
    jQuery.ajax(settings);
  };
};

export default CityService;
