const sessionMiddleware = (req, res, next) => {
    res.locals.success = req.session.success || null;
    res.locals.errors = req.session.errors || [];
    delete req.session.success;
    delete req.session.errors;
    next();
}

module.exports = sessionMiddleware;
