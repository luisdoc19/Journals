import { createStore } from "vuex";
import auth from "@/modulos/auth/store";
import journal from "@/modulos/daybook/store/journal";
import { jornalState } from "./test-jornal";

const createVuexStore = (authInitState, jornalInitState = jornalState) =>
  createStore({
    modules: {
      auth: {
        ...auth,
        state: { ...authInitState },
      },
      journal: {
        ...journal,
        state: { ...jornalInitState },
      },
    },
  });
export default createVuexStore;
