const { Router } = require('express')
const {
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

module.exports = {
  usersRoute: route
}