import { createApp } from 'vue';
import { router } from './router';
import { pinia } from '@/plugins/pinia.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'gitart-vue-dialog/dist/style.css';
import './style.css';
import App from './App.vue';

const app = createApp(App)
app.use(router);
app.use(pinia);

app.mount('#app');
