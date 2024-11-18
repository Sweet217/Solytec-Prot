import { createRouter, createWebHistory } from "vue-router";
import Landpage from "../src/Landpage.vue";
import ActaDeNacimiento from "../src/ActaDeNacimiento.vue";
import Predial from "../src/Predial.vue";
import Placas from "../src/Placas.vue";

const routes = [
    { path: '/', name: 'Landpage', component: Landpage },
    { path: '/ActaDeNacimiento', name: 'ActaDeNacimiento', component: ActaDeNacimiento },
    { path: '/Predial', name: 'Predial', component: Predial },
    { path: '/Placas', name: 'Placas', component: Placas },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;