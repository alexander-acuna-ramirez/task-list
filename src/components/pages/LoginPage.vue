<template>
  <div
    class="container d-flex align-items-center justify-content-center min-vh-100"
  >
    <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%">
      <div class="car-body tex-left">
        <div>
          <span class="d-flex align-items-center justify-content-center">
            <i class="bi bi-box fs-3 text-primary me-2"></i>
            <strong class="h4 mb-0"> Task App</strong>
          </span>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email">E-mail</label>
            <input
              :disabled="isLoading"
              type="email"
              required
              class="form-control"
              v-model="loginRequest.email"
            />
          </div>
          <div class="mb-3">
            <label for="password">Password</label>
            <input
              :disabled="isLoading"
              type="password"
              required
              class="form-control"
              v-model="loginRequest.password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100"
            :disabled="isLoading"
          >
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm me-2"
            ></span>
            Login
          </button>
          <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref("");

const loginRequest = reactive({
  email: "",
  password: "",
});

async function handleLogin() {
  isLoading.value = true;
  try {
    const { message, isLogged } = await authStore.login(loginRequest);
    if (isLogged) {
      router.push("/today-tasks");
    }
    errorMessage.value = message;
  } catch (e) {
    errorMessage.value = "Login Failed. Check your credentials";
  } finally {
    isLoading.value = false;
  }
}
</script>
