const secondMiddleware = (context) => {
    console.log("second");
    const { next } = context;
    next();
}

export { secondMiddleware };