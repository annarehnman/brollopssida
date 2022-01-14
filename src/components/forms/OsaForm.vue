<template>
  <form ref="form" @submit.prevent="checkForm" class="space-y-9">
    <div class="space-y-2">
      <div>
        <label for="firstName">Förnamn</label>
        <input v-model="firstName" type="text" name="firstName" class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="lastName">Efternamn</label>
        <input v-model="lastName" type="text" name="lastName" class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="osa">Kommer du närvara?</label><br>
        <select v-model="osa" name="osa" class="text-gray-500 p-1 mt-1">
          <option disabled selected value class="text-white"></option>
          <option value="Ja" class="w-full p-1 pl-2">Ja</option>
          <option value="Nej" class="w-full p-1 pl-2">Nej</option>
        </select>
      </div>
      <div>
        <label for="phone">Telefonnummer</label>
        <input v-model="phone" type="number" name="phone" class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="drink">Dryck till middagen</label><br>
        <select name="drink" class="text-gray-500 p-1 mt-1">
          <option disabled selected value class="text-white"></option>
          <option value="Alkohol" class="w-full p-1 pl-2">Alkohol</option>
          <option value="Alkoholfritt" class="w-full p-1 pl-2">Alkoholfritt</option>
        </select>
      </div>
      <div>
        <label for="allergies">Allergier eller specialkost</label>
        <textarea name="allergies" class="w-full p-1 mt-1 text-gray-500"></textarea>
      </div>
      <div>
        <label for="misc">Övrigt som är bra för oss att veta</label><br>
        <textarea name="misc" class="w-full p-1 pl-2 mt-1 text-gray-500"></textarea>
      </div>
      <div>
        <div>
          <p>Vi tittar på möjligheten att ordna buss till Strängnäs och/eller Eskilstuna på kvällen. Är det intressant för dig?</p>
        </div>
        <select name="bus" class="text-gray-500 p-1 mt-1">
          <option disabled selected value class="text-white"></option>
          <option value="Nej" class="w-full p-1 pl-2 text-gray-500">Nej</option>
          <option value="Ja, till Strängnäs" class="w-full p-1 pl-2">Ja, till Strängnäs</option>
          <option value="Ja, till Eskilstuna" class="w-full p-1 pl-2">Ja, till Eskilstuna</option>
        </select>
      </div>      
    </div>
    <div v-if="!checking && !success" class="flex justify-center lg:justify-start">
      <input type="submit" value="SKICKA"
      class="w-full md:w-1/3 lg:w-min px-7 py-4 mt-3 bg-nearblack border-2 border-nearblack text-white hover:bg-darkbeige hover:border-white hover:text-white text-sm">
   </div> 

   <div v-if="success" class="justify-center lg:justify-start space-y-5">
    <div class="text-2xl">
      <b>Tack för ditt svar!</b>
    </div>
      <button @click="newForm()"
      class="d-block w-block px-7 py-4 bg-transparant border-2 hover:bg-white border-white text-white hover:text-nearblack text-sm">ANMÄL EN TILL</button><br>
   </div>

    <div v-if="errors.length" class="text-center lg:text-left">
      <b>Tack, men det saknas info!</b>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </div>
    <div v-if="success === false" class="text-center lg:text-left">
      <b>Något gick fel, försök igen lite senare eller hör av dig till vår support (Anna).</b>
    </div>
  </form>
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'OsaForm',
  data() {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      phone: null,
      osa: null,
      drink: null,
      bus: null,
      checking: false,
      success: null
    }
  },
  methods: {
    checkForm() {
      this.checking = true
      if (this.firstName && this.lastName && this.osa) {
        if (this.osa === 'Nej') {
          this.sendEmail()
        }

        if (this.osa === 'Ja' && this.drink && this.bus) {
          console.log('ja-form ok')
          return true; // send email
        }
      }
      this.errors = [];

      if (!this.firstName) {
        this.errors.push('- förnamn')
        this.checking = false
      }
      if (!this.lastName) {
        this.errors.push('- efternamn')
        this.checking = false
      }
      if (!this.osa) {
        this.errors.push('- om du närvarar eller inte')
        this.checking = false
      }
    },
    sendEmail() {
      emailjs.sendForm('service_wfc4zgm', 'osa_form', this.$refs.form, 'user_0szKUYK5TFQa7kyiB2f7x')
        .then(() => {
            this.resetForm()
            this.success = true
        }, () => {
            this.success = false
        });
    },
    resetForm() {
      this.firstName = '',
      this.lastName = '',
      this.phone = '',
      this.osa = '',
      this.drink = '',
      this.allergies = '',
      this.misc = '',
      this.bus = '',
      this.errors = [];
    },
    newForm() {
      this.success = null
      this.checking = false
    }
  }
}
</script>
