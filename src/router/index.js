import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../components/Accueil.vue";
import Connexion from "../components/Connexion.vue";
import Inscription from "../components/Inscription.vue";
import Plat from "../components/Plat.vue";
import AjouterPlat from "@/components/AjouterPlat";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil,
    },
    {
        path: "/connexion",
        name: "Connexion",
        component: Connexion,
    },
    {
        path: "/inscription",
        name: "Inscription",
        component: Inscription
    },
    {
        path: '/ajouterPlat',
        name: "nouveauPlat",
        component: AjouterPlat,
    },
    {
        path: "/plat/:id",
        name: "Plat",
        component: Plat,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;