import {
  createRouter,
  createMemoryHistory,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { authenticationGuard, adminGuard } from "../guards";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authenticationGuard);
//router.beforeEach(adminGuard);

export { router };
