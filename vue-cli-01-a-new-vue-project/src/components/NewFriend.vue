<template>
  <form @submit.prevent="submitData">
    <div class="">
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div class="">
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div class="">
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div class="">
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
