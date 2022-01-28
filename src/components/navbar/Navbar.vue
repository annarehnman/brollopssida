<template>
  <nav-light v-if="navLight" />
  <nav-dark v-if="!navLight" />
</template>


<script>
import NavDark from './NavDark.vue';
import NavLight from './NavLight.vue';

export default {
  name: 'Navbar',
  components: {
    NavLight,
    NavDark
  },
  computed: {
    navLight() {
      return this.$store.state.navLight
    }
  }
};
</script>