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

export { createUser };
