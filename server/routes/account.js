const express = require('express');
const {authMiddleware} = require("../middlewares/auth");
const {getBalance, transferAmount} = require("../controllers/accounts");
const router = express.Router();

router.get('/balance', authMiddleware, getBalance);
router.post('/transfer' , authMiddleware, transferAmount);

module.exports = router;