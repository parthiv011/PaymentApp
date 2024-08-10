const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const accountRouter = require('./account');

router.use('/', (res) => {
  res.json('Welcome to the API');
});

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports = router;
