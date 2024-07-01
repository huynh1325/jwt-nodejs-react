import userService from '../service/useService'

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs")
}

const handleUserPage = (req, res) => {
    return res.render("user.ejs")
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewUser(email, password, username)
    userService.getUserList(email, password, username)

    return res.send("hi")
}

module.exports = {
    handleHelloWorld, handleUserPage, handleCreateNewUser
}