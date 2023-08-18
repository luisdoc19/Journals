import axios from "axios";
import createVuexStore from "../../../mock-data/mock-store";

describe("Pruebas en el Auth Module", () => {
  it("Estado Incial", () => {
    const store = createVuexStore({
      status: "authenticating",
      user: null,
      idToken: null,
      refreshToken: null,
    });
    const { status, user, idToken, refreshToken } = store.state.auth;
    expect(status).toBe("authenticating");
    expect(user).toBe(null);
    expect(idToken).toBe(null);
    expect(refreshToken).toBe(null);
  });

  it("Mutations: loginUser", () => {
    const store = createVuexStore({
      status: "authenticating",
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const payload = {
      user: { name: "Luis David", email: "luisd@gmail.com" },
      idToken: "ABC-123",
      refreshToken: "AJKD",
    };

    store.commit("auth/loginUser", payload);
    const { status, user, idToken, refreshToken } = store.state.auth;

    expect(status).toBe("authenticated");
    expect(user).toEqual({ name: "Luis David", email: "luisd@gmail.com" });
    expect(idToken).toBe("ABC-123");
    expect(refreshToken).toBe("AJKD");
  });
  it("Mutations: logout", () => {
    const store = createVuexStore({
      status: "authenticated",
      user: { name: "Luis David", email: "luisd@gmail.com" },
      idToken: "ABC-123",
      refreshToken: "AJKD",
    });

    store.commit("auth/logout");

    const { status, user, idToken, refreshToken } = store.state.auth;
    expect(status).toBe("not-authenticated");
    expect(user).toBe(null);
    expect(idToken).toBe(null);
    expect(refreshToken).toBe(null);
  });

  it("Getters: username currentState", () => {
    const store = createVuexStore({
      status: "authenticated",
      user: { name: "Luis David", email: "luisd@gmail.com" },
      idToken: "ABC-123",
      refreshToken: "AJKD",
    });

    expect(store.getters["auth/currentStatus"]).toBe("authenticated");
    expect(store.getters["auth/username"]).toBe("Luis David");
  });

  it("Actions: createUser - Error usuario ya existe", async () => {
    const store = createVuexStore({
      status: "not-authenticated",
      user: null,
      idToken: null,
      refreshToken: null,
    });
    const newUser = {
      name: "Test Unit",
      email: "test@gmail.com",
      password: "123456",
    };
    const { ok } = await store.dispatch("auth/createUser", newUser);
    expect(ok).toBeFalsy();
  });

  it("Actions: createUser", async () => {
    const store = createVuexStore({
      status: "not-authenticated",
      user: null,
      idToken: null,
      refreshToken: null,
    });
    const userLogIn = {
      email: "test2@gmail.com",
      password: "123456",
    };

    await store.dispatch("auth/signInUser", userLogIn);
    const { idToken } = store.state.auth;

    await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyC-hl60iGfMKApkGTvxQ7o1m1tZIDipGGk`,
      {
        idToken,
      }
    );

    const newUser = {
      name: "Test Unit",
      email: "test2@gmail.com",
      password: "123456",
    };
    const { ok } = await store.dispatch("auth/createUser", newUser);
    expect(ok).toBeTruthy();
  });

  it("Actions: checkAuthentication - POSITIVA", async () => {
    const store = createVuexStore({
      status: "not-authenticated",
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const signInResponse = {
      email: "test@gmail.com",
      password: "123456",
    };

    const { ok } = await store.dispatch("auth/signInUser", signInResponse);
    expect(ok).toBeTruthy();

    const { idToken } = store.state.auth;
    store.commit("auth/logout");

    localStorage.setItem("idToken", idToken);

    const checkAuth = await store.dispatch("auth/checkAuthToken");
    expect(checkAuth.ok).toBeTruthy();
  });

  it("Actions: checkAuthentication - NEGATIVA", async () => {
    const store = createVuexStore({
      status: "not-authenticated",
      user: null,
      idToken: null,
      refreshToken: null,
    });

    localStorage.removeItem("idToken");

    const checkAuth = await store.dispatch("auth/checkAuthToken");
    expect(checkAuth).toEqual({ ok: false, message: "No hay Token" });

    localStorage.setItem("idToken", "ABC-123");

    const checkAuth2 = await store.dispatch("auth/checkAuthToken");
    expect(checkAuth2).toEqual({ ok: false, message: "No hay Token" });
  });
});
