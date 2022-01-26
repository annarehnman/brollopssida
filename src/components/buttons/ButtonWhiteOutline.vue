<template>
  <div>
    <a class="bg-transparent border-2 border-white hover:bg-white hover:text-nearblack py-4">
      <router-link :to="buttonLink" class="px-7 py-4">{{ text }}</router-link>
    </a>
  </div>
</template>


<script>

export default {
  name: 'ButtonWhiteOutline',
  props: ['buttonLink', 'text']
};
</script>