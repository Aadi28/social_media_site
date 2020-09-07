const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: "mysql",
    database: "test_db",
    username: "user",
    password: "1234"
});

const ID = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const U_NAME = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}

const TITLE = {
    type: Sequelize.DataTypes.STRING(150),
    allowNull: false
}

const users = db.define('user', {
    id: ID,
    username: U_NAME,
    password: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
    }
})

const tweets = db.define('tweet', {
    id: ID,
    title: TITLE,
    body: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
    }
})

const comments = db.define('comment', {
    id: ID,
    title: TITLE,
    body: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
    }
})

users.hasMany(tweets)
tweets.belongsTo(users)

tweets.hasMany(comments)
comments.belongsTo(tweets)

users.hasMany(comments)
comments.belongsTo(users)


module.exports = {
    db,
    users,
    tweets,
    comments
}