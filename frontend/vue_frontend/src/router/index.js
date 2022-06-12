import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import CreateContactView from '../views/CreateContactView'
import UpdateContactView from '../views/UpdateContactView'
import ProfileView from '../views/ProfileView'
import AboutView from '../views/AboutView'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignInView,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView,
    },
    {
        path: '/createcontact',
        name: 'CreateContact',
        component: CreateContactView,
    },
    {
        path: '/updatecontact/:id',
        name: 'UpdateContact',
        component: UpdateContactView,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router