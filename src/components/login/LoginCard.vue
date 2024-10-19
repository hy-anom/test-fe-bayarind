<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
const userName = ref("user.test@bayarind.id");
const password = ref("password");
const showPassword = ref(false);

const handleLogin = () => {
  authStore.login(userName.value, password.value);
};
</script>

<template>
  <div class="login-card">
    <v-card>
      <v-card-title>Login Bayarind</v-card-title>
      <v-card-text>
        <v-form validate-on="submit lazy" @submit.prevent="handleLogin">
          <v-text-field v-model="userName" label="User name"></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-btn block type="submit"> Login </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.login-card {
  width: 400px;
}
</style>
