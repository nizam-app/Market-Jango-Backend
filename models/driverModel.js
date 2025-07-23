const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
    driverID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    carBrand: { type: String },
    carModel: { type: String },
    about: { type: String },
    images: [{type: String}]
},
 { timestamps: true });

const Driver = mongoose.model('Driver', DriverSchema);
module.exports = User;

