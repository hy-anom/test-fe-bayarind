<script setup lang="ts">
import Sidebar from "../components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="d-flex">
    <!-- sidebar -->
    <div>
      <Sidebar />
    </div>
    <div class="w-100 pa-6">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
