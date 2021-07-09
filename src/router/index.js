import { createRouter, createWebHistory  } from "vue-router";
import Home from "../views/Home"
import Library from "../views/Library"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/mylibrary",
        name: "Library",
        component: Library
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;