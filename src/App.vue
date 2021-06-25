<template>
  <div id="app">
      <b-navbar id="nav">
        <b-navbar-brand href="/">SuperHero Finder</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="() => $store.dispatch('hero/fetchHeroPersons')"
            >All Universe</b-nav-item
          >
          <b-nav-item
            @click="
              () =>
                $store.dispatch('hero/fetchItemsByPublisher', 'Marvel Comics')
            "
            >Marvel Comics</b-nav-item
          >
          <b-nav-item
            @click="
              () => $store.dispatch('hero/fetchItemsByPublisher', 'DC Comics')
            "
            >DC Comics</b-nav-item
          >
        </b-navbar-nav>
      </b-navbar>
    <div class="content">
      <router-view />
    </div>
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
  position: relative;
}

#nav {
  .navbar-brand,
  a {
    font-weight: bold;
    color: #ff7300;
    &:hover {
      text-decoration: none;
      color: #ff730080;
    }
  }
}

a.nav-link:hover {
  text-decoration: none;
  color: #ff730080;
}

html {
  height: 100%;
}

.content {
  min-height: calc(100vh - 60px);
  padding-bottom: 60px;
}
</style>
