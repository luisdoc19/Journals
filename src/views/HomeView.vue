<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Hola Mundo</h1>
    <button class="btn btn-primary" @click="goDayBook">Primary</button>
    <button class="btn btn-secondary" @click="goDayBook">Secondary</button>
    <button class="btn btn-success" @click="goDayBook">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
