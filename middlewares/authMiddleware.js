const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/responseMessage');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return errorResponse(res, 'Not authorized, no token', 401);
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("decoded",decoded);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return errorResponse(res, 'Not authorized, token failed', 401);
    }
}

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return errorResponse(res, 'Not authorized as an admin', 403);
    }
    next();
}

module.exports = {
    protect,
    isAdmin
};