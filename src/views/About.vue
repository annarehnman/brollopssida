<template>
  <section class="bg-white p-5 pb-20 pt-32 lg:pt-40 space-y-10 font-light">
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Plats</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>Vi gifter oss på <a href="https://goo.gl/maps/QJ98i3BSzxGS2bEQ9" class="text-darkbeige font-normal underline">Kungsberg Gård</a>, utanför Strängnäs. Det kommer att vara skyltat för parkering när du kommer fram. Kör försiktigt, det finns lösa hundar, katter och bröllopsdeltagare på gården.</p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Tider</p>
      </div>
      <div class="lg:w-3/4 text-xl space-y-3 lg:space-y-4 lg:mb-4">
        <p><span class="font-normal">15.00</span> Välkommen till Kungsberg</p>
        <p><span class="font-normal">16.00</span> Vigsel och mingel</p>
        <p><span class="font-normal">18.00</span> Middag på magasinet</p>
        <p><span class="font-normal">21.00</span> Fest så länge vi vill och orkar</p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Dresscode</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>"Smart casual", "udda kavaj" eller "sommarfin". Dvs ren och välklädd. Tänk på att vi kommer vara på landet (med grusvägar, hagar och log-golv), så det kan var en idé att lämna dom vingligaste klackarna hemma.</p>   
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Barnfritt</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>Vi önskar ett barnfritt bröllop.</p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Gåvor</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>Prylar har vi så det räcker - vill du ge oss något tar vi tacksamt emot bidrag till en bröllopsresa.</p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Bar</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>Vi kommer ha bar till självkostnadspris, du swishar på plats.</p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Övernattning</p>
      </div>
      <div class="lg:w-3/4 text-xl space-y-3 lg:space-y-4 lg:mb-4">
        <p>För dig som reser en bit finns närmaste hotell & vandrarhem i Strängnäs. Det kommer också finnas möjlighet att tälta på Kungsberg, hör av dig om det är intressant.</p>
        <p><a href="https://www.bishopsarms.com/vara-hotell/strangnas/" class="text-darkbeige font-normal underline">Hotell Bishop Arms</a></p>
        <p><a href="http://www.hotellaurentius.se/" class="text-darkbeige font-normal underline">Hotell Larentius</a></p>
        <p><a href="https://pensionat.traveleto.com/" class="text-darkbeige font-normal underline">Pensionat Gyllenhjelmsgatan</a></p>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto text-center lg:flex lg:space-x-32 lg:text-left">
      <div class="lg:w-1/3 mb-4 text-4.5xl">
        <p>Buss</p>
      </div>
      <div class="lg:w-3/4 text-xl lg:mb-4">
        <p>Vi tittar på möjligheten att ordna buss från Kungsberg till Strängnäs och/eller Eskilstuna på kvällen, de kommer då att gå 21.30 och 01.00. Meddela oss via OSA-formuläret om det är intressant.</p>
      </div>
    </div>
  </section>
  <contact-section />
</template>


<script>
import ContactSection from '../components/sections/ContactSection.vue';

export default {
  components: { ContactSection },
  name: 'About',
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