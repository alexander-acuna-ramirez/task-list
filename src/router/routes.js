import AppLayout from "../components/layouts/AppLayout.vue";
import EmptyLayout from "../components/layouts/EmptyLayout.vue";
import AllTasksPage from "../components/pages/AllTasksPage.vue";
import Unauthorized from "../components/pages/Unauthorized.vue";
import TaskList from "../components/TaskList.vue";

export const routes = [
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
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
                meta: {
                    requiresAuthentication: true,
                    mustBeAdmin: true,
                },
                /*
                beforeEnter: async (to, from, next) => {
                  const isLogged = false;
                  console.log(isLogged)
                  if(isLogged){
                    next();
                  }

                  next({
                    name: "UnauthorizedPage"
                  });
                },
                */
                component: () => import('../components/pages/CategoriesPage.vue'),
            },
        ]
    },
    {
        path:"/",
        component: EmptyLayout,
        children: [
            {
                path: "unauthorized",
                name: "UnauthorizedPage",
                component: Unauthorized
            }
        ]
    }

];

