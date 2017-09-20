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
	{ path: '/fin', component: Fin},
	{ path: '/nav', component: Navigation}
];


const router = new VueRouter({
	 // mode: 'historyss',
	routes,
	scrollBehavior(to, from, savedPosition) {
	  return { x: 0, y: 0 };
	}
});

Vue.component('navigation', Navigation);


const app = new Vue ({
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');


// let menu = document.getElementsByClass().addEventListener("side-view")[0];

// document.getElementById('menu-button').addEventListener("click", function () {
// 	// if (menu.classList.contains("menu-open"))
// })