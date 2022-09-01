<template>
  <nav
  class="navbar fixed top-0 z-10 w-full p-5 md:py-8 text-nearblack "
  :class="{ 'navbar-hidden' : !showNav, 'bg-nearblack text-white' : showNavBg }">
    <div class="md:w-3/4 mx-auto flex justify-between items-start">
      <nav-brand />
      <!-- small screen -->
      <div class="md:hidden flex flex-col items-end">
        <nav-burger @click="toggleNavDropdown" />
        <ul v-if="showNav && showNavDropdown"
        class="flex flex-col items-end mt-4 space-y-4 px-1">
          <router-link to="/info" @click="toggleNavDropdown">Info</router-link>
          <router-link to="/kontakt" @click="toggleNavDropdown">Kontakt</router-link>
          <a
          class="border-2 py-2 text-sm"
          :class="{ 'border-nearblack' : showNavDropdown && !showNavBg, 'border-white' : showNavDropdown && showNavBg }">
            <router-link to="/osa" @click="toggleNavDropdown" class="px-4 py-2">OSA</router-link>
          </a>
        </ul>
      </div>
      <!-- small screen -->
      <!-- large screen -->
      <ul class="hidden md:flex items-center space-x-8">
        <router-link to="/info"
        class="transition duration-300 px-1 border-b border-transparent hover:border-nearblack" 
        :class="{'hover:border-white' : showNavBg }">
        Info</router-link>
        <router-link to="/kontakt" 
        class="transition duration-300 px-1 border-b border-transparent hover:border-nearblack"
        :class="{'hover:border-white' : showNavBg }">
        Kontakt</router-link>
        <a class="bg-transparent transition duration-300 hover:bg-nearblack border-2 py-2 text-sm border-nearblack"
        :class="{'border-white hover:bg-white hover:text-nearblack' : showNavBg, 'hover:text-white' : !showNavBg }">
          <router-link to="/osa" class="px-4 py-2">OSA</router-link>
        </a>
      </ul>
      <!-- large screen -->
    </div>
  </nav>
</template>


<script>
import NavBrand from './NavBrand.vue';
import NavBurger from './NavBurger.vue';

export default {
  name: 'NavDark',
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