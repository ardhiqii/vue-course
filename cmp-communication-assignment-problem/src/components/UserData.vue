<template>
  <header><h1>User Data</h1></header>
  <form @submit.prevent="submitForm">
    <div class="">
      <label>Username</label>
      <input type="text" v-model="enteredUsername" />
    </div>
    <div class="">
      <label>Age</label>
      <input type="number" v-model="enteredAge" />
    </div>
    <button>Set user</button>
  </form>
</template>

<script>
export default {
  emits: ["new-user"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: null,
    };
  },
  methods: {
    submitForm() {
      this.$emit("new-user", this.enteredUsername, this.enteredAge);
      this.enteredUsername = "";
      this.enteredAge = null;
    },
  },
};
</script>
