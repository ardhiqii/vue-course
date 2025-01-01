<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

// TODO Change every inject state to using Vuex
//[x] Create Store Auth
//[x] Create Store Products
//[x] Create Store Cart
//[x] Implementation Auth State
//[x] Implementasi Products State

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
