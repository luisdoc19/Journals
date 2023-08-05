<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style></style>
