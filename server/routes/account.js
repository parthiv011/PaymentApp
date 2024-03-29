const express = require('express');
const {authMiddleware} = require("../middlewares/auth");
const {getBalance, transferAmount} = require("../controllers/accounts");
const router = express.Router();

router.get('/balance', authMiddleware, getBalance);
router.post('/transfer' , authMiddleware, transferAmount);
// router.post('/request', authMiddleware, requestAmount);
// router.post('/transactions', authMiddleware, transactionsData);

module.exports = router;