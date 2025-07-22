const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    vendorID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    carBrand: { type: String },
    carModel: { type: String },
    about: { type: String },
    images: [{type: String}]
},
 { timestamps: true });

const Vendor = mongoose.model('Vendor', VendorSchema);
module.exports = Vendor;

