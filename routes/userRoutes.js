const express = require('express')
const { loginController, registerController, authController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')


//Router object
const router= express.Router()

//routes
//login||post
router.post('/login', loginController)

//register
router.post('/register', registerController)

//auth||POST
router.post('/getUserData', authMiddleware, authController);

module.exports = router