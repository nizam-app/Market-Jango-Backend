const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        status: {type:String, enum: ["Pending","Completed","Cancelled"], default:"Pending"},
        productID: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
        qty: { type: Number , default : 1},
        totalPrice: { type : Number , required: true}

    },{ timestamps: true }

);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;