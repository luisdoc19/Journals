import state from "@/modulos/auth/store/state";
import * as actions from "@/modulos/auth/store/actions";
import * as mutations from "@/modulos/auth/store/mutations";
const authStore = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default authStore;
