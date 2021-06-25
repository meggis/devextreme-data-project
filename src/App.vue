<template>
  <div id="app">
    <div id="nav">
      <b-navbar>
        <b-navbar-brand href="/">SuperHero Finder</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">All Universe</b-nav-item>
            <!-- <b-nav-item :to="{ path: '/marvelheroes', query: { 'publisher': 'Marvel Comics' }}">Marvel Comics</b-nav-item> -->
          </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./views/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  height: 100vh;
}

#nav {
  padding: 10px;
  text-align: right;
  background-color: #2a3138;
  position: relative
}

#nav {
  .navbar-brand, a {
    font-weight: bold;
    color: #ff7300
  }
}


a.nav-link {
  text-decoration: none;
  color: #ff730080;
}


html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
