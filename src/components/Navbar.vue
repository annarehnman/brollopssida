<template>
  <nav class="sticky top-0 w-full md:flex md:items-center p-5 md:py-8 bg-gray-200">
    <div class="md:w-3/4 md:mx-auto">
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="md:hidden ml-auto">
        <button type="button" class="focus:outline-none focus:text-red-500">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col text-xl mt-4 space-y-4 md:flex md:flex-row md:mt-0 md:space-y-0 md:space-x-8">
        <router-link to="/" @click="toggleNav">Start</router-link>
        <router-link to="/info" @click="toggleNav">Info</router-link>
        <router-link to="/kontakt" @click="toggleNav">Kontakt</router-link>
      </ul>
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
