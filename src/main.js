import { createApp } from 'vue'
import App from './App.vue'

/* Pinia */
import { createPinia } from "pinia"

/* PrimeVue */
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.mount('#app')
