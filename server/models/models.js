const mongoose  = require("mongoose");
const {string} = require("zod");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 25
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 25
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 25
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
    }
});

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// const TrasnsactionSchema = new mongoose.Schema({
//     userId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//     },
//     from: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     to: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// })

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Accounts', AccountSchema);

module.exports = { User, Account };