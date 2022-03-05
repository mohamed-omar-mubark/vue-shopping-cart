import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Font Awesome
import "@fortawesome/fontawesome-free/js/all";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Normalize
import "normalize.css";

// Snotify Alerts
import Snotify from "vue-snotify";
Vue.use(Snotify);

// Scss
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
