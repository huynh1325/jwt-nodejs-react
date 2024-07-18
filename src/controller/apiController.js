import loginRegisterService from '../service/loginRegisterService';

const testApi = (req,res) => {
    return res.status(200).json({
        message: 'oke',
        data: 'test api'
    })
}

const handleRegister = async (req, res) => {
    try {
        // req.body: email, phone, username, password
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters', // error message
                EC: '1', // error code
                DT: '' // data
            })
        }

        if (req.body.password && req.body.password.length < 7) {
            return res.status(200).json({
                EM: 'Your password mush have more than 6 letters', // error message
                EC: '1', // error code
                DT: '' // data
            })
        }

        // service: create user
        let data = await loginRegisterService.registerNewUser(req.body)
        
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: '' // data
        })

    } catch (e) {
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }
}

const handleLogin = async (req,res) => {
    console.log("check login", req.body)
    return res.status(200).json({
        message: 'oke',
        data: 'test api login'
    })
}

module.exports = {
    testApi, handleRegister, handleLogin
}