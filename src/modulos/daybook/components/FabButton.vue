<template>
  <button class="btn btn-primary">
    <i :class="onCheckRoute"></i>
  </button>
</template>

<script>
export default {
  computed: {
    onCheckRoute() {
      return this.$route.name === "no-entry"
        ? "fa fa-2x fa-plus"
        : "fa fa-2x fa-save";
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: fixed;
  right: 20px;
  width: 60px;
}
</style>
