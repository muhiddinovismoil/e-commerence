import { Router } from 'express'
import {} from '../middlewares/index.js'
export const productsRouter = Router()
productsRouter.get('/')
productsRouter.get('/:id')
productsRouter.post('/')
productsRouter.put('/:id')
productsRouter.delete('/:id')
