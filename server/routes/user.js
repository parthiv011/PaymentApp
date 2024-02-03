const express = require('express');
const {signUp, logIn, updateUser, searchUser} = require("../controllers/user");
const {authMiddleware} = require("../middlewares/auth");
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.put('/', authMiddleware, updateUser);
router.get('/bulk', searchUser);

module.exports = router;