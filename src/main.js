import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/reset.css';
import '@/styles/global.scss';

window.sc = createApp(App).mount('#app')
