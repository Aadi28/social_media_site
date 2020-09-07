const { tweets, users } = require('../db/models')

async function createNew(id, title, body) {
    const post = await tweets.create({
        title,
        body,
        id
    })

    return post
}

async function showAll(query) {
    let where = {}
    if (query.userId) { where.userId = query.userId }

    const posts = await tweets.findAll({
        include: [users],
        where
    })

    return posts
}

module.exports = {
    showAll,
    createNew
}