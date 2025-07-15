const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { errorResponse, successResponse } = require('../utils/responseMessage');

const generateToken = (user) => {
    return jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
}

const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password, role, businessName, businessType } = req.body;

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return errorResponse(res, 'Email already exists', 400);
        }
        const phoneExists = await User.findOne({ phone });
        if (phoneExists) {
            return errorResponse(res, 'Phone number already exists', 400);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role,
            businessName,
            businessType
        });
        await user.save();
        const token = generateToken(user);
        successResponse(res, 'User registered successfully', data = { user, token }, 201);
        
    } catch (error) {
        errorResponse(res, error.message);
    }
}

module.exports = {
  registerUser, 
}