<template>
  <nav-light v-if="navLight" />
  <nav-dark v-if="!navLight" />
</template>


<script>
import NavBrand from '../navbar/NavBrand.vue';
import NavDark from './NavDark.vue';
import NavLight from './NavLight.vue';

export default {
  name: 'Navbar',
  components: {
    NavBrand,
    NavLight,
    NavDark
  },
  computed: {
    navLight() {
      return this.$store.state.navLight;
    }
  }
};
</script>