<template>
  <section class="bg-white p-5 py-10 md:py-20 lg:py-40">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="lg:block lg:w-1/3">
        <h1 class="text-4.5xl font-light">OSA</h1>
        <p>Vi behöver ditt svar senast <span class="font-bold">datum</span>, du anmäler dig via formuläret.</p>
      </div>
      <div class="lg:w-3/4 my-12 md:my-0">
        <div class="text-xl font-light leading-snug">
          <form>
            <label for="fname">First name</label><br>
            <input type="text" id="fname" name="fname" class="w-full border border-gray-500"><br>
            <label for="lname">Last name</label><br>
            <input type="text" id="lname" name="lname" class="w-full border border-gray-500">
          </form>
          <button class="bg-darkbeige border border-darkbeige text-white hover:bg-nearblack hover:text-white px-7 py-4 mt-10 text-sm">
            <router-link to="/info">MER INFO</router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact',
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