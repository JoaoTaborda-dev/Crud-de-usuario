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

  static atualizarUser = (req, res) => {
    const id = req.params.id

    users.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (!err) {
        res.status(200).send({ message: 'User atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static listaUsersPorId = (req, res) => {
    const id = req.params.id

    users.findById(id, (err, users) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do autor não localizado` })
      } else {
        res.status(200).send(users)
      }
    })
  }

  static excluirUser = (req, res) => {
    const id = req.params.id

    users.findByIdAndDelete(id, err => {
      if (!err) {
        res.status(200).send({ message: 'Usuario removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }
}

export default userController
