<template>
  <ul class="flex flex-row items-center mt-0 space-x-8">
    <router-link to="/info" class="px-1 border-b border-transparent hover:border-white active:border-white">Info</router-link>
    <router-link to="/kontakt" class="px-1 border-b border-transparent hover:border-white active:border-white">Kontakt</router-link>
    <button class="bg-transparent hover:bg-white hover:text-gray-900 border-2 border-white px-4 py-2 text-sm">
      <router-link to="/kontakt">OSA</router-link>
    </button>
  </ul>
</template>


<script>
export default {
  name: 'NavbarItemsLarge'
}
</script>