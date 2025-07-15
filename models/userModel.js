const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'vendor', 'buyer', 'transporter'], default: 'buyer' },
    isApproved: { 
        type: Boolean, 
        default: function() { 
            return this.role === 'vendor' ? false : true 
        } 
    },
    businessName: { type: String, },
    businessType: { type: String, enum: ['Individual', 'Small Business', 'Company'] },

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;

