import { defineStore } from "pinia";
import { IUser } from "../types/authTypes";
import router from "../router"

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: {} as IUser,
      token: localStorage.getItem("token"),
      returnUrl: '',
    };
  },
  actions: {
    login(userName: string, password: string) {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      
      const body = JSON.stringify({
        email: userName,
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers,
        body,
      };

      fetch(
        "https://api-interview-vue.bayarind.id/api/auth/login",
        requestOptions
      )
        .then((response) => response.json())
        .then(({ data }) => {
          this.user = data;
          localStorage.setItem("token", this.user.token);
          this.token = localStorage.getItem("token");
          router.push('/');
        })
        .catch((error) => {
          console.log(error)
        });
 
    },
  },

  getters: {
    isAuthorized() {
      if(this.user.token) {
        return true;
      }
      if(localStorage.getItem("token")) {
        return true;
      }
      return false;
    }
  },
});
