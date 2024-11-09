import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
import { router } from "@/router/index";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accepts: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
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
    const currentRoute = router.currentRoute.value;
    if(error.response.status == 401 && currentRoute.name != 'LoginPage'){
        authStore.isLogged = false;
        router.push({ name: "LoginPage" })
    }
    return Promise.reject(error);
  }
);

export { http };
