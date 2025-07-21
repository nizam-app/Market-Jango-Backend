const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userName:{typw:String},
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    language: {type: String, required: true},
    gender: {type: String},
    age: {type: String},
    about: {type: String},
    location: {type: String},
    userType: { type: String, enum: ['admin', 'vendor', 'buyer', 'transporter',"driver"], default: 'buyer' },
    isApproved: {
        type: Boolean, 
        default: function() { 
            return this.userType === 'vendor' ? false : true 
        }
    },
    businessName: { type: String, },
    businessType: { type: String, enum: ['Individual', 'Small Business', 'Company'] },

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;

