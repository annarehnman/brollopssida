<template>
  <div id="app" class="box-border bg-gray-500 relative">
    <Navbar />
    <div class="w-full bg-white">
      <div class="md:w-3/4 md:mx-auto p-5">
        <router-view/>
      </div>
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
