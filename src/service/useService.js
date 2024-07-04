import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/index.js';

const salt = bcrypt.genSaltSync(10);

// // Create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'jwt'
//   });

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);

    try {
        await   db.User.create({
            username: username,
            email: email,
            password: hashPass
        })
    } catch (error) {
        console.log(error)
    }
}

const getUserList = async () => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});

    try {
        const [rows, fields] = await connection.execute("SELECT * FROM user");
        return rows;
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});

    try {
        const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird});

    try {
        const [rows, fields] = await connection.execute('UPDATE user SET email = ?, username = ? WHERE id=?', [email, username, id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUserInfor
}