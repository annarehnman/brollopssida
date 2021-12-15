<template>
  <!-- MOBILE -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : showNavbarBg }" class="navbar md:hidden flex justify-between fixed top-0 z-10 w-full p-5 text-white">
    <navbar-brand />
    <div class="flex flex-col justify-end">
      <div @click="toggleNav" class="flex justify-end mt-2">
        <navbar-menu-button />
      </div>
      <navbar-menu-small v-if="showMenu" />
    </div>
  </nav>
  <!-- LARGE SCREENS -->
  <nav :class="{ 'navbar-hidden' : !showNavbar, 'bg-nearblack bg-opacity-40' : showNavbarBg }" class="navbar hidden md:flex items-center fixed top-0 z-10 w-full px-5 py-8 text-white">
    <div class="w-3/4 mx-auto flex justify-between">
      <navbar-brand />
      <navbar-menu-large /> <!-- pass toggleNav -->
    </div>
  </nav>
</template>


<script>
import NavbarBrand from './NavbarBrand.vue';
import NavbarMenuSmall from './NavbarMenuSmall.vue';
import NavbarMenuLarge from './NavbarMenuLarge.vue';
import NavbarMenuButton from './NavbarMenuButton.vue';

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
    toggleNav () {
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



// original showmenu

// import { ref } from 'vue';

// setup() {
//   let showMenu = ref(false);
//   const toggleNav = () => (
//     showMenu.value = !showMenu.value
//     );
//   return { showMenu, toggleNav };
// },