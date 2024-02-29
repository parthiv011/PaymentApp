const jwt = require('jsonwebtoken');
const {signUpSchema, logInSchema, updateUserSchema} = require("./validators");
const {User, Account} = require("../models/models");
const {secret} = require("../config");
const signUp = async (req, res) => {
    try{
        const {success} = signUpSchema.safeParse(req.body);

        if(!success){
            return res.status(411).json({
                msg: "Incorrect Inputs / zod errors!"
            })
        }

        const existingUser = await User.findOne({
            username: req.body.username
        });

        if(existingUser){
            return res.status(411).json({
                msg: "User Already exists!"
            });
        }

        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        const userId = user._id;

        // Initializing the user Account
        await Account.create({
            userId,
            balance: 1000 + Math.random() * 10000
        });

        const token = jwt.sign({
            userId
        }, secret);

        res.json({
            msg: "User Signed up successfully!",
            token: token
        })
    } catch (e) {
        res.status(500).json({
            msg: "Internal Server Error!"
        });
        console.log(e);
    }
}

const logIn = async (req, res) => {
    try {
        const {success} = logInSchema.safeParse(req.body);

        if (!success) {
            return res.status(411).json({
                msg: "Incorrect inputs! / zod errors!"
            });
        }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if(user){
            const token = jwt.sign({
                userId: user._id,
            }, secret);

            return res.json({
                token: token,
            });
        }

        return res.status(411).json({
            msg: "Error while logging In!"
        })
    }catch (e) {
        return res.status(500).json({
            msg: "Internal Server Error!"
        });
        console.log(e);
    }
}

const showUserData = async (req, res) => {
    try {
        const userData = await User.findById(req.userId);
        if(userData){
            res.json({
                userId: userData._id,
                username: userData.username,
                firstName: userData.firstName,
                lastName: userData.lastName
            });
        }
        else {
            res.json("User not found !")
        }
    }catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Internal server Error!"
        })
    }
}

const updateUser = async (req, res) => {
    const { success } = updateUserSchema.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            msg: "Error while updating the information!"
        });
    }

    await User.updateOne({
        _id: req.userId
    },
        {
            $set: req.body
        });
    console.log(req.userId);

    res.json({
        msg: "User updated successfully!"
    });
}


const searchUser = async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter,
                "$options": "i"
            }
        },
            {
                lastName: {
                    "$regex": filter,
                    "$options": "i"
                }
            },
            {
                username: {
                    "$regex": filter,
                    "$options": "i"
                }
            }
        ]
    });

    res.json({
        user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
        }))
    });
}

module.exports = {signUp, logIn, updateUser, searchUser, showUserData};