import {createRouter, createWebHistory} from "vue-router";
import {authors} from "../assets/defaultAuthors";
import AuthorsList from "../components/AuthorsList.vue";
import Welcome from "../components/Welcome.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/authors',
            name: 'authors',
            props: {
                authors: authors
            },
            component: AuthorsList
        },
        {
            path: '/',
            component: Welcome
        }
    ]
});

export default router;