require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Product from './components/Product.vue'
import Order from './components/Order.vue'
import Complete from './components/Complete.vue'

// Register components and services
Vue.use(VueRouter);

// Register routes
const routes = [
  { name: 'home', path: '/', component: Product },
  { name: 'order', path: '/order', component: Order },
  { name: 'order-complete', path: '/order-complete/:id', component: Complete }
];

const router = new VueRouter({
  routes
});

// instantiate everything to DOM
new Vue({
	router,
	el: '#app',
	data(){
		return {
			order_details: {}
		}
	},
	render: h => h(App)
});

