<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<template>
  <v-layout>
    <v-navigation-drawer color="#161D31" theme="dark" permanent width="220">
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Employees"
          value="inbox"
          to="/"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="handleLogout"
          prepend-icon="mdi-logout"
          title="Log out"
          value="logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>

<style scoped></style>
