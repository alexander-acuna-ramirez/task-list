import AppLayout from "../components/layouts/AppLayout.vue";
import EmptyLayout from "../components/layouts/EmptyLayout.vue";
import AllTasksPage from "../components/pages/AllTasksPage.vue";
import LoginPage from "../components/pages/LoginPage.vue";
import Unauthorized from "../components/pages/Unauthorized.vue";
import TaskList from "../components/TaskList.vue";

export const routes = [
    {
        path: "/",
        component: AppLayout,
        meta: {
            mustBeAuthenticated: true,
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
    }

];

