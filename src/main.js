import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/* Pinia */
import { createPinia } from "pinia"

/* PrimeVue */
import PrimeVue from 'primevue/config'

// css
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'

// components
import Card from 'primevue/card';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
app.component('Card', Card)
app.component('Button', Button)
app.component('Menubar', Menubar)

app.use(createPinia())
app.use(PrimeVue)
app.mount('#app')
