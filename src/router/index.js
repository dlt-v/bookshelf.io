import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Library from "../views/Library";
import Details from "../views/Details";

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
    },
    {
        path: "/book",
        name: "Book",
        component: Details,
        props: route => ({ bookId: route.query.id })
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
