import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const http = axios.create({
  baseURL: "https://task-list-api.test/",
  headers: {
    Accepts: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
    console.log(authStore.authState.token);
    config.headers.set("Authorization", "Bearer " + authStore.authState.token);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const authStore = useAuthStore();
    if(error.response.status == 401 && window.location != '/login'){
        authStore.isLogged = false;
    }
    return Promise.reject(error);
  }
);

export { http };
