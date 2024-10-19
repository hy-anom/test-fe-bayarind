<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
const router = useRouter();

if (!authStore.isAuthorized) {
  router.push("/login");
}
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
