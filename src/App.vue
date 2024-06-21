<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <compC0 />
  <compC1 />
  <compC2 />
</template>

<script>
import compC0 from "./components/comp-c0.vue";
import compC1 from "./components/comp-c1.vue";
import compC2 from "./components/comp-c2.vue";

export default {
  name: "App",
  components: {
    compC0,
    compC1,
    compC2,
  },
};
</script>

<style>
html,
body {
  background-color: #282a36;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f2;
  margin-top: 40px;
}
</style>
