const firstMiddleware = (context) => {
    console.log("first");
    const { next } = context;
    next();
}

export { firstMiddleware };