import users from '../model/users.js'

class userController {
  static listaUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users)
    })
  }

  static cadastrarUser = (req, res) => {
    let user = new users(req.body)

    user.save(err => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar usuario.` })
      } else {
        res.status(201).send(user.toJSON())
      }
    })
  }
}

export default userController
