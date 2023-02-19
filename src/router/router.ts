import {createRouter, createWebHistory} from "vue-router";
import {authors} from "../assets/defaultAuthors";
import AuthorsList from "../components/AuthorsList.vue";
import Welcome from "../components/Welcome.vue";
import BookList from "../components/BookList.vue";
import AddAuthor from "../components/AddAuthor.vue";

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
            path: '/add',
            name: 'add',
            component: AddAuthor
        },
        {
            path: '/',
            name: 'home',
            component: Welcome
        }
    ]
});

export default router;