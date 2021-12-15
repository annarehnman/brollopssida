<template>
  <home-welcome />
  <home-info />
  <home-contact />
</template>

<script>
import HomeContact from '../components/home/HomeContact.vue'
import HomeInfo from '../components/home/HomeInfo.vue'
import HomeWelcome from '../components/home/HomeWelcome.vue'


export default {
  components: { HomeWelcome, HomeInfo, HomeContact },
  name: 'Home',
}
</script>
