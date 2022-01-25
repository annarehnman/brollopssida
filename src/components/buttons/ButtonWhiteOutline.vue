<template>
  <button class="bg-transparent border-2 border-white hover:bg-white hover:text-nearblack py-4">
    <router-link :to="buttonPath" class="px-7 py-4">{{ text }}</router-link>
  </button>
</template>


<script>

export default {
  name: 'ButtonWhiteOutline',
  props: ['buttonPath', 'text']
};
</script>