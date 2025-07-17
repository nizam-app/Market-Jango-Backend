const User = require('../models/userModel');
const { errorResponse, successResponse } = require('../utils/responseMessage');

const approveVendor = async (req, res) => {
    const vendorId = req.params.id;
    try {
        const vendor = await User.findById(vendorId);
        if(!vendor || vendor.role !== 'vendor') {
            return errorResponse(res, 'Vendor not found', 404);
        }
        vendor.isApproved = true;
        await vendor.save();
        successResponse(res, 'Vendor approved successfully', vendor, 200);
    } catch (error) {
        return errorResponse(res, error.message);
    }
}

module.exports = {
    approveVendor 
};