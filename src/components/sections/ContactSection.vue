<template>
  <section class="bg-darkbeige p-5 py-20 text-white text-center">
    <div >
      <div class="md:w-3/4 mx-auto md:pr-10">
        <h2 class="text-2xl md:text-4xl font-semibold text-center mb-4">Har du frågor?</h2>
        <p class="md:text-lg font-light">Hör gärna av dig via telefon eller mail, kontaktinfo hittar du här.</p>
        <button-white-outline buttonPath='/kontakt' text='Kontakt' class="mt-10 text-sm" />
      </div>
    </div>
  </section>
</template>


<script>
import ButtonWhiteOutline from '../buttons/ButtonWhiteOutline.vue'

export default {
  components: { ButtonWhiteOutline },
  name: 'ContactSection',
}
</script>