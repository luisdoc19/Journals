import Swal from "sweetalert2";
import { computed } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();
  const router = useRouter();

  const createUser = async (user) => {
    const res = await store.dispatch("auth/createUser", user);
    return res;
  };

  const formData = ref({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const { name, password, email } = Object.fromEntries(
      new FormData(e.target)
    );
    formData.value.email = email;
    formData.value.name = name;
    formData.value.password = password;
    const { ok, message } = await createUser(formData.value);
    if (!ok) Swal.fire("Error", message, "error");
    else {
      formData.value = {
        name: "",
        email: "",
        password: "",
      };
      router.push({ name: "no-entry" });
    }
  };

  const loginUser = async (e) => {
    const { email, password } = Object.fromEntries(new FormData(e.target));
    const { ok, message } = await store.dispatch("auth/signInUser", {
      email,
      password,
    });

    if (!ok) Swal.fire("Error", message, "error");
    else {
      router.push({ name: "no-entry" });
    }
  };

  const checkStatus = async () => {
    const res = await store.dispatch("auth/checkAuthToken");
    return res;
  };

  return {
    username: computed(() => store.getters["auth/username"]),
    handleSubmit,
    loginUser,
    checkStatus,
    logout: () => {
      store.commit("auth/logout");
      store.commit("journal/clearEntries");
    },
    authStatus: computed(() => store.getters["auth/currentStatus"]),
  };
};

export default useAuth;
