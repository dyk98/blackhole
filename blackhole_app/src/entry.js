/*global Vue*/

/* weex initialized here, please do not move this line */
import stroge from 'store'
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(
    Vue.util.extend({
        el: '#root',
        router
    }, App));
router.push('/');

