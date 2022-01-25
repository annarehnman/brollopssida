<template>
  <button class="bg-nearblack border-2 border-nearblack text-white hover:bg-white hover:text-nearblack py-4">
    <router-link :to="buttonPath" class="px-7 py-4">{{ text }}</router-link>
  </button>
</template>


<script>

export default {
  name: 'ButtonBlack',
  props: ['buttonPath', 'text']
};
</script>