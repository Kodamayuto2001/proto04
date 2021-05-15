import {createWebHistory,createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";
import NotFound from "@/views/NotFound.vue";
import Customize from "@/views/Customize.vue";
import Participant from "@/views/Participant.vue";
import Presenter from "@/views/Presenter.vue";
import MobilePhone from "@/views/MobilePhone.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/customize",
        name: "Customize",
        component: Customize,
    },
    {
        path: "/participant",
        name: "Participant",
        component: Participant,
    },
    {
        path: "/presenter",
        name: "Presenter",
        component: Presenter,
    },
    {
        path: "/mobilephone",
        name: "MobilePhone",
        component: MobilePhone,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;