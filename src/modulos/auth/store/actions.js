import authApi from "@/api/authApi";

const createUser = async ({ commit }, user) => {
  const { name, password, email } = user;
  try {
    const { data } = await authApi.post(":signUp", {
      password,
      email,
      returnSecureToken: true,
    });
    const { idToken, refreshToken } = data;
    await authApi.post(":update", { displayName: name, idToken });
    delete user.password;
    commit("loginUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

const signInUser = async ({ commit }, user) => {
  const { password, email } = user;
  try {
    const { data } = await authApi.post(":signInWithPassword", {
      password,
      email,
      returnSecureToken: true,
    });
    const { idToken, refreshToken, displayName } = data;
    user.name = displayName;
    delete user.password;
    commit("loginUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

const checkAuthToken = async ({ commit }) => {
  const idToken = localStorage.getItem("idToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!idToken) {
    commit("logout");
    return { ok: false, message: "No hay Token" };
  }

  try {
    const { data } = await authApi.post(":lookup", { idToken });
    const { displayName, email } = data.users[0];

    const user = {
      name: displayName,
      email,
    };

    commit("loginUser", { user, idToken, refreshToken });

    return { ok: true };
  } catch (error) {
    commit("logout");
    return { ok: false, message: "No hay Token" };
  }
};
export { createUser, signInUser, checkAuthToken };
