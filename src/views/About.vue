<template>
  <section class="bg-white p-5 pb-20 pt-32 lg:pt-40 space-y-10">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Plats</p>
      </div>
      <div class="lg:w-3/4 my-0">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
            <p>Vi gifter oss på <a href="https://goo.gl/maps/QJ98i3BSzxGS2bEQ9" target="_blank" class="text-darkbeige underline font-normal">Kungsberg Gård</a>, utanför Strängnäs. Det kommer att vara skyltat för parkering när du kommer fram. Kör försiktigt, det finns lösa hundar, katter och bröllopsdeltagare på gården.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Tider</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="text-left space-y-6 lg:mb-6 leading-none">
            <p><span class="font-normal">15.00</span> Välkommen till Kungsberg</p>
            <p><span class="font-normal">16.00</span> Vigsel och mingel</p>
            <p><span class="font-normal">18.00</span> Middag på magasinet</p>
            <p><span class="font-normal">21.00</span> Fest så länge vi vill och orkar</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Dresscode</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
            <p>"Smart casual", "udda kavaj" eller "sommarfin". Dvs ren och välklädd. Tänk på att vi kommer vara på landet (med grusvägar, hagar och log-golv), så det kan var en idé att lämna dom vingligaste klackarna hemma.</p>   
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Barnfritt</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
          <p>Vi önskar ett barnfritt bröllop.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Gåvor</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
            <p>Prylar har vi så det räcker - vill du ge oss något tar vi tacksamt emot bidrag till en bröllopsresa.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Bar</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
            <p>Vi kommer ha bar till självkostnadspris, du swishar på plats.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Övernattning</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6 leading-none">
            <p>För dig som reser en bit finns närmaste hotell & vandrarhem i Strängnäs. Det kommer också finnas möjlighet att tälta på Kungsberg, hör av dig om det är intressant.</p>
            <p><a href="https://www.bishopsarms.com/vara-hotell/strangnas/" class="text-darkbeige underline font-normal">Hotell Bishop Arms</a></p>
            <p><a href="http://www.hotellaurentius.se/" class="text-darkbeige underline font-normal">Hotell Larentius</a></p>
            <p><a href="https://pensionat.traveleto.com/" class="text-darkbeige underline font-normal">Pensionat Gyllenhjelmsgatan</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 mb-4 lg:mb-0 text-4.5xl font-light">
        <p>Buss</p>
      </div>
      <div class="lg:w-3/4">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
            <p>Vi tittar på möjligheten att ordna buss från Kungsberg till Strängnäs och/eller Eskilstuna på kvällen, de kommer då att gå 21.30 och 01.00. Meddela oss via OSA-formuläret om det är intressant.</p>
          </div>
        </div>
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
      return this.$store.state.navLight; 
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', false)
  },
}
</script>