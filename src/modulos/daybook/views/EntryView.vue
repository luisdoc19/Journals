<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">4</span>
      <span class="mx-1 fs-3">Agosto</span>
      <span class="mx-2 fs-3 fw-ligth">2023</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash-alt"></i> Borrar
      </button>
      <button class="btn btn-primary mx-2">
        <i class="fa fa-upload"></i> Subir foto
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?"></textarea>
  </div>
  <Fab />
  <img
    src="https://i0.wp.com/s-portology.com/wp-content/uploads/2019/05/Kawhi-Leonard-1.jpg?fit=1200%2C628&ssl=1"
    alt="entry"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/FabButton.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
