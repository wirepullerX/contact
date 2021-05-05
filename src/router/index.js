import { createRouter, createWebHistory } from 'vue-router'

import AddUser from '../views/AddUser.vue'
import LoginPage from '../views/LoginPage.vue'
import ContractListPage from '../views/ContractListPage.vue'
import EditPage from '../views/EditPage.vue'

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