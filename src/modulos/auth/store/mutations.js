export const loginUser = (state, { user, idToken, refreshToken }) => {
  if (!user || !idToken || !refreshToken) return;
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }
  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    state.refreshToken = refreshToken;
  }
  state.user = user;
  state.status = "authenticated";
};
