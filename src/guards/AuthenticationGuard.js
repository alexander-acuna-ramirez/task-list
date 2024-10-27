export const authenticationGuard = (to, from, next) => {
  const isLogged = true;

  if (to.meta.requiresAuthentication && !isLogged) {
    next({
      name: "UnauthorizedPage",
    });
  }
  next();
};
