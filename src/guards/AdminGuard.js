export const adminGuard = (to, from, next) => {
  const isAdmin = false;

  if (to.meta.mustBeAdmin && !isAdmin) {
    next({
      name: "UnauthorizedPage",
    });
  }
  next();
};
