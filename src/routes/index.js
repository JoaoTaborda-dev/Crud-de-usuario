import express from 'express'
import app from '../app.js'
import user from './userRoutes.js'

const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node' })
  })

  app.use(express.json(), user)
}

export default routes
