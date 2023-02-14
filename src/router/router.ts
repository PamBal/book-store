import {createRouter, createWebHistory} from "vue-router";
import {authors} from "../assets/defaultAuthors";
import AuthorsList from "../components/AuthorsList.vue";
import Welcome from "../components/Welcome.vue";
import BookList from "../components/BookList.vue";

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
            path: '/authors/:id',
            name: 'books',
            component: BookList
        },
        {
            path: '/',
            name: 'home',
            component: Welcome
        }
    ]
});

export default router;