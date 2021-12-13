<template>
  <!-- MOBILE -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : hasScrolled }" class="navbar md:hidden flex justify-between fixed top-0 z-10 w-full p-5 text-white">
    <div class="text-2xl text-bold">
      <router-link to="/">Anna & Rikard</router-link>
    </div>
    <div class="flex flex-col justify-end">
      <!-- menu button start -->
      <div @click="toggleNav" class="flex justify-end mt-2">
        <button type="button" class="focus:outline-none">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
      <!-- menu list - open: "block", closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col items-end mt-4 space-y-4">
        <router-link to="/info" @click="toggleNav" class="px-1">Info</router-link>
        <router-link to="/kontakt" @click="toggleNav" class="px-1">Kontakt</router-link>
        <button class="border-2 border-white px-4 py-2 text-sm">
          <router-link to="/kontakt" @click="toggleNav">OSA</router-link>
        </button>
      </ul>
    </div>
  </nav>

  <!-- LARGE SCREENS -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : hasScrolled }" class="navbar hidden md:flex items-center fixed top-0 z-10 w-full px-5 py-8 text-white">
    <div class="w-3/4 mx-auto flex justify-between">
      <!-- brand start -->
      <div class="text-2xl text-bold">
        <router-link to="/" @click="toggleNav">Anna & Rikard</router-link>
      </div>
      <!-- brand end -->
      <!-- menu start -->
        <!-- menu list start -->
        <ul class="flex flex-row items-center mt-0 space-x-8">
          <router-link to="/info" @click="toggleNav" class="px-1 border-b border-transparent hover:border-white active:border-white">Info</router-link>
          <router-link to="/kontakt" @click="toggleNav" class="px-1 border-b border-transparent hover:border-white active:border-white">Kontakt</router-link>
          <button class="bg-transparent hover:bg-white hover:text-gray-900 border-2 border-white px-4 py-2 text-sm">
            <router-link to="/kontakt" @click="toggleNav">OSA</router-link>
          </button>
        </ul>
        <!-- menu list end -->
      <!-- menu end -->
    </div>
  </nav>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'Navbar',
  data () {
    return {
      showNavbar: true,
      hasScrolled: false,
      lastScrollPosition: 0
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.hasScrolled = true
    }
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (
      showMenu.value = !showMenu.value
      );
    return { showMenu, toggleNav };
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.hasScrolled = false
  },
  beforeDestroy () {
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