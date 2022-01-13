<template>
  <section class="bg-home bg-cover w-full h-full flex justify-center items-center relative z-0">
    <div class="p-5 text-white text-center">
      <div class="space-y-6 md:space-y-8">
        <h1 class="mb-3 text-5xl md:text-6xl">Anna & Rikard</h1>
        <p class="font-light text-2xl md:text-3xl">30 juli 2022 <span>&#183;</span> Kungsberg Gård, Strängnäs</p>
        <button class="bg-transparent border-2 border-white hover:bg-white hover:text-nearblack px-7 py-4">
          <router-link to="/osa">OSA</router-link>
        </button>
      </div>
    </div>
  </section>
  <schedule-section />
  <contact-section />
</template>


<script>
import ScheduleSection from "../components/sections/ScheduleSection.vue";
import ContactSection from '../components/sections/ContactSection.vue'

export default {
  components: { ScheduleSection, ContactSection },
  name: 'Home',
  computed: {
    navLight() {
      return this.$store.state.navLight; 
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', true)
  }
}
</script>
