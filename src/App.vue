<template>
  <div id="app" class="relative">
    <navbar />
    <div class="h-screen">
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
    }
  }
</script>
