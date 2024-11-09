import { authMiddleware } from "@/middlewares/authMiddleware";
import { firstMiddleware } from "@/middlewares/firstMiddleware";
import { secondMiddleware } from "@/middlewares/secondMiddleware";

import AppLayout from "../components/layouts/AppLayout.vue";
import EmptyLayout from "../components/layouts/EmptyLayout.vue";
import AllTasksPage from "../components/pages/AllTasksPage.vue";
import LoginPage from "../components/pages/LoginPage.vue";
import Unauthorized from "../components/pages/Unauthorized.vue";
import TaskList from "../components/TaskList.vue";
import NotFound from "@/components/pages/NotFound.vue";

export const routes = [
    {
        path: "/",
        component: AppLayout,
        redirect: "/today-tasks",
        meta: {
            ///mustBeAuthenticated: true,
            middleware: [
                firstMiddleware,
                secondMiddleware,
                authMiddleware,
            ]
        },
        children: [
            {
                path: "today-tasks",
                name: "TaskListPage",
                component: TaskList
            },
            {
                path: "all-tasks",
                name: "AllTasksPage",
                component: AllTasksPage
            },
            {
                path: "categories",
                name: "CategoriesPage",
                component: () => import('../components/pages/CategoriesPage.vue'),
            },
        ]
    },
    {
        path:"/",
        component: EmptyLayout,
        meta: {
            middleware: [
                firstMiddleware,
                secondMiddleware,
            ]
        },
        children: [
            {
                path: "login",
                name: "LoginPage",
                component: LoginPage
            },
            {
                path: "unauthorized",
                name: "UnauthorizedPage",
                component: Unauthorized
            }
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

];

