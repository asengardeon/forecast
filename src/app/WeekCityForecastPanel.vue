<template>
  <section>
    <b-tabs position="is-centered" class="block">
      <b-tab-item v-for="item in getByDay" :key="item.date" :label="item.date">
        <div class="row weatherRow">
          <time class="timestamp col-3">Data e hora</time>
          <div class="icon col-3"></div>
          <div class="temp col-4">Temperatura em graus</div>
        </div>
        <div v-for="detail in item.data" :key="detail.dt">
          <week-city-forecast-panel-item :item="detail"></week-city-forecast-panel-item>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import moment from "moment";
import WeekCityForecastPanelItem from "./WeekCityForecastPanelItem.vue";

function groupWeatherByDay(list) {
  const days = new Map(); // use Map as need we to maintain insertion order

  list.forEach(w => {
    const day = moment(w.dt * 1000).format("LL");
    if (!days[day]) days[day] = [];
    days[day].push(w);
  });

  return days;
}

export default {
  props: ["city"],
  components: { WeekCityForecastPanelItem },
  computed: {
    getByDay: function() {
      let byDay = groupWeatherByDay(this.city.list);
      let days = [];
      Object.keys(byDay).map((day, index) =>
        //   console.log(day, index, byDay[day]);
        days.push({ date: day, data: byDay[day] })
      );
      return days;
    }
  }
};
</script>

<style>
</style>
