<template>
  <!-- MOBILE -->
  <nav 
  class="navbar fixed top-0 z-10 md:hidden flex justify-between align-middle w-full p-5 text-white"
  :class="{ 'navbar-hidden' : !showNav, 'bg-nearblack' : showNavBg }">
    <nav-brand />
    <div
    class="flex flex-col justify-end">
      <nav-burger @click="toggleNavDropdown" class="flex justify-end mt-2" />
      <ul v-if="showNav && showNavDropdown"
      class="flex flex-col items-end mt-4 space-y-4">
        <router-link to="/info" @click="toggleNavDropdown" class="px-1">Info</router-link>
        <router-link to="/kontakt" @click="toggleNavDropdown" class="px-1">Kontakt</router-link>
        <button 
        class="border-2 py-2 text-sm border-white">
          <router-link to="/osa" @click="toggleNavDropdown" class="px-4 py-2">OSA</router-link>
        </button>
      </ul>
    </div>
  </nav>

  <!-- LARGE SCREENS -->
  <nav
  class="navbar fixed top-0 z-10 hidden md:flex items-center w-full px-5 py-8 text-white"
  :class="{ 'navbar-hidden' : !showNav, 'bg-nearblack' : showNavBg }">
    <div class="w-3/4 mx-auto flex justify-between">
      <nav-brand />
      <ul class="flex flex-row items-center mt-0 space-x-8">
        <router-link to="/info"
        class="px-1 border-b border-transparent hover:border-white">
        Info</router-link>
        <router-link to="/kontakt" 
        class="px-1 border-b border-transparent hover:border-white">
        Kontakt</router-link>
        <button 
        class="bg-transparent hover:bg-white border-2 py-2 text-sm border-white hover:text-nearblack">
          <router-link to="/osa" class="px-4 py-2">OSA</router-link>
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavBrand from './NavBrand.vue';
import NavBurger from './NavBurger.vue';

export default {
  name: 'NavLight',
  components: {
    NavBrand,
    NavBurger
  },
  computed: {
    lastScrollPosition() {
      return this.$store.state.lastScrollPosition; 
    },
    showNav() {
      return this.$store.state.showNav; 
    },
    showNavBg() {
      return this.$store.state.showNavBg; 
    },
    showNavDropdown() {
      return this.$store.state.showNavDropdown; 
    }
  },
  methods: {
    toggleNavVisibility () {
      this.$store.commit('toggleNavVisibility', true)
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.$store.commit('changeScrollPosition', currentScrollPosition)
    },
    toggleNavBg () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.$store.commit('toggleNavBg', currentScrollPosition)
    },
    toggleNavDropdown () {
      this.$store.commit('toggleNavDropdown')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('scroll', this.toggleNavBg)
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>


<style scoped>
.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
.navbar.navbar-hidden {
  transform: translate3d(0, -100%, 0);
}
</style>