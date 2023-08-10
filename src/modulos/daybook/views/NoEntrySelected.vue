<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab @on-click="createEntry" icon="fa-plus" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NoEntrySelected",
  components: {
    Fab: defineAsyncComponent(() => import("../components/FabButton.vue")),
  },
  methods: {
    createEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
