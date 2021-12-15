<template>
  <ul class="flex flex-col items-end mt-4 space-y-4">
    <router-link to="/info" class="px-1" @click="toggleMenu">Info</router-link>
    <router-link to="/kontakt" class="px-1" @click="toggleMenu">Kontakt</router-link>
    <button class="border-2 border-white px-4 py-2 text-sm">
      <router-link to="/kontakt" @click="toggleMenu">OSA</router-link>
    </button>
  </ul>
</template>


<script>
export default {
  name: 'NavbarMenuSmall',
  props: ['toggleMenu']
}
</script>