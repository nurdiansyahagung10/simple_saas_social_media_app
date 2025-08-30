const sessionMiddleware = (req, res, next) => {
    res.locals.success = req.session.success || null;
    res.locals.errors = req.session.errors || [];
    delete req.session.success;
    delete req.session.errors;
    next();
}

const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
}


module.exports = { sessionMiddleware, loggingMiddleware };
