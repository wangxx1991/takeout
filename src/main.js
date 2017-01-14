// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// 定义组件
import goods from 'components/goods/goods';

Vue.use(VueRouter);

const routes = [{
    path: '/goods',
    component: goods
}];

const router = new VueRouter({
    routes
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
