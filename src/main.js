// Necessaries
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// API
import { createPinia } from 'pinia'
import { createMachine } from 'xstate'

// Else
import 'vue-global-api'
import 'remixicon/fonts/remixicon.css'
import '/public/assets/scss/style.css'

// Initializing
const pinia = createPinia()
const app = createApp(App)

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas  } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( fas, far, fab )

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.mount('#app')