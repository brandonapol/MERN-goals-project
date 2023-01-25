
//! Middleware is a function that runs during the request- respond cycle
//! when we send a request to an endpoint, the function we've created will run

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token
            token = req.headers.authorization.split(' ')[1]

            // read .verify JWT docs
            // jwt.sign({ id }), userController line 75
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // TODO - JWT docs for verify, MDN .select
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch {
            res.status(401);
            throw new Error('Not authorized')
        }
    }

    if (!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }

//* Bearer <token>
//* ^ syntax for tokens