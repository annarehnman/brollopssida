<template>
  <nav class="absolute top-0 w-full flex items-center p-5 md:py-8 text-white">
    <div class="md:w-3/4 mx-auto flex justify-between">
      <!-- brand start -->
      <div class="text-xl md:text-2xl text-bold">
        <router-link to="/" @click="toggleNav">Anna & Rikard</router-link>
      </div>
      <!-- brand end -->
      <!-- menu start -->
        <!-- menu button start -->
        <div @click="toggleNav" class="md:hidden ml-auto">
          <button type="button" class="focus:outline-none">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
        <!-- menu button end -->
        <!-- menu list start - open: "block", closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col items-center mt-4 space-y-4 md:flex md:flex-row md:mt-0 md:space-y-0 md:space-x-8">
          <router-link to="/info" @click="toggleNav" class="border-b border-transparent active:border-white">Info</router-link>
          <router-link to="/kontakt" @click="toggleNav" class="border-b border-transparent active:border-white">Kontakt</router-link>
          <button class="border-2 px-4 py-2 text-sm"><router-link to="/kontakt" @click="toggleNav">OSA</router-link></button>
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
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (
      showMenu.value = !showMenu.value
      );
    return { showMenu, toggleNav };
  },
};
</script>
