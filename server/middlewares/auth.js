const jwt = require('jsonwebtoken');
const {secret} = require('../config');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            msg: "Invalid Token Format!"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secret);

        req.userId = decoded.userId;

        next();
    } catch (e) {
        res.status(403).json({
            msg: "Authentication failed as user! / Invalid Token!"
        });
    }
}

module.exports = { authMiddleware };