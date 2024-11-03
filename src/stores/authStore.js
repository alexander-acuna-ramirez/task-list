import { http } from "@/plugins/axios";
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
    loggetUser: (state) => state.authState.user.name,
    loggedUserToken: (state) => state.authState.token,
    loggedUserId: (state) => state.authState.user.id,

  },
  actions: {
    async login(loginRequest) {
      try {
        const response = await http.post("/api/v1/login", loginRequest);
        const data = response.data;

        this.authState.user = data.user;
        this.authState.token = data.token;
        this.isLogged = true;

        return { message: "Logged succesfully", isLogged: this.isLogged };

      } catch (e) {
        this.isLogged = false;
        if(e.response && e.response.status === 401){
          return { message: "Invalid credentials, try again!", isLogged: this.isLogged };
        }

        return { message: "Service isn't available!", isLogged: this.isLogged };
      }
    },

    async logout(){
      try {
        await http.post("/api/v1/logout");
        this.authState.token = "",
        this.authState.user = {},
        this.isLogged = false;
      } catch (e) {
        console.error(e);
      }
    }
  },
  persist: {
    storage: sessionStorage,
  },
});
