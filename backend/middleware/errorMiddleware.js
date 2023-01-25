const errorHandler = (err,req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV == 'production' ? null : err.stack
    })
}

//! Middleware is a function that runs during the request- respond cycle
//! when we send a request to an endpoint, the function we've created will run

module.exports = {
    errorHandler,
}