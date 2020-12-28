// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入css
import './base.css'

Vue.config.productionTip = false

new Vue({
	el: '#root',
	render: (h) => h(App),
	// 挂在全局事件总线
	beforeCreate() {
		Vue.prototype.$globalEventBus = this
	},
})
