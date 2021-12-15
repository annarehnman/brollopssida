<template>
  <section class="bg-home-background bg-cover w-full h-full flex justify-center items-center relative z-0">
      <div class="p-5 text-white text-center">
        <div class="space-y-6 md:space-y-8">
          <h1 class="mb-3 text-5xl md:text-6xl">Anna & Rikard</h1>
          <p class="font-light text-2xl md:text-3xl">30 juli 2022 <span>&#183;</span> Kungsberg Gård, Strängnäs</p>
          <button class="bg-transparent hover:bg-white hover:text-nearblack border-2 border-white px-7 py-4">
            <router-link to="/kontakt">OSA</router-link>
          </button>
        </div>
      </div>
  </section>
  <section class="bg-white p-5 py-20 md:py-40">
    <div class="md:w-3/4 mx-auto md:flex md:space-x-20 text-center md:text-left">
      <div class="md:w-1/3">
        <img src="../images/home2.jpg"/> 
      </div>
      <div class="my-12 md:my-0 md:w-3/4 md:pr-8">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">Praktisk info</h2>
        <p class="text-xl font-light">Vi håller till på Kungsberg gård på Fogdö, 15 km utanför Strängnäs. All praktisk info om och inför dagen hittar du här.</p>
          <button class="bg-darkbeige text-white hover:bg-nearblack hover:text-white border border-darkbeige px-7 py-4 mt-10 text-sm">
            <router-link to="/info">LÄS MER</router-link>
          </button>
      </div>
    </div>
  </section>
  <section class="p-5 py-20 md:py-20 bg-nearblack text-white text-center">
    <div >
      <div class="md:w-3/4 mx-auto md:pr-10">
        <h2 class="text-2xl md:text-4xl font-semibold text-center mb-4">Har du frågor?</h2>
        <p class="md:text-lg font-light">Hör gärna av dig till via telefon eller mail, kontaktinfo till alla inblandade hittar du här.</p>
        <button class="bg-tranpsarent text-white hover:bg-white hover:text-nearblack border-2 border-white px-7 py-4 mt-10 text-sm">
            <router-link to="/kontakt">Kontakt</router-link>
          </button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
