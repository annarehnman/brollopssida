<template>
  <section class="bg-white p-5 py-10 md:py-20 lg:py-40">
    <div class="md:w-3/4 mx-auto lg:flex lg:space-x-32 text-center lg:text-left">
      <div class="hidden lg:block lg:w-1/3 text-4.5xl font-light">
        <p>Allt du behöver veta</p>
      </div>
      <div class="lg:w-3/4 my-12 md:my-0">
        <div class="text-xl font-light leading-snug">
          <div class="space-y-6 lg:mb-6">
          <p>Vi gifter oss lördagen 30 juli och hoppas att du vill vara med.</p>
          <p>Vigsel, middag och fest äger rum på Kungsberg Gård, 15 km utanför Strängnäs. All praktisk info om och inför dagen hittar på den här sidan.</p>
          </div>
            <div class="hidden lg:block space-y-2">
              <p><span class="font-semibold">00:00</span> Vigsel</p>
              <p><span class="font-semibold">00:00</span> Mingel och tipspromenad</p>
              <p><span class="font-semibold">00:00</span> Middag på magasinet</p>
              <p><span class="font-semibold">00:00</span> Fest så länge vi vill och orkar</p>
            </div>
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
  name: 'InfoSection',
}
</script>