import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueSocketIO, socketio('http://localhost:5555/', {
    origins: 'http://localhost:5555',
    transportOptions: {
        polling: {
            extraHeaders: {
                'Access-Control-Allow-Origin': 'http://localhost:8080/',
                'Content-Type':'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Headers':'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
            }
        }
    }
}), store);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
