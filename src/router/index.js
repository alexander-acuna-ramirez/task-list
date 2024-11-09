import {
  createRouter,
  createMemoryHistory,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { authenticationGuard, adminGuard } from "../guards";
import { routes } from "./routes";
import middlewarePipeline from "./middlewarePipeline";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if(!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to, from, next
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })

});

//router.beforeEach(authenticationGuard);
//router.beforeEach(adminGuard);

export { router };
