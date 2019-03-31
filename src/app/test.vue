<template>
    <section>
        <b-tabs position="is-centered" class="block">
            <!-- <b-tab-item v-for="(day, index) in items" label="da">
                </b-tab-item>             -->
        </b-tabs>
    </section>
</template>

<script>
export default {
    computed: {
        days: function(){
            Object.keys(byDay).map( (day, index) => (
              console.log(day, index, byDay[day])
            ));
        }
    }
}
</script>

<style>

</style>