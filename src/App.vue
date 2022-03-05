<template>
    <div id="app">
        <transition @before-enter="openInTop" mode="out-in" appear>
            <router-view />
        </transition>

        <!-- Alerts -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
export default {
    mounted() {
        if (!localStorage.lang || localStorage.lang === "") {
            localStorage.setItem("lang", "en");
            this.$router.go(this.$router.currentRoute);
        }
        if (localStorage.lang === "ar") {
            document.getElementById("app").style.fontFamily = "'Cairo', sans-serif";
            document.getElementById("app").style.direction = "rtl";
        } else {
            document.getElementById("app").style.fontFamily = "'Poppins', sans-serif";
        }
    },
    methods: {
        openInTop() {
            document.getElementById("app").scrollIntoView();
            document.querySelector("body").style.overflow = "auto";
        }
    }
}
</script>
