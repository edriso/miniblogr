<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  line-height: 1.4;
  margin: 0;
  padding-bottom: 0.5rem;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

input,
textarea,
select,
button {
  padding: 0.25rem;
}

input:focus,
textarea:focus,
select:focus,
button:focus {
  outline: none;
}

h1 {
  margin-top: 0;
}
</style>
