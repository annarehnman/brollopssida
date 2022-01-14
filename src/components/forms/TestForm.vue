<template>
  <form @submit="checkForm" method="post" class="space-y-3">

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="name">Name</label><br>
      <input id="name" v-model="name" type="text" name="name" class="w-2/3 text-gray-500">
    </p>

    <p>
      <label for="age">Age</label><br>
      <input id="age" v-model="age" type="number" name="age" min="0" class="w-2/3 text-gray-500">
    </p>

    <p>
      <label for="movie">Favorite Movie</label><br>
      <select id="movie" v-model="movie" name="movie" class="w-2/3 text-gray-500">
        <option>Star Wars</option>
        <option>Vanilla Sky</option>
        <option>Atomic Blonde</option>
      </select>
    </p>

    <p>
      <input type="submit" value="SUBMIT" class="bg-nearblack border-none px-4 py-2 text-sm">
    </p>

  </form>
</template>


<script>
// import emailjs from '@emailjs/browser';

export default {
  name: 'TestForm',
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    }


    // sendEmail() {
    //   emailjs.sendForm('service_wfc4zgm', 'osa_form', this.$refs.form, 'user_0szKUYK5TFQa7kyiB2f7x')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.text);
    //     }, (error) => {
    //         console.log('FAILED...', error.text);
    //     });
    // }
  }
}
</script>
