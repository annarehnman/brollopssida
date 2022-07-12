<template>
  <section class="bg-white p-5 pb-20 pt-36 lg:pt-40 space-y-10 font-light">
    <div class="md:w-3/4 mx-auto">
      <h1 class="text-4.5xl text-center lg:text-left">Kontakt</h1>
    </div>

    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <img src="~@/images/annaochrikardred.jpg" alt="" class="max-h-96 mb-3 lg:mb-6">
      </div>
      <div class="lg:w-3/4 text-xl">
        <p class="font-normal">Anna & Rikard</p>
        <p>Det är vi som (äntligen) gifter oss. Känner du inte igen oss är du nog på fel sida :)</p>
        <p class="mt-4"><a href="tel:+46000000000" class="text-darkbeige font-normal underline">070-000 00 00</a> Anna</p>
        <p><a href="tel:+46000000000" class="text-darkbeige font-normal underline">070-000 00 00</a> Rikard</p>
      </div>
    </div>

    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <img src="~@/images/erikred.jpg" alt="" class="max-h-96 mb-3 lg:mb-6">
      </div>
      <div class="lg:w-3/4 text-xl">
        <p class="font-normal">Erik Andersson</p>
        <p>Toastmaster och keeper of peace.</p>
        <p>Vill du säga något fint, kul eller insiktsfullt under middagen är det hit du vänder dig.</p>
        <p class="mt-4"><a href="tel:+46000000000" class="text-darkbeige font-normal underline">070-000 00 00</a></p>
        <a href="mailto:namnefternamn@mail.com" class="text-darkbeige font-normal underline">namnefternamn@mail.com</a>             
      </div>

    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <img src="~@/images/otiliared.jpg" alt="" class="max-h-96 mb-3 lg:mb-6">
      </div>
      <div class="lg:w-3/4 text-xl">
        <p class="font-normal">Otilia Bogen</p>
        <p>Brudtärna extra ordinaire, Annas svägerska och partner in crime. Har alltid det senaste scoopet.</p>
        <p class="mt-4"><a href="tel:+46000000000" class="text-darkbeige font-normal underline">070-000 00 00</a></p>
        <a href="mailto:namnefternamn@mail.com" class="text-darkbeige font-normal underline">namnefternamn@mail.com</a>           
      </div>
    </div>
    
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <img src="~@/images/sebbered.jpg" alt="" class="max-h-96 mb-3 lg:mb-6">
      </div>
      <div class="lg:w-3/4 text-xl">
        <p class="font-normal">Sebastian Opava</p>
        <p>Bestman av rang och betrodd ring-bearer. Virrar du bort dig bland fält och hagar, ring Sebbe.</p>
        <p class="mt-4"><a href="tel:+46000000000" class="text-darkbeige font-normal underline">070-000 00 00</a></p>
        <a href="mailto:namnefternamn@mail.com" class="text-darkbeige font-normal underline">namnefternamn@mail.com</a> 
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
      return this.$store.state.navLight
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', false)
  },
}
</script>