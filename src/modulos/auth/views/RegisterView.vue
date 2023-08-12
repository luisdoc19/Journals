<template>
  <span class="login100-form-title p-b-41"> Registrarse </span>
  <form
    class="login100-form validate-form p-b-33 p-t-5"
    @submit.prevent="handleSubmit"
  >
    <div class="wrap-input100 validate-input" data-validate="Enter name">
      <input
        class="input100"
        type="text"
        placeholder="Nombre"
        name="name"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input
        class="input100"
        type="email"
        placeholder="Correo"
        name="email"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        class="input100"
        type="password"
        name="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">Crear cuenta</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import useAuth from "../composables/useAuth";
export default {
  setup() {
    const { handleSubmit } = useAuth();
    return {
      handleSubmit,
    };
  },
};
</script>

<style></style>
