<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Astronomy Picture Of The Day</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  ::-webkit-scrollbar {
    display: none;
  }

  #app {
    background-color: black;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #b447af;
  }
</style>