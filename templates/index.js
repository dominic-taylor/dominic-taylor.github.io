const Home = require('./home.vue');
const Pong = require('./pong.vue');
const Talk = require('./talk-wellington.vue');
const Fin = require('./fin.vue');
const Trails = require('./trails.vue');
const Navigation = require('./navigation.vue');
const App = require('./app.vue');

const routes = [
	{ path: '*', component: Home },
    { path: '/', component: Home },
	{ path: '/pong', component: Pong },
	{ path: '/talk-wellington', component: Talk},
	{ path: '/trails', component: Trails},
	{ path: '/fin', component: Fin}
];

// Change back to history on deployment for scroll effect when component changes. 

const router = new VueRouter({
	 // mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
});

Vue.component('navigation', Navigation);


const app = new Vue ({
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');