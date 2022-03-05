import Vue from "vue";
import VueRouter from "vue-router";
// Public
import Home from "@/views/public/Home.vue";

Vue.use(VueRouter);

const routes = [
    // Public
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
