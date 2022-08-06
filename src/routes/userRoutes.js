import express from 'express'
import userController from '../controllers/usuersController.js'

const router = express.Router()

router
  .get('/usuarios', userController.listaUsers)
  .post('/usuarios', userController.cadastrarUser)

export default router
