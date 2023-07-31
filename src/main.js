import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faHeart, faXmark)

store.dispatch('products/load')
store.dispatch('cart/load')
createApp(App).use(store).use(router).use(ElementPlus).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

