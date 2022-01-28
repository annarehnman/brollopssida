<template>
  <section class="bg-darkbeige text-white min-h-full p-5 pb-10 lg:pb-20 pt-32 lg:pt-40 font-light">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">  
      <div class="lg:block lg:w-1/3 space-y-2 lg:space-y-6 text-center lg:text-left">
        <h1 class="text-4.5xl">OSA</h1>
        <p class="text-xl">Vill och kan du vara med? Skicka ditt svar via formuläret, vi behöver veta <span class="font-semibold">senast 30 april</span>.</p>
      </div>
      <div class="lg:w-3/4 mt-12 lg:mt-0">
        <osa-form />
      </div>
    </div>
  </section>
</template>


<script>
import OsaForm from '../components/forms/OsaForm.vue';

export default {
  components: { OsaForm },
  name: 'OSA',
  computed: {
    navLight() {
      return this.$store.state.navLight
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', true)
  }
}
</script>