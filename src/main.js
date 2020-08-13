import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'
// import socketio from 'socket.io-client'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://perfutility-6.perf.lokal:5556', //GANTI HOST NANTI SESUAI DOMAIN
    options: { path: "/socket/" } //Optional options
}))

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')