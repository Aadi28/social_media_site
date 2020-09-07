const express = require('express')

const { db } = require('./db/models')

const app = express()

db.sync({ force: true })
    .then(() => {
        app.listen(5555, () => {
            console.log('server started at http://localhost:5555')
        })
    }).catch((error) => {
        console.log("Error with Database")
        console.error(error.message)
    })
