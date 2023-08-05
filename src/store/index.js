import { createStore } from "vuex";
import journal from "@/modulos/daybook/store/journal/index";

const store = createStore({
  modules: {
    journal,
  },
});

export default store;
