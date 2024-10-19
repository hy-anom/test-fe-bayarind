<script setup lang="ts">
</script>

<template>
  <v-layout>
    <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark"
      permanent
      width="220"
    >
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Employees"
          value="inbox"
          to="/"
        ></v-list-item>
        <!-- <v-list-item
          prepend-icon="mdi-domain"
          title="Departments"
          value="departments"
          to="/departments"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Positions"
          value="positions"
        ></v-list-item> -->
        <v-divider></v-divider>
        <v-list-item
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
