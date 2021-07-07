import { createRouter, createWebHistory  } from "vue-router";
// import HelloWorld from "../views/HelloWorld";
import Home from "../views/Home"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;