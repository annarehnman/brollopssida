<template>
  <form ref="form" @submit.prevent="checkForm" class="text-lg">
    <div class="space-y-2">
      <div>
        <label for="name">Namn</label>
        <input v-model="name" type="text" name="name" :disabled="success" class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="osa">Kommer du närvara?</label><br>
        <select v-model="osa" name="osa" :disabled="success" class="bg-white text-gray-500 p-1 mt-1">
          <option value="Ja" class="w-full p-1 pl-2">Ja</option>
          <option value="Nej" class="w-full p-1 pl-2">Nej</option>
        </select>
      </div>
      <div>
        <label for="phone">Telefonnummer</label>
        <input v-model="phone" type="number" name="phone" :disabled="success" class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="drink">Dryck till middagen</label><br>
        <select v-model="drink" name="drink" :disabled="success" class="bg-white text-gray-500 p-1 mt-1">
          <option value="Alkohol" class="w-full p-1 pl-2">Alkohol</option>
          <option value="Alkoholfritt" class="w-full p-1 pl-2">Alkoholfritt</option>
        </select>
      </div>
      <div>
        <label for="allergies">Allergier eller specialkost</label>
        <textarea v-model="allergies" name="allergies" :disabled="success" class="w-full p-1 pl-2 mt-1 text-gray-500"></textarea>
      </div>
      <div>
        <label for="misc">Övrigt som är bra för oss att veta</label>
        <textarea v-model="misc" name="misc" :disabled="success" class="w-full p-1 pl-2 mt-1 text-gray-500"></textarea>
      </div>
      <div>
        <label for="bus">Vi tittar på möjligheten att ordna buss till Strängnäs och/eller Eskilstuna på kvällen. Är det intressant för dig?</label><br>
        <select v-model="bus" name="bus" :disabled="success" class="bg-white text-gray-500 p-1 mt-1">
          <option value="Ja, till Strängnäs" class="w-full p-1 pl-2">Ja, till Strängnäs</option>
          <option value="Ja, till Eskilstuna" class="w-full p-1 pl-2">Ja, till Eskilstuna</option>
          <option value="Nej" class="w-full p-1 pl-2 text-gray-500">Nej</option>
        </select>
      </div>  
    </div>
    <!-- button -->
    <div v-if="!checking && !success" class="flex justify-center lg:justify-start mt-10 lg:mt-14">
      <input type="submit" value="SKICKA"
      class="w-full md:w-1/3 lg:w-1/6 py-4 bg-nearblack border-2 border-nearblack text-white hover:bg-darkbeige hover:border-white hover:text-white text-sm">
    </div> 
    <!-- error msg -->
    <div class="text-center lg:text-left text-base mt-10 lg:mt-14">
      <div v-if="errors.length">
        <b>Tack, men det saknas info!</b>
        <ul>
          <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
        </ul>
      </div>
      <div v-if="success" class="space-y-5">
        <b class="text-2xl">Tack för ditt svar!</b>
        <div>
          <button @click="newForm()"
          class="w-full md:w-1/3 lg:w-1/6 py-4 bg-transparant border-2 hover:bg-white border-white text-white hover:text-nearblack text-sm">ANMÄL EN TILL</button><br>
        </div>
      </div>
      <div v-if="success === false">
        <b>Något gick fel!</b>
        <p>Försök igen eller hör av dig till vår support (Anna).</p>
      </div>
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
      name: null,
      phone: null,
      osa: null,
      drink: null,
      allergies: null,
      misc: null,
      bus: null,
      checking: false,
      success: null
    }
  },
  methods: {
    checkForm() {
      this.checking = true
      if (this.name && this.osa) {
        if (this.osa === 'Nej') {
          this.sendEmail()
          return
        }
        if (this.phone && this.drink) {
          if (this.osa === 'Ja') {
            this.errors = [];
            this.sendEmail()
            return
            } 
        }
        this.errors = [];
        if (!this.phone) {
        this.errors.push('- telefonnummer')
        this.checking = false
        }
        if (!this.drink) {
        this.errors.push('- dryck till middagen')
        this.checking = false
        }
        return         
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push('- namn')
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
      this.name = '',
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
