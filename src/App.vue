<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MedicalSpendViewOrig></MedicalSpendViewOrig>
    <br><br>
    <MedicalSpendView></MedicalSpendView>
  </div>
</template>
<script>
/* eslint-disable */
import MedicalSpendView from './components/MedicalSpendView.vue';
import MedicalSpendViewOrig from './components/MedicalSpendViewOrig.vue';

export default {
  name: 'app',
  components: {
    MedicalSpendView,
    MedicalSpendViewOrig,
  }
}
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
