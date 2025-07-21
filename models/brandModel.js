const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema(
    {
        name: {type:String},
        image: {type:String},
        isActive: { type: Boolean, default: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }

);

const Brand = mongoose.model('Brand', BrandSchema);
module.exports = Brand;