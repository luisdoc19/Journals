<template>
  <NavBar />
  <div class="d-flex" v-if="!isLoading">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
  <div v-else class="d-flex">
    <div class="col-4">
      <div class="loading-container"></div>
      <div class="loading-inputs"></div>
      <div class="loading-inputs"></div>
      <div class="loading-inputs"></div>
    </div>
    <div class="col">
      <div></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  created() {
    this.loadEntries();
  },
  computed: {
    ...mapState("journal", ["isLoading", "entries"]),
  },
};
</script>

<style scoped>
.loading-container {
  height: 40px;
  width: 100%;
  background-color: #3a3a3a;
  border-radius: 5px;
  margin-top: 5px;
  animation: loading 1s ease-in-out infinite;
}
.loading-inputs {
  height: 100px;
  width: 100%;
  background-color: #343434;
  border-radius: 5px;
  margin-top: 10px;
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
