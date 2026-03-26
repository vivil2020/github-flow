import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const text = (_a: string) => {
  console.log(_a);
}
text("1")