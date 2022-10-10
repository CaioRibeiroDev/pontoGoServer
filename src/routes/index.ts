import { Router } from 'express'

export const routes: Router = Router()

routes.get('/', (req, res) => {
  res.json({ message: 'teste' })
})
