const { Router } = require('express')
const {
  login,
  createUser,
  getUserById,
  getUserByUsername
} = require('../../controllers/users')

const route = Router()

route.get('/:id', async (req, res) => {
  let user;
  console.log(req.params.id)

  if (isNaN(parseInt(req.params.id))) {
    user = await getUserByUsername(req.params.id)
  }
  else {
    user = await getUserById(req.params.id)
  }
  console.log(user)

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send({
      error: 'User Not Found'
    })
  }
})

route.post('/', async (req, res) => {
  const user = await createUser(req.body.username, req.body.password)
  res.status(201).send(user)
})

route.post('/login', async (req, res) => {
  const status = await login(req.body.username, req.body.password)
  if (status == 200)
    res.status(200).redirect(`http://localhost:5555/users/:id=${res.body.username}`)
  else
    res.status(status).redirect('http://localhost:5555/')
})

module.exports = {
  usersRoute: route
}