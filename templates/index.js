const Home = require('./home.vue');
const Pong = require('./pong.vue');
const Talk = require('./talk-wellington.vue');
const Fin = require('./fin.vue');
const Trails = require('./trails.vue');

const routes = [
    { path: '/', component: Home },
	{ path: '/pong', component: Pong },
	{ path: '/talk-wellington', component: Talk},
	{ path: '/trails', component: Trails},
	{ path: '/fin', component: Fin}
];

const router = new VueRouter({
	routes
});


const app = new Vue ({
	router
}).$mount('#app');