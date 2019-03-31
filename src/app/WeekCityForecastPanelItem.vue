<template>
  <div key="{time}" class="row weatherRow">
    <time class="timestamp col-3">{{time}}</time>
    <div class="icon col-3">
      <img :src="icon">
    </div>
    <div class="temp col-3">{{temp}}</div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    time: function() {
      return this.item.data.dt_txt;
    },
    temp: function() {
      return this.item.data.main.temp;
    },
    windSpeed: function() {
        return this.item.data.wind.speed;
    },
    icon: function() {
      let img = this.item.data.weather[0].icon;
      return `http://openweathermap.org/img/w/${img}.png`;
    }
  }
};
</script>

<style>
</style>
