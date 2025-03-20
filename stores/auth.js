import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useNuxtApp } from '#app';
import authProvider from "@/services/auth";
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: null,
  }),

  actions: {
    loadAuth() {
      const { ssrContext } = useNuxtApp();
      // Check if we're on client side
      if (!ssrContext) {
        const token = localStorage.getItem("auth_token");
        const user_id = localStorage.getItem("user_id");
        if (token) {
          const decoded = jwtDecode(token);
          const now = Date.now() / 1000;

          if (decoded.exp > now) {
            this.isAuthenticated = true;
            this.token = token;
          } else {
            this.logoutUser();
          }
        }
        if (user_id) {
          this.user_id = user_id;
        }
      }
    },

    async loginUser(email, password) {
      try {
        const response = await authProvider().loginUser(email, password);
        const token = response.access_token;
        const user_id = response.user_id;
        const { ssrContext } = useNuxtApp();

        console.log("id",response.user_id);
        

        this.token = token;
        this.isAuthenticated = true;
        this.user_id = user_id;
        
        // Only access localStorage on client side
        if (!ssrContext) {
          localStorage.setItem("auth_token", token);
          
          localStorage.setItem("user_id", user_id);
          
          const decoded = jwtDecode(token);
          const expiresIn = (decoded.exp - Date.now() / 1000) * 1000;
          setTimeout(() => this.logoutUser(), expiresIn);
        }
      } catch (error) {
        throw error;
      }
    },

    logoutUser() {
      this.token = null;
      this.isAuthenticated = false;
      
      const { ssrContext } = useNuxtApp();
      // Only access localStorage on client side
      if (!ssrContext) {
        localStorage.removeItem("auth_token");
      }
      // useRouter().push("/profile");
    },
  },
});