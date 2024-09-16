<template>
  <h1>Assignment</h1>
  <section>
    <div class="active-user">
      <active-user :username="username" :age="age"></active-user>
    </div>
    <div class="user-data">
      <user-data @new-user="addNewUser"></user-data>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    addNewUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
}
.active-user,
.user-data {
  width: 100%;
}
</style>
