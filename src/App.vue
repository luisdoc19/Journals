<template>
  <router-view />
</template>

<script>
import useAuth from "./modulos/auth/composables/useAuth";
export default {
  setup() {
    const { authStatus, checkStatus } = useAuth();
    checkStatus();
    return {
      authStatus,
    };
  },
};
</script>
