<template>
  <section class="bg-darkbeige text-white p-5 py-10 md:py-20 lg:py-40">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 font-light leading-snug">
      <div class="lg:block lg:w-1/3 space-y-6 text-center lg:text-left">
        <h1 class="text-4.5xl">OSA</h1>
        <div class="text-xl lg:mb-6">
          <p>Vill och kan du vara med? Skicka ditt svar via formuläret, vi behöver veta <span class="font-bold">senast nåt datum</span>.</p>
        </div>
      </div>
      <div class="lg:w-3/4 my-12 md:my-0 text-lg text-left">
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
          </div><br :class="{ 'hidden' : !showGuest2}">
          <div :class="{ 'hidden' : !showGuest2}">
            <div class="space-y-1">
              <label for="firstName2">Förnamn</label><br>
              <input type="text" id="firstName2" name="firstName2" :required="showGuest2" class="w-full p-1 pl-2 text-gray-500"><br>
            </div>
            <div class="space-y-1">
              <label for="lastName2">Efternamn</label><br>
              <input type="text" id="lastName2" name="lastName2" :required="showGuest2" class="w-full p-1 pl-2 text-gray-500">
            </div>
            <div class="space-y-1">
              <label for="phone2">Telefonnummer</label><br>
              <input type="tel" id="phone2" name="phone2" :required="showGuest2" class="w-full p-1 pl-2 text-gray-500">
            </div>
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
          <button class="w-full md:w-1/3 lg:w-min bg-nearblack hover:bg-darkbeige hover:darkbeige text-white border-2 border-nearblack hover:border-white justify-end px-7 py-4 mt-10 text-sm">
            SKICKA
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white p-5 py-10 md:py-20 lg:py-40 space-y-10">
    <div class="md:w-3/4 mx-auto">
      <h1 class="text-4.5xl font-light text-center lg:text-left">Kontakt</h1>
    </div>
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32">
      <div class="lg:w-1/3">
        <div class="bg-gray-500 h-72 mb-3 lg:mb-6"></div>
      </div>
      <div class="lg:w-3/4 md:my-0">
        <div class="text-xl  leading-snug">
          <p>Erik Andersson</p>
          <p class="font-thin">Toastmaster och keeper of peace.</p>
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
          <p class="font-thin">Bestman av rang, nånting mer och long-time friend till Rikard.</p>
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
  data() {
    return {
      showGuest2: false
    }
  },
  methods: {
    toggleGuest2 () {
      this.showGuest2 = !this.showGuest2
    }
  },
  computed: {
    onHome() {
      return this.$store.state.onHome; 
    }
  },
  mounted () {
    this.$store.commit('changeNavbar', false)
  },
}
</script>