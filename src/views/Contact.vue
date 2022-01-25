<template>
  <section class="bg-white p-5 pb-20 pt-32 lg:pt-40 space-y-10">
    <div class="md:w-3/4 mx-auto">
      <h1 class="text-4.5xl font-light text-center lg:text-left">Kontakt</h1>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
        <!-- <img src="~@/images/annaorikard.jpg" alt="" class="max-h-min mb-3 lg:mb-6"> -->
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Anna & Rikard</p>
          <p class="font-thin">Det är vi som gifter oss, känner du inte igen oss är du nog på fel sida :)</p>
          <p class="mt-4"><a href="tel:+46731810867">073-181 08 67<span class="font-thin"> (Anna)</span></a></p>
          <p><a href="tel:+46727229320">072-722 93 20<span class="font-thin"> (Rikard)</span></a></p>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
        <!-- <img src="~@/images/erik.jpeg" alt="" class="max-h-min mb-3 lg:mb-6"> -->
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Erik Andersson</p>
          <p class="font-thin">Toastmaster och keeper of peace.</p>
          <p class="font-thin">Vill du säga något fint, kul eller insiktsfullt under middagen är det hit du vänder dig.</p>
          <p class="mt-4"><a href="tel:+46737363678">073-736 36 78</a></p>
          <a href="mailto:apotekareandersson@gmail.com">apotekareandersson@gmail.com</a>             
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
        <!-- <img src="~@/images/otilia.jpeg" alt="" class="max-h-min mb-3 lg:mb-6"> -->
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Otilia Bogen</p>
          <p class="font-thin">Brudtärna extra ordinaire, Annas svägerska och partner in crime.</p>
          <p class="mt-4"><a href="tel:+46703595878">070-359 58 78</a></p>
          <a href="mailto:otilia.bogen@gmail.com">otilia.bogen@gmail.com</a>           
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
        <!-- <img src="~@/images/sebbe.jpg" alt="" class="max-h-min mb-3 lg:mb-6"> -->
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Sebastian Opava</p>
          <p class="font-thin">Bestman av rang och betrodd ring-bearer, vän till Rikard sen långt tillbaka.</p>
          <p class="mt-4"><a href="tel:+46735675659">073-567 56 59</a></p>
          <a href="mailto:sebastian.opava@gmail.com">sebastian.opava@gmail.com</a> 
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