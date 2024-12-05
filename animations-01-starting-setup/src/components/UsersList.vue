<template>
  <transition-group tag="ul" name="users-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Aufa'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
      this.$refs.userNameInput.value = null;
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.users-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.users-list-enter-active {
  transition: all 1s ease;
}
.users-list-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.users-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.users-list-leave-active {
  transition: all 1s ease;
  position: absolute
}

.users-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.users-list-move{
    transition: transform 0.8s ease ;
}
</style>
