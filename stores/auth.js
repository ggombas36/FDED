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
      }
    },

    async loginUser(email, password) {
      try {
        const response = await authProvider().loginUser(email, password);
        const token = response.access_token;
        const { ssrContext } = useNuxtApp();

        this.token = token;
        this.isAuthenticated = true;
        
        // Only access localStorage on client side
        if (!ssrContext) {
          localStorage.setItem("auth_token", token);
          
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
      useRouter().push("/login");
    },
  },
});