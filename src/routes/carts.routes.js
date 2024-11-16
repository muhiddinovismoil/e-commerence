import { Router } from 'express'
import {
    getAllCartsController,
    getCartByIdController,
    createCartController,
    updateCartController,
    deleteCartController,
} from '../controllers/index.js'
import { validateCart, authGuard, roleGuard } from '../middlewares/index.js'
export const cartsRouter = Router()
cartsRouter.get('/', getAllCartsController)
cartsRouter.get('/:id', getCartByIdController)
cartsRouter.post('/', createCartController)
cartsRouter.put('/:id', updateCartController)
cartsRouter.delete('/:id', deleteCartController)
