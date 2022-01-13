<template>
  <!-- MOBILE -->
  <nav :class="{ 'navbar-hidden' : !showNavbar && onHome, 'bg-nearblack bg-opacity-40' : showNavbarBg && onHome, 'fixed top-0 z-10' : onHome, 'bg-darkbeige' : !onHome }" class="navbar md:hidden flex justify-between w-full p-5 text-white">
    <navbar-brand />
    <div class="flex flex-col justify-end">
      <div @click="toggleMenu" class="flex justify-end mt-2">
        <!-- button start -->
        <button type="button" class="focus:outline-none">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
        <!-- button end -->
      </div>
      <!-- menu start -->
      <ul class="flex flex-col items-end mt-4 space-y-4" v-if="showMenu" :toggleMenu="toggleMenu">
        <router-link to="/info" class="px-1" @click="toggleMenu">Info</router-link>
        <router-link to="/kontakt" class="px-1" @click="toggleMenu">Kontakt</router-link>
        <button class="border-2 border-white px-4 py-2 text-sm">
          <router-link to="/kontakt" @click="toggleMenu">OSA</router-link>
        </button>
      </ul>
      <!-- menu end -->
    </div>
  </nav>
  
  <!-- LARGE SCREENS -->
  <nav :class="{ 'navbar-hidden' : !showNavbar && onHome, 'bg-nearblack bg-opacity-40' : showNavbarBg && onHome, 'fixed top-0 z-10' : onHome, 'bg-darkbeige' : !onHome }" class="navbar hidden md:flex items-center  w-full px-5 py-8 text-white">
    <div class="w-3/4 mx-auto flex justify-between">
      <navbar-brand />
      <!-- menu start -->
      <ul class="flex flex-row items-center mt-0 space-x-8">
        <router-link to="/info" class="px-1 border-b border-transparent hover:border-white active:border-white">Info</router-link>
        <router-link to="/kontakt" class="px-1 border-b border-transparent hover:border-white active:border-white">Kontakt</router-link>
        <button class="bg-transparent hover:bg-white hover:text-gray-900 border-2 border-white px-4 py-2 text-sm">
          <router-link to="/kontakt">OSA</router-link>
        </button>
    </ul>
    <!-- menu end -->
    </div>
  </nav>
</template>


<script>
import NavbarBrand from '../navbar/NavbarBrand.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarBrand
  },
  data () {
    return {
      showNavbar: true,
      showNavbarBg: false,
      showMenu: false,
      lastScrollPosition: 0,
    }
  },
  computed: {
    onHome() {
      return this.$store.state.onHome;
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showMenu = false
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    addNavbarBg () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < this.lastScrollPosition) {
        this.showNavbarBg = true
        if (currentScrollPosition == 0) {
          this.showNavbarBg = false
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('scroll', this.addNavbarBg)
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