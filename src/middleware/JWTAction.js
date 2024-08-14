require("dotenv").config();
import jwt from 'jsonwebtoken'

const createJWT = () => {
    let payload = {name: 'huynh', address: 'danang'};
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
        console.log(token);
    } catch (err) {
        console.log(err);
    }
    return createJWT;
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let data = null;
    try {
        let decoded = jwt.verify(token, key);
        data = decoded
    } catch (err) {
        console.log(err);
    }
    return data;
}

module.exports = {
    createJWT, verifyToken
}