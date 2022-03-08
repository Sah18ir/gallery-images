import Vue from 'vue'
import App from './App.vue'
import Boot from 'bootstrap-vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import "@/assets/css/main.css"
import "@/assets/css/ltr.css"
import "@/assets/css/rtl.css"
import "@/assets/css/dark.css"


Vue.use(Vuetify)
Vue.use(Boot)
    // Vue.use(IconsPlugin)
Vue.config.productionTip = false
const opts = {}

export default new Vuetify(opts)

new Vue({
    vuetify: new Vuetify(),
    router,
    Boot,
    Vuetify,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')