<template>
  <!-- MOBILE -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : showNavbarBg }" class="navbar md:hidden flex justify-between fixed top-0 z-10 w-full p-5 text-white">
    <navbar-brand />
    <div class="flex flex-col justify-end">
      <div @click="toggleMenu" class="flex justify-end mt-2">
        <navbar-menu-button />
      </div>
      <navbar-menu-small v-if="showMenu" :toggleMenu="toggleMenu" />
    </div>
  </nav>
  <!-- LARGE SCREENS -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : showNavbarBg }" class="navbar hidden md:flex items-center fixed top-0 z-10 w-full px-5 py-8 text-white">
    <div class="w-3/4 mx-auto flex justify-between">
      <navbar-brand />
      <navbar-menu-large />
    </div>
  </nav>
</template>


<script>
import NavbarBrand from '../navbar/NavbarBrand.vue';
import NavbarMenuSmall from '../navbar/NavbarMenuSmall.vue';
import NavbarMenuLarge from '../navbar/NavbarMenuLarge.vue';
import NavbarMenuButton from '../navbar/NavbarMenuButton.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarBrand,
    NavbarMenuSmall,
    NavbarMenuLarge,
    NavbarMenuButton
  },
  data () {
    return {
      showNavbar: true,
      showNavbarBg: false,
      showMenu: false,
      lastScrollPosition: 0
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