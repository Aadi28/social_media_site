const { users } = require('../db/models')

async function getUserById(id) {
    if (!id) throw new Error('UserId Missing')
    if (typeof id !== 'number') throw new Error('UserId should be Integer')

    return await users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
    return await users.findOne({ where: { username } })
}

module.exports = {
    getUserById,
    getUserByUsername
}
