import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

import '@/styles/reset.css';
import '@/styles/global.scss';

window.sc = createApp(App).use(store).mount('#app')
