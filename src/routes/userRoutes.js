import express from 'express'
import userController from '../controllers/usuersController.js'

const router = express.Router()

router
  .get('/usuarios', userController.listaUsers)
  .get('/usuarios/:id', userController.listaUsersPorId)
  .post('/usuarios', userController.cadastrarUser)
  .put('/usuarios/:id', userController.atualizarUser)
  .delete('/usuarios/:id', userController.excluirUser)

export default router
