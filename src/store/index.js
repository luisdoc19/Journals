import { createStore } from "vuex";
import journal from "@/modulos/daybook/store/journal/index";
import auth from "@/modulos/auth/store/index";
const store = createStore({
  modules: {
    journal,
    auth,
  },
});

export default store;
