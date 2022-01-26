<template>
  <section class="bg-darkbeige p-5 py-20 text-white text-center">
    <div >
      <div class="md:w-3/4 mx-auto md:pr-10">
        <h2 class="text-2xl md:text-4xl font-semibold text-center mb-4">Vad händer när?</h2>
        <p class="md:text-lg font-light">Info om schema, dresscode, parkering och mycket mer hittar du här.</p>
        <button-white-outline buttonLink='/info' text='Mer info' class="mt-14 text-sm" />
      </div>
    </div>
  </section>
</template>


<script>
import ButtonWhiteOutline from '../buttons/ButtonWhiteOutline.vue'

export default {
  components: { ButtonWhiteOutline },
  name: 'InfoSection',
}
</script>