import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navi from '@/components/navi.vue'
import overview from '@/components/about/Overview.vue'
import staff from '@/components/about/staff.vue'
import testimonies from '@/components/about/testimonies.vue'
import Clients from '@/components/about/Clients.vue'
import events from '@/components/events/events.vue'
import contact from '@/components/contact/contact.vue'
import  foot from '@/components/parts/foot.vue'
import Pro from '@/components/about/Pro.vue'
import mains from '@/components/about/Mainfeatures'
import intro from '@/components/services/intro.vue'
import serve from '@/components/services/serve.vue'
Vue.config.productionTip = false

Vue.component('navi',navi)
Vue.component('overview',overview)
Vue.component('staff',staff)
Vue.component('testimonies',testimonies)
Vue.component('events',events)
Vue.component('contact',contact)
Vue.component('Clients',Clients)
Vue.component('foot',foot)
Vue.component('Pro',Pro )
Vue.component('mains',mains )
Vue.component('intro',intro )
Vue.component('serve',serve )

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
