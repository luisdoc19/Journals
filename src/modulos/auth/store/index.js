import state from "@/modulos/auth/store/state";
import * as actions from "@/modulos/auth/store/actions";
import * as mutations from "@/modulos/auth/store/mutations";
import * as getters from "@/modulos/auth/store/getters";
const authStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default authStore;
