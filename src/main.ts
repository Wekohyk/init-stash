import { createApp } from 'vue';
// pinia and pinia-plugin-persistedstate
import { createPinia } from 'pinia';
import pinia from './stores';
import persist from 'pinia-plugin-persistedstate';
// vue-router
import router from './router';
// App
import App from './App.vue';

const app = createApp(App);

app.use(pinia);
app.use(createPinia().use(persist));
app.use(router);
app.mount('#app');
