<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
