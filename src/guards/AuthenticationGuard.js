import { useAuthStore } from "../stores/authStore";


export const authenticationGuard = (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.mustBeAuthenticated && !authStore.isLogged) {

    next({
      name: "LoginPage",
    });
  }
  next();
};
