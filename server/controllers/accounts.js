const {Account} = require("../models/models");
const mongoose = require("mongoose");
const getBalance = async (req, res) => {
    try {
        const account = await Account.findOne({
            userId: req.userId
        });

        return res.json({
            balance: account.balance
        });
    }catch (e){
        console.error(e);
        res.status(500).json({
            msg: "Could not retrieve data / Internal server error!"
        })
    }
};

const transferAmount = async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();

    const {to , amount } = req.body;

    // fetch accounts within transactions
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Account doesn't have enough balance!"
        })
    }

    const transferTo = await Account.findOne({
        userId: to
    }).session(session);

    if(!transferTo){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Account doesn't exist!"
        })
    }

    // perform transfer
    await Account.updateOne(
        {userId: req.userId},
        {$inc: {balance: -amount}})
        .session(session);

    await Account.updateOne(
        {userId: to},
        {$inc: {balance: amount}})
        .session(session);

    await session.commitTransaction();
    res.json({
        msg: "Transfer Success!"
    });
};

const requestAmount = async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();

    const {from , amount} = req.body;

    const requesterId = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!requesterId){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Requester is not valid!"
        });
    }

    const requesteeId = await Account.findOne({
        userId: from
    }).session(session);

    if(!requesteeId){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Requested user is not valid!"
        });
    }

    const notification = new Notification({
        userId: from,
        message: `User ${req.userId} requested ${amount} from you!`,
        type: 'request'
    })

    await notification.save();

    await session.commitTransaction();
    res.json({
        msg: "Request Amount success!"
    });
}

module.exports = { getBalance, transferAmount, requestAmount };