<template>
  <section class="bg-white p-5 pb-20 pt-32 lg:pt-40 space-y-10">
    <div class="md:w-3/4 mx-auto">
      <h1 class="text-4.5xl font-light text-center lg:text-left">Kontakt</h1>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Anna & Rikard</p>
          <p class="font-thin">Det är vi som gifter oss, känner du inte igen oss vid det här laget är du nog på fel sida.</p> 
          <p class="font-thin">Oss kontaktar man så lite som möjligt, vi lär ha fullt upp ändå :)</p> 
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Erik Andersson</p>
          <p class="font-thin">Toastmaster och keeper of peace and order.</p>
          <p class="font-thin">Vill du säga något fint, kul eller insiktsfullt under middagen är det hit du vänder dig.</p>
          <p class="mt-4"><a href="tel:+05890000111">0-589-0000111</a></p>
          <a href="mailto:email@example.com">email@example.com</a>             
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Otilia Bogen</p>
          <p class="font-thin">Brudtärna extra ordinaire, Annas svägerska och partner in crime.</p>
          <p class="mt-4"><a href="tel:+05890000111">0-589-0000111</a></p>
          <a href="mailto:email@example.com">email@example.com</a>           
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Sebastian Opava</p>
          <p class="font-thin">Bestman av rang och ring-bearer, vän till Rikard sen långt tillbaka.</p>
          <p class="mt-4"><a href="tel:+05890000111">0-589-0000111</a></p>
          <a href="mailto:email@example.com">email@example.com</a> 
        </div>
      </div>
    </div>
  </section>
  <info-section />
</template>

<script>
import InfoSection from '../components/sections/InfoSection.vue';

export default {
  components: { InfoSection },
  name: 'Contact',
  computed: {
    navLight() {
      return this.$store.state.navLight; 
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', false)
  },
}
</script>