import { createRouter, createWebHistory } from 'vue-router'

import Users from '../views/Users.vue'
import About from '../views/About.vue'
import AddUser from '../views/AddUser.vue'
import TestBootstrap from '../views/TestBootstrap.vue'
import LoginPage from '../views/LoginPage.vue'
import ContractListPage from '../views/ContractListPage.vue'
import EditPage from '../views/EditPage.vue'
import Login from '../views/Login.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        redirect: '/loginpage'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/loginpage'
    },
    {
        path: '/adduser',
        name: AddUser,
        component: AddUser
    },
    {
        path: '/editpage/:userId',
        name: 'EditPage',
        component: EditPage,
        meta:{
            requiresAuth:true
        }
    },
    {
        path: '/loginpage',
        name: LoginPage,
        component: LoginPage
    },
    {
        path: '/contractlistpage',
        name: ContractListPage,
        component: ContractListPage
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router