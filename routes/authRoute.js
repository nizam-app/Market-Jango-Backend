const router = require('express').Router();
const { registerUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);

router.post('/login', protect, (req, res) => {
    res.status(200).json({
        message: 'Login endpoint is under construction',
    });
});
    

module.exports = router;