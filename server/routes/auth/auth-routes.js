
const express = require('express')
const {registerUser,
     loginUser,
     logoutUser,
     authMiddleware} = require('../../controllers/auth/auth-controller')

const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.get('/check-auth', authMiddleware, (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Unauthenticated User',
        });
    }

    res.status(200).json({
        success: true,
        message: 'Authenticated User',
        user: req.user, // Include user details in the response
    });
});

module.exports =  router;