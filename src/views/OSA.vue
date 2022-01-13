<template>
  <section class="bg-darkbeige text-white lg:h-full p-5 pb-20 pt-32 lg:pt-40 space-y-10">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 font-light leading-snug">
      <div class="lg:block lg:w-1/3 space-y-6 text-center lg:text-left">
        <h1 class="text-4.5xl">OSA</h1>
        <div class="text-xl lg:mb-6">
          <p>Vill och kan du vara med? Skicka ditt svar via formuläret, vi behöver veta <span class="font-bold">senast 30 april</span>.</p>
        </div>
      </div>
      <div class="lg:w-3/4 mt-12 md:my-0 text-lg text-left">
        <form class="space-y-3">
          <div class="space-y-1">
            <label for="firstName">Förnamn</label><br>
            <input type="text" id="firstName" name="firstName" required class="w-full p-1 pl-2 text-gray-500"><br>
          </div>
          <div class="space-y-1">
            <label for="lastName">Efternamn</label><br>
            <input type="text" id="lastName" name="lastName" required class="w-full p-1 pl-2 text-gray-500">
          </div>
          <div class="space-y-1">
            <label for="phone">Telefonnummer</label><br>
            <input type="tel" id="phone" name="phone" required class="w-full p-1 pl-2 text-gray-500">
          </div>
          <div class="space-y-1">
            <label for="drink">Kommer du/ni närvara?</label><br>
            <select id="drink" name="drink" required class="text-gray-500 p-1">
              <option disabled selected value class="text-white"></option>
              <option value="alkohol" class="w-full p-1 pl-2">Ja</option>
              <option value="alkoholfritt" class="w-full p-1 pl-2">Nej</option>
            </select>
          </div>
          <div class="space-y-1"><br>
            <label for="drink">Dryck till middagen</label><br>
            <select id="drink" name="drink" class="text-gray-500 p-1">
              <option disabled selected value class="text-white"></option>
              <option value="alkohol" class="w-full p-1 pl-2">Alkohol</option>
              <option value="alkoholfritt" class="w-full p-1 pl-2">Alkoholfritt</option>
            </select>
          </div>
          <div class="space-y-1">
            <label for="allergies">Allergier eller specialkost</label><br>
            <textarea name="allergies" rows="2" id="allergies" class="w-full p-1 pl-2 text-gray-500">
            </textarea>
          </div>
          <div class="space-y-1">
            <label for="allergies">Övrigt som är bra för oss att veta</label><br>
            <textarea name="allergies" rows="2" id="allergies" class="w-full p-1 pl-2 text-gray-500">
            </textarea>
          </div>
          <div class="space-y-1">
            <div>
              <p>Vi tittar på möjligheten att ordna buss till Strängnäs och/eller Eskilstuna på kvällen.</p>
              <p>Är det intressant för dig?</p>
            </div>
            <select id="drink" name="drink" class="text-gray-500 p-1">
              <option disabled selected value class="text-white"></option>
              <option value="alkoholfritt" class="w-full p-1 pl-2 text-gray-500">Nej</option>
              <option value="alkohol" class="w-full p-1 pl-2">Ja, till Strängnäs</option>
              <option value="alkohol" class="w-full p-1 pl-2">Ja, till Eskilstuna</option>
            </select>
          </div>
        </form>
        <div class="flex justify-center lg:justify-start">
          <button class="w-full md:w-1/3 lg:w-min bg-nearblack border-2 border-nearblack text-white hover:bg-darkbeige hover:border-white hover:text-white px-7 py-4 mt-16 text-sm">
            SKICKA
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoSection from '../components/sections/InfoSection.vue';
import ScheduleSection from '../components/sections/ScheduleSection.vue';
export default {
  components: {InfoSection, ScheduleSection },
  name: 'OSA',
  computed: {
    navLight() {
      return this.$store.state.navLight; 
    }
  },
  mounted () {
    this.$store.commit('toggleNavTheme', true)
  },
}
</script>