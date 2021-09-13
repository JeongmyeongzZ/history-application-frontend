import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/order
import VueImageKit from 'vue-image-kit';

const app = createApp(App);

app.use(VueImageKit);
app.mount('#app');
