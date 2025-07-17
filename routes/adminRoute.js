const router = require('express').Router();
const { protect, isAdmin } = require('../middlewares/authMiddleware');
const { approveVendor } = require('../controllers/adminController');

router.put('/approve-vendor/:id', protect, isAdmin, approveVendor);

module.exports = router;