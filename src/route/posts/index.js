const { Router } = require('express')
const {
  showAll,
  createNew
} = require('../../controllers/tweets')

const route = Router()

route.get('/', async (req, res) => {
  const posts = await showAll(req.query)

  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  console.log(`POST /api/posts`, req.body)

  const { userId, title, body } = req.body

  if (!userId) {
    return res.status(400).send({
      error: 'UserId Missing'
    })
  }
  else if (!title) {
    return res.status(400).send({
      error: 'Title Missing'
    })
  }
  else if (!body) {
    return res.status(400).send({
      error: 'Body Missing'
    })
  }

  const tweet = await createNew(userId, title, body)
  res.status(201).send(tweet)
})


module.exports = {
  postsRoute: route
}