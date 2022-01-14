<template>
  <form ref="form" @submit.prevent="sendEmail" class="space-y-9">
    <div class="space-y-2">
      <div>
        <label for="firstName">Förnamn *</label>
        <input type="text" name="firstName" required class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="lastName">Efternamn *</label>
        <input type="text" name="lastName" required class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="phone">Telefonnummer *</label>
        <input type="tel" name="phone" required class="w-full p-1 pl-2 mt-1 text-gray-500">
      </div>
      <div>
        <label for="osa">Kommer du/ni närvara? *</label><br>
        <select name="osa" required class="text-gray-500 p-1 mt-1">
          <option disabled selected value class="text-white"></option>
          <option value="Ja" class="w-full p-1 pl-2">Ja</option>
          <option value="Nej" class="w-full p-1 pl-2">Nej</option>
        </select>
      </div>
    </div>
    <div class="space-y-2">
      <div>
        <label for="drink">Dryck till middagen *</label><br>
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
          <p>Vi tittar på möjligheten att ordna buss till Strängnäs och/eller Eskilstuna på kvällen. Är det intressant för dig? *</p>
        </div>
        <select name="bus" class="text-gray-500 p-1 mt-1">
          <option disabled selected value class="text-white"></option>
          <option value="Nej" class="w-full p-1 pl-2 text-gray-500">Nej</option>
          <option value="Ja, till Strängnäs" class="w-full p-1 pl-2">Ja, till Strängnäs</option>
          <option value="Ja, till Eskilstuna" class="w-full p-1 pl-2">Ja, till Eskilstuna</option>
        </select>
      </div>      
    </div>
    <div class="flex justify-center lg:justify-start">
      <input type="submit" value="SKICKA"
      class="w-full md:w-1/3 lg:w-min px-7 py-4 mt-3 bg-nearblack border-2 border-nearblack text-white hover:bg-darkbeige hover:border-white hover:text-white text-sm">
    </div>
  </form>
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'OsaForm',
  methods: {
    sendEmail() {
      emailjs.sendForm('service_wfc4zgm', 'osa_form', this.$refs.form, 'user_0szKUYK5TFQa7kyiB2f7x')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
