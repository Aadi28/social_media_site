const { users } = require('../db/models')
const bcrypt = require('bcrypt')

async function login() {

}
async function createUser(username, password) {
    try {
        const hashpassword = await bcrypt.hash(password, 10)
        const user = await users.create({
            username: username,
            password: hashpassword
        })
        return user
    }
    catch (err) {
        console.error("Error: ", err);
    }
}
async function getUserById(id) {
    if (!id) throw new Error('UserId Missing')
    if (typeof id !== 'number') throw new Error('UserId should be Integer')

    return await users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
    return await users.findOne({ where: { username } })
}

module.exports = {
    login,
    createUser,
    getUserById,
    getUserByUsername
}
