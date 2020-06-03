<template>
  <div id="app">
    <VendingMachineAdmin />
  </div>
</template>

<script>
import VendingMachineAdmin from "./components/VendingMachineAdmin.vue";

export default {
  name: "App",
  components: {
    VendingMachineAdmin
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
