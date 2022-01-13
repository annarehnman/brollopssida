<template>
  <section class="bg-white p-5 pb-20 pt-32 lg:pt-40 space-y-10">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 text-4.5xl font-light">
        <p>Punkt</p>
      </div>
      <div class="lg:w-3/4 my-12 md:my-0">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
          <p>Vi gifter oss lördagen 30 juli och hoppas att du vill vara med.</p>
          <p>Vigsel, middag och fest äger rum på Kungsberg Gård, 15 km utanför Strängnäs. All praktisk info om och inför dagen hittar på den här sidan.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 text-4.5xl font-light">
        <p>Punkt</p>
      </div>
      <div class="lg:w-3/4 my-12 md:my-0">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
          <p>Vi gifter oss lördagen 30 juli och hoppas att du vill vara med.</p>
          <p>Vigsel, middag och fest äger rum på Kungsberg Gård, 15 km utanför Strängnäs. All praktisk info om och inför dagen hittar på den här sidan.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:w-1/3 text-4.5xl font-light">
        <p>Punkt</p>
      </div>
      <div class="lg:w-3/4 mt-12 md:mt-0">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
          <p>Vi gifter oss lördagen 30 juli och hoppas att du vill vara med.</p>
          <p>Vigsel, middag och fest äger rum på Kungsberg Gård, 15 km utanför Strängnäs. All praktisk info om och inför dagen hittar på den här sidan.</p>
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