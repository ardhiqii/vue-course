<template>
  <ul>
    <li :class="{ active: checkActive('poor') }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: checkActive('average') }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: checkActive('great') }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
  computed: {
    checkActive() {
      return (option) => this.modelValue === option;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
