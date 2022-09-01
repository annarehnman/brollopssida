<template>
  <div>
    <a class="bg-nearblack transition duration-300 border-2 border-nearblack text-white hover:bg-white hover:text-nearblack py-4">
      <router-link :to="buttonLink" class="px-7 py-4">{{ text }}</router-link>
    </a>
  </div>
</template>


<script>

export default {
  name: 'ButtonBlack',
  props: ['buttonLink', 'text']
};
</script>