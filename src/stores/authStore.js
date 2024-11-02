import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogged: false,
    authState: {
      token: "",
      user: {},
    },
  }),
  getters: {
    //doubleCount: (state) => state.count * 2,
  },
  actions: {
    async login(token, user) {
      try {
        this.authState.token = token;
        this.authState.user = user;

        this.isLogged = true;
        return;

      } catch (e) {
        this.isLogged = false;
      }
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
