<template>
  <section class="bg-nearblack p-5 py-20 text-white text-center">
    <div >
      <div class="md:w-3/4 mx-auto md:pr-10">
        <h2 class="text-2xl md:text-4xl font-semibold text-center mb-4">Har du frågor?</h2>
        <p class="md:text-lg font-light">Hör gärna av dig till via telefon eller mail, kontaktinfo hittar du här.</p>
        <button class="bg-tranpsarent border-2 border-white text-white hover:bg-white hover:text-nearblack px-7 py-4 mt-10 text-sm">
            <router-link to="/kontakt">Kontakt</router-link>
          </button>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'ContactSection',
}
</script>