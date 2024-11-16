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
cartsRouter.get('/', authGuard, getAllCartsController)
cartsRouter.get('/:id', authGuard, getCartByIdController)
cartsRouter.post('/', authGuard, validateCart, createCartController)
cartsRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    updateCartController,
)
cartsRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'manager'),
    deleteCartController,
)
