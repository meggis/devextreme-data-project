<template>
  <div id="app">
    <div id="nav">
      <b-navbar>
        <b-navbar-brand href="/">SuperHero Finder</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">DC Comics</b-nav-item>
            <b-nav-item to="/marvelheroes">Marvel Comics</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}

#nav {
  padding: 10px;
  text-align: right;
  background-color: #2a3138;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #ff7300;
}

#nav :hover {
  text-decoration: none;
  color: #ff730080;
}

#nav a.b-nav-item-exact-active {
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
