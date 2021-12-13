<template>
  <div id="app" class="relative">
    <Navbar />
    <div class="h-screen">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
