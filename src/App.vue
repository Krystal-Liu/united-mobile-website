<template>
  <div id="app">
    <headers></headers>
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Headers from './components/common/Headers.vue'
import Sidebar from './components/common/Sidebar.vue'
export default {
  name: 'App',
  components: {
      Headers, Sidebar
  }
}
</script>

<style>
  html {
    font-family: MicrosoftYaHei;
  }
  body, ul, li, p {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
  }
</style>
