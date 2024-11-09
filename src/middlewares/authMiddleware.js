import { useAuthStore } from "@/stores/authStore";

const authMiddleware = (context) => {
    console.log("authMiddleware");
    const { next } = context;
    const authStore = useAuthStore();

    if (authStore.isLogged) {
        next();
    }else{
        next({name: "LoginPage"});
    }
}

export { authMiddleware };