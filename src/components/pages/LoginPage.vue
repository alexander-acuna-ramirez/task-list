<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
        <input type="email" placeholder="E-mail" v-model="loginRequest.email" />
        <input type="password" placeholder="Password" v-model="loginRequest.password"/>
        <button type="submit">
            Login
        </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { http } from '@/plugins/axios';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const router = useRouter();

const loginRequest = reactive({
    email: "",
    password: ""
});

async function handleLogin(){
    try{
        const response = await http.post("/api/v1/login", loginRequest);
        const data = response.data;

        authStore.login(data.token, data.user);
        router.push("/today-tasks");
    }catch(e){
        alert("Login failed")
    }

    
}

</script>
