import { ref } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

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
    console.log(ok, message);
  };

  return {
    handleSubmit,
  };
};

export default useAuth;
