<template>
  <div id="app" class="relative">
    <Navbar :homeNavbar="homeNavbar" />
    <div class="h-screen">
      <!-- <router-view @mounted="setNavbar" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/navbar/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar
    },
    data () {
      return {
        homeNavbar: null
      }
  },
  methods: {
    setNavbar(onHome) {
      this.homeNavbar = onHome;
    }
  },
  }
</script>
